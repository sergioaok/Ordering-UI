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
import { PaymentOptions as PaymentOptionsController, useLanguage, useSession } from 'ordering-components'

import { Modal } from '../../../../../components/Modal'
import { PaymentOptionCash } from '../../../../../components/PaymentOptionCash'
import { PaymentOptionStripe } from '../../../../../components/PaymentOptionStripe'
import { PaymentOptionPaypal } from '../../../../../components/PaymentOptionPaypal'
import { StripeElementsForm } from '../../../../../components/StripeElementsForm'
import { StripeRedirectForm } from '../../../../../components/StripeRedirectForm'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { getIconCard } from '../../../../../utils'

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
    paymethodSelected,
    paymethodData,
    paymethodsList,
    isPaymethodNull,
    handleOrderRedirect,
    handlePaymethodClick,
    handlePaymethodDataChange,
    isCustomerMode
  } = props
  const [, t] = useLanguage()
  const [{ token }] = useSession()

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
    !isPaymethodNull &&
    handlePaymethodClick &&
    handlePaymethodClick(isPaymethodNull)
  }, [isPaymethodNull])

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
                      onClick={() => handlePaymethodClick(paymethod)}
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
          open={paymethodSelected?.gateway === 'paypal' && !paymethodData.id}
          onClose={() => handlePaymethodClick(null)}
          title={t('PAY_WITH_PAYPAL', 'Pay with PayPal')}
        >
          {paymethodSelected?.gateway === 'paypal' && (
            <PaymentOptionPaypal
              clientId={paymethodSelected?.credentials?.client_id}
              body={{
                paymethod_id: paymethodSelected.id,
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
          open={paymethodSelected?.gateway === 'stripe' && !paymethodData.id}
          onClose={() => handlePaymethodClick(null)}
          title={t('SELECT_A_CARD', 'Select a card')}
        >
          {paymethodSelected?.gateway === 'stripe' && (
            <PaymentOptionStripe
              paymethod={paymethodSelected}
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              payType={paymethodsList?.name}
              onSelectCard={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe Connect */}
        <Modal
          title={t('SELECT_A_CARD', 'Select a card')}
          open={paymethodSelected?.gateway === 'stripe_connect' && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {paymethodSelected?.gateway === 'stripe_connect' && (
            <PaymentOptionStripe
              paymethod={paymethodSelected}
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.stripe.publishable}
              clientSecret={paymethodSelected.credentials.publishable}
              payType={paymethodsList?.name}
              onSelectCard={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe direct */}
        <Modal
          title={t('ADD_CARD', 'Add card')}
          open={paymethodSelected?.gateway === 'stripe_direct' && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {paymethodSelected?.gateway === 'stripe_direct' && (
            <StripeElementsForm
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              handleSource={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe Redirect */}
        <Modal
          title={t('STRIPE_REDIRECT', 'Stripe Redirect')}
          open={['stripe_redirect'].includes(paymethodSelected?.gateway) && !paymethodData.type}
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
