import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  Option
} from './styles'

export const OrdersOptionTabs = (props) => {
  const {
    ordersTotal,
    ordersOption,
    handleOrdersOption,
    onOrderDetailsRedirect,
    setOrderDetailOpen
  } = props
  const [, t] = useLanguage()

  const handleOption = (option) => {
    setOrderDetailOpen(false)
    onOrderDetailsRedirect({})
    handleOrdersOption(option)
  }
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      <Container>
        <h1>{t('ORDERS', 'Orders')}</h1>
        <Option
          active={ordersOption === 'activeOrders'}
          onClick={() => handleOption('activeOrders')}
        >
          <p>{t('ACTIVE_ORDERS', 'Active Orders')}</p>
          {ordersTotal > 0 && ordersOption === 'activeOrders' && (
            <span>{ordersTotal} {t('ORDERS', 'Orders')}</span>
          )}
        </Option>
        <Option
          active={ordersOption === 'previousOrders'}
          onClick={() => handleOption('previousOrders')}
        >
          <p>{t('PREVIOUS_ORDERS', 'Previous Orders')}</p>
          {ordersTotal > 0 && ordersOption === 'previousOrders' && (
            <span>{ordersTotal} {t('ORDERS', 'Orders')}</span>
          )}
        </Option>
        <Option
          active={ordersOption === 'preOrders'}
          onClick={() => handleOption('preOrders')}
        >
          <p>{t('PREORDERS', 'Preorders')}</p>
          {ordersTotal > 0 && ordersOption === 'preOrders' && (
            <span>{ordersTotal} {t('ORDERS', 'Orders')}</span>
          )}
        </Option>
      </Container>
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
