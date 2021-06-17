import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import IosCash from '@meronex/icons/ios/IosCash'
import IosCard from '@meronex/icons/ios/IosCard'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import FaStripe from '@meronex/icons/fa/FaStripe'
import FaCcStripe from '@meronex/icons/fa/FaCcStripe'
import FaStripeS from '@meronex/icons/fa/FaStripeS'
import GrStripe from '@meronex/icons/gr/GrStripe'
import EnPaypal from '@meronex/icons/en/EnPaypal'
import {
  PaymentOptions as PaymentOptionsController,
  useLanguage,
  useSession
} from 'ordering-components'

import { Modal } from '../Modal'
import { PaymentOptionCash } from '../PaymentOptionCash'
import { PaymentOptionStripe } from '../PaymentOptionStripe'
import { PaymentOptionPaypal } from '../PaymentOptionPaypal'
import { StripeElementsForm } from '../StripeElementsForm'
import { StripeRedirectForm } from '../StripeRedirectForm'
import { NotFoundSource } from '../NotFoundSource'

import { getIconCard } from '../../utils'

import {
  PaymentMethodsContainer,
  PaymentMethodsList,
  PayCard,
  PayCardSelected,
  CardItemContent
} from './styles'

const stripeOptions = ['stripe_direct', 'stripe', 'stripe_connect']
const stripeRedirectOptions = [
  { name: 'Bancontact', value: 'bancontact' },
  { name: 'Alipay', value: 'alipay' },
  { name: 'Giropay', value: 'giropay' },
  { name: 'iDEAL', value: 'ideal' }
]

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

const paypalBtnStyle = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  size: 'responsive'
}

