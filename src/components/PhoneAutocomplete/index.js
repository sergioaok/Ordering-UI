import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage,
  useOrder
} from 'ordering-components'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressList } from '../AddressList'

import {
  PhoneContainer,
  ContentWrapper,
  Title,
  Slogan,
  UserEdit,
  WrappBtn
} from './styles'

const PhoneAutocompleteUI = (props) => {
  const {
    phone,
    customerState,
    customersPhones,
    setCustomersPhones,
    openModal,
    setOpenModal,
    onChangeNumber,
    setCustomerState,
    countryCallingCode,
    onRedirectPage
  } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [inputValue, setInputValue] = useState('')
  const [optSelected, setOptSelected] = useState(null)

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const userName = userCustomer?.lastname
    ? `${userCustomer?.name} ${userCustomer?.lastname}`
    : userCustomer?.name

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const saveCustomerUser = (user) => {
    setCustomersPhones({ ...customersPhones, users: [...customersPhones.users, user] })
    setCustomerState({ ...customerState, result: user })
    setOpenModal({ customer: true, signup: false })
  }

  const handleFindClick = () => {
    if (userCustomer?.id && orderState?.options?.address?.address) {
      onRedirectPage && onRedirectPage('search')
    } else {
      setAlertState({ open: true, content: t('SELECT_ADDRESS_CUSTOMER', 'Please select an address for the selected customer') })
    }
  }

  useEffect(() => {
    if (customersPhones?.error) {
      setAlertState({ open: true, content: [customersPhones?.error] })
    }
  }, [customersPhones?.error])

  const onInputChange = (inputValue, { action }) => {
    if (action === 'menu-close' || action === 'input-blur' || action === 'set-value') {
      return
    }
    if (!inputValue) {
      setInputValue(inputValue)
    }
    if ((inputValue && inputValue.length > 10) || !(/^[0-9]+$/.test(inputValue))) {
      return
    }
    setInputValue(inputValue)
    onChangeNumber(inputValue)
  }

  const onChange = (option) => {
    setOptSelected(option)
    setInputValue(option ? option?.value : '')
    const user = customersPhones.users?.find(user => user.cellphone === option?.value)
    if (user) {
      setCustomerState({ ...customerState, result: user })
      setOpenModal({ ...openModal, customer: true })
    }
  }

  const createNewUser = () => {
    if ((optSelected && optSelected?.value?.length === 10) || (!optSelected && phone.length === 10)) {
      setOpenModal({ ...openModal, signup: true })
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be 10 characters')
      })
    }
  }

  const optionsToSelect = customersPhones.users.map(user => {
    const obj = {}
    obj.value = user.cellphone || user.phone
    obj.label = `${user.cellphone || user.phone} (${user.name})`
    return obj
  }) || []

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <PhoneContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')}</Title>
          <Slogan>{t('SUBTITLE_HOME_CALLCENTER', 'Start First by adding the customers\' phone number')}</Slogan>
          {!userCustomer && (
            <div style={{ position: 'relative', width: '60%' }}>
              <Select
                isSearchable
                isClearable
                className='basic-single'
                classNamePrefix='select'
                placeholder={t('PHONE', 'Phone')}
                value={optSelected}
                inputValue={!optSelected ? inputValue : ''}
                onChange={onChange}
                onInputChange={onInputChange}
                isLoading={customersPhones?.loading}
                options={optionsToSelect}
              />
              <Button
                color={inputValue ? 'primary' : 'secundary'}
                onClick={() => createNewUser()}
                style={{ position: 'absolute', top: 13, right: 60 }}
                disabled={!inputValue}
              >
                {t('CREATE_CUSTOMER', 'Create new customer')}
              </Button>
            </div>
          )}
          {userCustomer?.id && (
            <WrappBtn>
              <Button
                color='primary'
                name='find'
                onClick={() => handleFindClick()}
              >
                {`${t('CONTINUE_WITH', 'Continue with')} ${userName}`}
              </Button>
            </WrappBtn>
          )}
        </ContentWrapper>
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => setOpenModal({ openModal, signup: false })}
      >
        <SignUpForm
          externalPhoneNumber={`${countryCallingCode} ${optSelected?.value || phone}`}
          saveCustomerUser={saveCustomerUser}
          fieldsNotValid={props.fieldsNotValid}
          useChekoutFileds
        />
      </Modal>
      <Modal
        open={openModal.customer}
        width='60%'
        onClose={() => setOpenModal({ openModal, customer: false })}
      >
        <UserEdit>
          {!customerState?.loading && (
            <>
              <UserDetails
                userData={customerState?.result}
                userId={customerState?.result?.id}
                isCustomerMode
              />
              <AddressList
                isModal
                userId={customerState?.result?.id}
                changeOrderAddressWithDefault
                userCustomerSetup={{
                  ...customerState?.result,
                  phone
                }}
                isEnableContinueButton
                isCustomerMode
              />
            </>
          )}
        </UserEdit>
      </Modal>
      <Alert
        title={t('ERROR', 'Error')}
        open={alertState.open}
        content={alertState.content}
        onClose={handleCloseAlert}
        onAccept={handleCloseAlert}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const PhoneAutocomplete = (props) => {
  const phoneProps = {
    UIComponent: PhoneAutocompleteUI,
    ...props
  }

  return <PhoneAutocompleteController {...phoneProps} />
}
