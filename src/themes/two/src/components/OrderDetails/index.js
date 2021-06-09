import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useUtils,
  useConfig,
  GoogleMapsMap
} from 'ordering-components'

import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import BsChevronLeft from '@meronex/icons/bs/BsChevronLeft'
import MdcSilverwareForkKnife from '@meronex/icons/mdc/MdcSilverwareForkKnife'
import MdHome from '@meronex/icons/md/MdHome'
import BisCar from '@meronex/icons/bi/BisCar'
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'
import BsDot from '@meronex/icons/bs/BsDot'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../ReviewOrder'
import { ProductShare } from '../ProductShare'
import moment from 'moment'

import {
  Container,
  WrapperContainer,
  Content,
  OrderBusiness,
  BusinessInfo,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderCustomer,
  Map,
  OrderBill,
  ReviewsAction,
  SkeletonBlockWrapp,
  SkeletonBlock,
  ShareOrder,
  Step,
  WrapBack
} from './styles'
import { useTheme } from 'styled-components'

const OrderDetailsUI = (props) => {
  const {
    handleOrderRedirect,
    googleMapsControls,
    driverLocation,
    urlToShare,
    messages,
    setMessages,
    readMessages,
    messagesReadList
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [isOrderDetail, setIsOrderDetail] = useState(false)
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [openReview, setOpenReview] = useState(false)
  const [isReviewed, setIsReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [openProductShare, setOpenProductShare] = useState(false)
  const { order, loading, error } = props.order

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', 'Pending'), slug: 'PENDING', percentage: 33.33 },
      { key: 1, value: t('COMPLETED', 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 4, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 5, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 6, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 7, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 8, value: t('ACCEPTED', 'Accepted'), slug: 'ACCEPTED', percentage: 66.66 },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 66.66 },
      { key: 10, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 11, value: t('COMPLETED', 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 12, value: t('REJECTED', 'Rejected'), slug: 'REJECTED', percentage: 0 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const handleOpenMessages = (data) => {
    setOpenMessages(data)
    readMessages()
    if (order?.unread_count > 0) {
      data.business
        ? setUnreadAlert({ ...unreadAlert, business: false })
        : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }

  const unreadMessages = () => {
    const length = messages?.messages.length
    const unreadLength = order?.unread_count
    const unreadedMessages = messages.messages.slice(length - unreadLength, length)
    const business = unreadedMessages.some(message => message?.can_see?.includes(2))
    const driver = unreadedMessages.some(message => message?.can_see?.includes(4))
    setUnreadAlert({ business, driver })
  }

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

  useEffect(() => {
    if (driverLocation) {
      locations[0] = driverLocation
    }
  }, [driverLocation])

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  useEffect(() => {
    if (messagesReadList?.length) {
      openMessages.business ? setUnreadAlert({ ...unreadAlert, business: false }) : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }, [messagesReadList])

  return (
    <Container>
      {!openProductShare && (
        <>
          {order && Object.keys(order).length > 0 && (
            <WrapperContainer>
              <Content className='order-content'>
                {isOrderDetail && (
                  <WrapBack onClick={() => setIsOrderDetail(false)}>
                    <BsChevronLeft />
                    {t('ORDER_DETAIL', 'Order Details')}
                  </WrapBack>
                )}
                <OrderInfo>
                  <OrderData>
                    <h1>
                      <span>{getOrderStatus(order?.status)?.value}</span>
                      <span onClick={() => handleOpenMessages({ driver: false, business: true })}>
                        {t('ORDER_CHAT', 'Order Chat')}
                      </span>
                    </h1>
                    <p className='date'>
                      <span>Order Id: </span>
                      <span>
                        {order?.id}
                      </span>
                      <br />
                      <span>
                        {
                          order?.delivery_datetime_utc
                            ? parseDate(order?.delivery_datetime_utc)
                            : parseDate(order?.delivery_datetime, { utc: false })
                        }
                      </span>
                    </p>

                    <div className='order-data-section'>
                      <dl>
                        <dt>{t('FROM', 'from')}:</dt>
                        <dd>
                          <p>{order?.business?.name}</p>
                          <p>{order?.business?.address}</p>
                          <p>{order?.business?.phone} <BsDot/> {order?.business?.cellphone}</p>
                          <p>{order?.business?.email}</p>
                        </dd>
                      </dl>

                      <dl>
                        <dt>{t('TO', 'to')}:</dt>
                        <dd>
                          <p>
                            {order?.customer?.name}&nbsp;
                            {order?.customer?.middle}&nbsp;
                            {order?.customer?.lastname}&nbsp;
                            {order?.customer?.second_lastname}
                          </p>
                          <p>
                            {order?.customer?.address}&nbsp;
                            {order?.customer?.zipcode}
                          </p>
                          <p>{order?.customer?.cellphone}</p>
                          <p>{order?.customer?.email}</p>
                        </dd>
                      </dl>
                    </div>

                    {!isOrderDetail && (
                      <StatusBar percentage={getOrderStatus(order?.status)?.percentage}>
                        <div>
                          <div><Step active={getOrderStatus(order?.status)?.percentage >= 33.33}><MdcSilverwareForkKnife /></Step></div>
                          <div><Step active={getOrderStatus(order?.status)?.percentage >= 66.66}><BisCar /></Step></div>
                          <div><Step active={getOrderStatus(order?.status)?.percentage === 100}><MdHome /></Step></div>
                        </div>
                      </StatusBar>
                    )}
                  </OrderData>
                  {(
                    parseInt(order?.status) === 1 ||
                    parseInt(order?.status) === 2 ||
                    parseInt(order?.status) === 5 ||
                    parseInt(order?.status) === 6 ||
                    parseInt(order?.status) === 10 ||
                    parseInt(order?.status) === 11 ||
                    parseInt(order?.status) === 12
                  ) && !order.review && !isReviewed && (
                    <ReviewsAction onClick={() => setOpenReview(true)}>
                      <div>
                        <p>{t('RATE_YOUR_DELIVERY', 'Rate your delivery')}</p>
                        <div>
                          {[...Array(5).keys()].map(i => (
                            <AiOutlineStar key={i} />
                          ))}
                        </div>
                      </div>
                      <BsChevronRight />
                    </ReviewsAction>
                  )}
                </OrderInfo>

                <OrderBusiness>
                  <BusinessInfo>
                    <h1 onClick={() => setIsOrderDetail(true)}>
                      <span>{order?.business?.name}</span>
                    </h1>
                    <p>{order.products.length} {t('ITEM', 'Item')}</p>
                    {order?.products?.length && order?.products.map(product => (
                      <ProductItemAccordion
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </BusinessInfo>
                </OrderBusiness>
                {!isOrderDetail && (
                  <OrderCustomer>
                    <h1>{t('DELIVERY_ADDRESS', 'Delivery Address')}</h1>
                    <p>{order?.customer?.address}</p>
                  </OrderCustomer>
                )}

                {isOrderDetail && (
                  <OrderBill>
                    <table>
                      <tbody>
                        <tr>
                          <td>{t('SUBTOTAL', 'Subtotal')}</td>
                          <td>{parsePrice(order?.summary?.subtotal || order?.subtotal)}</td>
                        </tr>
                        <tr>
                          <td>
                            {order?.tax_type === 1
                              ? t('TAX_INCLUDED', 'Tax (included)')
                              : t('TAX', 'Tax')}
                            <span>{`(${parseNumber(order?.tax)}%)`}</span>
                          </td>
                          <td>{parsePrice(order?.summary?.tax || order?.totalTax)}</td>
                        </tr>
                        {(order?.summary?.delivery_price > 0 || order?.deliveryFee > 0) && (
                          <tr>
                            <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                            <td>{parsePrice(order?.summary?.delivery_price || order?.deliveryFee)}</td>
                          </tr>
                        )}
                        <tr>
                          <td>
                            {t('DRIVER_TIP', 'Driver tip')}
                            {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) &&
                              parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                              !!!parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                            (
                              <span>{`(${parseNumber(order?.driver_tip)}%)`}</span>
                            )}
                          </td>
                          <td>{parsePrice(order?.summary?.driver_tip || order?.totalDriverTip)}</td>
                        </tr>
                        <tr>
                          <td>
                            {t('SERVICE_FEE', 'Service Fee')}
                            <span>{`(${parseNumber(order?.service_fee)}%)`}</span>
                          </td>
                          <td>{parsePrice(order?.summary?.service_fee || order?.serviceFee || 0)}</td>
                        </tr>
                        {(order?.summary?.discount > 0 || order?.discount > 0) && (
                          <tr>
                            {order?.offer_type === 1 ? (
                              <td>
                                {t('DISCOUNT', 'Discount')}
                                <span>{`(${parseNumber(order?.offer_rate)}%)`}</span>
                              </td>
                            ) : (
                              <td>{t('DISCOUNT', 'Discount')}</td>
                            )}
                            <td>- {parsePrice(order?.summary?.discount || order?.discount)}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <table className='total'>
                      <tbody>
                        <tr>
                          <td>{t('TOTAL', 'Total')}</td>
                          <td>{parsePrice(order?.summary?.total || order?.total)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </OrderBill>
                )}

                {parseInt(configs?.guest_uuid_access?.value) === 1 && (moment().diff(moment(order?.delivery_datetime), 'days') <= parseInt(configs?.guest_uuid_max_days?.value)) && order?.hash_key && (
                  <ShareOrder onClick={() => setOpenProductShare(true)}>
                    <div>
                      <img src={theme.images.general.gift} width='40' height='40' alt='gift' />
                      <p>
                        <span>{t('SHARE_WITH_FRIENDS', 'Share with friends')}</span>
                      </p>
                    </div>
                    <span>
                      <BsChevronRight />
                    </span>
                  </ShareOrder>
                )}

              </Content>

              {order?.driver && (
                <>
                  {order?.driver?.location && parseInt(order?.status) === 9 && (
                    <Map>
                      <GoogleMapsMap
                        apiKey={configs?.google_maps_api_key?.value}
                        location={order?.driver?.location}
                        locations={locations}
                        mapControls={googleMapsControls}
                      />
                    </Map>
                  )}
                </>
              )}
            </WrapperContainer>
          )}

          {loading && !error && (
            <WrapperContainer isLoading className='skeleton-loading'>
              <Content className='order-content'>
                <SkeletonBlockWrapp>
                  <SkeletonBlock width={80}>
                    <Skeleton height={200} />
                    <Skeleton height={170} />
                    <Skeleton height={150} />
                    <Skeleton height={120} />
                  </SkeletonBlock>
                </SkeletonBlockWrapp>
              </Content>
            </WrapperContainer>
          )}

          {!loading && error && (
            error.includes('ERROR_ACCESS_EXPIRED') ? (
              <NotFoundSource
                content={t(error[0], 'Sorry, the order has expired.')}
              />
            ) : (
              <NotFoundSource
                content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
                btnTitle={t('ORDERS_REDIRECT', 'Go to Orders')}
                onClickButton={handleOrderRedirect}
              />
            )
          )}

          {(openMessages.driver || openMessages.business) && (
            <Modal
              open={openMessages.driver || openMessages.business}
              onClose={() => setOpenMessages({ driver: false, business: false })}
              padding='0'
              width='70%'
            >
              <Messages
                orderId={order?.id}
                order={order}
                business={openMessages.business}
                driver={openMessages.driver}
                messages={messages}
                setMessages={setMessages}
                readMessages={readMessages}
              />
            </Modal>
          )}

          {openReview && (
            <Modal
              open={openReview}
              onClose={() => setOpenReview(false)}
              title={order ? `${t('WRITE_A_REVIEW', 'Write a Review')} #${order?.id}` : t('LOADING', 'Loading...')}
            >
              <ReviewOrder order={order} closeReviewOrder={() => setOpenReview(false)} setIsReviewed={setIsReviewed} />
            </Modal>
          )}
        </>
      )}

      {openProductShare && (
        <ProductShare
          defaultUrl={urlToShare(order?.hash_key)}
          onCancel={() => setOpenProductShare(false)}
        />
      )}
    </Container>
  )
}

export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
