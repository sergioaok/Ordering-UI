import React, { useEffect } from 'react'
import MdClose from '@meronex/icons/md/MdClose'
import { Popup, useLanguage } from 'ordering-components'
import {
  ModalDialog,
  ModalActions,
  ModalTitle,
  ModalIcon,
  ModalHeader,
  ModalBackHeader
} from './styles'

import { Button } from '../../../../../styles/Buttons'

const ModalUI = (props) => {
  const {
    title,
    children,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText,
    isTransparent,
    hideCloseDefault,
    isProductForm
  } = props
  const [, t] = useLanguage()

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose && onClose()
    }
  }

  useEffect(() => {
    if (window.innerWidth > document.body.clientWidth) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      const bodyPaddingRight = window.document.body.style.paddingRight
      document.body.style.paddingRight = props.open ? `${bodyPaddingRight + scrollbarWidth}px` : `${bodyPaddingRight}px`
    }
    document.body.style.overflow = props.open ? 'hidden' : 'auto'
    if (props.open) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [props.open])

  return (
    <ModalDialog
      className='popup-dialog'
      width={props.width}
      height={props.height}
      padding={props.padding}
      isTransparent={isTransparent}
    >
      {isProductForm && (
        <ModalBackHeader />
      )}
      {!hideCloseDefault && (
        <ModalIcon>
          <MdClose onClick={() => onClose()} />
        </ModalIcon>
      )}
      <ModalHeader>
        {title && (
          <ModalTitle>
            {title}
          </ModalTitle>
        )}
      </ModalHeader>
      {children}
      {(onCancel || onAccept) && (
        <ModalActions>
          {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL', 'Cancel')}</Button>}
          {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT', 'Accept')}</Button>}
        </ModalActions>)}
    </ModalDialog>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Popup {...ModalProps} />
  )
}
