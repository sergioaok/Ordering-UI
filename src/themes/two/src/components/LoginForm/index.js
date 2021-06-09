import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'
import { Alert } from '../Confirm'
import { SpinnerLoader } from '../SpinnerLoader'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../utils'
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
  LoginWith,
  InputGroup,
  FormTitle,
  WrapperInputPhoneNumber,
  CountdownTimer,
  OtpWrapper
} from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleChangeTab,
    handleButtonLoginClick,
    handleSendVerifyCode,
    handleCheckPhoneCode,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    verifyPhoneState,
    checkPhoneCodeState,
    loginTab,
    isPopup,
    credentials,
  } = props
  const numOtpInputs = 4
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { register, errors, setValue } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)
  const [otpState, setOtpState] = useState('')
  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const onSubmit = () => {
    if (loginWithOtpState) {
      
      if (!validPhoneFieldState) {
        setAlertState({
          open: true,
          content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
        })

        return
      }
      
      setWillVerifyOtpState(true)
    
    } else {
      handleButtonLoginClick()
    }
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

  const parseNumber = (unparsedNumber) => {
    if (!unparsedNumber) return {}

    const parsedNumber = parsePhoneNumber(unparsedNumber)
    const cellphone = parsedNumber?.nationalNumber
    const countryPhoneCode = +(parsedNumber?.countryCallingCode)

    return {
      cellphone,
      countryPhoneCode
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setValidPhoneField(isValid)
    handleChangeInput({ target: { name: 'cellphone', value: number } })
    setValue('cellphone', number, '')
  }

  const handleSendOtp = () => {
    if (willVerifyOtpState) {

      const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)

      resetOtpLeftTime()

      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      })
    }
  }

  useEffect(() => {
    handleSendOtp()
  }, [willVerifyOtpState])

  useEffect(() => {
    if (otpState?.length == numOtpInputs) {

      const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)

      handleCheckPhoneCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode,
        code: otpState
      })
    }
  }, [otpState])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error)
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')]
      })
    
    else
      resetOtpLeftTime()

  }, [checkPhoneCodeState])

  useEffect(() => {
    if (verifyPhoneState?.result?.error)
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    
    else 
      resetOtpLeftTime()
      
  }, [verifyPhoneState])

  return (
    <LoginContainer isPopup={isPopup}>
      <FormSide isPopup={isPopup}>
        {!willVerifyOtpState
          ?
            <>
              <FormTitle>{t('SIGN_IN', 'Sign in')}</FormTitle>
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
                <p>{t('OR', 'or')}</p>
                <Line />
              </LoginWithEmail>
            </>
          : <FormTitle>{t('VERIFY_PHONE', 'Verify Phone')}</FormTitle>
        }

        {(!willVerifyOtpState) && (
          <LoginWith isPopup={isPopup}>
            <Tabs variant='primary'>
              {useLoginByEmail && (
                <Tab
                  onClick={() => {
                    setLoginWithOtpState(false)
                    handleChangeTab('email')
                  }}
                  active={loginTab === 'email'}
                >
                  {t('LOGIN_WITH_EMAIL', 'Login with Email')}
                </Tab>
              )}

              {configs && Object.keys(configs).length > 0 && (configs?.twilio_service_enabled?.value === 'true' ||
                configs?.twilio_service_enabled?.value === '1')  && (
                  <Tab
                    onClick={() => {
                      setLoginWithOtpState(true)
                      handleChangeTab('cellphone')
                    }}
                    active={loginTab === 'cellphone'}
                  >
                    {t('LOGIN_WITH_SMS', 'Login with SMS')}
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
            {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />)
            )}
            {useLoginByEmail && loginTab === 'email' && (
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
            )}
            
            {(loginTab === 'cellphone' && !willVerifyOtpState) && (
              <WrapperInputPhoneNumber>
                <InputPhoneNumber
                  value={credentials?.cellphone}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={() => {}}
                />
              </WrapperInputPhoneNumber>
            )}

            {(!verifyPhoneState?.loading && willVerifyOtpState && !checkPhoneCodeState?.loading) && (
              <>
                <CountdownTimer>
                  <span>{formatSeconds(otpLeftTime)}</span>
                  <span onClick={handleSendOtp}>
                    {t('RESEND_AGAIN', 'Resend again')}?
                  </span>
                </CountdownTimer>

                <OtpWrapper>
                  <OtpInput
                    value={otpState}
                    onChange={otp => setOtpState(otp)}
                    numInputs={numOtpInputs}
                    containerStyle='otp-container'
                    inputStyle='otp-input'
                    placeholder='0000'
                    isInputNum
                    shouldAutoFocus
                  />
                </OtpWrapper>
              </>
            )}

            {(verifyPhoneState?.loading || checkPhoneCodeState?.loading) && (
              <SpinnerLoader
                style={{height: 160}}
              />
            )}

            {useLoginByEmail && loginTab === 'email' && !loginWithOtpState && (
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
                type='button'
                color='primary'
                onClick={onSubmit}
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
