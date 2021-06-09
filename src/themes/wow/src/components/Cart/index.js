import React, { useState, useEffect } from 'react'
import { Cart as CartController, useOrder, useLanguage, useEvent, useUtils } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { Confirm } from '../../../../../components/Confirm'
import { Modal } from '../../../../../components/Modal'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { ProductForm } from '../ProductForm'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { BusinessItemAccordion } from '../BusinessItemAccordion'
import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  TotalProducts,
  ProductQuantity
} from './styles'

const CartUI = (props) => {
  const {
    currentCartUuid,
    cart,
    clearCart,
    isProducts,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout,
    isCheckout,
    isCartPending,
    isForceOpenCart,
    isCartOnProductsList,
    handleCartOpen
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const windowSize = useWindowSize()

  const momentFormatted = !orderState?.option?.moment
    ? t('RIGHT_NOW', 'Right Now')
    : parseDate(orderState?.option?.moment, { outputFormat: 'YYYY-MM-DD HH:mm' })

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleEditProduct = (product) => {
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handleClickCheckout = () => {
    events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart.uuid } })
    events.emit('cart_popover_closed')
    onClickCheckout && onClickCheckout()
  }

  const handleStoreRedirect = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
    if (windowSize.width <= 768) {
      onClickCheckout && onClickCheckout()
    }
  }

  useEffect(() => {
    events.emit('get_current_view')
    return () => {
      setConfirm({ ...confirm, open: false })
    }
  }, [])

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  const handleClearProducts = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
      handleOnAccept: () => {
        clearCart(cart?.uuid)
        props.handleRemoveAllProducts && props.handleRemoveAllProducts()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

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
      <CartContainer className='cart'>
        <BusinessItemAccordion
          isCartPending={isCartPending}
          currentCartUuid={currentCartUuid}
          uuid={cart?.uuid}
          isCheckout={isCheckout}
          orderTotal={cart?.total}
          business={cart?.business}
          isClosed={!cart?.valid_schedule}
          moment={momentFormatted}
          isProducts={isProducts}
          isValidProducts={cart?.valid_products}
          isForceOpenAccordion={isForceOpenCart}
          isCartOnProductsList={isCartOnProductsList}
          handleClearProducts={handleClearProducts}
          handleStoreRedirect={handleStoreRedirect}
          handleCartOpen={handleCartOpen}
        >
          {cart?.products?.length > 0 && cart?.products.map(product => (
            <ProductItemAccordion
              key={product.code}
              isCartPending={isCartPending}
              isCartProduct
              product={product}
              changeQuantity={changeQuantity}
              getProductMax={getProductMax}
              offsetDisabled={offsetDisabled}
              onDeleteProduct={handleDeleteClick}
              onEditProduct={handleEditProduct}
            />
          ))}
          {cart?.valid_products && !isCheckout && (
            <OrderBill>
              <table className='total'>
                <tbody>
                  <tr>
                    <td>
                      <TotalProducts>
                        <span>{t('TOTAL', 'Total')}</span>
                        {cart?.products?.length && (
                          <ProductQuantity>
                            <span>{cart?.products?.length}</span>
                            <span>{t('PRODUCTS', 'Products')}</span>
                          </ProductQuantity>
                        )}
                      </TotalProducts>
                    </td>
                    <td>{cart?.total >= 1 && parsePrice(cart?.total)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderBill>
          )}
          {(onClickCheckout || isForceOpenCart) && !isCheckout && (
            <CheckoutAction>
              <Button
                color={(!cart?.valid_maximum || !cart?.valid_minimum || !cart?.valid_address) ? 'secundary' : 'primary'}
                onClick={() => setOpenUpselling(true)}
                disabled={(openUpselling && !canOpenUpselling) || !cart?.valid_maximum || !cart?.valid_minimum || !cart?.valid_address}
              >
                {!cart?.valid_address ? (
                  t('OUT_OF_COVERAGE', 'Out of Coverage')
                ) : !cart?.valid_maximum ? (
                  `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                ) : !cart?.valid_minimum ? (
                  `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
                ) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')}
              </Button>
            </CheckoutAction>
          )}
        </BusinessItemAccordion>
        <Confirm
          title={t('PRODUCT', 'Product')}
          content={confirm.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={confirm.open}
          onClose={() => setConfirm({ ...confirm, open: false })}
          onCancel={() => setConfirm({ ...confirm, open: false })}
          onAccept={confirm.handleOnAccept}
          closeOnBackdrop={false}
        />
        <Modal
          width='70%'
          open={openProduct}
          padding='0'
          closeOnBackdrop
          onClose={() => setModalIsOpen(false)}
        >
          <ProductForm
            isCartProduct
            productCart={curProduct}
            businessSlug={cart?.business?.slug}
            businessId={curProduct?.business_id}
            categoryId={curProduct?.category_id}
            productId={curProduct?.id}
            onSave={handlerProductAction}
          />
        </Modal>
        {openUpselling && (
          <UpsellingPage
            businessId={cart.business_id}
            cartProducts={cart.products}
            business={cart.business}
            handleUpsellingPage={handleUpsellingPage}
            openUpselling={openUpselling}
            canOpenUpselling={canOpenUpselling}
            setCanOpenUpselling={setCanOpenUpselling}
          />
        )}
      </CartContainer>
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

export const Cart = (props) => {
  const cartProps = {
    ...props,
    UIComponent: CartUI
  }

  return (
    <CartController {...cartProps} />
  )
}
