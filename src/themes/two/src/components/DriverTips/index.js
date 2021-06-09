import React, { useState } from 'react'
import { DriverTips as DriverTipsController, useUtils, useLanguage } from 'ordering-components'

import {
  DriverTipContainer,
  TipCard,
  FormDriverTip,
  WrapperInput,
  DriverTipMessage,
  DriverTipLabel
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
  const [value, setvalue] = useState(0)

  const handleChangeDriverTip = (e) => {
    let tip = parseFloat(e?.target?.value)
    tip = isNaN(tip) ? 0 : tip
    setvalue(tip)
  }

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
            {driverTipsOptions.map((option, i) => (
              <TipCard
                key={i}
                className={`${option === optionSelected ? 'active' : ''}`}
                onClick={() => handlerChangeOption(option)}
              >
                {`${isFixedPrice ? parsePrice(option) : `${option}%`}`}
              </TipCard>
            ))}
            {!driverTipsOptions.includes(driverTip) && (
              <DriverTipMessage>
                {t('CUSTOM_DRIVER_TIP_AMOUNT', 'The driver\'s current tip comes from a custom option')}
              </DriverTipMessage>
            )}
          </>
        ) : (
          <FormDriverTip>
            <DriverTipLabel>
              {t('LOREM', 'Lorem ipsu Ad sit veniam laboris aliquip nisi.')}
            </DriverTipLabel>
            <WrapperInput>
              <Input
                name='drivertip'
                type='text'
                placeholder='0'
                onChange={handleChangeDriverTip}
              />
              <Button
                color='primary'
                disabled={(!parseFloat(value || 0) > 0 && parseFloat(value || 0) !== driverTip) || !value}
                onClick={() => {
                  handlerChangeOption(value)
                  setvalue(0)
                }}
              >
                {t('APPLY', 'Apply')}
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
