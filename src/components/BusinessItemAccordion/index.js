import React, { useState, useRef, useEffect } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { useOrder } from 'ordering-components'

import { formatPrice } from '../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperBusinessLogo,
  BusinessLogo,
  ContentInfo
} from './styles'

export const BusinessItemAccordion = (props) => {
  const {
    isClosed,
    moment,
    business,
    orderTotal,
    isProducts,
    isValidProducts
  } = props

  const [orderState] = useOrder()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    if (isClosed || !isProducts) return
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : '500px'
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength === 1) {
      setActiveState('active')
      setHeightState('500px')
      setRotateState('accordion__icon rotate')
    }
  }, [orderState?.carts])

  return (
    <AccordionSection isClosed={isClosed}>
      <Accordion isClosed={isClosed} className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className='info'>
          {business?.logo && (
            <WrapperBusinessLogo>
              <BusinessLogo bgimage={business?.logo} />
            </WrapperBusinessLogo>
          )}
          <ContentInfo>
            <h1>{business?.name}</h1>
          </ContentInfo>
        </div>

        {isClosed && (
          <div className='total'>
            <p>Closed {moment}</p>
          </div>
        )}

        {!isClosed && !isProducts && (
          <div className='total'>
            <p>No Products</p>
          </div>
        )}

        {!isClosed && isProducts && (
          <div className='total'>
            {isValidProducts && <span>{formatPrice(orderTotal)}</span>}
            <p>
              <BiCaretDown className={`${setRotate}`} />
            </p>
          </div>
        )}
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {props.children}
      </AccordionContent>
    </AccordionSection>
  )
}
