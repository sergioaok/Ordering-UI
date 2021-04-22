import React, { useState, useEffect, useRef } from 'react'
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
  HeroSide,
  FormInput,
  RedirectLink,
  TitleHeroSide,
  SocialButtons,
  LoginWith,
  SkeletonSocialWrapper,
  WrapperPassword,
  TogglePassword
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'
import { useTheme } from 'styled-components'
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye'
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleChangeTab,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const theme = useTheme()
  const [passwordSee, setPasswordSee] = useState(false)
  const emailInput = useRef(null)

  const onSubmit = async () => {
    handleButtonLoginClick()
  }

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/\s/gi, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/\s/gi, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/\s/gi, '')
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
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

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
      <LoginContainer isPopup={isPopup}>
        <HeroSide>
          <TitleHeroSide>
            <h1>{t('TITLE_LOGIN', 'Hello Friend!')}</h1>
            <p>{t('SUBTITLE_LOGIN', 'Enter your credentials and start journey with us.')}</p>
          </TitleHeroSide>
        </HeroSide>
        <FormSide isPopup={isPopup}>
          <img src={theme?.images?.logos?.logotype} alt='Logo login' width='200' height='66' loading='lazy' />

          {useLoginByEmail && useLoginByCellphone && (
            <LoginWith isPopup={isPopup}>
              <Tabs variant='primary'>
                {useLoginByEmail && (
                  <Tab
                    onClick={() => handleChangeTab('email')}
                    active={loginTab === 'email'}
                  >
                    {t('LOGIN_WITH_EMAIL', 'Login with Email')}
                  </Tab>
                )}
                {useLoginByCellphone && (
                  <Tab
                    onClick={() => handleChangeTab('cellphone')}
                    active={loginTab === 'cellphone'}
                  >
                    {t('LOGIN_WITH_CELLPHONE', 'Login with Cellphone')}
                  </Tab>
                )}
              </Tabs>
            </LoginWith>
          )}

          {(useLoginByCellphone || useLoginByEmail) && (
            <FormInput
              noValidate
              isPopup={isPopup}
              onSubmit={formMethods.handleSubmit(onSubmit)}
            >
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
              {useLoginByEmail && loginTab === 'email' && (
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
              )}
              {useLoginByCellphone && loginTab === 'cellphone' && (
                <Input
                  type='tel'
                  name='cellphone'
                  aria-label='cellphone'
                  placeholder='Cellphone'
                  ref={(el) => {
                    formMethods.register({
                      required: t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
                    })
                  }}
                  onChange={(e) => handleChangeInput(e)}
                  autoComplete='off'
                />
              )}
              <WrapperPassword>
                <Input
                  type={!passwordSee ? 'password' : 'text'}
                  name='password'
                  aria-label='password'
                  placeholder={t('PASSWORD', 'Password')}
                  ref={formMethods.register({
                    required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                  })}
                  onChange={(e) => handleChangeInput(e)}
                />
                <TogglePassword onClick={togglePasswordView}>
                  {!passwordSee ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </TogglePassword>
              </WrapperPassword>
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
              <RedirectLink isPopup={isPopup}>
                <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                {elementLinkToForgotPassword}
              </RedirectLink>
              <Button
                color='primary'
                type='submit'
                disabled={formState.loading}
              >
                {formState.loading ? `${t('LOADING', 'Loading')}...` : t('LOGIN', 'Login')}
              </Button>
            </FormInput>
          )}

          {elementLinkToSignup && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('NEW_ON_PLATFORM', 'New on Ordering?')}</span>
              {elementLinkToSignup}
            </RedirectLink>
          )}
          {!props.isDisableButtons && (
            Object.keys(configs).length > 0 ? (
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
            )
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
