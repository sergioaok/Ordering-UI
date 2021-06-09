import React from 'react'
import {
  GoogleLoginButton as GoogleLoginController,
  useLanguage
} from 'ordering-components'
import FcGoogle from '@meronex/icons/fc/FcGoogle'
import { GoogleButton } from './styles'

export const GoogleLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { signIn } = props

  return (
    <GoogleButton
      initialIcon
      color='secondary'
      onClick={signIn}
    >
      <FcGoogle />
      <div>{t('LOGIN_WITH_GOOGLE', 'Login with Google')}</div>
    </GoogleButton>
  )
}

export const GoogleLoginButton = (props) => {
  const googleLoginProps = {
    ...props,
    UIComponent: GoogleLoginButtonUI
  }
  return <GoogleLoginController {...googleLoginProps} />
}
