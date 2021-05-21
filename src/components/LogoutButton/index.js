import React from 'react'
import { LogoutAction } from 'ordering-components/_modules/components'
import { useLanguage } from 'ordering-components/_modules/contexts'

import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'

import {
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator
} from '../SidebarMenu/styles'

const LogoutButtonUI = (props) => {
  const { onCustomClick } = props
  const [, t] = useLanguage()

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const handleLogOutClick = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout()
      }
    })

    props.handleLogoutClick()
    onCustomClick && onCustomClick()
  }

  return (
    <MenuLink onClick={handleLogOutClick} isHome={isHome}>
      <WrappContent>
        <MenuLinkIcon isHome={isHome}>
          <FaSignOutAlt />
        </MenuLinkIcon>
        <MenuLinkText>
          <TextInfo isHome={isHome}>
            {t('LOGOUT', 'Logout')}
          </TextInfo>
        </MenuLinkText>
        <MenuLinkSeparator>
          <div>
            <hr />
          </div>
        </MenuLinkSeparator>
      </WrappContent>
    </MenuLink>
  )
}

export const LogoutButton = (props) => {
  const logoutButtonProps = {
    ...props,
    UIComponent: LogoutButtonUI
  }
  return (
    <LogoutAction {...logoutButtonProps} />
  )
}

export default LogoutButton
