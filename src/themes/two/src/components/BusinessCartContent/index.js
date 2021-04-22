import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useEvent, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'
import { ProductItemAccordion } from '../ProductItemAccordion'
import {
  Container,
  InnerContainer,
  CartHeader,
  NoCarts,
  PickupOrderCartHeader,
  WrapBusinessMap,
  BusinessAddress
} from './styles'
import { Button } from '../../styles/Buttons'
import { AddressDetails } from '../AddressDetails'

export const BusinessCartContent = (props) => {
  const {
    isSkeleton,
    cart,
    orderType,
    business
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()

  const [{ parsePrice }] = useUtils()
  const [{ configs }] = useConfig()

  const mapConfigs = {
    mapZoom: 16,
    mapSize: {
      width: 640,
      height: 400
    }
  }

  const handleClickCheckout = () => {
    events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart.uuid } })
    events.emit('cart_popover_closed')
  }

  const [businessSingleList, setBusinessSingleList] = useState([])
  useEffect(() => {
    if (isSkeleton) return
    const _business = []
    _business.push(business)
    setBusinessSingleList(_business)
  }, [business])

  return (
    <Container>
      <InnerContainer>
        {!isSkeleton ? (
          <>
            {cart && Object.keys(cart).length > 0 && (
              <>
                {cart.products.length > 0 && (
                  <>
                    <CartHeader>
                      <h3>{t('YOUR_ORDER', 'Your order')}</h3>
                      <p>{cart?.business?.name}</p>
                      <Button
                        color='primary'
                        borderRounded
                        disabled={!cart?.valid_schedule}
                        onClick={() => handleClickCheckout()}
                      >
                        <span>{t('CHECKOUT', 'Checkout')}</span>
                        <span>{parsePrice(cart.total)}</span>
                      </Button>
                    </CartHeader>
                    {orderType === 2 && businessSingleList.length !== 0 && (
                      <>
                        <PickupOrderCartHeader>
                          <p>{t('THIS_IS_A_PICKUP_ORDER', 'This is a Pickup order')}</p>
                          <p>{t('YOU_WILL_NEED_TO_GO_TO', 'You’ll need to go to')} {cart?.business?.name} {t('TO_PICK_UP_THIS_ORDER', 'to pick up this order.')}</p>
                        </PickupOrderCartHeader>
                        <WrapBusinessMap>
                          <BusinessAddress>
                            <span>{t('PICK_UP_AT', 'Pick up at')}</span>
                            <span>{business?.address}</span>
                          </BusinessAddress>
                          <AddressDetails
                            isCartView
                            location={business?.location}
                            businessLogo={business?.logo || theme.images?.dummies?.businessLogo}
                            apiKey={configs?.google_maps_api_key?.value}
                            mapConfigs={mapConfigs}
                          />
                        </WrapBusinessMap>
                      </>
                    )}
                    {cart.products.map(product => (
                      <ProductItemAccordion
                        key={product.id}
                        isCartProduct
                        isCartPending={cart?.status === 2}
                        product={product}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {(!cart || Object.keys(cart).length === 0 || cart.products.length === 0) && (
              <NoCarts>
                <img src={theme.images?.general?.emptyCart} alt='empty cart' width='200px' height='200px' loading='lazy' />
                <h1>{t('YOUR_CART_IS_EMPTY', 'Your cart is empty')}</h1>
                <h1>{t('ADD_ITEMS_TO_GET_STARTED', 'Add items to get started')}</h1>
              </NoCarts>
            )}
          </>
        ) : (
          <>
            <CartHeader isSkeleton={isSkeleton}>
              <Skeleton height={200} />
            </CartHeader>
          </>
        )}
      </InnerContainer>
    </Container>
  )
}
