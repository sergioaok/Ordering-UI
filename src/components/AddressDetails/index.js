import React, { useState, useEffect } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage } from 'ordering-components'

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
    isCartPending,
    userAddress,
    orderType,
    googleMapsUrl
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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
    <AddressContainer>
      <Header>
        <Text>
          <h4>{userAddress}</h4>
          {orderType === 1 && !isCartPending &&
            <TiPencil
              onClick={() => setOpenModal(true)}
            />}
        </Text>
      </Header>
      <WrappMap>
        <Map>
          <img src={googleMapsUrl} alt='google-maps-location' />
        </Map>
      </WrappMap>

      <Modal
        title={t('ADDRESSES', 'Addresses')}
        open={openModal}
        width='70%'
        onClose={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        onAccept={() => handleFindBusinesses()}
      >
        <AddressList
          changeOrderAddressWithDefault
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
