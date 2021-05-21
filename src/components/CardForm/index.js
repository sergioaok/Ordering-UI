import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { CardForm as CardFormController } from 'ordering-components/_modules/components'
import { useLanguage } from 'ordering-components/_modules/contexts'

import {
  FormStripe,
  FormRow,
  ErrorMessage,
  FormActions
} from './styles'

import { Button } from '../../styles/Buttons'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
}

const CardFormUI = (props) => {
  const {
    error,
    loading,
    handleSubmit,
    handleChange,
    handleCancel
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <FormStripe onSubmit={handleSubmit}>
        <FormRow>
          <CardElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
          <ErrorMessage>{error}</ErrorMessage>
        </FormRow>
        <FormActions>
          <Button type='button' onClick={() => handleCancel()}>{t('CANCEL', 'Cancel')}</Button>
          <Button
            color='primary'
            type='submit'
            disabled={loading}
          >
            {loading ? t('LOADING', 'Loading...') : t('ADD', 'Add')}
          </Button>
        </FormActions>
      </FormStripe>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

export const CardForm = (props) => {
  const cardFormProps = {
    ...props,
    UIComponent: CardFormUI
  }
  return <CardFormController {...cardFormProps} />
}

export default CardForm
