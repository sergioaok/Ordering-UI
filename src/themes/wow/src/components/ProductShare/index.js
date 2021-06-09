import React, { useEffect, useRef } from 'react'
import FiShare2 from '@meronex/icons/fi/FiShare2'
import { ProductShare as ProductShareController } from 'ordering-components'

import {
  IconShare,
  ShareButtons
} from './styles'

import { Button } from '../../styles/Buttons'

const ProductShareUI = (props) => {
  const {
    updateShowValue,
    showShareButton,
    urlToShare,
    btnText,
    withBtn
  } = props

  const iconElement = useRef()
  const contentElement = useRef()

  const handleClickOutside = (e) => {
    const outsideIcon = !iconElement.current?.contains(e.target)
    const outsideButtonsShare = !contentElement.current?.contains(e.target)
    if (outsideIcon && outsideButtonsShare) {
      updateShowValue && updateShowValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [])

  const handleClickShare = () => {
    updateShowValue(!showShareButton)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <IconShare ref={iconElement} name='icon-share'>
        {withBtn ? (
          <Button
            outline
            color='primary'
            onClick={handleClickShare}
          >
            <FiShare2 />
            {btnText}
          </Button>
        ) : (
          <FiShare2 onClick={handleClickShare} />
        )}
        <ShareButtons
          ref={contentElement}
          className='a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style'
          data-a2a-url={urlToShare}
          showShareButton={showShareButton}
        >
          <a className='a2a_button_copy_link' />
          <a className='a2a_button_facebook' />
          <a className='a2a_button_whatsapp' />
          <a className='a2a_button_twitter' />
          <a className='a2a_button_email' />
          <a className='a2a_dd' href='https://www.addtoany.com/share' />
        </ShareButtons>
      </IconShare>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ProductShare = (props) => {
  const productShareProps = {
    ...props,
    UIComponent: ProductShareUI
  }
  return (
    <ProductShareController {...productShareProps} />
  )
}
