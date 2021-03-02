import React from 'react'
import { useLanguage } from 'ordering-components'
import { AddressList } from '../../../AddressList/theme/two'
import { AddressForm } from '../../../AddressForm/theme/two'
import {
  Container,
  Title
} from './styles'

export const AddressContent = (props) => {
  const {
    auth,
    addressState
  } = props
  const [, t] = useLanguage()
  return (
    <Container>
      {auth && (
        <>
          <AddressList
            isPopover
            changeOrderAddressWithDefault
            onClosePopover={props.onClose}
          />
        </>)}
      {!auth && (
        <>
          <Title>{t('ADDRESS', 'Address')}</Title>
          <AddressForm
            useValidationFileds
            address={addressState || {}}
            onClose={() => props.onClose && props.onClose()}
            onCancel={() => props.onClose && props.onClose()}
            onSaveAddress={() => props.onClose && props.onClose()}
          />
        </>)}
    </Container>
  )
}