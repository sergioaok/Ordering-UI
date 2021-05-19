import React from 'react'
import { StripeElementsForm as StripeElementsFormController } from 'ordering-components/_modules/components'
import { useLanguage } from 'ordering-components/_modules/contexts'
import { loadStripe } from '@stripe/stripe-js/pure'
import { Elements } from '@stripe/react-stripe-js'

import {
  ErrorMessage
} from './styles'

import { CardForm } from '../CardForm'

const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave,
    onCancel
  } = props
  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {publicKey ? (
        <Elements stripe={loadStripe(publicKey)}>
          <CardForm
            handleSource={handleSource}
            onNewCard={onNewCard}
            toSave={toSave}
            requirements={requirements}
            businessId={businessId}
            handleCancel={onCancel}
          />
        </Elements>
      ) : (
        <ErrorMessage>{t('SOMETHING_WRONG', 'Something is wrong!')}</ErrorMessage>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const StripeElementsForm = (props) => {
  const stripeElementsFormProps = {
    ...props,
    UIComponent: StripeElementsFormUI
  }
  return <StripeElementsFormController {...stripeElementsFormProps} />
}
