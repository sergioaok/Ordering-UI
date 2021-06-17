import React, { useState } from 'react'
import { ProductOption as ProductOptionController, useLanguage } from 'ordering-components'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'

import {
  Container,
  WrapHeader,
  TitleContainer,
  Title,
  Flag,
  OptionThumbnail,
  WrapTitle,
  WrapperOption
} from './styles'

const ProductOptionUI = (props) => {
  const {
    children,
    option,
    error
  } = props

  const [, t] = useLanguage()

  const [setActive, setActiveState] = useState('active')
  const [setRotate, setRotateState] = useState('accordion__icon rotate')

  let maxMin = `(${t('MIN', 'Min')}: ${option.min} / ${t('MAX', 'Max')}: ${option.max})`
  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required')
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `(${t('MAX', 'Max')}: ${option.max})`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `(${t('MIN', 'Min')}: ${option.min})`
  }

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <WrapHeader
          className={`accordion ${setActive} ${error && 'error'}`}
          onClick={() => toggleAccordion()}
        >
          <TitleContainer>
            {option.image && (
              <OptionThumbnail src={option.image} />
            )}
            <WrapTitle>
              <Title><span>{option.name}</span></Title>
              <Flag error={error}>{maxMin}</Flag>
            </WrapTitle>
          </TitleContainer>
          <span>
            <IosArrowDown className={`${setRotate}`} />
          </span>
        </WrapHeader>
        <WrapperOption
          style={{ maxHeight: !setActive && '0px' }}
        >
          {children}
        </WrapperOption>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ProductOption = (props) => {
  const productOptionProps = {
    ...props,
    UIComponent: ProductOptionUI
  }

  return (
    <ProductOptionController {...productOptionProps} />
  )
}
