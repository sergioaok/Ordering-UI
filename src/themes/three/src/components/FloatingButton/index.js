import React from 'react'
import { FloatingButton as FloatingButtonController } from 'ordering-components'
import { Button } from '../../styles/Buttons'

import {
  Container,
  BtnValue
} from './styles'

const FloatingButtonUI = (props) => {
  const {
    btnText,
    btnValue,
    handleButtonClick,
    disabled,
    isSecondaryBtn
  } = props

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
      <Container>
        <Button
          color={isSecondaryBtn ? 'secundary' : 'primary'}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          {btnText}
          <BtnValue>
            {btnValue}
          </BtnValue>
        </Button>
      </Container>
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

export const FloatingButton = (props) => {
  const floatingButtonProps = {
    ...props,
    UIComponent: FloatingButtonUI
  }

  return (
    <FloatingButtonController {...floatingButtonProps} />
  )
}
