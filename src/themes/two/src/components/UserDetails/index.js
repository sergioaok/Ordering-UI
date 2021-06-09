import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'
import { UserFormDetailsUI } from '../UserFormDetails'
import { Container, Header, UserData } from './styles'

const UserDetailsUI = (props) => {
  const {
    userData: externalUserData,
    isEdit,
    formState,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    externalLoading
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [openModal, setOpenModal] = useState(false)
  const userData = externalUserData || formState.result?.result || user

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  return (
    <>
      {(validationFields.loading || formState.loading || externalLoading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || externalLoading) && (
        <Container>
          <Header className='user-form'>
            <h1>{t('CUSTOMER_DETAILS', 'Customer details')}</h1>
            <span onClick={() => setOpenModal(true)}>
              {t('CHANGE', 'Change')}
            </span>
          </Header>

          <UserData>
            {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
              <p>
                <strong>{t('NAME', 'Name')}:</strong> {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
              </p>
            )}
            {userData?.email && (
              <p><strong>{t('EMAIL', 'Email')}:</strong> {userData?.email}</p>
            )}
            {(userData?.cellphone || user?.cellphone) && (
              <p>
                <strong>{t('CELLPHONE', 'Cellphone')}:</strong>
                {(userData?.country_phone_code) && `+${(userData?.country_phone_code)} `}{(userData?.cellphone)}
              </p>
            )}
          </UserData>
        </Container>
      )}

      <Modal
        title={t('EDIT_PHONE_NUMBER', 'Edit phone number')}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <UserFormDetailsUI
          isCheckout
          {...props}
          onCancel={() => setOpenModal(false)}
          closeModal={() => setOpenModal(false)}
        />
      </Modal>
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return <UserFormController {...userDetailsProps} />
}
