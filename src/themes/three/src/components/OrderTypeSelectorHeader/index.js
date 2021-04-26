import React, { useState } from 'react'
import { OrderTypeControl, useLanguage, useOrder } from 'ordering-components'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import { Select } from '../../styles/Select'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'

import {
  Option,
  OrderTypeWrapper,
  SelectedOption,
  ContentOption,
  Container,
  ModalContainer,
  ModalHeader
} from './styles'
const OrderTypeSelectorHeaderUI = (props) => {
  const {
    isButtonStyle,
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [modalOpen, setModalOpen] = useState(false)
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]
  const [orderType, setOrderType] = useState(null)

  const handleSelectOrderType = (_orderType) => {
    if (typeSelected === _orderType?.value) return
    setOrderType(_orderType)
    setModalOpen(true)
  }

  const handleConfirm = () => {
    handleChangeOrderType(orderType?.value)
    setModalOpen(false)
  }

  return (
    <>
      {isButtonStyle ? (
        <Container>
          {orderTypes.filter(type => configTypes?.includes(type.value)).map(orderType => (
            <Button
              color={`${typeSelected === orderType.value ? 'primary' : 'secundary'}`}
              key={orderType.value}
              disabled={orderState.loading}
              onClick={() => handleSelectOrderType(orderType)}
            >
              {orderType.content}
            </Button>
          ))}
        </Container>
      ) : (
        <>
          {typeSelected !== undefined && (
            <OrderTypeWrapper>
              <Select
                options={orderTypes.filter(type => configTypes?.includes(type.value))}
                defaultValue={defaultType || defaultValue || typeSelected}
                onChange={(orderType) => handleChangeOrderType(orderType)}
              />
            </OrderTypeWrapper>
          )}
        </>
      )}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ModalContainer>
          <ModalHeader>
            {t('SWITCH_TO', 'Switch to')} {orderType?.content}
          </ModalHeader>
          <p>{t('PRICE_AND_MENU_ITEMS_MAY_VARY', 'Prices and menu items may vary')}</p>
          <Button
            color='primary'
            rectangle
            disabled={orderState.loading}
            onClick={() => handleConfirm()}
          >
            {t('CONFIRM', 'Confirm')}
          </Button>
        </ModalContainer>
      </Modal>
    </>
  )
}

export const OrderTypeSelectorHeader = (props) => {
  const [, t] = useLanguage()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: <Option><MdcTruckDeliveryOutline /><ContentOption>{t('DELIVERY', 'Delivery')}</ContentOption></Option>,
        showOnSelected: <Option><MdcTruckDeliveryOutline /><SelectedOption>{t('DELIVERY', 'Delivery')}</SelectedOption></Option>
      },
      {
        value: 2,
        content: <Option><FaTruckPickup /><ContentOption>{t('PICKUP', 'Pickup')}</ContentOption></Option>,
        showOnSelected: <Option><FaTruckPickup /><SelectedOption>{t('PICKUP', 'Pickup')}</SelectedOption></Option>
      },
      {
        value: 3,
        content: <Option><AiFillShop /><ContentOption>{t('EAT_IN', 'Eat in')}</ContentOption></Option>,
        showOnSelected: <Option><AiFillShop /><SelectedOption>{t('EAT_IN', 'Eat in')}</SelectedOption></Option>
      },
      {
        value: 4,
        content: <Option><GiFoodTruck /><ContentOption>{t('CURBSIDE', 'Curbside')}</ContentOption></Option>,
        showOnSelected: <Option><GiFoodTruck /><SelectedOption>{t('CURBSIDE', 'Curbside')}</SelectedOption></Option>
      },
      {
        value: 5,
        content: <Option><FaCarSide /><ContentOption>{t('DRIVE_THRU', 'Drive thru')}</ContentOption></Option>,
        showOnSelected: <Option><FaCarSide /><SelectedOption>{t('DRIVE_THRU', 'Drive thru')}</SelectedOption></Option>
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
