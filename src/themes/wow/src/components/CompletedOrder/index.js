import React, { useState } from 'react'
import {
  useLanguage,
  useUtils
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { ReviewOrder } from '../ReviewOrder'
import {
  Container,
  Header,
  OrderContent,
  OrderDeliveryTimeContainer,
  CustomerInfo,
  OrderPaymentMethod,
  ActionContainer,
  ReviewContainer,
  StarRating,
  StarRatingLower,
  StarRatingUpper
} from './styles'

export const CompletedOrder = (props) => {
  const {
    order,
    getPayIcon,
    onClose
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate }] = useUtils()
  const [openReview, setOpenReview] = useState(false)
  const [isReviewed, setIsReviewed] = useState(false)

  const getReviewValue = (review) => {
    if (review) {
      return parseInt((review?.delivery + review?.package + review?.quality + review?.service) / 4 / 5 * 100) + '%'
    } else {
      return '0%'
    }
  }
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <Header>
          <h1>{t('YOUR_ORDER_DELIVERED', 'Your order has been delivered Enjoy it!')}</h1>
          <img src={theme.images?.general?.delivered} alt='delivered' />
        </Header>
        <OrderContent>
          {order?.products?.length && order?.products.map(product => (
            <ProductItemAccordion
              key={product.id}
              product={product}
              isOrderDetail
            />
          ))}
          <OrderDeliveryTimeContainer>
            <p>{t('ORDER', 'Order')} #{order?.id}</p>
            <p className='date'>
              {
                order?.delivery_datetime_utc
                  ? parseDate(order?.delivery_datetime_utc)
                  : parseDate(order?.delivery_datetime, { utc: false })
              }
            </p>
          </OrderDeliveryTimeContainer>
          {!(order?.review || isReviewed) && (
            <ReviewContainer
              onClick={() => !order?.review && setOpenReview(true)}
            >
              <p>{t('REVIEW_ORDER', 'Review your Order')}</p>
              <StarRating>
                <StarRatingUpper style={{ width: getReviewValue(order?.review) }}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </StarRatingUpper>
                <StarRatingLower>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </StarRatingLower>
              </StarRating>
            </ReviewContainer>
          )}
          <CustomerInfo>
            <h2>{t('DELIVERY_TO', 'Delivery to')}</h2>
            <p>{order?.customer?.address}</p>
          </CustomerInfo>
          <OrderPaymentMethod>
            <h2>{t('PAYMENT_METHODS', 'Payment Methods')}</h2>
            <div>
              {getPayIcon(order?.paymethod?.id)}
              <span>{order?.paymethod?.name}</span>
            </div>
          </OrderPaymentMethod>
          <ActionContainer>
            <Button
              color='primary'
              onClick={() => onClose()}
            >
              {t('COMPLETE', 'Complete')}
            </Button>
            <Button
              color='primary'
              outline
            >
              {t('ANY_PROBLEMS', 'Did you have any problems?')}
            </Button>
          </ActionContainer>
        </OrderContent>
        {openReview && (
          <Modal
            open={openReview}
            onClose={() => setOpenReview(false)}
            padding='0'
          >
            <ReviewOrder
              order={order}
              closeReviewOrder={() => setOpenReview(false)}
              setIsReviewed={setIsReviewed}
            />
          </Modal>
        )}
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
