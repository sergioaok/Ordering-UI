import React, { useEffect } from 'react'
import MdClose from '@meronex/icons/md/MdClose'
import { Popup, useLanguage } from 'ordering-components'
import {
  PopupDialog,
  PopupActions,
  PopupTitle,
  PopupContent,
  PopupIcon
} from './styles'

import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import { getTraduction } from '../../../../../utils'

const ConfirmUI = (props) => {
  const {
    title,
    children,
    content,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText
  } = props
  const [, t] = useLanguage()

  const handleKeyDown = (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      onClose && onClose()
    }
  }

  useEffect(() => {
    if (props.open) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [props.open])

  return (
    <PopupDialog className='popup-dialog'>
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))
        }
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))
        }
        <PopupIcon>
          <MdClose onClick={() => onClose()} />
        </PopupIcon>
        {title && <PopupTitle>{title}</PopupTitle>}
        <PopupContent>
          {content && typeof content === 'string' && content}
          {content && typeof content === 'object' && Array.isArray(content) && (
            <ul>
              {content.map((item, i) => (
                <li key={i}>{getTraduction(item)}</li>
              ))}
            </ul>
          )}
          {children}
        </PopupContent>
        {(onCancel || onAccept || onClose) && (
          <PopupActions>
            {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL', 'Cancel')}</Button>}
            {onAccept && <Button color='secundary' onClick={() => onAccept()}>{acceptText || t('ACCEPT', 'Accept')}</Button>}
          </PopupActions>)}
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
        }
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
        }
      </>
    </PopupDialog>
  )
}

export const Confirm = (props) => {
  const popupProps = {
    ...props,
    UIComponent: ConfirmUI
  }

  const theme = useTheme()

  return (
    <>
      {
        theme && <Popup {...popupProps} />
      }
    </>
  )
}

export const Alert = Confirm
