import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'
import parsePhoneNumber from 'libphonenumber-js'
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye'
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession
} from 'ordering-components'
import {
  SignUpContainer,
  FormSide,
  FormInput,
  SocialButtons,
  RedirectLink,
  SkeletonWrapper,
  SkeletonSocialWrapper,
  FormTitle,
  SignupWithEmail,
  Line,
  InputGroup,
  WrapperPassword,
  TogglePassword,
  WrapTermsAndAgree
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { FacebookLoginButton } from '../FacebookLogin'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
    handleButtonSignupClick,
    elementLinkToLogin,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    isPopup,
    externalPhoneNumber
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()

  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [passwordSee, setPasswordSee] = useState(false)

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber && validationFields?.fields?.checkout?.cellphone?.required && !externalPhoneNumber) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
      return
    }
    handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  return (
    <SignUpContainer isPopup={isPopup}>
      <FormSide isPopup={isPopup}>
        <FormTitle>
          {t('SIGN_UP', 'Sign up')}
        </FormTitle>
        {elementLinkToLogin && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')}</span>
            {elementLinkToLogin}
          </RedirectLink>
        )}
        {!externalPhoneNumber && (
          <>
            {Object.keys(configs).length > 0 ? (
              <SocialButtons isPopup={isPopup}>
                {configs?.facebook_login?.value && configs?.facebook_id?.value && (
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
          </>
        )}
        <SignupWithEmail>
          <Line />
          <p>{t('OR_CONTINUE_WITH_EMAIL', 'or continue with email')}</p>
          <Line />
        </SignupWithEmail>
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
          isSkeleton={useChekoutFileds && validationFields?.loading}
        >
          {
            !(useChekoutFileds && validationFields?.loading) ? (
              <>
                {
                  validationFields?.fields?.checkout && Object.values(validationFields?.fields?.checkout).map(field => !notValidationFields.includes(field.code) && (
                    showField && showField(field.code) && (
                      <InputGroup key={field.id}>
                        <label>{t(field.name)}</label>
                        <Input
                          type={field.type}
                          name={field.code}
                          aria-label={field.code}
                          className='form'
                          onChange={handleChangeInput}
                          ref={register({
                            required: isRequiredField(field.code) ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                            pattern: {
                              value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                              message: field.code === 'email' ? t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                            }
                          })}
                          required={field.required}
                          autoComplete='off'
                        />
                      </InputGroup>
                    )
                  ))
                }
                {!!showInputPhoneNumber && !externalPhoneNumber && (
                  <InputPhoneNumber
                    value={userPhoneNumber}
                    setValue={handleChangePhoneNumber}
                    handleIsValid={setIsValidPhoneNumber}
                  />
                )}

                {externalPhoneNumber && (
                  <Input
                    value={externalPhoneNumber}
                    className='form'
                    readOnly
                    name='cellphone'
                  />
                )}
                <InputGroup>
                  <label>{t('PASSWORD', 'Password')}</label>
                  <WrapperPassword>
                    <Input
                      type={!passwordSee ? 'password' : 'text'}
                      name='password'
                      aria-label='password'
                      className='form'
                      onChange={handleChangeInput}
                      required
                      ref={register({
                        required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                        minLength: {
                          value: 8,
                          message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                        }
                      })}
                    />
                    <TogglePassword onClick={togglePasswordView}>
                      {!passwordSee ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </TogglePassword>
                  </WrapperPassword>
                </InputGroup>
              </>
            ) : (
              <>
                {[...Array(5)].map((item, i) => (
                  <SkeletonWrapper key={i}>
                    <Skeleton height={43} />
                  </SkeletonWrapper>
                ))}
              </>
            )
          }
          <Button
            color='primary'
            type='submit'
            disabled={formState.loading || validationFields.loading}
          >
            {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SIGN_UP', 'Sign up')}
          </Button>
          <WrapTermsAndAgree>
            When you click Register, Continue with Facebook, Continue with Google, Continue with Apple, you agree to our <span>Terms and Conditions</span> and <span>Privacy Statement</span>
          </WrapTermsAndAgree>
        </FormInput>
      </FormSide>
      <Alert
        title={t('SIGN_UP', 'Sign up')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SignUpContainer>
  )
}

export const SignUpForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
