import React, { useEffect } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import Skeleton from 'react-loading-skeleton'
import { Container, Header, SideForm, UserData } from './styles'

import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    cleanFormState,
    cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  return (
    <>
      {(validationFields.loading || formState.loading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading) &&
        (
          <Container>
            <Header className='user-form'>
              <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
              {cartStatus !== 2 && (
                !isEdit ? (
                  <TiPencil className='edit' onClick={() => toggleIsEdit()} />
                ) : (
                  <FcCancel className='cancel' onClick={() => toggleEditState()} />
                )
              )}
            </Header>

            {!isEdit ? (
              <UserData>
                <p><strong>{t('NAME', 'Name')}:</strong> {user.name} {user?.middle_name} {user.lastname} {user?.second_lastname}</p>
                <p><strong>{t('EMAIL', 'Email')}:</strong> {user.email}</p>
                {user.cellphone && (
                  <p><strong>{t('CELLPHONE', 'Cellphone')}:</strong> {user.country_phone_code && `+${user.country_phone_code} `}{user.cellphone}</p>
                )}
              </UserData>
            ) : (
              <SideForm>
                <UserFormDetailsUI
                  t={t}
                  {...props}
                />
              </SideForm>
            )}
          </Container>
        )}
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
