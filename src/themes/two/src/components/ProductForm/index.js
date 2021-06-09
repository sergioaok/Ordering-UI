import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils
} from 'ordering-components'

import { scrollTo } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
// import { ProductShare } from '../ProductShare'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { AddressList } from '../AddressList'

import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'

import {
  ProductContainer,
  ProductHeader,
  WrapperImage,
  ProductImage,
  ProductInfo,
  ProductEdition,
  SectionTitle,
  ProductActions,
  ProductComment,
  SkeletonBlock,
  WrapperSubOption,
  ProductFormTitle,
  WrapperIngredients,
  SectionDescription,
  AuthContainer
} from './styles'
import { useTheme } from 'styled-components'
import { TextArea } from '../../styles/Inputs'
import { NotFoundSource } from '../NotFoundSource'
// import { SoldOutRecommendationSelector } from '../SoldOutRecommendationSelector'

const ProductOptionsUI = (props) => {
  const {
    // businessSlug,
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
    <ProductContainer className='product-container'>
      {loading && !error && (
        <SkeletonBlock width={90}>
          <Skeleton variant='rect' height={200} />
          <Skeleton variant='rect' height={50} />
          <Skeleton variant='rect' height={50} />
        </SkeletonBlock>
      )}

      {!loading && !error && product && (
        <>
          <ProductHeader>
            <ProductFormTitle>
              <h1>{product?.name}</h1>
              {product?.description && <p>{product?.description}</p>}
            </ProductFormTitle>
            <WrapperImage>
              <ProductImage id='product_image'>
                <img src={product?.images || theme.images?.dummies?.product} alt='product' width='300px' height='300px' loading='lazy' />
              </ProductImage>
            </WrapperImage>
          </ProductHeader>
          <ProductInfo>
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
                                      productName={product?.name}
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
                <SectionTitle>{t('PREFERENCES', 'Preferences')}</SectionTitle>
                <SectionDescription>
                  <span>{t('EXTRA_INSTRUCTIONS', 'Extra instructions')}</span>
                  <span>{t('LIST_ANY_SPECIAL_REQUEST', 'List any special request')}</span>
                </SectionDescription>
                <TextArea
                  rows={4}
                  placeholder={t('E_G_ALLERGIES_EXTRA_SPICY_ETC', 'e.g. allergies, extra spicy, etc.')}
                  defaultValue={productCart.comment}
                  onChange={handleChangeCommentState}
                  disabled={!(productCart && !isSoldOut && maxProductQuantity)}
                />
              </ProductComment>
              {/* {isSoldOut && (
                <SoldOutRecommendationSelector />
              )} */}
            </ProductEdition>
          </ProductInfo>
          <ProductActions>
            {
              productCart && !isSoldOut && maxProductQuantity > 0 && (
                <div className='incdec-control'>
                  <FiMinusCircle
                    onClick={decrement}
                    className={`${productCart.quantity === 1 || isSoldOut ? 'disabled' : ''}`}
                  />
                  <span>{productCart.quantity}</span>
                  <FiPlusCircle
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
                borderRounded
              >
                {orderState.loading ? (
                  <span>{t('LOADING', 'Loading ')}</span>
                ) : (
                  <span>
                    {editMode ? t('UPDATE', 'Update') : t('ADD_TO_CART', 'Add to Cart')}
                  </span>
                )}
                {!orderState.loading &&
                  <span> - </span>}
                <span>{productCart.total && parsePrice(productCart.total)}</span>
              </Button>
            )}

            {auth && !orderState.options?.address_id && (
              orderState.loading ? (
                <Button
                  className='add'
                  color='primary'
                  disabled
                  borderRounded
                >
                  {t('LOADING', 'Loading ')}
                </Button>
              ) : (
                <AddressList
                  isModal
                  addressList={user.addresses}
                  isProductForm
                />
              )
            )}

            {(!auth || isSoldOut || maxProductQuantity <= 0) && (
              <Button
                className={`add ${!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''}`}
                color='primary'
                outline
                borderRounded
                disabled={isSoldOut || maxProductQuantity <= 0}
                onClick={() => setModalIsOpen(true)}
              >
                {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up')}
              </Button>
            )}
          </ProductActions>
        </>
      )}

      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          onClose={() => closeModal()}
          width='55%'
          padding='0'
        >
          <AuthContainer>
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
          </AuthContainer>
        </Modal>
      )}

      {error && error.length > 0 && (
        <NotFoundSource
          content={error[0]?.message || error[0]}
        />
      )}
    </ProductContainer>
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
