import React, { useState, useEffect, useRef } from 'react'
import { DropdownStyled, DropdownToggleStyled, DropdownMenuStyled, Arrow, DropdownItemStyled, DropdownItemLink } from './style'
import { usePopper } from 'react-popper'

export const Dropdown = (props) => {
  const {
    open
  } = props
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  // const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState()
  const [menu, setMenu] = useState()
  const [children, setChildren] = useState([])
  const { styles, attributes, forceUpdate, update } = usePopper(referenceElement.current, popperElement.current, {
    placement: 'auto',
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

  useEffect(() => {
    const _children = []
    React.Children.forEach(props.children, child => {
      if (child?.type?.displayName === 'DropdownToggle') {
        setToggle(child)
      } else if (child?.type?.displayName === 'DropDownMenu') {
        setMenu(child)
      } else {
        _children.push(child)
      }
    })
    setChildren(_children)
  }, [props.children])

  // const hanldeOpenMenu = () => {
  //   setOpen(!open)
  // }

  // const closeMenu = (e) => {
  //   if (open) {
  //     if (
  //       !e.target.classList.contains(DropdownToggleStyled.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemLink.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemStyled.styledComponentId)
  //     ) {
  //       // setOpen(false)
  //     }
  //   }
  // }

  useEffect(() => {
    update && update()
    // document.addEventListener('mousedown', closeMenu)
    // return () => document.removeEventListener('mousedown', closeMenu)
  }, [open])

  return (
    // <DropdownStyled style={props.style} ref={referenceElement} onClick={hanldeOpenMenu}>
    <DropdownStyled style={props.style} ref={referenceElement}>
      {
        toggle
      }
      {
        menu && React.cloneElement(menu, {
          ref: popperElement, style: { ...menu.props.style, ...styles.popper, visibility: open ? 'visible' : 'hidden' }, ...attributes.popper
        }, [...(Array.isArray(menu.props.children) ? menu.props.children : [menu.props.children]), <Arrow key='arrow' ref={arrowElement} style={styles.arrow} />])
      }
      {
        open && children.map(child => child)
      }
    </DropdownStyled>
  )
}

export const DropdownToggle = React.forwardRef((props, ref) => {
  return (
    <DropdownToggleStyled {...props} ref={ref}>
      {props.children}
    </DropdownToggleStyled>
  )
})

DropdownToggle.displayName = 'DropdownToggle'

export const DropDownMenu = React.forwardRef((props, ref) => {
  return (
    <DropdownMenuStyled {...props} ref={ref}>
      {props.children}
    </DropdownMenuStyled>
  )
})

DropDownMenu.displayName = 'DropDownMenu'

export const DropdownItem = (props) => {
  return (
    <DropdownItemStyled {...props}>
      {props.children}
    </DropdownItemStyled>
  )
}

DropDownMenu.DropdownItem = 'DropdownItem'

export default Dropdown
