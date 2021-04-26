import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import { Alert } from '../Confirm'
import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  SocialButtons,
  SkeletonSocialWrapper,
  WrapperPassword,
  LoginWithEmail,
  Line,
  InputGroup,
  FormTitle
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    handleChangeInput,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    isPopup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()

  const onSubmit = async () => {
    handleButtonLoginClick()
  }

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }
  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
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
    document.querySelector('.wrap-reset > a').tabIndex = '-1'
  }, [])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <LoginContainer isPopup={isPopup}>
      <FormSide isPopup={isPopup}>
        <FormTitle>
          {t('SIGN_IN', 'Sign in')}
        </FormTitle>
        {elementLinkToSignup && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('NEW_ON_ORDERING', 'Are you new to Ordering?')}</span>
            {elementLinkToSignup}
          </RedirectLink>
        )}
        {Object.keys(configs).length > 0 ? (
          <SocialButtons isPopup={isPopup}>
            {(configs?.facebook_login?.value === 'true' ||
              configs?.facebook_login?.value === '1') &&
              configs?.facebook_id?.value &&
            (
              <FacebookLoginButton
                appId={configs?.facebook_id?.value}
                handleSuccessFacebookLogin={handleSuccessFacebook}
              />
            )}
          </SocialButtons>
        ) : (
          <SkeletonSocialWrapper>
            <Skeleton height={43} />
          </SkeletonSocialWrapper>
        )}
        <LoginWithEmail>
          <Line />
          <p>{t('OR_CONTINUE_WITH_EMAIL', 'or continue with email')}</p>
          <Line />
        </LoginWithEmail>
        {(useLoginByEmail) && (
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGroup>
              <label>{t('EMAIL', 'Email')}</label>
              {useLoginByEmail && (
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
                  onChange={(e) => handleChangeInput(e)}
                  autoComplete='off'
                />
              )}
            </InputGroup>
            <WrapperPassword>
              <div>
                <label>{t('PASSWORD', 'Password')}</label>
                <RedirectLink isPopup={isPopup} className='wrap-reset'>
                  {elementLinkToForgotPassword}
                </RedirectLink>
              </div>
              <Input
                type='password'
                name='password'
                aria-label='password'
                placeholder={t('PASSWORD', 'Password')}
                tabindex='2'
                ref={register({
                  required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                })}
                onChange={(e) => handleChangeInput(e)}
              />
            </WrapperPassword>
            <Button
              color='primary'
              type='submit'
              disabled={formState.loading}
            >
              {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SIGN_IN', 'Sign in')}
            </Button>
          </FormInput>
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
    </LoginContainer>
  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
