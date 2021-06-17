import React from 'react'
import { ProductOption as ProductOptionController, useLanguage } from 'ordering-components'

import {
  Container,
  WrapHeader,
  TitleContainer,
  Title,
  Flag,
  OptionThumbnail
} from './styles'

const ProductOptionUI = (props) => {
  const {
    error,
    children,
    option
  } = props

  const [, t] = useLanguage()

  let maxMin = `(${t('MIN', 'Min')}: ${option.min} / ${t('MAX', 'Max')}: ${option.max})`
  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required')
  } else if (option.min === 0 && option.max > 0) {
    maxMin = `(${t('MAX', 'Max')}: ${option.max})`
  } else if (option.min > 0 && option.max === 0) {
    maxMin = `(${t('MIN', 'Min')}: ${option.min})`
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
        <WrapHeader>
          <TitleContainer>
            {option.image && (
              <OptionThumbnail src={option.image} />
            )}
            <Title><span>{option.name}</span></Title>
          </TitleContainer>
          <Flag error={error}>{maxMin}</Flag>
        </WrapHeader>
        {children}
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
