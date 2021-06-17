import React, { useState, useEffect, useRef } from 'react'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer } from 'ordering-components'
import { useTheme } from 'styled-components'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import MdClose from '@meronex/icons/md/MdClose'

import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  SubMenu,
  CustomerInfo,
  UserEdit,
  ToTitle
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { capitalize } from '../../../../../utils'

import { LanguageSelector } from '../LanguageSelector'
import { AddressesPopover } from '../AddressesPopover'
import { UserPopover } from '../../../../../components/UserPopover'
import { MomentPopover } from '../MomentPopover'
import { CartPopover } from '../CartPopover'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { CartContent } from '../../../../../components/CartContent'
import { Modal } from '../../../../../components/Modal'
import { MomentContent } from '../MomentContent'
import { AddressList } from '../../../../../components/AddressList'
import { AddressForm } from '../../../../../components/AddressForm'
import { HeaderOption } from '../HeaderOption'
import { SidebarMenu } from '../SidebarMenu'
import { UserDetails } from '../../../../../components/UserDetails'
import { Confirm } from '../../../../../components/Confirm'

export const Header = (props) => {
  const {
    isHome,
    location,
    isShowOrderOptions,
    isHideSignup,
    isCustomerMode
  } = props

  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState, { refreshOrderOptions }] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()
  const [customerState, { deleteUserCustomer }] = useCustomer()

  const clearCustomer = useRef(null)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products.length > 0)) || null

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const handleClickUserCustomer = (e) => {
    const isActionsClick = clearCustomer.current?.contains(e?.target)
    if (isActionsClick) {
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', 'Are you sure that you want to clear the customer?'),
        handleOnAccept: () => {
          deleteUserCustomer(true)
          refreshOrderOptions()
          handleGoToPage({ page: 'home' })
          setConfirm({ ...confirm, open: false })
        }
      })
      return
    }
    setCustomerModalOpen(true)
  }

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

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [customerState?.user?.address])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderContainer home={isHome}>
        <InnerHeader>
          <LeftHeader>
            <SidebarMenu
              auth={auth}
              isHideSignup={isHideSignup}
              userCustomer={userCustomer}
            />
            {!isHome && (
              <>
                {windowSize.width < 768 ? (
                  <LogoHeader>
                    <img
                      alt='Isotype'
                      width='35px'
                      height='45px'
                      src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy'
                      onClick={() => handleGoToPage({ page: orderState?.options?.address?.location && !isCustomerMode ? 'search' : 'home' })}
                    />
                  </LogoHeader>
                ) : (
                  <LogoHeader>
                    <img
                      alt='Logotype'
                      width='170px'
                      height='45px'
                      src={isHome ? theme?.images?.logos?.logotypeInvert : theme?.images?.logos?.logotype} loading='lazy'
                      onClick={() => handleGoToPage({ page: orderState?.options?.address?.location && !isCustomerMode ? 'search' : 'home' })}
                    />
                  </LogoHeader>
                )}
              </>
            )}
            {isShowOrderOptions && (
              <Menu className='left-header'>
                {isCustomerMode && windowSize.width > 450 && (
                  <CustomerInfo
                    isHome={isHome}
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <span>
                      <FaUserCircle />
                      <p>{userCustomer?.name} {userCustomer?.lastname}</p>
                    </span>
                    <span
                      style={styles.headCustomer}
                      ref={clearCustomer}
                    >
                      <MdClose style={styles.clearCustomer} />
                    </span>
                  </CustomerInfo>
                )}
                {!configState?.loading && configTypes.length > 0 && (
                  <OrderTypeSelectorHeader configTypes={configTypes} />
                )}
                {onlineStatus && windowSize.width > 992 && (
                  <>
                    <MomentPopover
                      open={openPopover.moment}
                      onClick={() => handleTogglePopover('moment')}
                      onClose={() => handleClosePopover('moment')}
                      isHome={isHome}
                    />
                    <ToTitle home={isHome}>
                      {t('TO', 'to')}
                    </ToTitle>
                    <AddressesPopover
                      auth={auth}
                      addressState={orderState?.options?.address}
                      open={openPopover.addresses}
                      onClick={() => handleTogglePopover('addresses')}
                      onClose={() => handleClosePopover('addresses')}
                      isHome={isHome}
                    />
                  </>
                )}
              </Menu>
            )}
          </LeftHeader>
          {onlineStatus && (
            <RightHeader>
              <LanguageSelector />
              <Menu>
                {
                  !auth && windowSize.width > 870 && (
                    <>
                      <MenuLink home={isHome} onClick={() => handleGoToPage({ page: 'signin' })} name='signin'>{t('SIGN_IN', 'Sign in')}</MenuLink>
                      {!isHideSignup && (
                        <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1} name='signup'>{t('SIGN_UP', 'Sign up')}</MenuLink>
                      )}
                    </>
                  )
                }
                {
                  auth && (
                    <>
                      {windowSize.width > 768 && (
                        <UserPopover
                          withLogout
                          isCustomerMode={isCustomerMode}
                          open={openPopover.user}
                          isHome={isHome}
                          onClick={() => handleTogglePopover('user')}
                          onClose={() => handleClosePopover('user')}
                        />
                      )}
                      {isShowOrderOptions && (
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
                    </>
                  )
                }
              </Menu>
            </RightHeader>
          )}
        </InnerHeader>
        {onlineStatus && isShowOrderOptions && (
          windowSize.width > 768 && windowSize.width <= 992 ? (
            <SubMenu>
              <AddressesPopover
                auth={auth}
                addressState={orderState?.options?.address}
                open={openPopover.addresses}
                onClick={() => handleTogglePopover('addresses')}
                onClose={() => handleClosePopover('addresses')}
                isHome={isHome}
              />
              <MomentPopover
                open={openPopover.moment}
                onClick={() => handleTogglePopover('moment')}
                onClose={() => handleClosePopover('moment')}
                isHome={isHome}
              />
            </SubMenu>
          ) : (
            <SubMenu>
              <HeaderOption
                variant='address'
                addressState={orderState?.options?.address?.address?.split(',')?.[0]}
                onClick={(variant) => openModal(variant)}
                isHome={isHome}
              />
              <HeaderOption
                variant='moment'
                momentState={orderState?.options?.moment}
                onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                  ? null
                  : (variant) => openModal(variant)}
                isHome={isHome}
              />
            </SubMenu>
          )
        )}
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
                  userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
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
        {isCustomerMode && customerModalOpen && (
          <Modal
            open={customerModalOpen}
            width='60%'
            onClose={() => setCustomerModalOpen(false)}
          >
            <UserEdit>
              {!customerState?.loading && (
                <>
                  <UserDetails
                    userData={customerState?.user}
                    userId={customerState?.user?.id}
                    isCustomerMode
                  />
                  <AddressList
                    isModal
                    userId={customerState?.user?.id}
                    changeOrderAddressWithDefault
                    userCustomerSetup={customerState.user}
                    setCustomerModalOpen={setCustomerModalOpen}
                  />
                </>
              )}
            </UserEdit>
          </Modal>
        )}
        <Confirm
          title={t('CUSTOMER', 'Customer')}
          content={confirm.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={isCustomerMode && confirm.open}
          onClose={() => setConfirm({ ...confirm, open: false })}
          onCancel={() => setConfirm({ ...confirm, open: false })}
          onAccept={confirm.handleOnAccept}
          closeOnBackdrop={false}
        />
      </HeaderContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

const styles = {
  headCustomer: {
    margin: 0,
    height: 20,
    width: 20,
    backgroundColor: '#CCCCCC',
    borderRadius: '100%',
    marginLeft: 5
  },
  clearCustomer: {
    margin: 0,
    fontSize: 20
  }
}

Header.defaultProps = {
  isShowOrderOptions: true
}
