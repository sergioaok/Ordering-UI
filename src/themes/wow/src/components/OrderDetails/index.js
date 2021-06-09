import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { useTheme } from 'styled-components'
import FaPhoneAlt from '@meronex/icons/fa/FaPhoneAlt'
import BisMessageRounded from '@meronex/icons/bi/BisMessageRounded'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BisCheckCircle from '@meronex/icons/bi/BisCheckCircle'
import MdcCheckboxBlankCircleOutline from '@meronex/icons/mdc/MdcCheckboxBlankCircleOutline'
import IosCash from '@meronex/icons/ios/IosCash'
import IosCard from '@meronex/icons/ios/IosCard'
import FaStripe from '@meronex/icons/fa/FaStripe'
import FaCcStripe from '@meronex/icons/fa/FaCcStripe'
import FaStripeS from '@meronex/icons/fa/FaStripeS'
import GrStripe from '@meronex/icons/gr/GrStripe'
import EnPaypal from '@meronex/icons/en/EnPaypal'
import {
  OrderDetails as OrderDetailsController,
  GoogleMapsMap,
  useUtils,
  useConfig,
  useLanguage
} from 'ordering-components'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../../../../../components/Modal'
import { Messages } from '../../../../../components/Messages'

import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { CompletedOrder } from '../CompletedOrder'
import { PreorderConfirm } from '../PreorderConfirm'

import {
  Container,
  Map,
  OrderDetailContent,
  LeftContent,
  RightContent,
  LogoWrapper,
  OrderBusiness,
  BusinessInfo,
  BusinessLogo,
  BusinessAction,
  MessagesIcon,
  ExclamationWrapper,
  OrderStatus,
  StatusItem,
  Line,
  EstimatedTime,
  OrderProgressBar,
  ProgressItem,
  BusinessGeneralInfo,
  OrderDeliveryTimeContainer,
  CustomerInfo,
  OrderPaymentMethod
} from './styles'

