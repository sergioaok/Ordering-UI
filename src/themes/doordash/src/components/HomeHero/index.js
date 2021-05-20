import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import HiArrowRight from '@meronex/icons/hi/HiArrowRight'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput,
  InputSpan,
  LogoHeader
} from './styles'

import { Modal } from '../../../../../components/Modal'
import { AddressForm } from '../../../../../components/AddressForm'
import { AddressList } from '../../../../../components/AddressList'

export const HomeHero = (props) => {
  const {
    onFindBusiness,
    heroAlignment
  } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <HeroContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper heroAlignment={heroAlignment}>
          {theme.template?.heroHasLogo &&
            <LogoHeader>
              <img alt='Logotype' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
            </LogoHeader>}
          <Title heroAlignment={heroAlignment}>{t('HERO_LINE_1', 'Restaurants and more,')}</Title>
          <Slogan heroAlignment={heroAlignment}>{t('HERO_LINE_2', 'delivered to your door')}</Slogan>
          <WrapInput onClick={handleAddressInput} withIcon>
            <HiOutlineLocationMarker className='LocationMarker' />
            <HiArrowRight className='ArrowRight' />
            <InputSpan
              name='address-selection'
              aria-label='address selection'
              type='text'
              placeholder={orderState?.options?.address?.address || t('TYPE_AN_ADDRESS', 'Type an address')}
            />
            <div>
              {orderState?.options?.address?.address || t('TYPE_AN_ADDRESS', 'Type an address')}
            </div>
          </WrapInput>
        </ContentWrapper>

        <Modal
          title={t('ADDRESS', 'Address')}
          open={modals.formOpen}
          onClose={() => setModals({ ...modals, formOpen: false })}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals({ ...modals, formOpen: false })}
            onSaveAddress={() => setModals({ ...modals, formOpen: false })}
            onCancel={() => setModals({ ...modals, formOpen: false })}
          />
        </Modal>
        <Modal
          title={t('ADDRESSES', 'Addresses')}
          open={modals.listOpen}
          width='70%'
          onClose={() => setModals({ ...modals, listOpen: false })}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer) ? null : userCustomer}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            onAccept={() => handleFindBusinesses()}
          />
        </Modal>
      </HeroContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
