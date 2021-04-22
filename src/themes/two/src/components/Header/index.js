import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'
import { SidebarMenu } from '../SidebarMenu'
import { MomentPopover } from '../MomentPopover'
import { AddressesPopover } from '../AddressesPopover'
import { CartPopover } from '../CartPopover'
import { MomentContent } from '../MomentContent'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { HeaderOption } from '../HeaderOption'
import { Modal } from '../Modal'
import { CartContent } from '../CartContent'
import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  CenterHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  ToText,
  WrapMomentAndAddress,
  HeaderMobileViewBottom,
  HeaderMobileViewInnerBottom
} from './styles'
import { capitalize } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
export const Header = (props) => {
  const { isHome } = props
  const location = useLocation()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)

  const isBusinessListingPage = location.pathname === '/delivery' || location.pathname === '/pickup' || location.pathname === '/eatin' || location.pathname === '/curbside' || location.pathname === '/drivethru'
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/login' || location.pathname === '/signup'

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()
  const cartsWithProducts = Object.values(orderState?.carts).filter(cart => cart.products.length > 0)

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
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

  const handleAddProduct = () => {
    handleTogglePopover('cart')
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    if (windowSize.width > 992) return
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [windowSize.width])

  const handleChangePage = (orderType) => {
    switch (orderType) {
      case 1:
        handleGoToPage({ page: 'delivery' })
        break
      case 2:
        handleGoToPage({ page: 'pickup' })
        break
      case 3:
        handleGoToPage({ page: 'eatin' })
        break
      case 4:
        handleGoToPage({ page: 'curbside' })
        break
      case 5:
        handleGoToPage({ page: 'drivethru' })
        break
    }
  }

  return (
    <>
      <HeaderContainer isHome={isHome} isAuthPage={isAuthPage}>
        <InnerHeader>
          <LeftHeader>
            <SidebarMenu
              auth={auth}
              configTypes={configTypes}
            />
            {!configState?.loading && configTypes.length > 0 && isBusinessListingPage && windowSize.width > 992 && (
              <OrderTypeSelectorHeader
                dropDownStyle
                configTypes={configTypes}
                handleChangePage={handleChangePage}
              />
            )}
            {onlineStatus && isBusinessListingPage && (
              windowSize.width > 992 && (
                <WrapMomentAndAddress>
                  <MomentPopover
                    open={openPopover.moment}
                    onClick={() => handleTogglePopover('moment')}
                    onClose={() => handleClosePopover('moment')}
                    isHome={isHome}
                  />
                  <ToText>{t('TO', 'to')}</ToText>
                  <AddressesPopover
                    auth={auth}
                    addressState={orderState?.options?.address}
                    open={openPopover.addresses}
                    onClick={() => handleTogglePopover('addresses')}
                    onClose={() => handleClosePopover('addresses')}
                    isHome={isHome}
                  />
                </WrapMomentAndAddress>
              ))}
          </LeftHeader>
          <CenterHeader isHome={isHome}>
            <LogoHeader isHome={isHome} onClick={() => handleGoToPage({ page: orderState?.options?.address?.location ? 'search' : 'home' })}>
              <img alt='Logotype' width='170px' height='45px' src={isHome ? theme?.images?.logos?.logotypeInvert : theme?.images?.logos?.logotype} loading='lazy' />
              <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy' />
            </LogoHeader>
          </CenterHeader>
          {onlineStatus && (
            <RightHeader>
              <Menu>
                {
                  !auth && isHome && (
                    <>
                      <MenuLink onClick={() => handleGoToPage({ page: 'signin' })} name='signin'>{t('SIGN_IN', 'Sign in')}</MenuLink>
                      <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1} name='signup'>{t('SIGN_UP', 'Sign up')}</MenuLink>
                    </>
                  )
                }
                {!isHome && !isAuthPage && (
                  windowSize.width > 768 ? (
                    <CartPopover
                      open={openPopover.cart}
                      carts={cartsWithProducts}
                      onClick={() => handleTogglePopover('cart')}
                      onClose={() => handleClosePopover('cart')}
                      auth={auth}
                      location={location}
                    />
                  ) : (
                    <HeaderOption
                      variant='cart'
                      totalCarts={cartsWithProducts?.length}
                      onClick={(variant) => openModal(variant)}
                    />
                  )
                )}

              </Menu>
            </RightHeader>
          )}
        </InnerHeader>
        {modalIsOpen && (
          <Modal
            title={t(modalSelected.toUpperCase(), capitalize(modalSelected))}
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
            padding={modalSelected === 'address' ? '20px' : '5px'}
          >
            {modalSelected === 'cart' && (
              <CartContent
                carts={cartsWithProducts}
                isOrderStateCarts={!!orderState.carts}
                onClose={() => setModalIsOpen(false)}
              />
            )}
            {modalSelected === 'address' && (
              auth ? (
                <AddressList
                  isModal
                  changeOrderAddressWithDefault
                  onCancel={() => setModalIsOpen(false)}
                  onAccept={() => setModalIsOpen(false)}
                />
              ) : (
                <AddressForm
                  useValidationFileds
                  address={orderState?.options?.address || {}}
                  onCancel={() => setModalIsOpen(false)}
                  onSaveAddress={() => setModalIsOpen(false)}
                />
              )
            )}
            {modalSelected === 'moment' && (
              <MomentContent />
            )}
          </Modal>
        )}
      </HeaderContainer>
      {onlineStatus && isBusinessListingPage && (
        windowSize.width <= 992 && (
          <HeaderMobileViewBottom>
            <HeaderMobileViewInnerBottom>
              {!configState?.loading && configTypes.length > 0 && isBusinessListingPage && (
                <OrderTypeSelectorHeader
                  dropDownStyle
                  configTypes={configTypes}
                  handleChangePage={handleChangePage}
                />
              )}
              <WrapMomentAndAddress>
                <HeaderOption
                  variant='moment'
                  momentState={orderState?.options?.moment}
                  onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                    ? null
                    : (variant) => openModal(variant)}
                  isHome={isHome}
                />
                <ToText>{t('TO', 'to')}</ToText>
                <HeaderOption
                  variant='address'
                  addressState={orderState?.options?.address?.address?.split(',')?.[0]}
                  onClick={(variant) => openModal(variant)}
                  isHome={isHome}
                />
              </WrapMomentAndAddress>
            </HeaderMobileViewInnerBottom>
          </HeaderMobileViewBottom>
        )
      )}
    </>
  )
}
