import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import VscAccount from '@meronex/icons/vsc/VscAccount'
import FaDollarSign from '@meronex/icons/fa/FaDollarSign'
import HiOutlineShoppingBag from '@meronex/icons/hi/HiOutlineShoppingBag'
import { useEvent, useLanguage, useOrder, useSession } from 'ordering-components'

import { useWindowSize } from '../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../LogoutButton/theme/two'
import { LanguageSelector } from '../../../LanguageSelector/theme/two'

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
  const [{ auth, user }] = useSession()

  // const { auth } = props
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
              onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
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
              </WrappContent>
            </MenuLink>

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
                        <span>{user.name} {user.lastname}</span>
                      </TextInfo>
                    </MenuLinkText>
                  </WrappContent>
                </MenuLink>
                <MenuLink
                  isHome={isHome}
                  onClick={() => handleGoToPage({ page: 'payment' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      isHome={isHome}
                      active={
                        window.location.pathname === '/payment'
                      }
                    >
                      <FaDollarSign />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={
                          window.location.pathname === '/payment'
                        }
                      >
                        {t('PAYMENT', 'Payment')}
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
                        {t('SIGNIN', 'Sign in')}
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
            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: 'about' })}
            >
              <WrappContent noneGrid>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={
                      window.location.pathname === '/about'
                    }
                  >
                    {t('ABOUTUS', 'About Us')}
                  </TextInfo>
                </MenuLinkText>
              </WrappContent>
            </MenuLink>
          </SidebarContent>
        </Container>
      )}
    </>
  )
}