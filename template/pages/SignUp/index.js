import React from 'react'
import { SignUpForm } from '../../../src/components/SignUpForm'
import { HelmetTags } from '../../components/HelmetTags'

export const SignUp = (props) => {
  const signupProps = {
    ...props,
    fieldsNotValid: ['password']
  }
  return (
    <>
      <HelmetTags page='signup' />
      <SignUpForm {...signupProps} />
    </>
  )
}
