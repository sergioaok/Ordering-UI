import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { OrderTypeControl, useLanguage, useConfig } from 'ordering-components'
import { Select } from '../../../../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'

import {
  Option,
  OrderTypeWrapper,
  SelectedOption,
  ContentOption,
  Tab,
  SkeletonWrapper
} from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    isTabStyle,
    isHome,
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    orderTypes
  } = props

  const [configState] = useConfig()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes[0]

  return (
    <>
      {configState.loading ? (
        <SkeletonWrapper>
          <Skeleton width={150} height={40} />
        </SkeletonWrapper>
      ) : (
        <>
          {typeSelected !== undefined && (
            <OrderTypeWrapper
              isTabStyle={isTabStyle}
            >
              {!isTabStyle ? (
                <Select
                  options={orderTypes.filter(type => configTypes?.includes(type.value))}
                  defaultValue={defaultType || defaultValue || typeSelected}
                  onChange={(orderType) => handleChangeOrderType(orderType)}
                />
              ) : (
                <>
                  {orderTypes.filter(type => configTypes?.includes(type.value)).map(type => (
                    <Tab
                      isHome={isHome}
                      key={type.value}
                      active={type.value === defaultType || type.value === defaultType || type.value === typeSelected}
                      onClick={() => handleChangeOrderType(type.value)}
                    >
                      {type.content}
                    </Tab>
                  ))}
                </>
              )}
            </OrderTypeWrapper>
          )}
        </>
      )}
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
