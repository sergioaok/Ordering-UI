import React, { useState } from 'react'
import { DriverTips as DriverTipsController, useUtils, useLanguage, useConfig } from 'ordering-components'

import {
  DriverTipContainer,
  TipCard,
  FormDriverTip,
  WrapperInput,
  DriverTipMessage,
  DriverTipLabel,
  WrapperTips
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const DriverTipsUI = (props) => {
  const {
    driverTip,
    driverTipsOptions,
    optionSelected,
    isFixedPrice,
    isDriverTipUseCustom,
    handlerChangeOption
  } = props
  const [{ parsePrice }] = useUtils()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [value, setvalue] = useState(0)

  const handleChangeDriverTip = (e) => {
    let tip = parseFloat(e?.target?.value)
    tip = isNaN(tip) ? 0 : tip
    setvalue(tip)
  }

  const placeholderCurrency = (configs?.currency_position?.value || 'left') === 'left'
    ? `${configs?.format_number_currency?.value}0`
    : `0${configs?.format_number_currency?.value}`

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <DriverTipContainer id='driver-tip-container'>
        {!isDriverTipUseCustom ? (
          <>
            <WrapperTips>
              {driverTipsOptions.map((option, i) => (
                <TipCard
                  key={i}
                  className={`${option === optionSelected ? 'active' : ''}`}
                  onClick={() => handlerChangeOption(option)}
                >
                  {`${isFixedPrice ? parsePrice(option) : `${option}%`}`}
                </TipCard>
              ))}
            </WrapperTips>
            {!driverTipsOptions.includes(driverTip) && driverTip > 0 && (
              <DriverTipMessage>
                {t('CUSTOM_DRIVER_TIP_AMOUNT', 'The driver\'s current tip comes from a custom option')}
              </DriverTipMessage>
            )}
          </>
        ) : (
          <FormDriverTip>
            <DriverTipLabel>
              {t('CUSTOM_DRIVER_TIP_MESSAGE', '100% of these tips go directly to your driver')}
            </DriverTipLabel>
            <WrapperInput>
              <Input
                name='drivertip'
                type='text'
                placeholder={placeholderCurrency}
                onChange={handleChangeDriverTip}
              />
              <Button
                rectangle
                color='primary'
                disabled={(!parseFloat(value || 0) > 0 && parseFloat(value || 0) !== driverTip) || !value}
                onClick={() => {
                  handlerChangeOption(value)
                  setvalue(0)
                }}
              >
                {t('APPLY_TIP', 'Apply Tip')}
              </Button>
            </WrapperInput>
            {parseFloat(driverTip || 0) > 0 && (
              <DriverTipMessage>
                {t('CURRENT_DRIVER_TIP_AMOUNT', 'Current driver tip amount')}: {parsePrice(driverTip)}
              </DriverTipMessage>
            )}
          </FormDriverTip>
        )}
      </DriverTipContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

export const DriverTips = (props) => {
  const driverTipsProps = {
    ...props,
    UIComponent: DriverTipsUI
  }

  return <DriverTipsController {...driverTipsProps} />
}
