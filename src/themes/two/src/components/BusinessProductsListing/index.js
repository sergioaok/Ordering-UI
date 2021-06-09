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
  WrapBottomSection
} from './styles'

import { NotFoundSource } from '../NotFoundSource'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { PageNotFound } from '../PageNotFound'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'
import { BusinessCartContent } from '../BusinessCartContent'
import { GroupOrderForm } from '../GroupOrderForm'
import { AllDayPopover } from '../AllDayPopover'
import { FloatingButton } from '../FloatingButton'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
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
    filterByMenus,
    handleChangeFilterByMenus
  } = props

  const { business, menus, loading, error } = businessState
  const [, t] = useLanguage()
  const [{ carts, options }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [{ auth }] = useSession()
  const windowSize = useWindowSize()

  const [openProduct, setModalIsOpen] = useState(false)
  const [openGroupOrder, setOpenGroupOrder] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const [openPopover, setOpenPopover] = useState({})
  const [events] = useEvent()
  const location = useLocation()

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const OnGroupOrderClick = () => {
    setOpenGroupOrder(true)
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

  const closeModalGroupOrderForm = () => {
    setOpenGroupOrder(false)
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

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }
  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
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
    <Container>
      <ProductsContainer>
        {
          !loading && business?.id && (
            <>
              <BusinessBasicInformation
                businessState={businessState}
                setOpenBusinessInformation={setOpenBusinessInformation}
                openBusinessInformation={openBusinessInformation}
                OnGroupOrderClick={OnGroupOrderClick}
              />
              <AllDayPopover
                menus={menus}
                filterByMenus={filterByMenus}
                handleChangeFilterByMenus={handleChangeFilterByMenus}
                allTime={business?.today}
                open={openPopover.allDay}
                onClick={() => handleTogglePopover('allDay')}
                onClose={() => handleClosePopover('allDay')}
              />
              {!(business?.categories?.length === 0 && !categoryId) && (
                <BusinessProductsCategories
                  categories={[{ id: null, name: t('ALL', 'All') }, { id: 'featured', name: t('FEATURED', 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                  categorySelected={categorySelected}
                  onClickCategory={handleChangeCategory}
                  featured={featuredProducts}
                  allTime={business?.today}
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
                  handleClearSearch={handleChangeSearch}
                />
              </WrapContent>
              <WrapBottomSection>
                <p>{t('PRICES_ON_THIS_MENU_ARE_SET_DIRECTLY_BY_THE_MERCHANT', 'Prices on this menu are set directly by the Merchant.')}</p>
              </WrapBottomSection>
            </>
          )
        }

        <Modal
          width='55%'
          open={openProduct}
          closeOnBackdrop
          onClose={() => closeModalProductForm()}
          padding='0'
          isProductForm
        >

          {productModal.loading && !productModal.error && (
            <ProductLoading>
              <SkeletonItem>
                <Skeleton height={45} />
                <Skeleton height={250} />
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
        <Modal
          width='70%'
          open={openGroupOrder}
          closeOnBackdrop
          onClose={() => closeModalGroupOrderForm()}
          padding='0'
        >
          <GroupOrderForm />
        </Modal>
        {loading && !error && (
          <>
            <BusinessBasicInformation
              businessState={{ business: {}, loading: true }}
              isSkeleton
              handler={handler}
              openBusinessInformation={openBusinessInformation}
              OnGroupOrderClick={OnGroupOrderClick}
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
              />
            </WrapContent>
          </>
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
      {!loading && business?.id ? (
        <BusinessCartContent
          cart={currentCart}
          orderType={options?.type || 1}
          business={business}
          userLocation={options?.address?.location}
          categoryState={categoryState}
        />
      ) : (
        <BusinessCartContent
          isSkeleton
        />
      )}
      {currentCart?.products?.length > 0 && auth && windowSize.width < 768 && (
        <FloatingButton
          btnText={
            !currentCart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(currentCart?.maximum)}`
            ) : !currentCart?.valid_minimum ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(currentCart?.minimum)}`
            ) : t('VIEW_ORDER', 'View Order')
          }
          isSecondaryBtn={!currentCart?.valid_maximum || !currentCart?.valid_minimum}
          btnValue={currentCart?.products?.length}
          handleClick={() => onCheckoutRedirect(currentCart?.uuid)}
          disabled={!currentCart?.valid_maximum || !currentCart?.valid_minimum}
        />
      )}
    </Container>
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
