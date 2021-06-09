import React, { useState, useRef, useEffect } from 'react'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import FiClock from '@meronex/icons/fi/FiClock'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import { useOrder, useLanguage, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

import { convertHoursToMinutes } from '../../../../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperBusinessLogo,
  BusinessLogo,
  ContentInfo,
  BusinessInfo,
  BusinessTotal,
  BusinessActions
} from './styles'

export const BusinessItemAccordion = (props) => {
  const {
    uuid,
    isCartPending,
    currentCartUuid,
    isCheckout,
    isClosed,
    moment,
    business,
    isProducts,
    isForceOpenAccordion,
    isCartOnProductsList,
    handleClearProducts,
    handleStoreRedirect,
    handleCartOpen
  } = props

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [cartProductUpdated, setCartProductUpdated] = useState(null)

  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)

  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e?.target) || businessDelete.current?.contains(e?.target)
    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const activeAccordion = (value) => {
    setActiveState(value ? 'active' : '')
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon')
  }

  const handleCloseCartPopover = () => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false)
    }
  }

  const handleCartProductUpdated = (product, cart) => {
    setCartProductUpdated(cart?.uuid)
  }

  useEffect(() => {
    if (cartProductUpdated === uuid || (currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid))) {
      activeAccordion(true)
    } else {
      activeAccordion(false)
    }
  }, [cartProductUpdated, currentCartUuid])

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true)
    }
  }, [orderState?.carts])

  useEffect(() => {
    if (isForceOpenAccordion) {
      activeAccordion(true)
    }
  }, [isForceOpenAccordion])

  useEffect(() => {
    events.on('cart_popover_closed', handleCloseCartPopover)
    events.on('cart_product_updated', handleCartProductUpdated)
    return () => {
      events.off('cart_popover_closed', handleCloseCartPopover)
      events.off('cart_product_updated', handleCartProductUpdated)
    }
  }, [])

  useEffect(() => {
    handleCartOpen && handleCartOpen(!!setActive)
  }, [setActive])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection isClosed={isClosed} isCartOnProductsList={isCartOnProductsList}>
        {!isCheckout && (
          <Accordion
            isClosed={isClosed}
            className={`accordion ${setActive}`}
            onClick={(e) => toggleAccordion(e)}
          >
            <BusinessInfo>
              {(business?.logo || theme.images?.dummies?.businessLogo) && !isCartOnProductsList && (
                <WrapperBusinessLogo>
                  <BusinessLogo bgimage={business?.logo || theme.images?.dummies?.businessLogo} />
                </WrapperBusinessLogo>
              )}
              <ContentInfo className='info'>
                <h2>{business?.name}</h2>
                {orderState?.options?.type === 1 ? (
                  <span>
                    <FiClock />
                    {convertHoursToMinutes(business?.delivery_time)}
                  </span>
                ) : (
                  <span>
                    <FiClock />
                    {convertHoursToMinutes(business?.pickup_time)}
                  </span>
                )}
              </ContentInfo>
            </BusinessInfo>

            {isClosed && (
              <BusinessTotal className='closed'>
                <p>{t('CLOSED', 'Closed')} {moment}</p>
              </BusinessTotal>
            )}

            {!isClosed && !isProducts && (
              <BusinessTotal>
                <p>{t('NO_PRODUCTS', 'No products')}</p>
              </BusinessTotal>
            )}

            <BusinessActions>
              {handleStoreRedirect && !isCartOnProductsList && (
                <span
                  ref={businessStore}
                  onClick={() => handleStoreRedirect(business?.slug)}
                >
                  <BiStoreAlt color='#CCC' />
                </span>
              )}
              {!isClosed && !!isProducts && (
                <>
                  {!isCartPending && (
                    <span
                      ref={businessDelete}
                      onClick={() => handleClearProducts()}
                    >
                      <VscTrash color='#63D0DF' />
                    </span>
                  )}
                  <span>
                    <IosArrowDown color='#003C4A' className={`${setRotate}`} />
                  </span>
                </>
              )}
            </BusinessActions>
          </Accordion>
        )}

        <AccordionContent
          ref={content}
          style={{ minHeight: `${setHeight}`, maxHeight: !setActive && '0px' }}
        >
          {props.children}
        </AccordionContent>
      </AccordionSection>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
