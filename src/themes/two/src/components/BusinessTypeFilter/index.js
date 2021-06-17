import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

import { Tabs, Tab } from '../../../../../styles/Tabs'

import { TypeContainer, ImageContainer } from './styles'
import { AutoScroll } from '../../../../../components/AutoScroll'
import { useTheme } from 'styled-components'

const BusinessTypeFilterUI = (props) => {
  const {
    typesState,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const { loading, error, types } = typesState
  const [, t] = useLanguage()
  const theme = useTheme()
  const [load, setLoad] = useState(false)

  const defaultImage = theme.images?.categories?.all

  const handleChangeCategory = (category) => {
    handleChangeBusinessType && handleChangeBusinessType(category)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <TypeContainer id='container'>
        {loading && (
          <Tabs variant='primary'>
            <AutoScroll>
              <Tab className='category' style={styles.wrapperSkeleton}>
                {[...Array(4)].map((_, i) => (
                  <Skeleton id='skeleton' key={i} circle height={150} width={150} />
                ))}
              </Tab>
            </AutoScroll>
          </Tabs>
        )}
        {!loading && !error && types && types.length > 0 && (
          <Tabs variant='primary'>
            <AutoScroll>
              {types.map((type, i) => type.enabled && (
                <Tab
                  key={type.id}
                  active={type.id === currentTypeSelected}
                  className='category'
                >
                  <ImageContainer
                    active={type.id === currentTypeSelected}
                    load={load}
                  >
                    <img
                      src={type.image || defaultImage}
                      alt={type.name.toLowerCase()}
                      onLoad={() => setLoad(true)}
                      onClick={() => handleChangeCategory(type.id)}
                      width='150px'
                      height='150px'
                      loading='lazy'
                    />
                  </ImageContainer>
                  {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)}
                </Tab>
              ))}
            </AutoScroll>
          </Tabs>
        )}
      </TypeContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

const styles = {
  wrapperSkeleton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}

export const BusinessTypeFilter = (props) => {
  const businessTypeFilterProps = {
    ...props,
    UIComponent: BusinessTypeFilterUI,
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
