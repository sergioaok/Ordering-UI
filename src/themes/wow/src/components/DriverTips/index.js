import React from 'react'
import { DriverTips as DriverTipsController } from 'ordering-components'

import {
  DriverTipContainer,
  TipCard
} from './styles'

const DriverTipsUI = (props) => {
  const {
    driverTipsOptions,
    optionSelected,
    handlerChangeOption
  } = props

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <DriverTipContainer id='driver-tip-container'>
        {driverTipsOptions?.length > 0 && driverTipsOptions.map((option, i) => (
          <TipCard
            key={i}
            className={`${option === optionSelected ? 'active' : ''}`}
            onClick={() => handlerChangeOption(option)}
          >
            {option}%
          </TipCard>
        ))}
      </DriverTipContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
