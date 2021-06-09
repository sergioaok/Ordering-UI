import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components'

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

    const GoogleAuth = window?.gapi?.auth2?.getAuthInstance()
    if (GoogleAuth) {
      const signedIn = GoogleAuth.isSignedIn.get()
      if (signedIn) {
        GoogleAuth.signOut().then(() => {
          GoogleAuth.disconnect()
        })
      }
    }

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
