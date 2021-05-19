import React from 'react'
import { PaymentOptionPaypal as PaymentPaypalController } from 'ordering-components/_modules/components'
import Skeleton from 'react-loading-skeleton'

import { Container } from './styles'

const PaymentOptionPaypalUI = (props) => {
  const {
    isSdkReady,
    PaypalButton,
    noAuthMessage,
    paypalButtonProps
  } = props

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
      <Container>
        {noAuthMessage ? (
          <p>{noAuthMessage}</p>
        ) : (
          isSdkReady ? (
            PaypalButton && <PaypalButton {...paypalButtonProps} />
          ) : (
            <div>
              <Skeleton count={3} height={55} />
            </div>
          )
        )}
      </Container>
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

export const PaymentOptionPaypal = (props) => {
  const paymentPaypalProps = {
    ...props,
    UIComponent: PaymentOptionPaypalUI
  }
  return (
    <PaymentPaypalController {...paymentPaypalProps} />
  )
}
