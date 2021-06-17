import React, { useEffect, useState, useRef } from 'react'
import { useUtils, useLanguage } from 'ordering-components'

import {
  PaymentCashContainer,
  FormCash,
  WrapperInput,
  ErrorText
} from './styles'

import { Input } from '../../styles/Inputs'

export const PaymentOptionCash = (props) => {
  const {
    defaultValue,
    orderTotal,
    onChangeData,
    setErrorCash
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const [value, setvalue] = useState(defaultValue)
  const el = useRef()
  let timeout = null

  const onChangeCash = (e) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      let cash = parseFloat(e?.target?.value)
      cash = isNaN(cash) ? null : cash
      setvalue(cash)
      if (cash >= orderTotal || !cash) {
        onChangeData && onChangeData({ cash })
      }
    }, 1000)
  }

  useEffect(() => {
    el.current.onkeyup = onChangeCash
  }, [])

  useEffect(() => {
    el.current.value = value || ''
  }, [value])

  useEffect(() => {
    if (value && parseFloat(value) < orderTotal) {
      setErrorCash && setErrorCash(true)
    } else {
      setErrorCash && setErrorCash(false)
    }
  }, [value, orderTotal])

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
      <PaymentCashContainer>
        <FormCash>
          <WrapperInput>
            <label>{t('NOT_EXACT_CASH_AMOUNT', 'Don\'t have exact amount? Let us know with how much will you pay')}</label>
            <Input
              ref={el}
              name='cash'
              type='text'
              placeholder='0'
            />
          </WrapperInput>
          {value && parseFloat(value) < orderTotal && (
            <ErrorText>{t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total')}: {parsePrice(orderTotal)}</ErrorText>
          )}
        </FormCash>
      </PaymentCashContainer>
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

PaymentOptionCash.defaultProps = {
  defaultValue: null
}
