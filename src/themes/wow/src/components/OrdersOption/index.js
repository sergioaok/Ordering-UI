import React, { useState, useEffect } from 'react'
import { OrderList as OrderListController, useLanguage, useEvent, useOrder } from 'ordering-components'
import { useTheme } from 'styled-components'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Button } from '../../styles/Buttons'
import { ActiveOrdersLayout } from '../ActiveOrdersLayout'
import { PreviousOrdersLayout } from '../PreviousOrdersLayout'
import { PreOrdersLayout } from '../PreOrdersLayout'
import {
  Container,
  NotFoundContent
} from './styles'

export const OrdersOptionUI = (props) => {
  const {
    isProfile,
    activeOrders,
    previousOrders,
    preOrders,
    orderList,
    pagination,
    isBusinessesPage,
    loadMoreOrders,
    customArray,
    onRedirectPage,
    businessesIds,
    handleOrdersTotal,
    handleOrderDetails,
    handleOrderHelp
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()
  const theme = useTheme()
  const [, { reorder }] = useOrder()
  const { loading, orders: values } = orderList
  const orders = customArray || values

  const [ordersSorted, setOrdersSorted] = useState([])
  const [reorderLoading, setReorderLoading] = useState(false)

  const imageFails = activeOrders
    ? theme.images?.general?.emptyActiveOrders
    : preOrders
      ? theme.images?.general?.emptyPreOrders
      : theme.images?.general?.emptyPastOrders

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', 'Pending') },
      { key: 1, value: t('COMPLETED', 'Completed') },
      { key: 2, value: t('REJECTED', 'Rejected') },
      { key: 3, value: t('DRIVER_IN_BUSINESS', 'Driver in business') },
      { key: 4, value: t('PREPARATION_COMPLETED', 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', 'Rejected by Driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)
    return objectStatus && objectStatus
  }

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: result.uuid } })
      }
    } catch (err) {
      setReorderLoading(false)
    }
  }
  useEffect(() => {
    const ordersSorted = orders.sort((a, b) => {
      if (activeOrders) {
        return new Date(b.created_at) - new Date(a.created_at)
      }
      return new Date(a.created_at) - new Date(b.created_at)
    })
    setOrdersSorted(ordersSorted)
  }, [orders])

  useEffect(() => {
    if (loading) return
    handleOrdersTotal && handleOrdersTotal(pagination?.total)
  }, [loading, pagination])

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
        {!loading && ordersSorted.length === 0 && (
          <NotFoundSource
            image={imageFails}
          >
            <NotFoundContent>
              <h2>{t('NO_ORDERS_YET', 'It seems you have no orders yet')}</h2>
              {!preOrders && (
                <p>{t('ORDERS_APPEAR_HERE', 'The orders you make will appear here')}</p>
              )}
              <Button
                color='primary'
                onClick={() => handleGoToPage({ page: 'search' })}
              >
                {t('MAKE_FIRST_ORDER', 'Make your first order')}
              </Button>
            </NotFoundContent>
          </NotFoundSource>
        )}
        {activeOrders && (
          <ActiveOrdersLayout
            isProfile={isProfile}
            isSkeleton={loading}
            businessesIds={businessesIds}
            orders={ordersSorted}
            pagination={pagination}
            handleOrderDetails={handleOrderDetails}
            loadMoreOrders={loadMoreOrders}
            isBusinessesPage={isBusinessesPage}
            customArray={customArray}
            getOrderStatus={getOrderStatus}
            handleOrderHelp={handleOrderHelp}
          />
        )}
        {previousOrders && (
          <PreviousOrdersLayout
            isProfile={isProfile}
            isSkeleton={loading}
            businessesIds={businessesIds}
            orders={ordersSorted}
            pagination={pagination}
            onRedirectPage={onRedirectPage}
            loadMoreOrders={loadMoreOrders}
            isBusinessesPage={isBusinessesPage}
            reorderLoading={reorderLoading}
            customArray={customArray}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
            handleOrderDetails={handleOrderDetails}
            handleOrderHelp={handleOrderHelp}
          />
        )}
        {preOrders && (
          <PreOrdersLayout
            isProfile={isProfile}
            isSkeleton={loading}
            businessesIds={businessesIds}
            orders={ordersSorted}
            pagination={pagination}
            onRedirectPage={onRedirectPage}
            loadMoreOrders={loadMoreOrders}
            isBusinessesPage={isBusinessesPage}
            reorderLoading={reorderLoading}
            customArray={customArray}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
            handleOrderDetails={handleOrderDetails}
            handleOrderHelp={handleOrderHelp}
          />
        )}
      </Container>
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const OrdersOption = (props) => {
  const orderListProps = {
    ...props,
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders
      ? [0, 3, 4, 7, 8, 9]
      : props.preOrders
        ? [13]
        : [1, 2, 5, 6, 10, 11, 12],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  }

  return (
    <OrderListController {...orderListProps} />
  )
}
