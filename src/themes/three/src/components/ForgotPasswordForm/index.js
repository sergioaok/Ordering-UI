import React, { useEffect, useState, useRef } from 'react'
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
  RedirectLink
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData,
    elementLinkToLogin,
    isPopup
  } = props

  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()
  const theme = useTheme()
  const emailInput = useRef(null)

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

  const handleChangeInputEmail = (e) => {
    hanldeChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

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

  useEffect(() => {
    formMethods.register('email', {
      required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
  }, [formMethods])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ForgotPasswordContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <img src={theme?.images?.logos?.logotype} alt='Logo' width='200' height='66' loading='lazy' />
          <h1>{t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}</h1>
          <p>{t('SUBTITLE_FORGOT_PASSWORD', 'Enter your email addres and we\'ll send you a link to reset your password.')}</p>
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={formMethods.handleSubmit(onSubmit)}
          >
            {props.beforeMidElements?.map((BeforeMidElements, i) => (
              <React.Fragment key={i}>
                {BeforeMidElements}
              </React.Fragment>))}
            {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />))}
            <Input
              type='email'
              name='email'
              aria-label='email'
              placeholder={t('EMAIL', 'Email')}
              ref={(e) => {
                emailInput.current = e
              }}
              onChange={handleChangeInputEmail}
              autoComplete='off'
            />
            {
              props.afterMidElements?.map((MidElement, i) => (
                <React.Fragment key={i}>
                  {MidElement}
                </React.Fragment>))
            }
            {
              props.afterMidComponents?.map((MidComponent, i) => (
                <MidComponent key={i} {...props} />))
            }
            <Button rectangle color={formState.loading || alertState.success ? 'primary' : 'secundary'} type='submit' disabled={formState.loading || alertState.success}>
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
          title={alertState.title}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </ForgotPasswordContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ForgotPasswordForm = (props) => {
  const ForgotPasswordProps = {
    ...props,
    UIComponent: ForgotPasswordUI
  }
  return <ForgotPasswordController {...ForgotPasswordProps} />
}
