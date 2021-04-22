import React, { useState, useEffect } from 'react'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage } from 'ordering-components'
import {
  AddressContainer,
  UserAddress,
  Map,
  Text,
  WrappMap
} from './styles'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { AddressList } from '../AddressList'

const AddressDetailsUI = (props) => {
  const {
    isCartView,
    addressToShow,
    googleMapsUrl
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [openChangeAddressModal, setOpenChangeAddressModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setOpenChangeAddressModal(false)
  }

  useEffect(() => {
    return () => setOpenChangeAddressModal(false)
  }, [])

  return (
    <AddressContainer isCartView={isCartView}>
      {!isCartView && (
        <UserAddress>
          <h1>{t('ADDRESS', 'Address')}</h1>
          <span onClick={() => setOpenChangeAddressModal(true)}>{t('CHANGE', 'Change')}</span>
        </UserAddress>
      )}
      <WrappMap>
        <Map>
          <img src={googleMapsUrl} id='google-maps-image' alt='google-maps-location' width='288px' height='162px' loading='lazy' />
        </Map>
        {!isCartView && (
          <Text>
            <h4>{addressToShow || orderState?.options?.address?.address}</h4>
          </Text>
        )}
      </WrappMap>

      <Modal
        title={t('CHANGE_ADDRESS', 'Change Address')}
        open={openChangeAddressModal}
        width='70%'
        onClose={() => setOpenChangeAddressModal(false)}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          onCancel={() => setOpenChangeAddressModal(false)}
          onAccept={() => handleFindBusinesses()}
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
