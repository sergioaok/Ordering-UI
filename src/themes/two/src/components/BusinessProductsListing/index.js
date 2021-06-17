import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder,
  useSession,
  useUtils
} from 'ordering-components'

import {
  Container,
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrapperSearch,
  WrappLayout,
  BusinessCartContainer,
  BusinessCartInnerContainer,
  ProductsHeader,
  DeliveryInfo,
  DeliveryTime,
  DeliveryPrice
} from './styles'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { ProductForm } from '../ProductForm'
import { FloatingButton } from '../../../../../components/FloatingButton'
import { Modal } from '../Modal'
import { SearchBar } from '../SearchBar'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { Cart } from '../../../../../components/Cart'
import { Select } from '../../../../../styles/Select'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { convertHoursToMinutes } from '../../../../../utils'

import { useTheme } from 'styled-components'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    sortByValue,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    onProductRedirect,
    onCheckoutRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    handleChangeSortBy,
    isCartOnProductsList,
    errorQuantityProducts
  } = props

  const { business, loading, error } = businessState
  const [, t] = useLanguage()
  const [{ options, carts }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const [{ auth }] = useSession()

  const location = useLocation()
  const theme = useTheme()
  const windowSize = useWindowSize()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  const sortByOptions = [
    { value: null, content: t('SORT_BY', 'Sort By'), showOnSelected: t('SORT_BY', 'Sort By') },
    { value: 'rank', content: t('RANK', 'Rank'), showOnSelected: t('RANK', 'Rank') },
    { value: 'a-z', content: t('A_to_Z', 'A-Z'), showOnSelected: t('A_to_Z', 'A-Z') }
  ]

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const onProductClick = (product) => {
    onProductRedirect({
      slug: business?.slug,
      product: product.id,
      category: product.category_id
    })
    setCurProduct(product)
    setModalIsOpen(true)
    events.emit('product_clicked', product)
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
      onProductRedirect({
        slug: business?.slug
      })
    }
  }

  const closeModalProductForm = () => {
    setModalIsOpen(false)
    handleUpdateInitialRender(false)
    updateProductModal(null)
    setCurProduct(null)
    onProductRedirect({
      slug: business?.slug
    })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  const handleChangePage = (data) => {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false)
    }
  }

  const handleUpsellingPage = () => {
    onCheckoutRedirect(currentCart?.uuid)
    setOpenUpselling(false)
    setCanOpenUpselling(false)
  }

  useEffect(() => {
    if (categoryId && productId && isInitialRender) {
      if (productModal?.product?.id) {
        setCurProduct(productModal.product)
      }
      setModalIsOpen(true)
    }
  }, [productModal])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
    events.emit('get_current_view')
  }, [])

  useEffect(() => {
    events.on('change_view', handleChangePage)
    return () => {
      events.off('change_view', handleChangePage)
    }
  }, [openProduct])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <ProductsContainer>
          {
            !loading && business?.id && (
              <WrappLayout
                isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
              >
                <div className='bp-list'>
                  <BusinessBasicInformation
                    businessState={businessState}
                    setOpenBusinessInformation={setOpenBusinessInformation}
                    openBusinessInformation={openBusinessInformation}
                  />
                  <ProductsHeader
                    isDelivery={options.type === 1}
                  >
                    {options.type === 1 && (
                      <DeliveryInfo>
                        <DeliveryPrice>
                          {!businessState?.loading ? (
                            <h2>
                              {businessState?.business && parsePrice(businessState?.business?.delivery_price || 0)}
                            </h2>
                          ) : (
                            <Skeleton width={70} />
                          )}
                          <p>{t('DELIVERY_FEE', 'Delivery fee')}</p>
                        </DeliveryPrice>
                        <DeliveryTime>
                          {!businessState?.loading ? (
                            <>
                              {options?.type === 1 ? (
                                <h2>
                                  {parseInt(convertHoursToMinutes(businessState?.business?.delivery_time))}
                                </h2>
                              ) : (
                                <h5>
                                  {parseInt(convertHoursToMinutes(businessState?.business?.pickup_time))}
                                </h5>
                              )}
                            </>
                          ) : (
                            <Skeleton width={70} />
                          )}
                          <p>{t('MINUTES', 'minutes')}</p>
                        </DeliveryTime>
                      </DeliveryInfo>
                    )}

                    {(categoryState.products.length !== 0 || searchValue) && !errorQuantityProducts && (
                      <WrapperSearch
                        isDelivery={options.type === 1}
                      >
                        <SearchBar
                          isCustomLayout
                          onSearch={handleChangeSearch}
                          search={searchValue}
                          placeholder={t('SEARCH', 'Search')}
                          lazyLoad={businessState?.business?.lazy_load_products_recommended}
                        />
                        <Select
                          notAsync
                          notReload
                          options={sortByOptions}
                          defaultValue={sortByValue}
                          onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                        />
                      </WrapperSearch>
                    )}
                  </ProductsHeader>
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessProductsCategories
                      categories={[{ id: null, name: t('ALL', 'All') }, { id: 'featured', name: t('FEATURED', 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                      categorySelected={categorySelected}
                      onClickCategory={handleChangeCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                    />
                  )}

                  <WrapContent>
                    <BusinessProductsList
                      categories={[
                        { id: null, name: t('ALL', 'All') },
                        { id: 'featured', name: t('FEATURED', 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      category={categorySelected}
                      categoryState={categoryState}
                      businessId={business.id}
                      errors={errors}
                      onProductClick={onProductClick}
                      handleSearchRedirect={handleSearchRedirect}
                      featured={featuredProducts}
                      searchValue={searchValue}
                      isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                      handleClearSearch={handleChangeSearch}
                      errorQuantityProducts={errorQuantityProducts}
                    />
                  </WrapContent>
                </div>
              </WrappLayout>
            )
          }

          {loading && !error && (
            <WrappLayout>
              <BusinessBasicInformation
                businessState={{ business: {}, loading: true }}
                isSkeleton
                handler={handler}
                openBusinessInformation={openBusinessInformation}
              />
              <BusinessProductsCategories
                categories={[]}
                isSkeleton
                openBusinessInformation={openBusinessInformation}
              />
              <WrapContent>
                <BusinessProductsList
                  categories={[]}
                  category={categorySelected}
                  categoryState={categoryState}
                  isBusinessLoading={loading}
                  errorQuantityProducts={errorQuantityProducts}
                />
              </WrapContent>
            </WrappLayout>
          )}

          {
            !loading && business && !Object.keys(business).length && (
              <NotFoundSource
                content={t('NOT_FOUND_BUSINESS_PRODUCTS', 'No products to show at this business, please try with other business.')}
                btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
                onClickButton={() => handleSearchRedirect()}
              />
            )
          }

          {
            !loading && !business && location.pathname.includes('/store/') && (
              <NotFoundSource
                content={t('ERROR_NOT_FOUND_STORE', 'Sorry, an error has occurred with business selected.')}
                btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
                onClickButton={handleSearchRedirect}
              />
            )
          }

          {
            !loading && !business && !location.pathname.includes('/store/') && (
              <PageNotFound />
            )
          }

          {error && error.length > 0 && Object.keys(business).length && (
            <NotFoundSource
              content={error[0]?.message || error[0]}
              btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
              onClickButton={handleSearchRedirect}
            />
          )}
        </ProductsContainer>
        <BusinessCartContainer>
          <BusinessCartInnerContainer>
            {loading ? (
              <Skeleton height={250} />
            ) : (
              <>
                {currentCart?.products?.length > 0 ? (
                  <Cart
                    isForceOpenCart
                    cart={currentCart}
                    isCartPending={currentCart?.status === 2}
                    isProducts={currentCart.products.length}
                    isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                    handleCartOpen={(val) => setIsCartOpen(val)}
                  />
                ) : (
                  <>
                    <img src={theme.images.general?.businessEmptyCart} alt='empty cart' />
                    <p>{t('ADD_ITEMS_TO_GET_STARTED', 'Add items to get started')}</p>
                  </>
                )}
              </>
            )}
          </BusinessCartInnerContainer>
        </BusinessCartContainer>
      </Container>
      {currentCart?.products?.length > 0 && auth && windowSize.width < 1024 && (
        <FloatingButton
          btnText={
            !currentCart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(currentCart?.maximum)}`
            ) : !currentCart?.valid_minimum ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(currentCart?.minimum)}`
            ) : !openUpselling ? t('VIEW_ORDER', 'View Order') : t('LOADING', 'Loading')
          }
          isSecondaryBtn={!currentCart?.valid_maximum || !currentCart?.valid_minimum}
          btnValue={currentCart?.products?.length}
          handleClick={() => setOpenUpselling(true)}
          disabled={openUpselling || !currentCart?.valid_maximum || !currentCart?.valid_minimum}
        />
      )}

      <Modal
        width='750px'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
      >

        {productModal.loading && !productModal.error && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} count={8} />
            </SkeletonItem>
          </ProductLoading>
        )}

        {productModal.error && productModal.error.length > 0 && (
          <NotFoundSource
            content={productModal.error[0]?.message || productModal.error[0]}
          />
        )}

        {isInitialRender && !productModal.loading && !productModal.error && !productModal.product && (
          <NotFoundSource
            content={t('ERROR_GET_PRODUCT', 'Sorry, we couldn\'t find the requested product.')}
          />
        )}
        {(productModal.product || curProduct) && (
          <ProductForm
            businessSlug={business?.slug}
            product={productModal.product || curProduct}
            businessId={business?.id}
            onSave={handlerProductAction}
          />
        )}
      </Modal>

      {currentCart?.products && openUpselling && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          business={currentCart?.business}
          cartProducts={currentCart?.products}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }

  return (
    <BusinessAndProductList {...businessProductslistingProps} />
  )
}
