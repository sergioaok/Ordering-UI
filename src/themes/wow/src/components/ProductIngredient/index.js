import React from 'react'
import { ProductIngredient as ProductIngredientController } from 'ordering-components'

import { Container } from './styles'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'

const ProductIngredientUI = (props) => {
  const {
    state,
    ingredient,
    toggleSelect
  } = props

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container onClick={() => toggleSelect()}>
        <span>
          {state?.selected ? (
            <MdCheckBox />
          ) : (
            <MdCheckBoxOutlineBlank disabled />
          )}
        </span>
        <span>
          {ingredient.name}
        </span>
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

export const ProductIngredient = (props) => {
  const productIngredientProps = {
    ...props,
    UIComponent: ProductIngredientUI
  }

  return (
    <ProductIngredientController {...productIngredientProps} />
  )
}
