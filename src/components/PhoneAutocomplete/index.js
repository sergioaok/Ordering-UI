import React, { useState, useEffect } from 'react'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage,
  useSession
} from 'ordering-components'

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
  UserEdit
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
    setCustomerState
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const saveCustomerUser = (user) => {
    setCustomersPhones({ ...customersPhones, phones: [...customersPhones, { name: user.name, phone: user.phone || user.cellphone }] })
    setCustomerState({ ...customersPhones, result: user })
    setOpenModal({ ...openModal, customer: true })
  }

  useEffect(() => {
    if (customersPhones.error) {
      setAlertState({ open: true, content: [customersPhones.error] })
    }
  }, [customersPhones.error])

  return (
    <>
      <PhoneContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME', 'All We need is Food.')}</Title>
          <Slogan>{t('SUBTITLE_HOME', 'Let\'s start to order food now')}</Slogan>
          <AutoComplete className='autocomplete'>
            <Input
              name='phone-input'
              id='phone-input'
              placeholder='Phone'
              type='text'
              pattern='[0-9]*'
              onInput={onChangeNumber}
              value={phone}
              onChange={() => {}}
              maxLength='10'
              autoComplete='off'
              disabled={customersPhones?.loading}
            />
          </AutoComplete>
          <Button
            color='primary'
            name=''
          >
            {t('FIND', 'Find')}
          </Button>
        </ContentWrapper>
      </PhoneContainer>
      <Modal
        open={openModal.customer}
        width='80%'
        onClose={() => setOpenModal({ openModal, customer: false })}
      >
        <SignUpForm
          externalPhoneNumber={phone}
          saveCustomerUser={saveCustomerUser}
          setCustomersPhones={setCustomersPhones}
        />
      </Modal>
      <Modal
        open={openModal.address}
        width='60%'
        onClose={() => setOpenModal({ openModal, address: false })}
      >
        <UserEdit>
          {!customerState?.loading && customerState?.result?.id && (
            <>
              <UserDetails
                userData={customerState?.result || user}
                userId={customerState?.result?.id || user?.id?.toString()}
              />
              <AddressList
                isModal
                userId={customerState?.result?.id?.toString() || user?.id?.toString()}
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
