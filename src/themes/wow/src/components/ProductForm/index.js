import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import BisMinusCircle from '@meronex/icons/bi/BisMinusCircle'
import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils
} from 'ordering-components'
import { useTheme } from 'styled-components'

import { scrollTo } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LoginForm } from '../../../../../components/LoginForm'
import { SignUpForm } from '../../../../../components/SignUpForm'
import { ForgotPasswordForm } from '../../../../../components/ForgotPasswordForm'
import { AddressList } from '../../../../../components/AddressList'
import { Modal } from '../../../../../components/Modal'
import { TextArea } from '../../../../../styles/Inputs'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { Button } from '../../styles/Buttons'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { ProductOption } from '../ProductOption'
import { ProductShare } from '../ProductShare'
import { ProductIngredient } from '../ProductIngredient'

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductEdition,
  SectionTitle,
  ProductActions,
  ProductComment,
  SkeletonBlock,
  WrapperSubOption,
  ProductInfoInnerContainer,
  ProductFormTitle,
  WrapperIngredients,
  ProductActionHeader,
  ProductActionContent
} from './styles'

const ProductOptionsUI = (props) => {
  const {
    businessSlug,
    editMode,
    isSoldOut,
    productObject,
    productCart,
    increment,
    decrement,
    showOption,
    maxProductQuantity,
    errors,
    handleSave,
    handleChangeIngredientState,
    handleChangeSuboptionState,
    handleChangeCommentState
  } = props

  const { product, loading, error } = productObject

  const windowSize = useWindowSize()
  const [{ auth, user }, { login }] = useSession()
  const [, t] = useLanguage()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()
  const [{ parsePrice }] = useUtils()
  const theme = useTheme()
  const [modalPageToShow, setModalPageToShow] = useState('login')

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const closeModal = () => {
    setModalIsOpen(false)
    setModalPageToShow('login')
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
    }
  }

  const handleSaveProduct = () => {
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      handleSave && handleSave()
      return
    }
    const myElement = document.getElementsByClassName('error')[0]
    const productContainer = document.getElementsByClassName('product-container')[0]
    if (!myElement || !productContainer) {
      return
    }
    let topPos = myElement.offsetTop - productContainer.offsetTop
    if (windowSize.width <= 768) {
      const productImage = document.getElementById('product_image')
      topPos = topPos + (myElement.offsetTop < productImage.clientHeight ? productImage.clientHeight : 0)
    }
    scrollTo(productContainer, topPos, 1250)
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
    closeModal()
  }

  const isError = (id) => {
    let classnames = ''
    if (errors[`id:${id}`]) {
      classnames = 'error'
    }
    if (isSoldOut || maxProductQuantity <= 0) {
      classnames += ' soldout'
    }
    return classnames
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductContainer className='product-container'>
        {loading && !error && (
          <SkeletonBlock width={90}>
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={200} />
          </SkeletonBlock>
        )}

        {product && !loading && !error && (
          <ProductShare
            slug={businessSlug}
            categoryId={product?.category_id}
            productId={product?.id}
          />
        )}
        {
        props.beforeMidElements?.map((BeforeMidElements, i) => (
          <React.Fragment key={i}>
            {BeforeMidElements}
          </React.Fragment>))
        }
        {
        props.beforeMidComponents?.map((BeforeMidComponents, i) => (
          <BeforeMidComponents key={i} {...props} />))
        }
        {!loading && !error && product && (
          <>
            <ProductImage bgimage={product?.images || theme.images?.dummies?.product} />
            <ProductInfo>
              <ProductInfoInnerContainer>
                <ProductFormTitle>
                  <h1><span>{product?.name}</span><span>{parsePrice(product?.price)}</span></h1>
                  {product?.description && <p>{product?.description}</p>}
                </ProductFormTitle>
                <ProductEdition>
                  {product?.ingredients.length > 0 && (<SectionTitle>{t('INGREDIENTS', 'Ingredients')}</SectionTitle>)}
                  <WrapperIngredients isProductSoldout={isSoldOut || maxProductQuantity <= 0}>
                    {product?.ingredients.map(ingredient => (
                      <ProductIngredient
                        key={ingredient?.id}
                        ingredient={ingredient}
                        state={productCart.ingredients[`id:${ingredient?.id}`]}
                        onChange={handleChangeIngredientState}
                      />
                    ))}
                  </WrapperIngredients>
                  {
                    product?.extras.map(extra => extra.options.map(option => {
                      const currentState = productCart.options[`id:${option?.id}`] || {}
                      return (
                        <div key={option?.id}>
                          {
                            showOption(option) && (
                              <ProductOption
                                option={option}
                                currentState={currentState}
                                error={errors[`id:${option?.id}`]}
                              >
                                <WrapperSubOption className={isError(option?.id)}>
                                  {
                                    option.suboptions.map(suboption => {
                                      const currentState = productCart.options[`id:${option?.id}`]?.suboptions[`id:${suboption?.id}`] || {}
                                      const balance = productCart.options[`id:${option?.id}`]?.balance || 0
                                      return (
                                        <ProductOptionSubOption
                                          key={suboption?.id}
                                          onChange={handleChangeSuboptionState}
                                          balance={balance}
                                          option={option}
                                          suboption={suboption}
                                          state={currentState}
                                        />
                                      )
                                    })
                                  }
                                </WrapperSubOption>
                              </ProductOption>
                            )
                          }
                        </div>
                      )
                    }))
                  }
                  <ProductComment>
                    <SectionTitle>{t('SPECIAL_COMMENT', 'Special comment')}</SectionTitle>
                    <TextArea
                      rows={4}
                      placeholder={t('SPECIAL_COMMENT', 'Special comment')}
                      defaultValue={productCart.comment}
                      onChange={handleChangeCommentState}
                      disabled={!(productCart && !isSoldOut && maxProductQuantity)}
                    />
                  </ProductComment>
                  {
                  props.afterMidElements?.map((MidElement, i) => (
                    <React.Fragment key={i}>
                      {MidElement}
                    </React.Fragment>))
                  }
                  {
                  props.afterMidComponents?.map((MidComponent, i) => (
                    <MidComponent key={i} {...props} />))
                  }
                </ProductEdition>
              </ProductInfoInnerContainer>
              <ProductActions>
                <ProductActionHeader>
                  <h1>
                    <span>{t('TOTAL', 'Total')}</span>
                    {productCart && !isSoldOut && maxProductQuantity > 0 && (
                      <p>
                        <span>{productCart?.quantity}</span>
                        <span>{t('PRODUCTS', 'Products')}</span>
                      </p>
                    )}
                  </h1>
                  {!orderState.loading && (
                    <span>{productCart.total && parsePrice(productCart.total)}</span>
                  )}
                </ProductActionHeader>
                <ProductActionContent>
                  {
                    productCart && !isSoldOut && maxProductQuantity > 0 && (
                      <div className='incdec-control'>
                        <BisMinusCircle
                          onClick={decrement}
                          className={`${productCart.quantity === 1 || isSoldOut ? 'disabled' : ''}`}
                        />
                        <span>{productCart.quantity}</span>
                        <AiFillPlusCircle
                          onClick={increment}
                          className={`${maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : ''}`}
                        />
                      </div>
                    )
                  }

                  {productCart && !isSoldOut && maxProductQuantity > 0 && auth && orderState.options?.address_id && (
                    <Button
                      className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                      color='primary'
                      onClick={() => handleSaveProduct()}
                      disabled={orderState.loading}
                    >
                      {orderState.loading ? (
                        <span>{t('LOADING', 'Loading')}</span>
                      ) : (
                        <span>
                          {editMode ? t('UPDATE', 'Update') : t('ADD_TO_CART', 'Add to Cart')}
                        </span>
                      )}
                    </Button>
                  )}

                  {auth && !orderState.options?.address_id && (
                    orderState.loading ? (
                      <Button
                        className='add'
                        color='primary'
                        disabled
                      >
                        {t('LOADING', 'Loading')}
                      </Button>
                    ) : (
                      <AddressList
                        isModal
                        userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
                        addressList={isNaN(userCustomer?.id) ? user.addresses : null}
                        isProductForm
                      />
                    )
                  )}

                  {(!auth || isSoldOut || maxProductQuantity <= 0) && (
                    <Button
                      className={`add ${!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''}`}
                      color='primary'
                      outline
                      disabled={isSoldOut || maxProductQuantity <= 0}
                      onClick={() => setModalIsOpen(true)}
                    >
                      {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up')}
                    </Button>
                  )}
                </ProductActionContent>
              </ProductActions>
            </ProductInfo>
          </>
        )}

        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='70%'
            padding='0'
          >
            {modalPageToShow === 'login' && (
              <LoginForm
                handleSuccessLogin={handleSuccessLogin}
                elementLinkToSignup={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'signup' })
                    } href='#'
                  >{t('CREATE_ACCOUNT', 'Create account')}
                  </a>
                }
                elementLinkToForgotPassword={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                    } href='#'
                  >{t('RESET_PASSWORD', 'Reset password')}
                  </a>
                }
                useLoginByCellphone
                isPopup
              />
            )}
            {modalPageToShow === 'signup' && (
              <SignUpForm
                elementLinkToLogin={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'login' })
                    } href='#'
                  >{t('LOGIN', 'Login')}
                  </a>
                }
                useLoginByCellphone
                useChekoutFileds
                handleSuccessSignup={handleSuccessSignup}
                isPopup
              />
            )}
            {modalPageToShow === 'forgotpassword' && (
              <ForgotPasswordForm
                elementLinkToLogin={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'login' })
                    } href='#'
                  >{t('LOGIN', 'Login')}
                  </a>
                }
                isPopup
              />
            )}
          </Modal>
        )}

        {error && error.length > 0 && (
          <NotFoundSource
            content={error[0]?.message || error[0]}
          />
        )}
      </ProductContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ProductForm = (props) => {
  const productOptionsProps = {
    ...props,
    UIComponent: ProductOptionsUI
  }

  return (
    <ProductOptions {...productOptionsProps} />
  )
}
