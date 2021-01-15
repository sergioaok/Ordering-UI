import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaHome from '@meronex/icons/fa/FaHome'
import FaPlus from '@meronex/icons/fa/FaPlus'
import FaRegBuilding from '@meronex/icons/fa/FaRegBuilding'
import FaRegHeart from '@meronex/icons/fa/FaRegHeart'
import BiCurrentLocation from '@meronex/icons/bi/BiCurrentLocation'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import CgSearchLoading from '@meronex/icons/cg/CgSearchLoading'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  useLanguage,
  GoogleMapsMap,
  useSession,
  useOrder,
  useConfig
} from 'ordering-components'
import { Alert } from '../Confirm'
import { GoogleGpsButton } from '../GoogleGpsButton'

import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection,
  WrapperMap,
  ShowMap,
  WrapperSkeleton
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'

const inputNames = [{ name: 'address', code: 'Address' }, { name: 'internal_number', code: 'Internal number' }, { name: 'zipcode', code: 'Zipcode' }, { name: 'address_notes', code: 'Address notes' }]

const AddressFormUI = (props) => {
  const {
    addressesList,
    googleMapsControls,
    formState,
    addressState,
    isRequiredField,
    updateChanges,
    onCancel,
    hanldeChangeInput,
    saveAddress,
    setIsEdit
  } = props

  const [configState] = useConfig()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [{ auth }] = useSession()

  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)
  const [toggleMap, setToggleMap] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [addressValue, setAddressValue] = useState(formState.changes?.address ?? addressState.address?.address ?? '')
  const [locationChange, setLocationChange] = useState(
    addressState?.address?.id
      ? addressState?.address?.location
      : formState.changes?.location ?? null
  )

  const isEditing = !!addressState.address?.id
  const maxLimitLocation = configState?.configs?.meters_to_change_address?.value
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value
  const isLocationRequired = configState.configs?.google_autocomplete_selection_required?.value === '1' ||
                              configState.configs?.google_autocomplete_selection_required?.value === 'true'

  const mapErrors = {
    ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
    ERROR_MAX_LIMIT_LOCATION: `Sorry, You can only set the position to ${maxLimitLocation}m`
  }

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

  const onSubmit = async () => {
    if (!auth && formState?.changes?.address === '' && addressState?.address?.address) {
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

    setToggleMap(false)
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

  const handleAddressTag = (tag) => {
    setAddressTag(tag)
    hanldeChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    })
  }

  const handleChangeAddress = (address) => {
    setState({
      ...state,
      selectedFromAutocomplete: true
    })
    updateChanges(address)
  }

  const handleAddressKeyDown = () => {
    state.selectedFromAutocomplete && setState({
      ...state,
      selectedFromAutocomplete: false
    })
  }

  const setMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    })
  }

  useEffect(() => {
    if (!orderState.loading) {
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
        setLocationChange(formState?.changes?.location)
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
    <div className='address-form'>
      {(configState.loading || addressState.loading) && (
        <WrapperSkeleton>
          <Skeleton height={50} count={5} style={{ marginBottom: '10px' }} />
        </WrapperSkeleton>
      )}

      {!configState.loading && !addressState.loading && (
        <FormControl onSubmit={formMethods.handleSubmit(onSubmit)} autoComplete='off'>
          {locationChange && toggleMap && (
            <WrapperMap>
              <GoogleMapsMap
                apiKey={googleMapsApiKey}
                location={locationChange}
                mapControls={googleMapsControls}
                handleChangeAddressMap={handleChangeAddress}
                setErrors={setMapErrors}
                maxLimitLocation={maxLimitLocation}
              />
            </WrapperMap>
          )}
          <AddressWrap className='google-control'>
            <WrapAddressInput>
              <HiOutlineLocationMarker />
              <GoogleAutocompleteInput
                className='input-autocomplete'
                apiKey={googleMapsApiKey}
                placeholder={t('ADDRESS', 'Address')}
                onChangeAddress={(e) => {
                  formMethods.setValue('address', e.address)
                  handleChangeAddress(e)
                }}
                onKeyDown={handleAddressKeyDown}
                onChange={(e) => {
                  hanldeChangeInput({ target: { name: 'address', value: e.target.value } })
                  setAddressValue(e.target.value)
                }}
                value={addressValue}
                autoComplete='new-field'
                countryCode={configState?.configs?.country_autocomplete?.value || '*'}
              />
            </WrapAddressInput>
            <GoogleGpsButton
              className='gps-button'
              apiKey={googleMapsApiKey}
              onAddress={(e) => {
                formMethods.setValue('address', e.address)
                handleChangeAddress(e)
              }}
              IconButton={BiCurrentLocation}
              IconLoadingButton={CgSearchLoading}
            />
          </AddressWrap>

          {(addressState?.address?.location || formState?.changes?.location) && !toggleMap && (
            <ShowMap onClick={() => setToggleMap(!toggleMap)}>{t('VIEW_MAP', 'View map to modify the exact location')}</ShowMap>
          )}

          <Input
            className='internal_number'
            placeholder={t('INTERNAL_NUMBER', 'Internal number')}
            value={formState.changes?.internal_number ?? addressState.address.internal_number ?? ''}
            onChange={(e) => {
              formMethods.setValue('internal_number', e.target.value)
              hanldeChangeInput({ target: { name: 'internal_number', value: e.target.value } })
            }}
            autoComplete='new-field'
          />

          <Input
            className='zipcode'
            placeholder={t('ZIP_CODE', 'Zip code')}
            value={formState.changes?.zipcode ?? addressState.address.zipcode ?? ''}
            onChange={(e) => {
              formMethods.setValue('zipcode', e.target.value)
              hanldeChangeInput({ target: { name: 'zipcode', value: e.target.value } })
            }}
            autoComplete='new-field'
          />

          <TextArea
            rows={4}
            placeholder={t('ADDRESS_NOTES', 'Address Notes')}
            value={formState.changes?.address_notes ?? addressState.address.address_notes ?? ''}
            onChange={(e) => {
              formMethods.setValue('address_notes', e.target.value)
              hanldeChangeInput({ target: { name: 'address_notes', value: e.target.value } })
            }}
            autoComplete='new-field'
          />

          {!formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>}

          <AddressTagSection>
            <Button className={addressTag === 'home' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('home')}>
              <span><FaHome /></span>
            </Button>
            <Button className={addressTag === 'office' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('office')}>
              <span><FaRegBuilding /></span>
            </Button>
            <Button className={addressTag === 'favorite' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('favorite')}>
              <span><FaRegHeart /></span>
            </Button>
            <Button className={addressTag === 'other' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('other')}>
              <span><FaPlus /></span>
            </Button>
          </AddressTagSection>
          <FormActions>
            <Button
              outline
              type='button'
              disabled={formState.loading}
              onClick={() => onCancel()}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
            {Object.keys(formState?.changes).length > 0 && (
              <Button
                id='submit-btn'
                type='submit'
                disabled={formState.loading}
                color='primary'
              >
                {!formState.loading ? (
                  isEditing || (!auth && orderState.options?.address?.address)
                    ? t('UPDATE', 'Update')
                    : t('ADD', 'Add')
                ) : (
                  t('LOADING', 'Loading')
                )}
              </Button>
            )}
          </FormActions>
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
    </div>
  )
}

export const AddressForm = (props) => {
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
