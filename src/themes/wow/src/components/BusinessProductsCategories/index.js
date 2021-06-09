import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'

import { AutoScroll } from '../AutoScroll'
import { Tabs, Tab } from '../../../../../styles/Tabs'

import { CategoriesContainer } from './styles'
const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    openBusinessInformation
  } = props

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <Tab
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          onClick={() => handlerClickCategory(category)}
        >
          {category.name}
        </Tab>
      ))
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
      <CategoriesContainer featured={featured}>
        {!isSkeleton ? (
          <Tabs variant='primary'>
            {openBusinessInformation ? (
              <>
                <ProductCategories />
              </>
            ) : (
              <AutoScroll>
                <ProductCategories />
              </AutoScroll>
            )}
          </Tabs>
        ) : (
          <Tabs variant='primary'>
            {[...Array(4).keys()].map(i => (
              <Tab key={i}>
                <Skeleton width={100} />
              </Tab>
            ))}
          </Tabs>
        )}
      </CategoriesContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsCategories = (props) => {
  const businessProductsCategoriesProps = {
    ...props,
    UIComponent: BusinessProductsCategoriesUI
  }

  return (
    <ProductsCategories {...businessProductsCategoriesProps} />
  )
}
