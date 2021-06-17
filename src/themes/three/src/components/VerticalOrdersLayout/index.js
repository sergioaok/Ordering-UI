import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import {
  SingleCard,
  OrderPastContent,
  PastHeaderImage,
  WrapperBusinessTitle,
  Reorder,
  WrappButton,
  BusinessInformation
} from './styles'

import { OrdersContainer } from '../OrdersOption/styles'
import { Modal } from '../../../../../components/Modal'
import { ReviewOrder } from '../../../../../components/ReviewOrder'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onRedirectPage,
    loadMoreOrders,
    getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [isReviewedOrderIds, setIsReviewedOrderIds] = useState([])
  const [orderSelected, setOrderSelected] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenReview = (order) => {
    setOrderSelected(order)
    setOpenModal(true)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card'>
            <OrderPastContent>
              {(order.business?.header || theme.images?.dummies?.businessLogo) && (
                <PastHeaderImage>
                  <img src={order.business?.header || theme.images?.dummies?.businessLogo} alt='business-logo' loading='lazy' />
                </PastHeaderImage>
              )}
              <BusinessInformation>
                <WrapperBusinessTitle>
                  {order.business?.name}
                </WrapperBusinessTitle>
                <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                <p
                  name='view_order'
                  onClick={() => onRedirectPage({ page: 'order_detail', params: { orderId: order.uuid } })}
                >
                  {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}
                </p>
              </BusinessInformation>
            </OrderPastContent>
            <Reorder>
              <p>{getOrderStatus(order.status)?.value}</p>
              {(
                parseInt(order?.status) === 1 ||
                parseInt(order?.status) === 2 ||
                parseInt(order?.status) === 5 ||
                parseInt(order?.status) === 6 ||
                parseInt(order?.status) === 10 ||
                parseInt(order?.status) === 11 ||
                parseInt(order?.status) === 12
              ) && !order.review && !isReviewedOrderIds.includes(order?.id) && (
                <Button
                  rectangle
                  className='review'
                  onClick={() => handleOpenReview(order)}
                >
                  {t('REVIEW_ORDER', 'Review Order')}
                </Button>
              )}
              <Button
                rectangle
                color='primary'
                onClick={() => handleReorder(order.id)}
                disabled={reorderLoading}
              >
                {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
              </Button>
            </Reorder>
          </SingleCard>
        ))}
      </OrdersContainer>
      {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
        <WrappButton>
          <Button
            rectangle
            outline
            color='primary'
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </Button>
        </WrappButton>
      )}
      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title={orderSelected ? `${t('WRITE_A_REVIEW', 'Write a Review')} #${orderSelected?.id}` : t('LOADING', 'Loading...')}
        >
          <ReviewOrder
            order={orderSelected}
            closeReviewOrder={() => setOpenModal(false)}
            setIsReviewed={() => setIsReviewedOrderIds([...isReviewedOrderIds, orderSelected.id])}
          />
        </Modal>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
