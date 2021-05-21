import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import {
  NotFound,
  NotFoundImage
} from './styles'

export const NotFoundSource = (props) => {
  const {
    image,
    content,
    btnTitle,
    conditioned,
    onClickButton
  } = props

  const theme = useTheme()

  const errorImage = image || theme.images?.general?.notFound

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
      <NotFound id='not-found-source'>
        {errorImage && (
          <NotFoundImage>
            <img src={errorImage} alt='Not Found' width='300' height='260' loading='lazy' />
          </NotFoundImage>
        )}
        {content && conditioned && !errorImage && <h1>{content}</h1>}
        {content && !conditioned && <h1>{content}</h1>}
        {!onClickButton && props.children && (
          props.children
        )}
        {onClickButton && (
          <div>
            <Button
              outline
              color='primary'
              onClick={() => onClickButton()}
            >
              {btnTitle}
            </Button>
          </div>
        )}
      </NotFound>
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

export default NotFoundSource
