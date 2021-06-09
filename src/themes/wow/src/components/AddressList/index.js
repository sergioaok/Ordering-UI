import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import HiPencil from '@meronex/icons/hi/HiPencil'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import FaHome from '@meronex/icons/fa/FaHome'
import FaPlus from '@meronex/icons/fa/FaPlus'
import FaRegBuilding from '@meronex/icons/fa/FaRegBuilding'
import FaRegHeart from '@meronex/icons/fa/FaRegHeart'
import BiCheck from '@meronex/icons/bi/BiCheck'
import {
  AddressList as AddressListController,
  useLanguage,
  useOrder,
  useCustomer,
  useEvent
} from 'ordering-components'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../../../../../components/Modal'
import { Confirm } from '../../../../../components/Confirm'
import { useTheme } from 'styled-components'
import { scrollTo } from '../../../../../utils'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import { AddressForm } from '../AddressForm'

import {
  AddressListContainer,
  AddressListUl,
  AddressItem,
  AddressItemActions,
  WrappNotAddresses,
  FormActions,
  ContinueButton,
  TagWrapper
} from './styles'

const AddressListUI = (props) => {
  const {
    actionStatus,
    addressList,
    handleDelete,
    setAddressList,
    handleSetDefault,
    isModal,
    isPopover,
    isProductForm,
    onCancel,
    onAccept,
    userId,
    userCustomerSetup,
    isEnableContinueButton,
    setCustomerModalOpen
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const windowSize = useWindowSize()

  const [curAddress, setCurAddress] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const theme = useTheme()
  const [{ user }] = useCustomer()

  const uniqueAddressesList = (addressList.addresses && addressList.addresses.filter(
    (address, i, self) =>
      i === self.findIndex(obj => (
        address.address === obj.address &&
        address.address_notes === obj.address_notes &&
        address.zipcode === obj.zipcode &&
        address.internal_number === obj.internal_number
      )))) || []

  const openAddress = (address) => {
    setCurAddress(address)
    setAddressOpen(true)
    const container = window.document.getElementsByClassName('form_edit')[0]
    container && scrollTo(container, 0, 500)
  }

  const handleSaveAddress = (address) => {
    let found = false
    const addresses = addressList.addresses.map(_address => {
      if (_address?.id === address?.id) {
        Object.assign(_address, address)
        found = true
      } else if (address.default) {
        _address.default = false
      }
      return _address
    })
    if (!found) {
      addresses.push(address)
    }
    setAddressList({
      ...addressList,
      addresses
    })
    if (userCustomerSetup) {
      handleSetAddress(address)
      return
    }
    setAddressOpen(false)
  }

  const handleSetAddress = (address) => {
    if (checkAddress(address) && userCustomerSetup?.id === user?.id) {
      events.emit('go_to_page', { page: 'search' })
      setCustomerModalOpen && setCustomerModalOpen(false)
      return
    }
    setAddressOpen(false)
    handleSetDefault(address, userCustomerSetup)
  }

  const handleDeleteClick = (address) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: () => {
        handleDelete(address)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const checkAddress = (address) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    if (userCustomerSetup) {
      return address.default
    }
    props.forEach(prop => {
      if (address[prop]) {
        if (prop === 'location') {
          values.push(address[prop].lat === orderState?.options?.address[prop]?.lat &&
            address[prop].lng === orderState?.options?.address[prop]?.lng)
        } else {
          values.push(address[prop] === orderState?.options?.address[prop])
        }
      } else {
        values.push(orderState?.options?.address[prop] === null || orderState?.options?.address[prop] === '')
      }
    })
    return values.every(value => value)
  }

  const getAddressIcon = (tag) => {
    switch (tag) {
      case 'other':
        return <FaPlus />
      case 'office':
        return <FaRegBuilding />
      case 'home':
        return <FaHome />
      case 'favorite':
        return <FaRegHeart />
      default:
        return <FaPlus />
    }
  }

  /**
   * Close modals and alerts
   */
  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
      setAddressOpen(false)
    }
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressListContainer
        id='address_control'
        isLoading={actionStatus?.loading || orderState?.loading}
        style={{ display: `${!addressOpen ? 'flex' : 'none'}` }}
      >
        {
          (!isPopover || !addressOpen) && (
            <Button
              className='add'
              outline
              color={isEnableContinueButton && addressList?.addresses?.length > 0 ? 'secondary' : 'primary'}
              onClick={() => openAddress({})}
              disabled={orderState?.loading || actionStatus.loading}
            >
              {(orderState?.loading || actionStatus.loading) ? t('LOADING', 'Loading') : t('ADD_ADDRESS', 'Add Address')}
            </Button>
          )
        }
        {
          isPopover && addressOpen && (
            <AddressForm
              userId={userId}
              addressesList={addressList?.addresses}
              useValidationFileds
              address={curAddress}
              onCancel={() => setAddressOpen(false)}
              onSaveAddress={handleSaveAddress}
              userCustomerSetup={userCustomerSetup}
            />
          )
        }
        {
          !addressList.loading &&
          !actionStatus.loading &&
          !orderState.loading &&
          !addressList.error &&
          addressList?.addresses?.length > 0 &&
          typeof orderState.options?.address === 'object' &&
          ((!addressOpen && isPopover) || isModal) && (
            <AddressListUl id='list'>
              {uniqueAddressesList.map(address => (
                <AddressItem key={address?.id} active={checkAddress(address)}>
                  <div className='wrapAddress' onClick={() => handleSetAddress(address)}>
                    <TagWrapper>
                      {getAddressIcon(address?.tag)}
                    </TagWrapper>
                    <div className='address'>
                      <span>{address.address}</span>
                      <span>{address.internal_number} {address.zipcode}</span>
                    </div>
                  </div>
                  <AddressItemActions className='form'>
                    {checkAddress(address) && (
                      <span><BiCheck /></span>
                    )}
                    <a className={actionStatus.loading ? 'disabled' : 'edit'} onClick={() => openAddress(address)}>
                      <HiPencil />
                    </a>
                    <a className={actionStatus.loading || address.default ? 'disabled' : 'delete'} onClick={() => handleDeleteClick(address)}>
                      <VscTrash />
                    </a>
                  </AddressItemActions>
                </AddressItem>
              ))}
              {isEnableContinueButton && uniqueAddressesList.map(address => address.default && (
                <ContinueButton key={address.id}>
                  <Button color='primary' onClick={() => handleSetAddress(address)}>
                    {t('CONTINUE_WITH', 'Continue with')}: {address.address}
                  </Button>
                </ContinueButton>
              ))}
            </AddressListUl>
          )
        }

        {!addressList.loading && !addressList.error && addressList?.addresses?.length === 0 && !isProductForm && (
          <WrappNotAddresses>
            <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='112px' loading='lazy' />
            <h1>{t('NOT_FOUND_ADDRESS.', 'Sorry, You don\'t seem to have any addresses.')}</h1>
          </WrappNotAddresses>
        )}

        {!addressList.loading && addressList.error && (
          addressList.error.length > 0 && (
            <NotFoundSource
              content={addressList.error[0]?.message || addressList.error[0]}
            />
          )
        )}

        {!addressList.loading && (typeof orderState.options?.address !== 'object') && !addressList.error && (
          <NotFoundSource
            content={t('NETWORK_ERROR', 'Network error, please reload the page')}
          />
        )}

        {(addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && (
          <AddressListUl>
            <Skeleton height={50} count={3} style={{ marginBottom: '10px' }} />
          </AddressListUl>
        )}

        {onCancel && onAccept && typeof orderState.options?.address === 'object' && (
          <FormActions>
            <Button
              outline
              type='button'
              disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
              onClick={() => onCancel()}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
            <Button
              disabled={(addressList.loading || actionStatus.loading || orderState.loading)}
              id='second-btn'
              color='primary'
              onClick={() => onAccept()}
            >
              {t('ACCEPT', 'Accept')}
            </Button>
          </FormActions>
        )}
        {
          !isPopover && windowSize.width > 992 && (
            <Modal
              title={t('ADDRESS', 'Address')}
              open={!isPopover && addressOpen}
              onClose={() => setAddressOpen(false)}
            >
              <AddressForm
                userId={userId}
                addressesList={addressList?.addresses}
                useValidationFileds
                address={curAddress}
                onCancel={() => setAddressOpen(false)}
                onSaveAddress={handleSaveAddress}
                userCustomerSetup={userCustomerSetup}
              />
            </Modal>
          )
        }
      </AddressListContainer>
      {!isPopover && addressOpen && windowSize.width < 992 && (
        <AddressForm
          userId={userId}
          addressesList={addressList?.addresses}
          useValidationFileds
          address={curAddress}
          onCancel={() => setAddressOpen(false)}
          onSaveAddress={handleSaveAddress}
          userCustomerSetup={userCustomerSetup}
        />
      )}
      <Confirm
        title={t('SEARCH', 'Search')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const AddressList = (props) => {
  const addressListProps = {
    ...props,
    UIComponent: AddressListUI
  }

  return <AddressListController {...addressListProps} />
}
