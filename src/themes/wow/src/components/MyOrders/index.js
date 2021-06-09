import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage } from 'ordering-components'
import BiArrowBack from '@meronex/icons/bi/BiArrowBack'
import { OrdersOptionTabs } from '../OrdersOptionTabs'
import { OrdersOption } from '../OrdersOption'
import { OrderDetails } from '../OrderDetails'

import {
  Container,
  InnerContainer,
  LeftContent,
  BackButton,
  RightContent
} from './styles'

export const MyOrders = (props) => {
  const {
    orderId,
    onOrderDetailsRedirect
  } = props
  const history = useHistory()
  const [, t] = useLanguage()
  const [ordersTotal, setOrdersTotal] = useState(null)
  const [ordersOption, setOrdersOption] = useState('activeOrders')
  const [orderDetailOpen, setOrderDetailOpen] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)

  const handleOrdersOption = (option) => {
    setOrdersOption(option)
  }

  const handleOrderDetails = (orderId) => {
    onOrderDetailsRedirect({ orderId })
    setOrderDetailOpen(true)
    setOrderDetailId(orderId)
  }

  const handleCloseOrderDetails = () => {
    onOrderDetailsRedirect({})
    setOrderDetailOpen(false)
  }

  useEffect(() => {
    if (!orderId) return
    handleOrderDetails(orderId)
  }, [orderId])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <BackButton onClick={() => history.goBack()}>
          <BiArrowBack />
          <span>{t('BACK', 'Back')}</span>
        </BackButton>
        <InnerContainer>
          <LeftContent>
            <OrdersOptionTabs
              ordersTotal={ordersTotal}
              ordersOption={ordersOption}
              handleOrdersOption={handleOrdersOption}
              onOrderDetailsRedirect={onOrderDetailsRedirect}
              setOrderDetailOpen={setOrderDetailOpen}
            />
          </LeftContent>
          <RightContent>
            {!orderDetailOpen ? (
              <>
                {ordersOption === 'activeOrders' && (
                  <OrdersOption
                    {...props}
                    activeOrders
                    handleOrdersTotal={setOrdersTotal}
                    handleOrderDetails={handleOrderDetails}
                  />
                )}
                {ordersOption === 'previousOrders' && (
                  <OrdersOption
                    {...props}
                    previousOrders
                    handleOrdersTotal={setOrdersTotal}
                    handleOrderDetails={handleOrderDetails}
                  />
                )}
                {ordersOption === 'preOrders' && (
                  <OrdersOption
                    {...props}
                    preOrders
                    handleOrdersTotal={setOrdersTotal}
                    handleOrderDetails={handleOrderDetails}
                  />
                )}
              </>
            ) : (
              <OrderDetails
                orderId={orderDetailId}
                onClose={() => handleCloseOrderDetails()}
                handleOrdersOption={setOrdersOption}
              />
            )}

          </RightContent>
        </InnerContainer>
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
