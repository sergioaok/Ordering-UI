import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useValidationFields,
  useCustomer,
  useConfig
} from 'ordering-components'
import parsePhoneNumber from 'libphonenumber-js'

import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Alert } from '../../../../../components/Confirm'
import { CartContent } from '../../../../../components/CartContent'

import { Button } from '../../styles/Buttons'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { CheckoutBill } from '../CheckoutBill'
import { CouponControl } from '../CouponControl'
import { DeliveryDetails } from '../DeliveryDetails'
import { Cart } from '../Cart'
import {
  Container,
  WrappContainer,
  CheckoutInfoContent,
  CheckoutActionContent,
  CheckoutActionInnerContent,
  WrapCheckoutBill,
  SectionContainer,
  WrapperPlaceOrderButton,
  WarningMessage,
  CartsList,
  WarningText,
  ActionContainer,
  TotalPrice
} from './styles'

const CheckoutUI = (props) => {
  const {
    cart,
    errors,
    placing,
    cartState,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder,
    handleOrderRedirect,
    isCustomerMode
  } = props

  const [validationFields] = useValidationFields()
  const [{ options }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user }] = useSession()
  const [customerState] = useCustomer()
  const [{ configs }] = useConfig()

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const handlePlaceOrder = () => {
    if (!userErrors.length) {
      handlerClickPlaceOrder && handlerClickPlaceOrder()
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']
    const userSelected = isCustomerMode ? customerState.user : user

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.required && !notFields.includes(field.code)) {
        if (!userSelected[field?.code]) {
          errors.push(t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `The field ${field?.name} is required`))
        }
      }
    })

    if (!userSelected?.cellphone && validationFields?.fields?.checkout?.cellphone?.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'))
    }

    if (userSelected?.cellphone) {
      if (userSelected?.country_phone_code) {
        let phone = null
        phone = `+${userSelected?.country_phone_code}${userSelected?.cellphone}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber?.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user])

  useEffect(() => {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  useEffect(() => {
    const paymethods = businessDetails?.business?.paymethods || []
    if (paymethods && paymethods.length > 1) {
      handlePaymethodChange(null)
    }
  }, [cart?.total])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <WrappContainer>
          <CheckoutInfoContent>
            {!cartState.loading && cart?.status === 2 && (
              <WarningMessage>
                <VscWarning />
                <h1>
                  {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
                </h1>
              </WarningMessage>
            )}
            {!cartState.loading && cart?.status === 4 && (
              <WarningMessage>
                <VscWarning />
                <h1>
                  {t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')}
                </h1>
              </WarningMessage>
            )}

            {props.beforeElementsSectionOne?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionOne?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}
            {!props.isHideSectionSix && !cartState.loading && cart && (
              <SectionContainer>
                <h1>{t('YOUR_ORDER', 'Your Order')}</h1>
                <Cart
                  isCartPending={cart?.status === 2}
                  cart={cart}
                  isCheckout
                  isProducts={cart?.products?.length || 0}
                />
              </SectionContainer>
            )}

            {props.beforeElementsSectioTwo?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionTwo?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            <SectionContainer>
              <DeliveryDetails />
            </SectionContainer>

            {props.beforeElementsSectionThree?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionThree?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionFive && !cartState.loading && cart && (
              <SectionContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                <PaymentOptions
                  cart={cart}
                  isDisabled={cart?.status === 2}
                  businessId={businessDetails?.business?.id}
                  isLoading={businessDetails.loading}
                  paymethods={businessDetails?.business?.paymethods}
                  onPaymentChange={handlePaymethodChange}
                  errorCash={errorCash}
                  setErrorCash={setErrorCash}
                  handleOrderRedirect={handleOrderRedirect}
                  isPaymethodNull={paymethodSelected}
                  isCustomerMode={isCustomerMode}
                />
              </SectionContainer>
            )}

            {props.beforeElementsSectionFour?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionFour?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionFour &&
              !cartState.loading &&
              cart &&
              cart?.business_id &&
              options.type === 1 &&
              cart?.status !== 2 &&
              validationFields?.fields?.checkout?.driver_tip?.enabled &&
              (
                <SectionContainer>
                  <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                  <DriverTips
                    businessId={cart?.business_id}
                    driverTipsOptions={driverTipsOptions}
                    useOrderContext
                  />
                </SectionContainer>
              )}
          </CheckoutInfoContent>
          <CheckoutActionContent>
            <CheckoutActionInnerContent>
              {props.beforeElementsSectionFive?.map((BeforeElement, i) => (
                <React.Fragment key={i}>
                  {BeforeElement}
                </React.Fragment>))}
              {props.beforeComponentsSectionFive?.map((BeforeComponent, i) => (
                <BeforeComponent key={i} {...props} />))}
              <WrapCheckoutBill>
                <CheckoutBill cart={cart} />
                <CouponControl
                  businessId={cart?.business_id}
                  price={cart?.total}
                />
              </WrapCheckoutBill>
              <ActionContainer>
                {cart?.total >= 1 && (
                  <TotalPrice>
                    <div>
                      <span>{t('TOTAL', 'Total')}</span>
                      {cart?.products?.length > 0 && (
                        <span>{cart?.products?.length} {t('PRODUCTS', 'Products')}</span>
                      )}
                    </div>
                    <span>{parsePrice(cart?.total)}</span>
                  </TotalPrice>
                )}
                {!props.isHideSectionSeven && !cartState.loading && cart && cart?.status !== 2 && (
                  <WrapperPlaceOrderButton>
                    <Button
                      color={(!cart?.valid_maximum || !cart?.valid_minimum) ? 'secundary' : 'primary'}
                      disabled={!cart?.valid || !paymethodSelected || placing || errorCash || !cart?.valid_maximum || !cart?.valid_minimum}
                      onClick={() => handlePlaceOrder()}
                    >
                      {!cart?.valid_maximum ? (
                        `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                      ) : !cart?.valid_minimum ? (
                        `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
                      ) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
                    </Button>
                  </WrapperPlaceOrderButton>
                )}
                {!cart?.valid_address && cart?.status !== 2 && (
                  <WarningText>
                    {t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')}
                  </WarningText>
                )}

                {!paymethodSelected && cart?.status !== 2 && (
                  <WarningText>
                    {t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')}
                  </WarningText>
                )}

                {!cart?.valid_products && cart?.status !== 2 && (
                  <WarningText>
                    {t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')}
                  </WarningText>
                )}
              </ActionContainer>

            </CheckoutActionInnerContent>
          </CheckoutActionContent>
        </WrappContainer>
        <Alert
          title={t('CUSTOMER_DETAILS', 'Customer Details')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
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

export const Checkout = (props) => {
  const {
    errors,
    clearErrors,
    query,
    cartUuid,
    handleOrderRedirect,
    handleCheckoutRedirect,
    handleSearchRedirect,
    handleCheckoutListRedirect
  } = props

  const [orderState, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts)?.filter(cart => cart?.products?.length)) || null

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    clearErrors && clearErrors()
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCurrentCart(null)
    setCanOpenUpselling(false)
    handleCheckoutRedirect(currentCart.uuid)
  }

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts)?.filter(cart => cart?.business_id === currentCart?.business_id))
    }
  }, [orderState.loading])

  useEffect(() => {
    if (currentCart?.products) {
      setOpenUpselling(true)
    }
  }, [currentCart])

  useEffect(() => {
    if (errors?.length) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  const getOrder = async (cartId) => {
    try {
      setCartState({ ...cartState, loading: true })
      const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
      const url = userCustomer
        ? `${ordering.root}/carts/${cartId}?user_id=${userCustomer?.id}`
        : `${ordering.root}/carts/${cartId}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result } = await response.json()

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2 && result.paymethod_data?.gateway === 'stripe_redirect' && query.get('payment_intent')) {
        try {
          const confirmCartRes = await confirmCart(cartUuid)
          if (confirmCartRes.error) {
            setAlertState({
              open: true,
              content: [confirmCartRes.error.message]
            })
          }
          if (confirmCartRes.result.order?.uuid) {
            handleOrderRedirect(confirmCartRes.result.order.uuid)
          }
          setCartState({
            ...cartState,
            loading: false,
            cart: result
          })
        } catch (error) {
          setAlertState({
            open: true,
            content: [error.message]
          })
        }
      } else {
        const cart = Array.isArray(result) ? null : result
        setCartState({
          ...cartState,
          loading: false,
          cart,
          error: cart ? null : result
        })
      }
    } catch (e) {
      setCartState({
        ...cartState,
        loading: false,
        error: [e.toString()]
      })
    }
  }

  useEffect(() => {
    if (token && cartUuid) {
      getOrder(cartUuid)
    }
  }, [token, cartUuid])

  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    cartState,
    businessId: cartState.cart?.business_id
  }

  return (
    <>
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length > 0 && (
        <CartsList>
          <CartContent
            carts={cartsWithProducts}
            isOrderStateCarts={!!orderState.carts}
            isForceOpenCart
          />
        </CartsList>
      )}

      {cartUuid && cartState.error && cartState.error?.length > 0 && (
        <NotFoundSource
          content={t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.')}
          btnTitle={t('CHECKOUT_REDIRECT', 'Go to Checkout list')}
          onClickButton={handleCheckoutListRedirect}
        />
      )}

      {cartState.loading && !(window.location.pathname === '/checkout') && (
        <WrappContainer>
          <CheckoutInfoContent>
            <Skeleton height={400} style={{ marginBottom: '10px' }} />
            <Skeleton height={100} count={3} style={{ marginBottom: '10px' }} />
          </CheckoutInfoContent>
          <CheckoutActionContent>
            <Skeleton height={400} style={{ marginBottom: '10px' }} />
          </CheckoutActionContent>
        </WrappContainer>
      )}

      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <CheckoutController {...checkoutProps} />}

      {currentCart?.products && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          cartProducts={currentCart?.products}
          business={currentCart?.business}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}

      <Alert
        title={t('CHECKOUT ', 'Checkout')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