export const OrderDetailsUI = (props) => {
  const {
    googleMapsControls,
    driverLocation,
    messages,
    setMessages,
    readMessages,
    messagesReadList,
    onClose,
    handleOrdersOption
  } = props
  const { order, loading, error } = props.order

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
  const theme = useTheme()

  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [orderStatus, setOrderStatus] = useState('pending')
  const [openModal, setOpenModal] = useState({ completed: false, preorder: false })

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

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

  const getEstimatedTime = (order) => {
    const deliveryDateTime = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'YYYY-MM-DD HH:mm:ss' })
      : parseDate(order?.delivery_datetime, { utc: false, outputFormat: 'YYYY-MM-DD HH:mm:ss' })
    let _deliveryMin
    if (order?.delivery_type === 1) {
      _deliveryMin = order?.business?.delivery_time
    } else {
      _deliveryMin = order?.business?.pickup_time
    }
    let deliveryMin
    if (!_deliveryMin) {
      deliveryMin = 0
    } else {
      const [hour, minute] = _deliveryMin.split(':')
      deliveryMin = (parseInt(hour, 10) * 60) + parseInt(minute, 10)
    }

    const preparedIn = order?.prepared_in ? order?.prepared_in : 0
    const deliverdIn = order?.deliverd_in ? order?.deliverd_in : 0
    const totalMin = deliveryMin + preparedIn + deliverdIn
    const result = moment(deliveryDateTime).add(totalMin, 'minutes').format('YYYY-MM-DD HH:mm:ss')

    return (parseDate(result, { utc: false }))
  }

  const getPayIcon = (method) => {
    switch (method) {
      case 1:
        return <IosCash />
      case 22:
        return <FaStripe />
      case 28:
        return <FaCcStripe />
      case 31:
        return <FaStripeS />
      case 32:
        return <GrStripe />
      case 3:
        return <EnPaypal />
      default:
        return <IosCard />
    }
  }

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

  useEffect(() => {
    if (loading) return
    if (order?.status === 0 || order?.status === 13) {
      setOrderStatus('pending')
    } else if ([3, 4, 7, 8, 9, 14, 18, 19, 20, 21].includes(order?.status)) {
      setOrderStatus('inProgress')
    } else if ([1, 11, 15].includes(order?.status)) {
      setOrderStatus('completed')
    } else {
      setOrderStatus('rejected')
    }
  }, [order?.status])

  useEffect(() => {
    if ([1, 11, 15].includes(order?.status)) {
      handleOrdersOption('previousOrders')
      setOpenModal({
        ...openModal,
        completed: true
      })
    }

    if (order?.status === 13) {
      handleOrdersOption('preOrders')
      setOpenModal({
        ...openModal,
        preorder: true
      })
    }
  }, [order?.status])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        {order && Object.keys(order).length > 0 && (
          <>
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
            <OrderDetailContent>
              <LeftContent>
                <EstimatedTime>
                  <p>{t('ESTIMATED_TIME', 'Estimated delivery time')}</p>
                  <p>{getEstimatedTime(order)}</p>
                </EstimatedTime>
                <OrderProgressBar>
                  <ProgressItem active={orderStatus !== 'rejected'} />
                  <ProgressItem active={orderStatus !== 'rejected' && (orderStatus === 'inPrgress' || orderStatus === 'completed')} />
                  <ProgressItem active={orderStatus !== 'rejected' && orderStatus === 'completed'} />
                </OrderProgressBar>
                <OrderStatus>
                  {orderStatus === 'rejected' ? (
                    <StatusItem active>
                      <BisCheckCircle />
                      <span>{t('REJECTED', 'Rejected')}</span>
                    </StatusItem>
                  ) : (
                    <>
                      <StatusItem
                        active
                      >
                        <BisCheckCircle />
                        <span>{t('PENDING', 'Pending')}</span>
                      </StatusItem>
                      <Line />
                      <StatusItem
                        active={orderStatus === 'inPrgress' || orderStatus === 'completed'}
                      >
                        {orderStatus === 'inPrgress' || orderStatus === 'completed' ? (
                          <BisCheckCircle />
                        ) : (
                          <MdcCheckboxBlankCircleOutline />
                        )}
                        <span>{t('IN_PROGRESS', 'In progress')}</span>
                      </StatusItem>
                      <Line />
                      <StatusItem
                        active={orderStatus === 'completed'}
                      >
                        {orderStatus === 'completed' ? (
                          <BisCheckCircle />
                        ) : (
                          <MdcCheckboxBlankCircleOutline />
                        )}
                        <span>{t('COMPLETED', 'Completed')}</span>
                      </StatusItem>
                    </>
                  )}
                </OrderStatus>
                <OrderBusiness>
                  <BusinessGeneralInfo>
                    <LogoWrapper>
                      <BusinessLogo bgimage={order?.business?.logo || theme.images?.dummies?.businessLogo} />
                    </LogoWrapper>
                    <BusinessInfo>
                      <h1>{order?.business?.name}</h1>
                      <p>{order?.business?.address}</p>
                    </BusinessInfo>
                  </BusinessGeneralInfo>
                  <BusinessAction>
                    {order?.business?.phone && (
                      <span
                        onClick={() => window.open(`tel:${order.business.phone}`)}
                      >
                        <FaPhoneAlt />
                      </span>
                    )}
                    <MessagesIcon onClick={() => handleOpenMessages({ driver: false, business: true })}>
                      {order?.unread_count > 0 && unreadAlert.business && (
                        <ExclamationWrapper>
                          <AiFillExclamationCircle />
                        </ExclamationWrapper>
                      )}
                      <BisMessageRounded />
                    </MessagesIcon>
                  </BusinessAction>
                </OrderBusiness>
              </LeftContent>
              <RightContent>
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

                <Button
                  color='primary'
                  outline
                  onClick={() => onClose()}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              </RightContent>
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
            </OrderDetailContent>
          </>
        )}
        {loading && !error && (
          <>
            <Map>
              <Skeleton height={200} />
            </Map>
            <OrderDetailContent>
              <LeftContent>
                <Skeleton height={30} />
                <Skeleton height={40} />
                <Skeleton count={3} height={30} />
                <Skeleton height={80} />
              </LeftContent>
              <RightContent>
                <Skeleton height={40} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={40} />
                <Skeleton height={50} />
              </RightContent>
            </OrderDetailContent>
          </>
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
              onClickButton={onClose}
            />
          )
        )}
        <Modal
          open={openModal.completed}
          onClose={() => setOpenModal({ ...openModal, completed: false })}
          padding='0'
          width='55%'
        >
          <CompletedOrder
            order={order}
            getPayIcon={getPayIcon}
            onClose={() => setOpenModal({ ...openModal, completed: false })}
          />
        </Modal>
        <Modal
          open={openModal.preorder}
          onClose={() => setOpenModal({ ...openModal, preorder: false })}
          width='55%'
        >
          <PreorderConfirm
            onClose={() => setOpenModal({ ...openModal, preorder: false })}
          />
        </Modal>
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

export const OrderDetails = (props) => {
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
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
