import React, { useState, useEffect } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage, useCustomer } from 'ordering-components'

import {
  AddressContainer,
  Header,
  Map,
  Text,
  WrappMap
} from './styles'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressList } from '../AddressList'

const AddressDetailsUI = (props) => {
  const {
    addressToShow,
    isCartPending,
    googleMapsUrl,
    isCustomerMode,
    apiKey,
    isFromCheckout
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [{ user }] = useCustomer()

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setOpenModal(false)
  }

  useEffect(() => {
    return () => setOpenModal(false)
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressContainer>
        <Header>
          <Text>
            <h4>{addressToShow || orderState?.options?.address?.address}</h4>
            {orderState?.options?.type === 1 && !isCartPending &&
              <TiPencil
                onClick={() => setOpenModal(true)}
              />}
          </Text>
        </Header>
        {apiKey && (
          <WrappMap>
            <Map>
              <img src={googleMapsUrl} id='google-maps-image' alt='google-maps-location' width='288px' height='162px' loading='lazy' />
            </Map>
          </WrappMap>
        )}

        <Modal
          title={t('ADDRESSES', 'Addresses')}
          open={openModal}
          width='70%'
          onClose={() => setOpenModal(false)}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => setOpenModal(false)}
            onAccept={() => handleFindBusinesses()}
            userCustomerSetup={isCustomerMode && user}
            isFromCheckout={isFromCheckout}
          />
        </Modal>

        <Alert
          title={t('SEARCH', 'Search')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => setAlertState({ open: false, content: [] })}
          onAccept={() => setAlertState({ open: false, content: [] })}
          closeOnBackdrop={false}
        />
      </AddressContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const AddressDetails = (props) => {
  const addressDetailsProps = {
    ...props,
    UIComponent: AddressDetailsUI
  }
  return (
    <AddressDetailsController {...addressDetailsProps} />
  )
}
