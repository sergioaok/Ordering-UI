import React, { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { ResetPassword as ResetPasswordController } from 'ordering-components/_modules/components'
import {
  useLanguage,
  useSession
} from 'ordering-components/_modules/contexts'
import {
  ResetPasswordContainer,
  FormSide,
  HeroSide,
  FormInput,
  TitleHeroSide
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import { PageNotFound } from '../PageNotFound'

const ResetPasswordUI = (props) => {
  const {
    code,
    random,
    formState,
    resetPasswordData,
    handleResetPassword,
    handleChangeInput,
    redirectResetPassword,
    redirectLogin
  } = props

  const [{ auth }] = useSession()
  const { handleSubmit, register, errors, watch } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, t] = useLanguage()
  const theme = useTheme()

  const password = useRef({})

  password.current = watch('password', '')

  const onSubmit = () => {
    if (code && random) {
      handleResetPassword()
    } else {
      redirectResetPassword && redirectResetPassword(resetPasswordData)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleCloseAlert = () => {
    if (!formState.loading && formState.result?.result?.length && !formState.result.error) {
      redirectLogin && redirectLogin()
    }
    closeAlert()
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    } else if (!formState.loading && formState.result?.result?.length) {
      setAlertState({
        open: true,
        content: formState.result?.result === 'OK' ? t('PASSWORD_RESET_SUCCESS', 'Password changed successfully') : formState.result?.result
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    return () => closeAlert()
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ResetPasswordContainer>
        {auth ? (
          <PageNotFound />
        ) : (
          <>
            <HeroSide>
              <TitleHeroSide>
                <h1>{t('TITLE_RESET_PASSWORD', 'Reset password')}</h1>
                <p>{code && random ? t('SUBTITLE_RESET_PASSWORD', 'Reset your password') : t('RESET_PASSWORD_CODES_TITLE', 'Please insert the codes')}</p>
              </TitleHeroSide>
            </HeroSide>
            {
            props.beforeMidElements?.map((BeforeMidElements, i) => (
              <React.Fragment key={i}>
                {BeforeMidElements}
              </React.Fragment>))
            }
            {
            props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />))
            }
            {code && random ? (
              <>
                <FormSide>
                  <img src={theme?.images?.logos?.logotype} alt='Logo' width='200' height='66' loading='lazy' />
                  <FormInput
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Input
                      type='password'
                      name='password'
                      aria-label='password'
                      spellcheck='false'
                      ref={register({
                        required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field password is required'),
                        minLength: {
                          value: 8,
                          message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                        }
                      })}
                      placeholder={t('NEW_PASSWORD', 'New passowrd')}
                      onChange={handleChangeInput}
                      autoComplete='off'
                    />
                    <Input
                      type='password'
                      name='confirm-password'
                      aria-label='confirm-password'
                      spellcheck='false'
                      ref={register({
                        required: t('VALIDATION_ERROR_PASSWORD_CONFIRM_REQUIRED', 'The field password confirm is required'),
                        validate: value =>
                          value === password.current || t('VALIDATION_ERROR_PASSWORDS_MATCH', 'The passwords do not match')
                      })}
                      placeholder={t('CONFIRM_PASSWORD', 'Confirm Password')}
                      onChange={handleChangeInput}
                      autoComplete='off'
                    />
                    <Button
                      type='submit'
                      color={(formState.loading || formState.result?.result?.length) ? 'secondary' : 'primary'}
                      disabled={(formState.loading || formState.result?.result?.length)}
                    >
                      {!formState.loading ? t('CHANGE_PASSWORD', 'Change password') : t('LOADING', 'Loading')}
                    </Button>
                  </FormInput>
                </FormSide>
              </>
            ) : (
              <FormSide>
                <img src={theme?.images?.logos?.logotype} alt='Logo' width='200' height='66' loading='lazy' />
                <FormInput
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {!code && (
                    <Input
                      name='code'
                      aria-label='code'
                      ref={register({
                        required: t('RESET_PASSWORD_CODE_REQUIRED', 'The field code is required')
                      })}
                      placeholder={t('CODE', 'Code')}
                      onChange={handleChangeInput}
                      autoComplete='off'
                    />
                  )}
                  {!random && (
                    <Input
                      name='random'
                      aria-label='random'
                      ref={register({
                        required: t('RESET_PASSWORD_RANDOM_REQUIRED', 'The field random is required')
                      })}
                      placeholder={t('RAMDON', 'Random')}
                      onChange={handleChangeInput}
                      autoComplete='off'
                    />
                  )}
                  <Button
                    type='submit'
                    color='primary'
                  >
                    {t('SUBMIT_CODES', 'Submit codes')}
                  </Button>
                </FormInput>
              </FormSide>
            )}
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
            <Alert
              title={t('RESET_PASSWORD', 'Reset Password')}
              content={alertState?.content}
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => handleCloseAlert()}
              onAccept={() => handleCloseAlert()}
              closeOnBackdrop={false}
            />
          </>
        )}
      </ResetPasswordContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ResetPassword = (props) => {
  const resetPasswordProps = {
    ...props,
    UIComponent: ResetPasswordUI
  }

  return <ResetPasswordController {...resetPasswordProps} />
}
