import React from 'react'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
import MdSms from '@meronex/icons/md/MdSms'
import { SMSButton } from './styles'

const SmsLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleSmsLogin } = props
  return (
    <SMSButton
      initialIcon
      color='secondary'
      onClick={() => handleSmsLogin()}
    >
      <MdSms />
      <div>{t('LOGIN_WITH_SMS', 'Login with SMS')}</div>
    </SMSButton>
  )
}

export const SmsLoginButton = (props) => {
  const smsLoginProps = {
    ...props,
    UIComponent: SmsLoginButtonUI
  }
  return <LoginFormController {...smsLoginProps} />
}
