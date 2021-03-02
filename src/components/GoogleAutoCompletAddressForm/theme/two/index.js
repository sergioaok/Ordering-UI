import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  useLanguage,
  useSession,
  useOrder,
  useConfig
} from 'ordering-components'
import { Alert } from '../../../Confirm/theme/two'

import {
  WrapAddressForm,
  FormControl,
  FormActionButton,
  AddressWrap,
  WrapAddressInput,
  WrapperSkeleton
} from './styles'

const inputNames = [{ name: 'address', code: 'Address' }]

const AddressFormUI = (props) => {
  const {
    addressesList,
    formState,
    addressState,
    isRequiredField,
    updateChanges,
    handleChangeInput,
    saveAddress,
    setIsEdit
  } = props

  const [configState] = useConfig()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [{ auth }] = useSession()

  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [addressValue, setAddressValue] = useState(formState.changes?.address ?? addressState.address?.address ?? '')
  const [firstLocationNoEdit, setFirstLocationNoEdit] = useState({ value: null })
  const isEditing = !!addressState.address?.id

  const [locationChange, setLocationChange] = useState(
    isEditing
      ? addressState?.address?.location
      : formState.changes?.location ?? null
  )

  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value
  const isLocationRequired = configState.configs?.google_autocomplete_selection_required?.value === '1' ||
                              configState.configs?.google_autocomplete_selection_required?.value === 'true'

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  /**
   * Returns true when the user made no changes
   * @param {object} address
   */
  const checkAddress = (address, addressToCompare) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    props.forEach(prop => {
      if (addressToCompare[prop]) {
        if (prop === 'location') {
          values.push(address[prop].lat === addressToCompare[prop].lat &&
            address[prop].lng === addressToCompare[prop].lng)
        } else {
          values.push(address[prop] === addressToCompare[prop])
        }
      } else {
        values.push(!address[prop])
      }
    })
    return values.every(value => value)
  }

  const getAddressFormatted = (addressChange) => {
    const data = { address: null, error: null }
    const geocoder = window.google && new window.google.maps.Geocoder()

    geocoder.geocode({ address: addressChange }, (results, status) => {
      let postalCode = null
      if (status === 'OK' && results && results.length > 0) {
        for (const component of results[0].address_components) {
          const addressType = component.types[0]
          if (addressType === 'postal_code') {
            postalCode = component.short_name
            break
          }
        }
        data.address = {
          address: addressChange,
          location: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
          utc_offset: results[0].utc_offset_minutes ?? 0,
          map_data: {
            library: 'google',
            place_id: results[0].place_id
          }
        }
        if (postalCode) {
          data.address.zipcode = postalCode
        }
        const arrayList = isEditing
          ? addressesList.filter(address => address.id !== addressState.address?.id) || []
          : addressesList || []
        const addressToCompare = isEditing
          ? { ...addressState.address, ...data.address, ...formState?.changes }
          : { ...data.address, ...formState?.changes }

        const isAddressAlreadyExist = arrayList.map(address => checkAddress(address, addressToCompare)).some(value => value) ?? false
        if (!isAddressAlreadyExist) {
          saveAddress(data.address)
          return
        }

        setAlertState({
          open: true,
          content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
        })
      } else {
        setAlertState({
          open: true,
          content: [t('ERROR_NOT_FOUND_ADDRESS', 'Error, address not found')]
        })
      }
    })
  }

  const checkKeyDown = (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (keyCode === 13) { e.preventDefault() }
  }

  const onSubmit = async () => {
    if ((!auth && formState?.changes?.address === '' && addressState?.address?.address) || addressValue === '') {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'The field Address is required')]
      })
      setLocationChange(null)
      return
    }

    if (formState?.changes?.address && !formState?.changes?.location) {
      if (isLocationRequired) {
        setAlertState({
          open: true,
          content: [t('ADDRESS_REQUIRE_LOCATION', 'The address needs a location, please select one of the suggested')]
        })
        return
      }
      getAddressFormatted(formState?.changes?.address)
      return
    }

    const arrayList = isEditing
      ? addressesList.filter(address => address.id !== addressState.address?.id) || []
      : addressesList || []
    const addressToCompare = isEditing
      ? { ...addressState.address, ...formState.changes }
      : formState?.changes

    const isAddressAlreadyExist = arrayList.map(address => checkAddress(address, addressToCompare)).some(value => value) ?? false

    if (!isAddressAlreadyExist) {
      saveAddress()
      return
    }

    setAlertState({
      open: true,
      content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
    })
  }

  const handleChangeAddress = (address) => {
    setState({
      ...state,
      selectedFromAutocomplete: true
    })
    updateChanges(address)
  }

  useEffect(() => {
    if (!auth) {
      setLocationChange(formState?.changes?.location ?? orderState?.options?.address?.location ?? '')
      setAddressValue(formState?.changes?.address ?? orderState?.options?.address?.address ?? '')
      inputNames.forEach(field =>
        formMethods.setValue(
          field.name,
          formState?.changes[field.name] ||
            (orderState?.options?.address && orderState?.options?.address[field.name]) ||
            ''
        )
      )
      return
    }

    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }

    setAddressValue(formState?.changes?.address ?? addressState.address?.address ?? '')
    formMethods.setValue('address', formState?.changes?.address ?? addressState.address?.address ?? '')
    if (!isEditing) {
      inputNames.forEach(field => formMethods.setValue(field.name, formState?.changes[field.name] || ''))
      formState?.changes?.address && setLocationChange(formState?.changes?.location)
      if (
        formState?.changes?.address &&
        formState?.changes?.address !== firstLocationNoEdit?.address &&
        formState?.changes?.location &&
        formState?.changes?.location?.lat !== firstLocationNoEdit.value?.lat &&
        formState?.changes?.location?.lng !== firstLocationNoEdit.value?.lng
      ) {
        setFirstLocationNoEdit({
          value: formState?.changes?.location,
          address: formState?.changes?.address
        })
      }
    }

    if (isEditing) {
      if (formState?.changes?.location) {
        const prevLocation = { lat: Math.trunc(locationChange.lat), lng: Math.trunc(locationChange.lng) }
        const newLocation = { lat: Math.trunc(formState?.changes?.location?.lat), lng: Math.trunc(formState?.changes?.location?.lng) }
        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          setLocationChange(formState?.changes?.location)
        }
      }
    }
  }, [formState])

  useEffect(() => {
    if (isEditing) {
      setIsEdit && setIsEdit(true)
      setAddressValue(addressState.address?.address)
    } else {
      setIsEdit && setIsEdit(false)
    }
  }, [addressState])

  useEffect(() => {
    if (!auth) {
      setLocationChange(formState?.changes?.location ?? orderState?.options?.address?.location ?? '')
    }

    return () => {
      setFirstLocationNoEdit({ value: null })
    }
  }, [])

  /** Form events control */

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    inputNames.forEach(field => {
      formMethods.register(field.name, {
        required: isRequiredField(field.name)
          ? t(`VALIDATION_ERROR_${field.name}_REQUIRED`, `The field ${field.code} is required`)
          : null
      })
    })
  }, [formMethods])

  return (
    <WrapAddressForm>
      {(configState.loading || addressState.loading) && (
        <WrapperSkeleton>
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
        </WrapperSkeleton>
      )}

      {!configState.loading && !addressState.loading && (
        <FormControl
          onSubmit={formMethods.handleSubmit(onSubmit)}
          onKeyDown={(e) => checkKeyDown(e)}
          autoComplete='off'
        >
          <AddressWrap className='google-control'>
            <WrapAddressInput>
              <HiOutlineLocationMarker />
              <GoogleAutocompleteInput
                className='input-autocomplete'
                apiKey={googleMapsApiKey}
                googleReady={false}
                placeholder={t('ENTER_DELIVERY_ADDRESS', 'Enter delivery address')}
                onChangeAddress={(e) => {
                  formMethods.setValue('address', e.address)
                  handleChangeAddress(e)
                }}
                onChange={(e) => {
                  handleChangeInput({ target: { name: 'address', value: e.target.value } })
                  setAddressValue(e.target.value)
                }}
                value={addressValue}
                autoComplete='new-field'
                countryCode={configState?.configs?.country_autocomplete?.value || '*'}
              />
              <FormActionButton
                id='submit-btn'
                type='submit'
                disabled={formState.loading}
                color='primary'
              >
                <BsArrowRightShort />
              </FormActionButton>
            </WrapAddressInput>
          </AddressWrap>

          {!formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>}

        </FormControl>
      )}

      <Alert
        title={t('ADDRESS', 'Address')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </WrapAddressForm>
  )
}

export const GoogleAutoCompletAddressForm = (props) => {
  const googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }
  const addressFormProps = {
    ...props,
    UIComponent: AddressFormUI,
    googleMapsControls,
    isSelectedAfterAdd: true
  }

  return <AddressFormController {...addressFormProps} />
}
