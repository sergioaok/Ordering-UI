import React, { useRef, useEffect } from 'react'
import { useLanguage, useSession, LogoutAction as LogoutActionController, useEvent, useCustomer } from 'ordering-components'
import { usePopper } from 'react-popper'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'
import MdcMenuRightOutline from '@meronex/icons/mdc/MdcMenuRightOutline'
import RiStarSmileLine from '@meronex/icons/ri/RiStarSmileLine'
import MdFavoriteBorder from '@meronex/icons/md/MdFavoriteBorder'
import BiHelpCircle from '@meronex/icons/bi/BiHelpCircle'
import { useTheme } from 'styled-components'
import { DropDownCircleImage } from '../../../../../components/Dropdown/style'
import { capitalize } from '../../../../../utils'

import {
  HeaderItem,
  PopoverBody,
  PopoverArrow,
  PopoverList,
  PopoverListItem,
  PopoverListLink,
  DownloadAppContainer,
  DownloadAppInnerContainer,
  LogoWrapper,
  AppLinkWrapper,
  DownloadAppLink
} from './styles'

const IconOption = ({ value }) => {
  switch (value) {
    case 'orders':
      return <FaRegListAlt />
    case 'profits':
      return <RiStarSmileLine />
    case 'profile':
      return <FaRegAddressCard />
    case 'favorites':
      return <MdFavoriteBorder />
    case 'help':
      return <BiHelpCircle />
    default:
      return <MdcMenuRightOutline />
  }
}

const optionsDefault = [
  { name: 'orders', pathname: '/profile/orders' },
  { name: 'profits', pathname: '/profits' },
  { name: 'profile', pathname: '/profile' },
  { name: 'favorites', pathname: '/' },
  { name: 'help', pathname: '/help' }
]

export const UserPopover = (props) => {
  const {
    open,
    isHome,
    optionsList,
    withLogout,
    isCustomerMode
  } = props
  const [sessionState] = useSession()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const theme = useTheme()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const options = isCustomerMode
    ? optionsDefault.filter(option => option.name === 'profile')
    : optionsList || optionsDefault

  const popper = usePopper(referenceElement.current, popperElement.current, {
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

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  const handleGoToPage = (page) => {
    events.emit('go_to_page', { page })
    props.onClick && props.onClick()
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])
  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderItem
        isPhoto={sessionState?.user?.photo}
        isHome={isHome}
        ref={referenceElement}
        onClick={props.onClick}
      >
        <DropDownCircleImage
          src={sessionState?.user?.photo}
          fallback={<FaUserAlt />}
        />
        <span>{sessionState?.user?.name}</span>
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          {options && options.length > 0 && (
            options.map(option => (
              <PopoverListLink
                key={option.name}
                active={window.location.pathname === option.pathname}
                onClick={() => handleGoToPage(option.name)}
              >
                <IconOption value={option.name} /> {t(option.name.toUpperCase(), capitalize(option.name))}
              </PopoverListLink>
            ))
          )}
          {withLogout && (
            <PopoverListItemLogout onClose={props.onClose} />
          )}
          <DownloadAppContainer>
            <DownloadAppInnerContainer>
              <LogoWrapper>
                <img alt='Logotype Invert' src={theme?.images?.logos?.logotype} loading='lazy' />
              </LogoWrapper>
              <AppLinkWrapper>
                <DownloadAppLink
                  target='_blank'
                  rel='noreferrer'
                  href={t('FOOTER_QL3_1_HREF')}
                  aria-label='GooglePlay'
                >
                  <img alt='Google play' src={theme?.images?.general?.googlePlay} loading='lazy' />
                </DownloadAppLink>
                <DownloadAppLink
                  target='_blank'
                  rel='noreferrer'
                  href={t('FOOTER_QL3_2_HREF')}
                  aria-label='AppStore'
                >
                  <img alt='App store' src={theme?.images?.general?.appStore} loading='lazy' />
                </DownloadAppLink>
              </AppLinkWrapper>
            </DownloadAppInnerContainer>
          </DownloadAppContainer>
        </PopoverList>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

const LogoutActionUI = (props) => {
  const [, t] = useLanguage()
  const [, { deleteUserCustomer }] = useCustomer()

  const handleClick = () => {
    deleteUserCustomer(true)
    props.handleLogoutClick()
    props.onClose && props.onClose()
  }
  return (
    <PopoverListItem onClick={handleClick}>
      <FaSignOutAlt /> {t('LOGOUT', 'Logout')}
    </PopoverListItem>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}
