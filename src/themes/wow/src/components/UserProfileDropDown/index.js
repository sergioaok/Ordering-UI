import React from 'react'
import {
  useLanguage,
  useCustomer,
  useEvent,
  LogoutAction as LogoutActionController
} from 'ordering-components'
import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'

import { useTheme } from 'styled-components'
import BisUser from '@meronex/icons/bi/BisUser'
import RiBankCardFill from '@meronex/icons/ri/RiBankCardFill'
import HiLocationMarker from '@meronex/icons/hi/HiLocationMarker'
import BiStore from '@meronex/icons/bi/BiStore'
import FaHandHoldingHeart from '@meronex/icons/fa/FaHandHoldingHeart'
import AiFillExclamationCircle from '@meronex/icons/ai/AiFillExclamationCircle'
import BiLogIn from '@meronex/icons/bi/BiLogIn'
import {
  Container,
  Item,
  IconWrap,
  LogoutContainer
} from './styles'

export const UserProfileDropDown = (props) => {
  const {
    auth,
    selectedItem,
    handleChangeItem
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }
  return (
    <Container>
      {!auth && (
        <Item onClick={() => handleGoToPage({ page: 'signin' })}>
          <IconWrap><BiLogIn color='#85C347' /></IconWrap>
          <span>{t('LOGIN', 'Login')}</span>
        </Item>
      )}
      {auth && (
        <>
          <Item
            active={selectedItem === 'myProfile'}
            onClick={() => handleChangeItem('myProfile')}
          >
            <IconWrap><BisUser /></IconWrap>
            <span>{t('MY_PROFILE', 'My profile')}</span>
          </Item>
          <Item>
            <IconWrap><RiBankCardFill /></IconWrap>
            <span>{t('PAYMENT_METHODS', 'Payment Methods')}</span>
          </Item>
          <Item>
            <IconWrap><img src={theme.images?.general?.wowCard} alt='wow-card' /></IconWrap>
            <span>{t('ADD_WOW_CARD', 'Add Wow card')}</span>
          </Item>
          <Item
            active={selectedItem === 'savedAddress'}
            onClick={() => handleChangeItem('savedAddress')}
          >
            <IconWrap><HiLocationMarker /></IconWrap>
            <span>{t('MY_ADDRESSES', 'My Addresses')}</span>
          </Item>
        </>
      )}
      <Item
        active={selectedItem === 'businesses'}
        onClick={() => handleChangeItem('businesses')}
      >
        <IconWrap><BiStore /></IconWrap>
        <span>{t('BUSINESSES', 'Businesses')}</span>
      </Item>
      <h1>{t('INFORMATION_AND_SUPPORT', 'Information and support')}</h1>
      <Item
        active={selectedItem === 'help'}
        onClick={() => handleGoToPage({ page: 'help' })}
      >
        <IconWrap><HiLocationMarker /></IconWrap>
        <span>{t('HELP', 'Help')}</span>
      </Item>
      <Item>
        <IconWrap><FaHandHoldingHeart /></IconWrap>
        <span>{t('MY_OWN', 'My Own')}</span>
      </Item>
      <Item>
        <IconWrap><AiFillExclamationCircle /></IconWrap>
        <span>{t('ABOUT_WOW', 'About Wow')}</span>
      </Item>
      {auth && (
        <ProfileLogout />
      )}
    </Container>
  )
}

const ProfileLogoutUI = (props) => {
  const [, t] = useLanguage()
  const [, { deleteUserCustomer }] = useCustomer()

  const handleClick = () => {
    deleteUserCustomer(true)
    props.handleLogoutClick()
  }
  return (
    <LogoutContainer onClick={handleClick}>
      <IconWrap><FaSignOutAlt /></IconWrap>
      <span>{t('LOGOUT', 'Logout')}</span>
    </LogoutContainer>
  )
}

const ProfileLogout = (props) => {
  const logoutActionProps = {
    UIComponent: ProfileLogoutUI
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}
