import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import {
  ForgotPasswordForm as ForgotPasswordController,
  useLanguage
} from 'ordering-components'
import {
  ForgotPasswordContainer,
  FormSide,
  FormInput,
  FormTitle,
  InputGroup,
  RedirectLink
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData,
    isPopup,
    elementLinkToLogin
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('LINK_SEND_SUCCESSFULLY', 'Link Sent Successfully'),
        content: `${t('SUCCESS_SEND_FORGOT_PASSWORD', 'Your link has been sent to the email')}: ${formData.email}`
      })
    }
  }, [formState.loading])

  const onSubmit = () => {
    setAlertState({ ...alertState, success: true })
    handleButtonForgotPasswordClick()
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }
  return (
    <ForgotPasswordContainer isPopup={isPopup}>
      <FormSide isPopup={isPopup}>
        <FormTitle>
          {t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}
        </FormTitle>
        <p>{t('SUBTITLE_FORGOT_PASSWORD', 'Enter your email addres and we\'ll send you a link to reset your password.')}</p>
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputGroup>
            <label>{t('EMAIL', 'Email')}</label>
            <Input
              type='email'
              name='email'
              aria-label='email'
              placeholder={t('EMAIL', 'Email')}
              tabindex='1'
              ref={register({
                required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
                }
              })}
              onChange={(e) => hanldeChangeInput(e)}
              autoComplete='off'
            />
          </InputGroup>
          <Button
            color={alertState.success ? 'secondary' : 'primary'}
            type='subm(it'
            disabled={(alertState.success && formState.result.result) || formState.loading}
          >
            {formState.loading
              ? t('LOADING', 'Loading...')
              : alertState.success && formState.result.result
                ? t('LINK_SEND_FORGOT_PASSWORD', 'Link Sent')
                : t('FRONT_RECOVER_PASSWORD', 'Recover Password')}
          </Button>
        </FormInput>
        {elementLinkToLogin && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('SIGN_IN_MESSAGE', 'Do you want to sign in?')}</span>
            {elementLinkToLogin}
          </RedirectLink>
        )}
      </FormSide>
      <Alert
        title={t('LOGIN', 'Login')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </ForgotPasswordContainer>
  )
}

export const ForgotPasswordForm = (props) => {
  const ForgotPasswordProps = {
    ...props,
    UIComponent: ForgotPasswordUI
  }
  return <ForgotPasswordController {...ForgotPasswordProps} />
}
