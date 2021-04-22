import React, { useState } from 'react'
import { UserFormDetailsUI } from '../UserFormDetails'
import { AccountManage } from '../AccountManage'

import {
  UserFormDetails as UserProfileController,
  useLanguage
} from 'ordering-components'

import {
  Container,
  ProfileContainer,
  Header,
  WrapperForm,
  PrivacyContainer,
  WrapAccountManage
} from './styles'

const UserProfileFormUI = (props) => {
  const [, t] = useLanguage()
  const [isManageAccountPage, setIsManageAccountPage] = useState(false)

  return (
    <Container>
      <ProfileContainer>
        <Header>
          <h1 onClick={() => setIsManageAccountPage(false)}>{t('PROFILE', 'Profile')}</h1>
        </Header>
        {!isManageAccountPage ? (
          <WrapperForm>
            <UserFormDetailsUI
              {...props}
            />
          </WrapperForm>
        ) : (
          <WrapAccountManage>
            <AccountManage />
          </WrapAccountManage>
        )}
      </ProfileContainer>
      {!isManageAccountPage && (
        <PrivacyContainer>
          <Header>
            <h1>{t('PRIVACY', 'Privacy')}</h1>
          </Header>
          <WrapperForm>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. <span>{t('LEARN_MORE', 'Learn More')}</span>
            </p>
          </WrapperForm>
        </PrivacyContainer>
      )}
    </Container>
  )
}

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
