import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'

import { OrderDetails } from '../../../src/components/OrderDetails'

export const OrderDetailsPage = (props) => {
  const history = useHistory()
  const { orderId } = useParams()
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null

  const orderDetailsProps = {
    ...props,
    orderId,
    hashKey,
    urlToShare: (hashKey) => hashKey ? `${window.location.origin}/orders/${orderId}?hash=${hashKey}` : null,
    handleOrderRedirect: () => {
      history.push('/profile/orders')
    },
    handleBusinessRedirect: (slug) => {
      history.push(`/store/${slug}`)
    },
    isCustomerMode: true
  }
  return (
    <>
      <HelmetTags page='order_details' helmetTitle={`Order #${orderId}`} />
      <OrderDetails {...orderDetailsProps} />
    </>
  )
}
