import React from 'react'
import { FacebookLoginButton as FacebookLoginController } from 'ordering-components/_modules/components'
import { useLanguage } from 'ordering-components/_modules/contexts'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import { FacebookButton } from './styles'

const FacebookLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <FacebookButton
      initialIcon
      color='secondary'
      onClick={() => handleFacebookLogin()}
    >
      <FaFacebook />
      <div>{t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}</div>
    </FacebookButton>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }
  return <FacebookLoginController {...facebookLoginProps} />
}
