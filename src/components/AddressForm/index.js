import React, { useState, useEffect, useRef } from 'react'
import FaHome from '@meronex/icons/fa/FaHome'
import FaPlus from '@meronex/icons/fa/FaPlus'
import FaRegBuilding from '@meronex/icons/fa/FaRegBuilding'
import FaRegHeart from '@meronex/icons/fa/FaRegHeart'
import ImCompass from '@meronex/icons/im/ImCompass'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  GoogleGpsButton,
  useLanguage,
  GoogleMapsMap
} from 'ordering-components'
import { Alert } from '../Confirm'
// import { CustomInput } from '../UI/CustomInput'
// import { CustomTextArea } from '../UI/CustomTextArea'

import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection,
  WrapperMap,
  ShowMap
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'

const AddressFormUI = (props) => {
  const {
    addressesList,
    googleMapsControls,
    formState,
    addressState,
    validationFields,
    isRequiredField,
    updateChanges,
    onCancel,
    hanldeChangeInput,
    saveAddress,
    handleChangePosition
  } = props

  const inputRef = useRef()
  const iNRef = useRef()
  const zipRef = useRef()
  const textArRef = useRef()

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)
  const [toggleMap, setToggleMap] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = () => {
    const isAddressAlreadyExist = (addressesList || []).some(address => (
      address.location.lat === formState.changes.location.lat && address.location.lng === formState.changes.location.lng
    ))
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

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputRef.current.attributes.autocomplete &&
        inputRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      inputRef.current.setAttribute('autocomplete', 'new-field')

      if (iNRef.current.attributes.autocomplete &&
        iNRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      iNRef.current.setAttribute('autocomplete', 'new-field')

      if (zipRef.current.attributes.autocomplete &&
        zipRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      zipRef.current.setAttribute('autocomplete', 'new-field')

      if (textArRef.current.attributes.autocomplete &&
        textArRef.current.attributes.autocomplete.value === 'new-field'
      ) clearInterval(interval)
      textArRef.current.setAttribute('autocomplete', 'new-field')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='address-form'>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        {(addressState?.address?.location || formState?.changes?.location) && toggleMap && (
          <WrapperMap>
            <GoogleMapsMap
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              location={{ ...(addressState?.address?.location || formState?.changes?.location), zoom: googleMapsControls.defaultZoom }}
              mapControls={googleMapsControls}
              handleChangePosition={handleChangePosition}
            />
          </WrapperMap>
        )}
        <AddressWrap className='google-control'>
          <WrapAddressInput>
            <HiOutlineLocationMarker />
            <GoogleAutocompleteInput
              className='input-autocomplete'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              name='address'
              placeholder={t('ADDRESS', 'Address')}
              onChangeAddress={handleChangeAddress}
              onKeyDown={handleAddressKeyDown}
              defaultValue={formState.changes?.address || addressState.address?.address}
              childRef={register({
                required: isRequiredField('address') ? t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'Address is required') : null
              })}
              ref={(e) => {
                inputRef.current = e
              }}
              autoComplete='off'
            />
          </WrapAddressInput>
          {(!validationFields.loading || !addressState.loading) &&
            <GoogleGpsButton
              className='gps-button'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              onAddress={handleChangeAddress}
              IconButton={ImCompass}
            />}
        </AddressWrap>
        {(addressState?.address?.location || formState?.changes?.location) && (
          <ShowMap onClick={() => setToggleMap(!toggleMap)}>{t('VIEW_MAP', 'View map to modify the exact location')}</ShowMap>
        )}
        <Input
          className='internal_number'
          name='internal_number'
          placeholder={t('INTERNAL_NUMBER', 'Internal number')}
          ref={(e) => {
            register(e)
            iNRef.current = e
          }}
          defaultValue={formState.changes?.internal_number || addressState.address.internal_number}
          onChange={hanldeChangeInput}
          autoComplete='new-field'
        />
        <Input
          className='zipcode'
          name='zipcode'
          placeholder={t('ZIP_CODE', 'Zip code')}
          ref={(e) => {
            register(e)
            zipRef.current = e
          }}
          defaultValue={formState.changes?.zipcode || addressState.address.zipcode}
          onChange={hanldeChangeInput}
          autoComplete='new-field'
        />
        <TextArea
          name='address_notes'
          rows={4}
          placeholder={t('ADDRESS_NOTES', 'Address Notes')}
          ref={(e) => {
            register(e)
            textArRef.current = e
          }}
          defaultValue={formState.changes?.address_notes || addressState.address.address_notes}
          onChange={hanldeChangeInput}
          autoComplete='off'
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
          <Button type='button' disabled={formState.loading} outline onClick={() => onCancel()}>{t('CANCEL', 'Cancel')}</Button>
          <Button type='submit' disabled={formState.loading} color='primary'>
            {addressState.address?.id ? t('UPDATE', 'Update') : t('ADD', 'Add')}
          </Button>
        </FormActions>
      </FormControl>
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
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }
  const addressFormProps = {
    ...props,
    UIComponent: AddressFormUI,
    googleMapsControls,
    isSelectedAfterAdd: true
  }

  return <AddressFormController {...addressFormProps} />
}
