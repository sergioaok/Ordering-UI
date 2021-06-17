import React, { useEffect, useRef } from 'react'
import RiShoppingBagFill from '@meronex/icons/ri/RiShoppingBagFill'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow
} from './styles'

import { useOrder, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'
import { CartContent } from '../CartContent'

export const CartPopover = (props) => {
  const { open, auth, location } = props
  const [orderState] = useOrder()
  const theme = useTheme()
  const [events] = useEvent()

  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: theme?.rtl ? 'bottom' : 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, orderState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      events.emit('cart_popover_closed')
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  useEffect(() => {
    props.onClose()
  }, [auth])

  useEffect(() => {
    if (location && location.pathname.includes('/checkout/')) {
      props.onClose && props.onClose()
    }
  }, [location])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <div style={{ overflow: 'hidden' }}>
        <HeaderItem ref={referenceElement} onClick={props.onClick} name='cart-popover'>
          <RiShoppingBagFill />
          {props.carts?.length > 0 && <p>{props.carts?.length}</p>}
        </HeaderItem>
        <PopoverBody className='cart-popover' ref={popperElement} style={popStyle} {...attributes.popper}>
          <CartContent
            isCartPopover
            carts={props.carts}
            isOrderStateCarts={!!orderState.carts}
            onClose={props.onClose}
          />
          <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
        </PopoverBody>
      </div>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
