import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import RiStarSmileLine from '@meronex/icons/ri/RiStarSmileLine'
import MdFavoriteBorder from '@meronex/icons/md/MdFavoriteBorder'
import BiHelpCircle from '@meronex/icons/bi/BiHelpCircle'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { useEvent, useLanguage, useOrder, useSession } from 'ordering-components'
import { useTheme } from 'styled-components'
import { DropDownCircleImage } from '../../../../../components/Dropdown/style'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'

import {
  Container,
  BackDropContainer,
  TopContainer,
  CustomerInfo,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator,
  DownloadAppContainer,
  LogoWrapper,
  DownloadAppLink,
  DownloadAppLinkContainer
} from './styles'

export const SidebarMenu = (props) => {
  const { auth, isHideSignup, userCustomer } = props
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const [sessionState] = useSession()
  const theme = useTheme()

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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container auth={auth}>
        <IconContent
          isHome={isHome}
          aria-label='menu'
          onClick={() => actionSidebar(true)}
        >
          <IosMenu />
        </IconContent>
        {isMenuOpen && (
          <BackDropContainer onClick={() => actionSidebar(false)} />
        )}
        <SidebarContent
          id='sidebar_menu'
          isHome={isHome}
        >
          <TopContainer>
            <CustomerInfo>
              {auth && (
                <>
                  <DropDownCircleImage
                    src={sessionState?.user?.photo}
                    fallback={<FaUserAlt />}
                  />
                  <span>{sessionState?.user?.name}</span>
                </>
              )}
            </CustomerInfo>
            <MenuClose
              isHome={isHome}
              aria-label='close'
              onClick={() => actionSidebar(false)}
            >
              <MdClose />
            </MenuClose>
          </TopContainer>

          {userCustomer && (
            <MenuLink isHome={isHome} isCustomer={userCustomer}>
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={false}
                >
                  <FaUserCircle />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={false}
                  >
                    {`${userCustomer?.name} ${userCustomer?.lastname}`}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>
          )}

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
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>

              <MenuLink
                isHome={isHome}
                // onClick={() => handleGoToPage({ page: 'orders' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/profits'
                    }
                  >
                    <RiStarSmileLine />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/profits'
                      }
                    >
                      {t('PROFITS', 'Profits')}
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
                <FaRegAddressCard />
              </MenuLinkIcon>
              <MenuLinkText>
                <TextInfo
                  isHome={isHome}
                  active={
                    window.location.pathname === '/profile'
                  }
                >
                  {t('PROFILE', 'Profile')}
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
                // onClick={() => handleGoToPage({ page: 'orders' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/favorites'
                    }
                  >
                    <MdFavoriteBorder />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/favorites'
                      }
                    >
                      {t('FAVORITES', 'favorites')}
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
                // onClick={() => handleGoToPage({ page: 'orders' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/help'
                    }
                  >
                    <BiHelpCircle />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/help'
                      }
                    >
                      {t('HELP', 'help')}
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
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
              {!isHideSignup && (
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
                    <MenuLinkSeparator>
                      <div>
                        <hr />
                      </div>
                    </MenuLinkSeparator>
                  </WrappContent>
                </MenuLink>
              )}
            </>
          )}
          <DownloadAppContainer>
            <LogoWrapper>
              <img alt='Logotype Invert' src={theme?.images?.logos?.logotype} loading='lazy' />
            </LogoWrapper>
            <DownloadAppLinkContainer>
              <p>{t('HOME_DONWLOAD_APP_TITLE', 'Enjoy a better experience by downloading the App')}</p>
              <DownloadAppLink
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL3_1_HREF')}
                aria-label='GooglePlay'
              >
                <img alt='Google play' src={theme?.images?.general?.googlePlay} loading='lazy' />
              </DownloadAppLink>
            </DownloadAppLinkContainer>
          </DownloadAppContainer>
        </SidebarContent>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
