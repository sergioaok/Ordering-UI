import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import AiFillAndroid from '@meronex/icons/ai/AiFillAndroid'
import FaApple from '@meronex/icons/fa/FaApple'
import { DropDownCircleImage } from '../../../../../components/Dropdown/style'
import { useEvent, useLanguage, useOrder } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import {
  Container,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator,
  WrappUserAccountContent,
  WrappAccountText,
  WrapDownloadAppLink,
  DownloadAppDescription,
  LogoWrap,
  DownloadButtonGroup
} from './styles'

export const SidebarMenu = (props) => {
  const { auth, user } = props
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    actionSidebar(false)
    setIsMenuOpen(false)
  }

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '300px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        document.getElementById('sidebar_menu').style.width = '300px'
      }
    }
  }, [width])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <Container>
        <IconContent
          isHome={isHome}
          aria-label='menu'
          onClick={() => actionSidebar(true)}
        >
          <IosMenu />
        </IconContent>
        <SidebarContent
          id='sidebar_menu'
          isHome={isHome}
        >
          <MenuClose
            isHome={isHome}
            aria-label='close'
            onClick={() => actionSidebar(false)}
          >
            <MdClose />
          </MenuClose>
          {auth && (
            <MenuLink
              onClick={() => handleGoToPage({ page: 'profile' })}
            >
              <WrappUserAccountContent>
                <DropDownCircleImage
                  src={user?.photo}
                  fallback={<FaUserAlt />}
                />
                <WrappAccountText>
                  <span>{user.name} {user.lastname}</span>
                  <span>{t('VIEW_ACCOUNT', 'View account')}</span>
                </WrappAccountText>
              </WrappUserAccountContent>
            </MenuLink>
          )}
          <MenuLink
            isHome={isHome}
            onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
          >
            <WrappContent>
              <MenuLinkIcon
                active={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/home' ||
                  window.location.pathname === '/search'
                }
              >
                {options?.address?.location ? (
                  <BiStore />
                ) : (
                  <AiOutlineHome />
                )}
              </MenuLinkIcon>
              <MenuLinkText>
                <TextInfo
                  active={
                    window.location.pathname === '/' ||
                    window.location.pathname === '/home' ||
                    window.location.pathname === '/search'
                  }
                >
                  {options?.address?.location ? (
                    t('BUSINESSES', 'Businesses')
                  ) : (
                    t('HOME', 'Home')
                  )}
                </TextInfo>
              </MenuLinkText>
              <MenuLinkSeparator>
                <div>
                  <hr />
                </div>
              </MenuLinkSeparator>
            </WrappContent>
          </MenuLink>

          {auth && (
            <>
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: 'orders' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/profile/orders'
                    }
                  >
                    <FaRegListAlt />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/profile/orders'
                      }
                    >
                      {t('ORDERS', 'Orders')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>

              <LogoutButton onCustomClick={() => actionSidebar(false)} />
            </>
          )}
          {!auth && (
            <>
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: 'signin' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/signin' ||
                      window.location.pathname === '/login'
                    }
                  >
                    <AiOutlineLogin />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/signin' ||
                        window.location.pathname === '/login'
                      }
                    >
                      {t('SIGN_IN', 'Sign in')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: 'signup' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/signup'
                    }
                  >
                    <AiOutlineUserAdd />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/signup'
                      }
                    >
                      {t('SIGNUP', 'Sign up')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
            </>
          )}
          <WrapDownloadAppLink>
            <DownloadAppDescription>
              <LogoWrap>
                <img alt='Isotype' width='45px' height='45px' src={theme?.images?.logos?.isotype} loading='lazy' />
              </LogoWrap>
              <p>{t('LOVE_IN_THE_APP', 'There’s more to love in the app.')}</p>
            </DownloadAppDescription>
            <DownloadButtonGroup>
              <Button color='secundary' initialIcon>
                <FaApple />
                {t('IPHONE', 'iPhone')}
              </Button>
              <Button color='secundary' initialIcon>
                <AiFillAndroid />
                {t('ANDROID', 'Android')}
              </Button>
            </DownloadButtonGroup>
          </WrapDownloadAppLink>
        </SidebarContent>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
