import React from 'react'

import { PageNotFoundContainer, PageNotFoundText, PageNotFoundImage } from './styles'
import { useLanguage } from 'ordering-components/_modules/contexts'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'

export const PageNotFound = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
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
      <PageNotFoundContainer width={width}>
        <PageNotFoundText>
          <h1>{t('PAGE_NOT_FOUND', 'PAGE NOT FOUND')}</h1>
          {theme.images?.general?.notFoundLighting && (
            <img src={theme.images?.general?.notFoundLighting} alt='lighting' height='40' width='40' loading='lazy' />
          )}
        </PageNotFoundText>
        {theme.images?.general?.notFound404 && (
          <PageNotFoundImage>
            <img src={theme.images?.general?.notFound404} alt='error404' width='300' height='300' loading='lazy' />
          </PageNotFoundImage>
        )}
      </PageNotFoundContainer>
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

export default PageNotFound
