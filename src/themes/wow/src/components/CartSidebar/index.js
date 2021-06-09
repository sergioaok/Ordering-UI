import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import FaShoppingBag from '@meronex/icons/fa/FaShoppingBag'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { CartContent } from '../CartContent'

import {
  Container,
  BackDropContainer,
  TopContainer,
  IconContent,
  SidebarContent,
  MenuClose,
  WrapCartContent
} from './styles'

export const CartSidebar = (props) => {
  const {
    carts,
    isOrderStateCarts
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('cartSidebar').style.width = value
      ? width > 489 ? '450px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('cartSidebar').style.width = '100vw'
      } else {
        document.getElementById('cartSidebar').style.width = '450px'
      }
    }
  }, [width])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <IconContent
          onClick={() => actionSidebar(true)}
        >
          <span>
            <FaShoppingBag />
            {carts?.length > 0 && <p>{props.carts?.length}</p>}
          </span>
        </IconContent>
        {isMenuOpen && (
          <BackDropContainer onClick={() => actionSidebar(false)} />
        )}
        <SidebarContent
          id='cartSidebar'
        >
          <TopContainer>
            <MenuClose
              aria-label='close'
              onClick={() => actionSidebar(false)}
            >
              <MdClose />
            </MenuClose>
            <IconContent>
              <span>
                <FaShoppingBag />
                {carts?.length > 0 && <p>{props.carts?.length}</p>}
              </span>
            </IconContent>
          </TopContainer>
          <h1>{t('CART', 'Cart')}</h1>
          <WrapCartContent>
            <CartContent
              carts={carts}
              isOrderStateCarts={isOrderStateCarts}
              onClose={() => actionSidebar(false)}
            />
          </WrapCartContent>
        </SidebarContent>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
