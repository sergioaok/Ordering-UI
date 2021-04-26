import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import BiStore from '@meronex/icons/bi/BiStore'
import VscAccount from '@meronex/icons/vsc/VscAccount'
import HiOutlineShoppingBag from '@meronex/icons/hi/HiOutlineShoppingBag'
import { useEvent, useLanguage, useOrder, useSession } from 'ordering-components'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../LogoutButton'
import { LanguageSelector } from '../LanguageSelector'

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
  WrapLanguageSelector
} from './styles'

export const SidebarMenu = (props) => {
  const { configTypes } = props
  const [{ auth, user }] = useSession()
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
      ? width > 489 ? '340px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  return (
    <>
      {!isHome && (
        <Container auth={auth}>
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

            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: options?.address?.location ? 'delivery' : 'home' })}
            >
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
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
                    isHome={isHome}
                    active={
                      window.location.pathname === '/' ||
                      window.location.pathname === '/home' ||
                      window.location.pathname === '/delivery'
                    }
                  >
                    {options?.address?.location ? (
                      t('DELIVERY', 'Delivery')
                    ) : (
                      t('HOME', 'Home')
                    )}
                  </TextInfo>
                </MenuLinkText>
              </WrappContent>
            </MenuLink>

            {configTypes.includes(2) && (
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: options?.address?.location ? 'pickup' : 'home' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/pickup'
                    }
                  >
                    <HiOutlineShoppingBag />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/pickup'
                      }
                    >
                      {t('PICKUP', 'Pickup')}
                    </TextInfo>
                  </MenuLinkText>
                </WrappContent>
              </MenuLink>
            )}

            {configTypes.includes(3) && (
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: options?.address?.location ? 'eatin' : 'home' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/eatin'
                    }
                  >
                    <AiFillShop />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/eatin'
                      }
                    >
                      {t('EAT_IN', 'Eat in')}
                    </TextInfo>
                  </MenuLinkText>
                </WrappContent>
              </MenuLink>
            )}

            {configTypes.includes(4) && (
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: options?.address?.location ? 'curbside' : 'home' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/curbside'
                    }
                  >
                    <GiFoodTruck />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/curbside'
                      }
                    >
                      {t('CURBSIDE', 'Curbside')}
                    </TextInfo>
                  </MenuLinkText>
                </WrappContent>
              </MenuLink>
            )}

            {configTypes.includes(5) && (
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: options?.address?.location ? 'drivethru' : 'home' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/drivethru'
                    }
                  >
                    <FaCarSide />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/drivethru'
                      }
                    >
                      {t('DRIVE_THRU', 'Drive thru')}
                    </TextInfo>
                  </MenuLinkText>
                </WrappContent>
              </MenuLink>
            )}

            {auth && (
              <>
                <MenuLink
                  isHome={isHome}
                  onClick={() => handleGoToPage({ page: 'orders' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      isHome={isHome}
                      active={
                        window.location.pathname === '/profile/orders'
                      }
                    >
                      <FaRegListAlt />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={
                          window.location.pathname === '/profile/orders'
                        }
                      >
                        {t('ORDERS', 'Orders')}
                      </TextInfo>
                    </MenuLinkText>
                  </WrappContent>
                </MenuLink>
                <MenuLink
                  isHome={isHome}
                  onClick={() => handleGoToPage({ page: 'profile' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      isHome={isHome}
                      active={
                        window.location.pathname === '/profile'
                      }
                    >
                      <VscAccount />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={
                          window.location.pathname === '/profile'
                        }
                      >
                        <span>{t('ACCOUNT', 'Account')}</span>
                        <span>{user?.name} {user?.lastname}</span>
                      </TextInfo>
                    </MenuLinkText>
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
                      isHome={isHome}
                      active={
                        window.location.pathname === '/signin' ||
                        window.location.pathname === '/login'
                      }
                    >
                      <AiOutlineLogin />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={
                          window.location.pathname === '/signin' ||
                          window.location.pathname === '/login'
                        }
                      >
                        {t('SIGN_IN', 'Sign in')}
                      </TextInfo>
                    </MenuLinkText>
                  </WrappContent>
                </MenuLink>

                <MenuLink
                  isHome={isHome}
                  onClick={() => handleGoToPage({ page: 'signup' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      isHome={isHome}
                      active={
                        window.location.pathname === '/signup'
                      }
                    >
                      <AiOutlineUserAdd />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={
                          window.location.pathname === '/signup'
                        }
                      >
                        {t('SIGNUP', 'Sign up')}
                      </TextInfo>
                    </MenuLinkText>
                  </WrappContent>
                </MenuLink>
              </>
            )}

            <MenuLinkSeparator isHome={isHome} />
            <WrapLanguageSelector>
              <LanguageSelector />
            </WrapLanguageSelector>
          </SidebarContent>
        </Container>
      )}
    </>
  )
}
