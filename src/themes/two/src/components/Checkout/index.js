import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useValidationFields,
  useConfig
} from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'

import {
  Container,
  WrappContainer,
  LeftContainer,
  RightContainer,
  BusinessDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton,
  WarningMessage,
  CartsList,
  WarningText,
  WrapperUserDetails,
  WrapOrderTypeMethod,
  BusinessLogo,
  WrapperBusinessLogo,
  WrapCartPrice,
  WrapCartTotalPrice,
  WrapMaxLimtAndSavePrice,
  PickupOrderTitle,
  PaymentContent,
  UpsellingPageContainer,
  WrapFloatingButton,
  WrapDeliveryTimeSelect,
  RightInnerContainer
} from './styles'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'
import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { Alert } from '../Confirm'
import { CartContent } from '../CartContent'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { DeliveryTimeSelector } from '../DeliveryTimeSelector'
import { CouponControl } from '../CouponControl'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

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
    handleOrderRedirect
  } = props

  const theme = useTheme()
  const [validationFields] = useValidationFields()
  const [{ options }] = useOrder()
  const [, t] = useLanguage()
  const [{ parseNumber, parsePrice, optimizeImage }] = useUtils()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(false)
  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const handlePlaceOrder = () => {
    if (!userErrors.length) {
      handlerClickPlaceOrder && handlerClickPlaceOrder()
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
    setIsUserDetailsEdit(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setIsUserDetailsEdit(false)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.required && !notFields.includes(field.code)) {
        if (!user[field?.code]) {
          errors.push(t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `The field ${field?.name} is required`))
        }
      }
    })

    if (!user?.cellphone && validationFields?.fields?.checkout?.cellphone?.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'))
    }

    if (user?.cellphone) {
      if (user?.country_phone_code) {
        let phone = null
        phone = `+${user?.country_phone_code}${user?.cellphone}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  const getButtonLabelByType = (type) => {
    const types = [];
    
    types[1] = t('PLACE_ORDER', 'Place Order')
    types[2] = t('PLACE_PICKUP_ORDER', 'Place Pickup Order')
    types[3] = t('PLACE_ORDER_TO_EAT_IN', 'Place Order To Eat In')
    types[4] = t('PLACE_CURBSIDE_ORDER', 'Place Curbside Order')
    types[5] = t('PLACE_DRIVE_THRU_ORDER', 'Place Drive Thru Order')

    return types[type || 1] || types[1]
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
    handlePaymethodChange(null)
  }, [cart?.total])

  return (
    <>
      <WrappContainer>
        <LeftContainer>
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

          <WrapOrderTypeMethod>
            <h1>{t('METHOD', 'Method')}</h1>
            <OrderTypeSelectorHeader
              radioStyle
              configTypes={configTypes}
            />
          </WrapOrderTypeMethod>
          <WrapDeliveryTimeSelect>
            <h1>{t('TIME', 'Time')}</h1>
            <DeliveryTimeSelector />
          </WrapDeliveryTimeSelect>

          {(businessDetails?.loading || cartState.loading) ? (
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <Skeleton height={170} />
            </div>
          ) : (
            <AddressDetails
              location={businessDetails?.business?.location}
              businessLogo={businessDetails?.business?.logo || theme.images?.dummies?.businessLogo}
              isCartPending={cart?.status === 2}
              businessId={cart?.business_id}
              apiKey={configs?.google_maps_api_key?.value}
              mapConfigs={mapConfigs}
            />
          )}

          <WrapperUserDetails>
            {cartState.loading ? (
              <div>
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
              </div>
            ) : (
              <UserDetails
                isUserDetailsEdit={isUserDetailsEdit}
                cartStatus={cart?.status}
                businessId={cart?.business_id}
                useValidationFields
                useDefualtSessionManager
                useSessionUser
                isCheckout
              />
            )}
          </WrapperUserDetails>

          {!cartState.loading && cart && (
            <PaymentMethodContainer>
              <h1>{t('PAYMENT', 'Payment')}</h1>
              <PaymentContent>
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
                />
                <CouponControl
                  businessId={cart?.business_id}
                  price={cart?.total}
                />
              </PaymentContent>
            </PaymentMethodContainer>
          )}

          {!cartState.loading && cart && (
            <CartContainer>
              <h1>{t('SUMMARY', 'Summary')}</h1>
              <div>
                {cart.products.map(product => (
                  <ProductItemAccordion
                    key={product.id}
                    isCartProduct
                    product={product}
                  />
                ))}
              </div>
            </CartContainer>
          )}
          {!cartState.loading && cart && (
            <UpsellingPageContainer>
              <h1>{t('PEOPLE_ALSO_ORDERED', 'People also ordered')}</h1>
              <UpsellingPage
                isCustomMode
                businessId={cart?.business_id}
                cartProducts={cart?.products}
                business={cart?.business}
              />
            </UpsellingPageContainer>
          )}

          <WrapFloatingButton>
            {!cartState.loading && cart && cart?.status !== 2 && (
              <WrapperPlaceOrderButton bottom>
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
          </WrapFloatingButton>
        </LeftContainer>
        <RightContainer>
          <RightInnerContainer>
            <BusinessDetailsContainer>
              {(businessDetails?.loading || cartState.loading) && !businessDetails?.error && (
                <>
                  <WrapperBusinessLogo>
                    <Skeleton height={70} width={70} />
                  </WrapperBusinessLogo>
                  <div>
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  </div>
                </>
              )}
              {!cartState.loading && businessDetails?.business && Object.values(businessDetails?.business).length > 0 && (
                <>
                  <WrapperBusinessLogo>
                    <BusinessLogo bgimage={optimizeImage(businessDetails?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                  </WrapperBusinessLogo>
                  <div>
                    <p>{t('ORDER_FROM', 'Order from')}</p>
                    <p>{businessDetails?.business?.name}</p>
                  </div>
                </>
              )}
              {businessDetails?.error && businessDetails?.error?.length > 0 && (
                <div>
                  <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
                  <NotFoundSource
                    content={businessDetails?.error[0]?.message || businessDetails?.error[0]}
                  />
                </div>
              )}
            </BusinessDetailsContainer>

            {!cartState.loading && cart && cart?.status !== 2 && (
              <WrapperPlaceOrderButton>
                <Button
                  color={(!cart?.valid_maximum || !cart?.valid_minimum) ? 'secondary' : 'primary'}
                  disabled={!cart?.valid || !paymethodSelected || placing || errorCash || !cart?.valid_maximum || !cart?.valid_minimum}
                  onClick={() => handlePlaceOrder()}
                >
                  {!cart?.valid_maximum ? (
                    `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                  ) : !cart?.valid_minimum ? (
                    `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
                  ) : placing ? t('PLACING', 'Placing') : getButtonLabelByType(options?.type)}
                </Button>
              </WrapperPlaceOrderButton>
            )}

            {options?.type === 2 && (
              <PickupOrderTitle>
                <p>{t('THIS_IS_A_PICKUP_ORDER', 'This is a pickup order')}</p>
                {!cartState.loading && businessDetails?.business && Object.values(businessDetails?.business).length > 0 && (
                  <p>
                    <span>
                      {t('YOULL_NEED_TO_GO', 'You’ll need to go')}
                    </span>
                    <span>{businessDetails?.business?.name}</span>
                    <span>{t('TO_PICK_UP_THIS_ORDER', 'to pick up this order.')}</span>
                  </p>
                )}
              </PickupOrderTitle>
            )}

            {cart?.valid_products && (
              <WrapCartPrice>
                <div>
                  <span>{t('SUBTOTAL', 'Subtotal')}</span>
                  <span>{parsePrice(cart?.subtotal)}</span>
                </div>
                {options?.type === 1 && cart?.delivery_price > 0 && (
                  <div>
                    <span>{t('DELIVERY_FEE', 'Delivey Fee')}</span>
                    <span>{parsePrice(cart?.delivery_price)}</span>
                  </div>
                )}
                <div>
                  <span>
                    {cart?.business?.tax_type === 1
                      ? t('TAX_INCLUDED', 'Tax (included)')
                      : t('TAX', 'Tax')}
                    {`(${parseNumber(cart?.business?.tax)}%)`}
                  </span>
                  <span>{parsePrice(cart?.tax || 0)}</span>
                </div>
                {cart?.driver_tip > 0 && (
                  <div>
                    <span>
                      {t('DRIVER_TIP', 'Driver tip')}
                      {cart?.driver_tip_rate > 0 &&
                        parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                        !!!parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                      (
                        <span>{`(${parseNumber(cart?.driver_tip_rate)}%)`}</span>
                      )}
                    </span>
                    <span>{parsePrice(cart?.driver_tip)}</span>
                  </div>
                )}
                {cart?.service_fee > 0 && (
                  <div>
                    <span>
                      {t('SERVICE_FEE', 'Service Fee')}
                      {`(${parseNumber(cart?.business?.service_fee)}%)`}
                    </span>
                    <span>{parsePrice(cart?.service_fee)}</span>
                  </div>
                )}
                {cart?.discount > 0 && cart?.total >= 0 && (
                  <div>
                    {cart?.discount_type === 1 ? (
                      <span>
                        {t('DISCOUNT', 'Discount')}
                        {`(${parseNumber(cart?.discount_rate)}%)`}
                      </span>
                    ) : (
                      <span>{t('DISCOUNT', 'Discount')}</span>
                    )}
                    <span>- {parsePrice(cart?.discount || 0)}</span>
                  </div>
                )}
              </WrapCartPrice>
            )}

            {options?.type === 1 && (
              <>
                {!cartState.loading &&
                    cart &&
                    options.type === 1 &&
                    cart?.status !== 2 &&
                    validationFields?.fields?.checkout?.driver_tip?.enabled &&
                    driverTipsOptions.length > 0 &&
                  (
                    <DriverTipContainer>
                      <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                      <DriverTips
                        businessId={cart?.business_id}
                        driverTipsOptions={driverTipsOptions}
                        isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1 || !!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                        isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                        driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1 || !!parseInt(configs?.driver_tip_use_custom?.value, 10)
                          ? cart?.driver_tip
                          : cart?.driver_tip_rate
                        }
                        useOrderContext
                      />
                    </DriverTipContainer>
                  )}
              </>
            )}

            {cart?.valid_products && (
              <>
                <WrapCartTotalPrice>
                  <span>{t('TOTAL', 'Total')}</span>
                  <span>{parsePrice(cart?.total)}</span>
                </WrapCartTotalPrice>
                <WrapMaxLimtAndSavePrice>
                  <div>
                    <span>{t('AMOUNT_DUE', 'Amount Due')}</span>
                    <span>{parsePrice(cart?.total)}</span>
                  </div>
                  {cart?.total < cart?.minimum && (
                    <div>
                      <span>{t('MINIMUM_ORDER_LIMIT', 'Minimum order limit: ')}</span>
                      <span>{parsePrice(cart?.minimum)}</span>
                    </div>
                  )}
                  {cart?.discount > 0 && cart?.total >= 0 && (
                    <div>
                      <span>{t('YOU_SAVED', 'You saved ')}</span>
                      <span>{parsePrice(cart?.discount || 0)}</span>
                      <span>{t('WITH_PROMOTIONS', 'With Promotions')}</span>
                    </div>
                  )}
                </WrapMaxLimtAndSavePrice>
              </>
            )}
          </RightInnerContainer>
        </RightContainer>
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
    handleSearchRedirect,
    handleCheckoutListRedirect
  } = props

  const [orderState, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const cartsWithProducts = Object.values(orderState.carts)?.filter(cart => cart?.products?.length)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    clearErrors && clearErrors()
  }

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts)?.filter(cart => cart?.business_id === currentCart?.business_id))
    }
  }, [orderState.loading])

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
      const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
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
    <Container>
      {!cartUuid && orderState.carts && cartsWithProducts.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && cartsWithProducts.length > 0 && (
        <CartsList>
          <CartContent
            carts={cartsWithProducts}
            isOrderStateCarts={!!orderState.carts}
            isCheckoutPage
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
          <LeftContainer>
            <Skeleton height={80} count={2} style={{ marginBottom: '10px' }} />
            <Skeleton height={150} style={{ marginBottom: '10px' }} />
            <Skeleton height={80} count={4} style={{ marginBottom: '10px' }} />
          </LeftContainer>
          <RightContainer>
            <RightInnerContainer>
              <Skeleton height={150} count={2} style={{ marginBottom: '10px' }} />
              <Skeleton height={50} count={2} style={{ marginBottom: '10px' }} />
            </RightInnerContainer>
          </RightContainer>
        </WrappContainer>
      )}

      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <CheckoutController {...checkoutProps} />}

      <Alert
        title={t('CHECKOUT ', 'Checkout')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
