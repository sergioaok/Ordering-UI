import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { AutoScroll } from '../AutoScroll'
import { OrdersOption } from '../OrdersOption'
import { OrderHelp } from '../OrderHelp'
import {
  Container,
  OrdersOptionTabsContainer,
  OptionInnerContainer,
  Tab
} from './styles'

export const WithMyOrders = (props) => {
  const [, t] = useLanguage()
  const [ordersOption, setOrdersOption] = useState('activeOrders')
  const [selectedHelpOrder, setSelectedHelpOrder] = useState(null)
  const [isOrderHelpView, setIsOrderHelpView] = useState(false)
  const handleOrderHelp = (order) => {
    setSelectedHelpOrder(order)
    setIsOrderHelpView(true)
  }
  return (
    <Container>
      {!isOrderHelpView ? (
        <>
          <OrdersOptionTabsContainer>
            <OptionInnerContainer>
              <AutoScroll>
                <Tab
                  active={ordersOption === 'activeOrders'}
                  onClick={() => setOrdersOption('activeOrders')}
                >
                  {t('ACTIVE_ORDERS', 'Active Orders')}
                </Tab>
                <Tab
                  active={ordersOption === 'previousOrders'}
                  onClick={() => setOrdersOption('previousOrders')}
                >
                  {t('PREVIOUS_ORDERS', 'Previous Orders')}
                </Tab>
                <Tab
                  active={ordersOption === 'preOrders'}
                  onClick={() => setOrdersOption('preOrders')}
                >
                  {t('PREORDERS', 'Preorders')}
                </Tab>
              </AutoScroll>
            </OptionInnerContainer>
          </OrdersOptionTabsContainer>
          {ordersOption === 'activeOrders' && (
            <OrdersOption
              activeOrders
              isProfile
              handleOrderHelp={handleOrderHelp}
            />
          )}
          {ordersOption === 'previousOrders' && (
            <OrdersOption
              previousOrders
              isProfile
              handleOrderHelp={handleOrderHelp}
            />
          )}
          {ordersOption === 'preOrders' && (
            <OrdersOption
              preOrders
              isProfile
              handleOrderHelp={handleOrderHelp}
            />
          )}
        </>
      ) : (
        <OrderHelp
          order={selectedHelpOrder}
          handleCancel={() => setIsOrderHelpView(false)}
        />
      )}
    </Container>
  )
}
