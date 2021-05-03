import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession,
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
  TogglePassword,
  OtpWrapper
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'
import { AppleLogin } from '../AppleLogin'
import { SmsLoginButton } from '../SmsLogin'
import { useTheme } from 'styled-components'
import OtpInput from 'react-otp-input';
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
    isPopup,
    credentials,
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const theme = useTheme()
  const [passwordSee, setPasswordSee] = useState(false)
  const emailInput = useRef(null)
  const cellphoneInput = useRef(null)
  const [loginWithOtpState, setLoginWithOtpState] = useState(false);
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false);
  const [otpState, setOtpState] = useState('');

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
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
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
      required: loginTab === 'email'
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
    formMethods.register('cellphone', {
      required: loginTab === 'cellphone'
        ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
        : null
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
            {(loginWithOtpState)
              ? willVerifyOtpState
                ? <p>
                    {`${t('SUBTITLE_ENTER_OTP', 'Please enter the verification code we sent to your mobile')} **${credentials?.cellphone?.substring(credentials?.cellphone?.length - 2)}`}
                  </p>
                : <p>{t('SUBTITLE_REQUEST_OTP', 'Enter your cellphone to get verify code.')}</p>
              : <p>{t('SUBTITLE_LOGIN', 'Enter your credentials and start journey with us.')}</p>
            }
          </TitleHeroSide>
        </HeroSide>
        <FormSide isPopup={isPopup}>
          <img src={theme?.images?.logos?.logotype} alt='Logo login' width='200' height='66' loading='lazy' />

          {(useLoginByEmail && useLoginByCellphone && !loginWithOtpState) && (
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
                  ref={(e) => emailInput.current = e}
                  onChange={handleChangeInputEmail}
                  autoComplete='off'
                />
              )}
              {(useLoginByCellphone && loginTab === 'cellphone' && !willVerifyOtpState) && (
                <Input
                  type='tel'
                  name='cellphone'
                  aria-label='cellphone'
                  placeholder='Cellphone'
                  ref={(e) => cellphoneInput.current = e}
                  onChange={(e) => handleChangeInput(e)}
                  autoComplete='off'
                />
              )}

              {willVerifyOtpState && (
                <OtpWrapper>
                  <OtpInput
                    value={otpState}
                    onChange={otp => setOtpState(otp)}
                    numInputs={4}
                    containerStyle='otp-container'
                    inputStyle='otp-input'
                    placeholder='0000'
                    isInputNum
                    shouldAutoFocus
                  />
                </OtpWrapper>
              )}

              {!loginWithOtpState && (
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
              {!loginWithOtpState && (
                <RedirectLink isPopup={isPopup}>
                  <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                  {elementLinkToForgotPassword}
                </RedirectLink>
              )}
              {(!willVerifyOtpState &&
                <Button
                  color='primary'
                  onClick={
                    loginWithOtpState
                      ? () => {
                        setWillVerifyOtpState(true)
                      }
                      : formMethods.handleSubmit(onSubmit)
                  }
                  disabled={formState.loading}
                >
                {formState.loading
                  ? `${t('LOADING', 'Loading')}...`
                  : loginWithOtpState
                    ? t('GET_VERIFY_CODE', 'Get verify code')
                    : t('LOGIN', 'Login')
                }
                </Button>
              )}
              {(loginWithOtpState && !willVerifyOtpState) && (
                <Button
                  type='button'
                  color='secundary'
                  disabled={formState.loading}
                  onClick={() => {
                    setLoginWithOtpState(false)
                  }}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              )}
            </FormInput>
          )}

          {(elementLinkToSignup && !loginWithOtpState) && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('NEW_ON_PLATFORM', 'New on Ordering?')}</span>
              {elementLinkToSignup}
            </RedirectLink>
          )}

          {(!props.isDisableButtons && !loginWithOtpState) && (
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
                {configs?.apple_login_client_id?.value &&
              (
                <AppleLogin
                  onSuccess={(data) => console.log('onSuccess', data)}
                  onFailure={(data) => console.log('onFailure', data)}
                />
              )}
              
              {useLoginByCellphone && loginTab === 'cellphone' && (
                <SmsLoginButton
                  handleSmsLogin={() => {
                    setLoginWithOtpState(true);
                  }}
                />
              )}
              </SocialButtons>
            ) : (
              <SkeletonSocialWrapper>
                <Skeleton height={43} />
                <Skeleton height={43} />
                {useLoginByCellphone && loginTab === 'cellphone' && (
                  <Skeleton height={43} />
                )}
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
