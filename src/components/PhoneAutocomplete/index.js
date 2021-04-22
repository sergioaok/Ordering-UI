import React, { useState, useEffect } from 'react'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage
} from 'ordering-components'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressList } from '../AddressList'

import {
  PhoneContainer,
  ContentWrapper,
  Title,
  Slogan,
  AutoComplete,
  UserEdit,
  WrappBtn
} from './styles'
import { SpinnerLoader } from '../SpinnerLoader'

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
    onRedirectPage
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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
    if (userCustomer?.id && userCustomer?.address) {
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
          <AutoComplete className='autocomplete'>
            <Input
              name='phone-input'
              id='phone-input'
              placeholder={t('PHONE', 'Phone')}
              type='text'
              pattern='[0-9]*'
              onInput={onChangeNumber}
              value={phone}
              onChange={() => {}}
              maxLength='10'
              autoComplete='off'
              disabled={customersPhones?.loading}
            />
            {phone && (
              <Button name='phone-button' id='phone-button' className='phone-button'>
                {t('SEE_PHONES', 'See phones')}
              </Button>
            )}
            {customersPhones?.loading && (
              <SpinnerLoader
                style={{
                  top: 0,
                  position: 'absolute',
                  height: 'auto',
                  left: '100%',
                  width: '0px',
                  transform: 'translate(-10px, 10%)'
                }}
              />
            )}
          </AutoComplete>
          <WrappBtn>
            <Button
              color='primary'
              name='find'
              onClick={() => handleFindClick()}
              disabled={!userCustomer?.id}
            >
              {userCustomer?.id ? (
                `${t('CONTINUE_WITH', 'Continue with')} ${userName}`
              ) : (
                t('FIND', 'Find')
              )}
            </Button>
          </WrappBtn>
        </ContentWrapper>
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => setOpenModal({ openModal, signup: false })}
      >
        <SignUpForm
          externalPhoneNumber={phone}
          saveCustomerUser={saveCustomerUser}
          fieldsNotValid={props.fieldsNotValid}
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