const PaymentOptionsUI = (props) => {
  const {
    cart,
    errorCash,
    isLoading,
    isDisabled,
    paymethodData,
    paymethodsList,
    setPaymethodData,
    handleOrderRedirect,
    handlePaymethodClick,
    handlePaymethodDataChange,
    isCustomerMode,
    isOpenMethod
  } = props
  const [, t] = useLanguage()
  const [{ token }] = useSession()

  const paymethodSelected = props.paySelected || props.paymethodSelected

  const handlePaymentMethodClick = (paymethod) => {
    const isPopupMethod = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal'].includes(paymethod?.gateway)
    handlePaymethodClick(paymethod, isPopupMethod)
  }

  useEffect(() => {
    if (paymethodsList.paymethods.length === 1) {
      handlePaymethodClick && handlePaymethodClick(paymethodsList.paymethods[0])
    }
  }, [paymethodsList.paymethods])

  useEffect(() => {
    if (paymethodSelected?.gateway !== 'cash' && errorCash) {
      props.setErrorCash(false)
    }
  }, [paymethodSelected])

  useEffect(() => {
    if (props.paySelected && props.paySelected?.data) {
      setPaymethodData(props.paySelected?.data)
    }
  }, [props.paySelected])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <PaymentMethodsContainer>
        <PaymentMethodsList className='payments-list'>
          {paymethodsList.paymethods.length > 0 && (
            paymethodsList.paymethods.sort((a, b) => a.id - b.id).map(paymethod => (
              <React.Fragment key={paymethod.id}>
                {
                  (!isCustomerMode || (isCustomerMode && (paymethod.gateway === 'card_delivery' || paymethod.gateway === 'cash'))) && (
                    <PayCard
                      isDisabled={isDisabled}
                      className={`card ${paymethodSelected?.id === paymethod.id ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodClick(paymethod)}
                    >
                      {getPayIcon(paymethod.id)}
                      <p>
                        {t(paymethod.gateway.toUpperCase(), paymethod.name)}
                      </p>
                    </PayCard>
                  )
                }
              </React.Fragment>
            ))
          )}

          {(paymethodsList.loading || isLoading) && (
            [...Array(5).keys()].map(i => (
              <PayCard key={i} isSkeleton>
                <Skeleton key={i} width={100} height={60} style={{ marginLeft: '10px' }} />
              </PayCard>
            ))
          )}

          {paymethodsList.error && paymethodsList.error.length > 0 && (
            <NotFoundSource
              content={paymethodsList?.error[0]?.message || paymethodsList?.error[0]}
            />
          )}

          {!(paymethodsList.loading || isLoading) &&
            !paymethodsList.error &&
            (!paymethodsList?.paymethods || paymethodsList.paymethods.length === 0) &&
          (
            <p>{t('NO_PAYMENT_METHODS', 'No payment methods!')}</p>
          )}
        </PaymentMethodsList>

        {paymethodSelected?.gateway === 'cash' && (
          <PaymentOptionCash
            orderTotal={cart.total}
            defaultValue={paymethodSelected?.data?.cash}
            onChangeData={handlePaymethodDataChange}
            setErrorCash={props.setErrorCash}
          />
        )}

        {stripeOptions.includes(paymethodSelected?.gateway) && paymethodData?.card && !isCustomerMode && (
          <PayCardSelected>
            <CardItemContent>
              <span className='checks'>
                <IosRadioButtonOn />
              </span>
              <span className='brand'>
                {getIconCard(paymethodData?.card?.brand)}
              </span>
              <span>
                XXXX-XXXX-XXXX-{paymethodData?.card?.last4}
              </span>
            </CardItemContent>
          </PayCardSelected>
        )}

        {/* Paypal */}
        <Modal
          className='modal-info'
          open={isOpenMethod.paymethod?.gateway === 'paypal' && !paymethodData.id}
          onClose={() => handlePaymethodClick(null)}
          title={t('PAY_WITH_PAYPAL', 'Pay with PayPal')}
        >
          {isOpenMethod.paymethod?.gateway === 'paypal' && (
            <PaymentOptionPaypal
              clientId={isOpenMethod.paymethod?.credentials?.client_id}
              body={{
                paymethod_id: isOpenMethod.paymethod?.id,
                amount: cart.total,
                delivery_zone_id: cart.delivery_zone_id,
                cartUuid: cart.uuid
              }}
              btnStyle={paypalBtnStyle}
              noAuthMessage={
                !token
                  ? t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')
                  : null
              }
              handlerChangePaypal={(uuid) => handleOrderRedirect && handleOrderRedirect(uuid)}
            />
          )}
        </Modal>

        {/* Stripe */}
        <Modal
          className='modal-info'
          open={isOpenMethod.paymethod?.gateway === 'stripe' && !paymethodData.id}
          onClose={() => handlePaymethodClick(null)}
          title={t('SELECT_A_CARD', 'Select a card')}
        >
          {isOpenMethod.paymethod?.gateway === 'stripe' && (
            <PaymentOptionStripe
              paymethod={isOpenMethod.paymethod}
              businessId={props.businessId}
              publicKey={isOpenMethod.paymethod?.credentials?.publishable}
              payType={isOpenMethod.paymethod?.name}
              onSelectCard={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe Connect */}
        <Modal
          title={t('SELECT_A_CARD', 'Select a card')}
          open={isOpenMethod.paymethod?.gateway === 'stripe_connect' && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {isOpenMethod.paymethod?.gateway === 'stripe_connect' && (
            <PaymentOptionStripe
              paymethod={isOpenMethod.paymethod}
              businessId={props.businessId}
              publicKey={isOpenMethod.paymethod?.credentials?.stripe?.publishable}
              clientSecret={isOpenMethod.paymethod?.credentials.publishable}
              payType={paymethodsList?.name}
              onSelectCard={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe direct */}
        <Modal
          title={t('ADD_CARD', 'Add card')}
          open={isOpenMethod.paymethod?.gateway === 'stripe_direct' && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {isOpenMethod.paymethod?.gateway === 'stripe_direct' && (
            <StripeElementsForm
              businessId={props.businessId}
              publicKey={isOpenMethod.paymethod?.credentials?.publishable}
              handleSource={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe Redirect */}
        <Modal
          title={t('STRIPE_REDIRECT', 'Stripe Redirect')}
          open={isOpenMethod.paymethod?.gateway === 'stripe_redirect' && !paymethodData.type}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          <StripeRedirectForm
            businessId={props.businessId}
            currency={props.currency}
            paymethods={stripeRedirectOptions}
            handleStripeRedirect={handlePaymethodDataChange}
          />
        </Modal>
      </PaymentMethodsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const PaymentOptions = (props) => {
  const paymentOptions = {
    ...props,
    UIComponent: PaymentOptionsUI
  }
  return (
    <PaymentOptionsController {...paymentOptions} />
  )
}
