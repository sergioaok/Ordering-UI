import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js/pure'
import { useParams, useLocation } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'

import { Checkout } from '../../../src/components/Checkout'
import { useEvent, useOrder, useLanguage } from 'ordering-components'

export const CheckoutPage = (props) => {
  const { cartUuid } = useParams()
  const [events] = useEvent()
  const [errors, setErrors] = useState([])
  const [, { confirmCart }] = useOrder()
  const [, t] = useLanguage()
  const stripePayments = ['stripe', 'stripe_connect', 'stripe_direct']

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const actionsBeforePlace = async (paymethod, cart) => {
    if (stripePayments.includes(paymethod.gateway)) {
      try {
        const stripe = await loadStripe(paymethod.paymethod?.credentials?.publishable)
        const result = await stripe.confirmCardPayment(cart.paymethod_data.result.client_secret)
        if (result?.paymentIntent?.status === 'succeeded') {
          try {
            const confirmCartRes = await confirmCart(cartUuid)
            if (confirmCartRes.error) {
              setErrors([confirmCartRes.error.message])
            }
            if (confirmCartRes.result.order?.uuid) {
              events.emit('go_to_page', { page: 'order_detail', params: { orderId: confirmCartRes.result.order.uuid }, replace: true })
            }
          } catch (error) {
            setErrors([error.message])
          }
        }
        if (result?.error?.code === 'payment_intent_authentication_failure') {
          setErrors([t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')])
        }
        return true
      } catch (error) {
        setErrors([error.message])
      }
    } else if (paymethod.gateway === 'stripe_redirect') {
      const stripe = await loadStripe(paymethod.paymethod?.credentials?.publishable)
      const confirmOption = {
        bancontact: {
          name: 'confirmBancontactPayment',
          type: 1
        },
        alipay: {
          name: 'confirmAlipayPayment',
          type: 2
        },
        giropay: {
          name: 'confirmGiropayPayment',
          type: 1
        },
        ideal: {
          name: 'confirmIdealPayment',
          type: 2
        }
      }
      const params = {
        1: {
          payment_method: {
            billing_details: cart.paymethod_data.data.owner
          },
          return_url: `${window.location.origin}/checkout/${cartUuid}`
        },
        2: {
          return_url: `${window.location.origin}/checkout/${cartUuid}`
        }
      }
      stripe[confirmOption[paymethod.data.type]?.name](
        cart.paymethod_data.result.client_secret,
        params[confirmOption[paymethod.data.type]?.type]
      ).then((result) => {
        if (result?.error) {
          setErrors([...errors, result?.error?.message])
        }
      })
    }
  }

  const checkoutProps = {
    ...props,
    cartUuid,
    actionsBeforePlace,
    query: useQuery(),
    errors,
    clearErrors: () => setErrors([]),
    useValidationFields: true,
    validationFieldsType: 'checkout',
    onPlaceOrderClick: (data, paymethod, cart) => {
      if (cart?.order?.uuid) {
        events.emit('go_to_page', { page: 'order_detail', params: { orderId: cart.order?.uuid }, replace: true })
      }
    },
    handleOrderRedirect: (uuid) => {
      events.emit('go_to_page', { page: 'order_detail', params: { orderId: uuid }, replace: true })
    },
    handleCheckoutRedirect: (uuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: uuid } })
    },
    handleSearchRedirect: () => {
      events.emit('go_to_page', { page: 'search' })
    },
    handleCheckoutListRedirect: () => {
      events.emit('go_to_page', { page: 'checkout_list' })
    },
    handleStoreRedirect: (store) => {
      events.emit('go_to_page', { page: 'business', params: { store } })
    }
  }
  return (
    <>
      <HelmetTags page='checkout' />
      <Checkout {...checkoutProps} />
    </>
  )
}
