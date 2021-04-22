import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  OpenOrder,
  Content,
  Price,
  Logo,
  Card,
  Map,
  Reorder,
  BusinessInformation
} from './styles'
import { OrdersContainer } from '../OrdersOption/styles'

import { AutoScroll } from '../AutoScroll'
import { Tabs } from '../../styles/Tabs'
import { Button } from '../../styles/Buttons'
import { getGoogleMapImage } from '../../../../../utils'

export const HorizontalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onOrderClick,
    loadMoreOrders,
    getOrderStatus,
    isBusinessList,
    handleReorder
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice, parseDate }] = useUtils()

  const Orders = () => {
    return (
      <>
        {orders.map(order => (
          <Card key={order.id} id='order-card' isBusinessList={isBusinessList} onClick={() => isBusinessList && onOrderClick({ page: 'order_detail', params: { orderId: order?.uuid } })}>
            {(configs?.google_maps_api_key?.value || isBusinessList) && (
              <Map isBusinessList={isBusinessList}>
                <img
                  src={isBusinessList ? (order?.business?.header || order?.business?.logo || theme.images?.dummies?.businessLogo) : getGoogleMapImage(order?.business?.location, configs?.google_maps_api_key?.value)}
                  alt={isBusinessList ? 'business_header' : 'google-maps-img'}
                  height={isBusinessList ? '200px' : '100px'}
                  width='400px'
                />
              </Map>
            )}
            <Content>
              {(order.business?.logo || theme.images?.dummies?.businessLogo) && !isBusinessList && (
                <Logo>
                  <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='75px' height='75px' />
                </Logo>
              )}
              <BusinessInformation activeOrders>
                <h2>{order.business?.name}</h2>
                <p name='order_number'>{t('ORDER_NUMBER', 'Order No.')} {order.id}</p>
                <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
              </BusinessInformation>
              <Price isBusinessList={isBusinessList}>
                <h2>
                  {parsePrice(order?.summary?.total || order?.total)}
                </h2>
                <p>{getOrderStatus(order.status)?.value}</p>
                {isBusinessList && (
                  <Reorder>
                    <Button color='primary' onClick={() => handleReorder(order.id)}>
                      {t('REORDER', 'Reorder')}
                    </Button>
                  </Reorder>
                )}
              </Price>
            </Content>
            {!isBusinessList && (
              <OpenOrder isBusinessList={isBusinessList}>
                <Button color='primary' onClick={() => onOrderClick({ page: 'order_detail', params: { orderId: order?.uuid } })}>
                  {t('OPEN_ORDER', 'Open order')}
                </Button>
              </OpenOrder>
            )}
          </Card>
        ))}
        {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
          <Card flex nobg>
            <Button
              className='load-orders'
              bgtransparent
              color='primary'
              outline
              onClick={loadMoreOrders}
            >
              {t('LOAD_MORE_ORDERS', 'Load more orders')}
            </Button>
          </Card>
        )}
      </>
    )
  }

  return (
    <OrdersContainer activeOrders ordersLength={orders?.length <= 1} id='orders-container' isBusinessList={isBusinessList}>
      {!isBusinessList ? (
        <Tabs>
          <AutoScroll>
            <Orders />
          </AutoScroll>
        </Tabs>
      ) : <Orders />}
    </OrdersContainer>
  )
}
