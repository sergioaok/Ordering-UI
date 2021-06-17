import React from 'react'
import { Container } from './styles'

import { ProfileOptions } from '../../../../../components/UserProfileForm/ProfileOptions'
import { OrdersOption } from '../OrdersOption'

export const MyOrders = (props) => {
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
      <ProfileOptions value='orders' />
      <Container>
        <OrdersOption {...props} activeOrders horizontal />
        <OrdersOption {...props} />
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
