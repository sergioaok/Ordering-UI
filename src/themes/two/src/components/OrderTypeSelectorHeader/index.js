import React from 'react'
import { Select } from '../../styles/Select'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'

import { OrderTypeControl, useLanguage } from 'ordering-components'
import {
  Option,
  OrderTypeWrapper
} from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    dropDownStyle,
    toggle,
    radioStyle,
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes
  } = props
  const options = orderTypes.filter(type => configTypes?.includes(type.value))
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]

  return (
    typeSelected !== undefined && (
      <OrderTypeWrapper
        radioStyle={radioStyle}
        toggle={toggle}
        dropDownStyle={dropDownStyle}
      >
        {dropDownStyle ? (
          <Select
            options={orderTypes.filter(type => configTypes?.includes(type.value))}
            defaultValue={defaultType || defaultValue || typeSelected}
            onChange={(orderType) => handleChangeOrderType(orderType)}
          />
        ) : (
          <>
            {options.map(type => (
              <Option
                key={type.value}
                selected={type.value === defaultValue || type.value === typeSelected}
                onClick={() => handleChangeOrderType(type.value)}
                toggle={toggle}
                radioStyle={radioStyle}
              >
                {radioStyle && (
                  <>
                    {type.value === typeSelected ? (
                      <MdRadioButtonChecked />
                    ) : (
                      <MdRadioButtonUnchecked />
                    )}
                  </>
                )}
                {type?.content}
              </Option>
            ))}
          </>
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
        content: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        content: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        content: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        content: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        content: t('DRIVE_THRU', 'Drive thru')
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
