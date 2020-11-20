import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent } from 'ordering-components'
import { Container, NotCarts } from './styles'

import { Cart } from '../Cart'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()

  const [currentCartUuid, setCurrentCartUuid] = useState(null)

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
  }

  useEffect(() => {
    events.on('cart_popover_closed', handleSetCurrentCartUuid)
    events.on('cart_product_added', handleAddProduct)
    return () => {
      events.off('cart_popover_closed', handleSetCurrentCartUuid)
      events.off('cart_product_added', handleAddProduct)
    }
  }, [])

  return (
    <Container>
      {isOrderStateCarts && carts.length > 0 &&
        carts.map(cart => (
          <React.Fragment key={cart.uuid}>
            {cart.products.length > 0 && (
              <Cart
                cart={cart}
                currentCartUuid={currentCartUuid}
                isProducts={cart.products.length}
                onClickCheckout={props.onClose}
              />
            )}
          </React.Fragment>
        ))}
      {carts.length === 0 && (
        <NotCarts>
          <img src={theme.images?.general?.notFound} alt='Not Found' />
          <h1>{t('CART_ERROR', 'You don\'t have carts available')}</h1>
        </NotCarts>
      )}
    </Container>
  )
}
