import React from 'react'
import { useLanguage, useUtils, useOrder } from 'ordering-components'
import {
  CheckoutBillContainer
} from './styles'
export const CheckoutBill = (props) => {
  const {
    cart
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [orderState] = useOrder()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      {cart?.valid_products && (
        <CheckoutBillContainer>
          <table>
            <tbody>
              <tr>
                <td>{t('SUBTOTAL', 'Subtotal')}</td>
                <td>{parsePrice(cart?.subtotal || 0)}</td>
              </tr>
              <tr>
                <td>
                  {cart.business.tax_type === 1
                    ? t('TAX_INCLUDED', 'Tax (included)')
                    : t('TAX', 'Tax')}
                  <span>{`(${parseNumber(cart?.business?.tax)}%)`}</span>
                </td>
                <td>{parsePrice(cart?.tax || 0)}</td>
              </tr>
              {orderState?.options?.type === 1 && cart?.delivery_price > 0 && (
                <tr>
                  <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                  <td>{parsePrice(cart?.delivery_price)}</td>
                </tr>
              )}
              {cart?.driver_tip > 0 && (
                <tr>
                  <td>
                    {t('DRIVER_TIP', 'Driver tip')}
                    {cart?.driver_tip_rate > 0 && <span>{`(${parseNumber(cart?.driver_tip_rate)}%)`}</span>}
                  </td>
                  <td>{parsePrice(cart?.driver_tip)}</td>
                </tr>
              )}
              {cart?.service_fee > 0 && (
                <tr>
                  <td>
                    {t('SERVICE_FEE', 'Service Fee')}
                    <span>{`(${parseNumber(cart?.business?.service_fee)}%)`}</span>
                  </td>
                  <td>{parsePrice(cart?.service_fee)}</td>
                </tr>
              )}
              {cart?.discount > 0 && cart?.total >= 0 && (
                <tr>
                  {cart?.discount_type === 1 ? (
                    <td>
                      {t('DISCOUNT', 'Discount')}
                      <span>{`(${parseNumber(cart?.discount_rate)}%)`}</span>
                    </td>
                  ) : (
                    <td>{t('DISCOUNT', 'Discount')}</td>
                  )}
                  <td>- {parsePrice(cart?.discount || 0)}</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* <table className='total'>
            <tbody>
              <tr>
                <td>{t('TOTAL', 'Total')}</td>
                <td>{cart?.total >= 1 && parsePrice(cart?.total)}</td>
              </tr>
            </tbody>
          </table> */}
        </CheckoutBillContainer>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
