import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import {
  Option,
  OrderTypeWrapper,
  SelectedOption,
  ContentOption,
  OrderTypeItem
} from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    isCustomStyle,
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes
  } = props

  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]

  return (
    typeSelected !== undefined && (
      <OrderTypeWrapper>
        {isCustomStyle ? (
          <>
            {orderTypes.filter(type => configTypes?.includes(type.value)).map(orderType => (
              <OrderTypeItem
                key={orderType.value}
                onClick={() => handleChangeOrderType(orderType.value)}
              >
                {(orderType.value === defaultType || orderType.value === defaultValue || orderType.value === typeSelected) ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                {orderType.content}
              </OrderTypeItem>
            ))}
          </>
        ) : (
          <Select
            options={orderTypes.filter(type => configTypes?.includes(type.value))}
            defaultValue={defaultType || defaultValue || typeSelected}
            onChange={(orderType) => handleChangeOrderType(orderType)}
          />
        )}
      </OrderTypeWrapper>
    )
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
        content: <Option><ContentOption>{t('DELIVERY', 'Delivery')}</ContentOption></Option>,
        showOnSelected: <Option><SelectedOption>{t('DELIVERY', 'Delivery')}</SelectedOption></Option>
      },
      {
        value: 2,
        content: <Option><ContentOption>{t('PICKUP', 'Pickup')}</ContentOption></Option>,
        showOnSelected: <Option><SelectedOption>{t('PICKUP', 'Pickup')}</SelectedOption></Option>
      },
      {
        value: 3,
        content: <Option><ContentOption>{t('EAT_IN', 'Eat in')}</ContentOption></Option>,
        showOnSelected: <Option><SelectedOption>{t('EAT_IN', 'Eat in')}</SelectedOption></Option>
      },
      {
        value: 4,
        content: <Option><ContentOption>{t('CURBSIDE', 'Curbside')}</ContentOption></Option>,
        showOnSelected: <Option><SelectedOption>{t('CURBSIDE', 'Curbside')}</SelectedOption></Option>
      },
      {
        value: 5,
        content: <Option><ContentOption>{t('DRIVE_THRU', 'Drive thru')}</ContentOption></Option>,
        showOnSelected: <Option><SelectedOption>{t('DRIVE_THRU', 'Drive thru')}</SelectedOption></Option>
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
