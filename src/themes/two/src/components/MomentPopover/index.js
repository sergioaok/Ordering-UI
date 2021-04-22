import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage, useUtils, useConfig } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow } from './styles'
import { MomentContent } from '../MomentContent'

export const MomentPopover = (props) => {
  const { open } = props
  const [{ configs }] = useConfig()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    if (orderStatus.loading) return
    forceUpdate && forceUpdate()
  }, [open, orderStatus])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '550px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div className='moment-popover' style={{ overflow: 'hidden' }}>
      <HeaderItem
        ref={referenceElement}
        onClick={configs?.max_days_preorder?.value === -1 || configs?.max_days_preorder?.value === 0 ? null : props.onClick}
        isHome={props.isHome}
      >
        {orderStatus.options?.moment
          ? parseDate(orderStatus.options?.moment, { outputFormat: configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
          : t('ASAP_ABBREVIATION', 'ASAP')}
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <MomentContent />
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
