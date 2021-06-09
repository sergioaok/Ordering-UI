import React, { useState, useEffect, useRef } from 'react'
import VscCalendar from '@meronex/icons/vsc/VscCalendar'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail'
import BiPhone from '@meronex/icons/bi/BiPhone'
import BiArrowBack from '@meronex/icons/bi/BiArrowBack'
import BisPencil from '@meronex/icons/bi/BisPencil'
import { useTheme } from 'styled-components'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Modal } from '../../../../../components/Modal'

import { AddressList } from '../AddressList'
import { UserProfileDropDown } from '../UserProfileDropDown'
import { ProfileBusinesses } from '../ProfileBusinesses'

import {
  UserFormDetails as UserProfileController,
  useLanguage,
  useSession
} from 'ordering-components'
import {
  Container,
  ProfileSidebar,
  GoBackContainer,
  ProfileSidebarInnerContainer,
  Header,
  UserHeaderInfo,
  AccordionContent,
  MyProfileInfo,
  MyProfileInnerContainer,
  ProfileItem,
  SavedPlaces,
  ProfileContent,
  GuestProfileContainer,
  EditProfileButton,
  DropDownCircleImage
} from './styles'
import { ProfileEdit } from '../ProfileEdit'

export const UserProfileUI = (props) => {
  const {
    userData,
    formState,
    handleButtonUpdateClick,
    isHiddenAddress
  } = props
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const theme = useTheme()
  const [{ auth, user }] = useSession()
  const [selectedItem, setSelectedItem] = useState('myProfile')
  const [openEditModal, setOpenEditModal] = useState(false)
  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const content = useRef(null)

  const toggleAccordion = (e) => {
    if (windowSize.width > 992) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const handleChangeItem = (item) => {
    setSelectedItem(item)

    if (windowSize.width < 992) {
      setActiveState('')
      setRotateState('accordion__icon')
    }
  }

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  useEffect(() => {
    if (windowSize.width > 992) {
      setActiveState('active')
      setRotateState('accordion__icon')
    }
  }, [windowSize?.width])

  useEffect(() => {
    if (auth) return
    setSelectedItem('myProfile')
  }, [auth])
  return (
    <Container>
      <ProfileSidebar>
        {selectedItem === 'help' && (
          <GoBackContainer onClick={() => setSelectedItem('myProfile')}>
            <BiArrowBack />
            <span>{t('BACK', 'Back')}</span>
          </GoBackContainer>
        )}
        <ProfileSidebarInnerContainer>
          <Header
            className={`accordion ${setActive}`}
            onClick={(e) => toggleAccordion(e)}
            mobileView={windowSize.width < 992}
          >
            {auth && windowSize?.width < 992 ? (
              <>
                <UserHeaderInfo>
                  <DropDownCircleImage
                    src={user?.photo}
                    fallback={<FaUserAlt />}
                  />
                  <span>{userData?.name || user?.name} {userData?.lastname || user?.lastname}</span>
                </UserHeaderInfo>
                <p>
                  <IosArrowDown
                    className={`${setRotate}`}
                  />
                </p>
              </>
            ) : (
              <h1>{t('MY_PROFILE', 'My profile')}</h1>
            )}
          </Header>
          <AccordionContent
            ref={content}
            style={{ maxHeight: !setActive && '0px' }}
          >
            <UserProfileDropDown
              auth={auth}
              selectedItem={selectedItem}
              handleChangeItem={handleChangeItem}
            />
          </AccordionContent>
        </ProfileSidebarInnerContainer>
      </ProfileSidebar>
      <ProfileContent>
        {selectedItem === 'myProfile' && (
          <MyProfileInfo>
            <MyProfileInnerContainer>
              {auth ? (
                <>
                  <h2>{t('MY_PROFILE', 'My profile')}</h2>
                  <UserHeaderInfo>
                    <DropDownCircleImage
                      src={user?.photo}
                      fallback={<FaUserAlt />}
                    />
                    <span>{userData?.name || user?.name} {userData?.lastname || user?.lastname}</span>
                    <EditProfileButton onClick={() => setOpenEditModal(true)}>
                      <BisPencil />
                    </EditProfileButton>
                  </UserHeaderInfo>
                  <ProfileItem>
                    <HiOutlineMail />
                    <p>
                      <span>{t('EMAIL', 'Email')}</span>
                      <span>{userData?.email || user.email}</span>
                    </p>
                  </ProfileItem>
                  {(userData?.cellphone || user?.cellphone) && (
                    <ProfileItem>
                      <BiPhone />
                      <p>
                        <span>{t('PHONE', 'Phone')}</span>
                        <span>{(userData?.country_phone_code || user?.country_phone_code) && `+${(userData?.country_phone_code || user?.country_phone_code)} `}{(userData?.cellphone || user?.cellphone)}</span>
                      </p>
                    </ProfileItem>
                  )}
                  {(userData?.birthdate || user?.birthdate) && (
                    <ProfileItem>
                      <VscCalendar />
                      <p>
                        <span>{t('BIRTHDATE', 'Birthdate')}</span>
                        <span>{userData?.birthdate || user?.birthdate}</span>
                      </p>
                    </ProfileItem>
                  )}
                </>
              ) : (
                <GuestProfileContainer>
                  <h1>{t('WOW_GUEST_USER_PROFILE_TITLE', 'What are you waiting for to enjoy all the benefits that Wow + has for you?')}</h1>
                  <img src={theme?.images?.general?.guestUser} alt='guest user' />
                </GuestProfileContainer>
              )}
            </MyProfileInnerContainer>
          </MyProfileInfo>
        )}
        {auth && (
          <>
            {selectedItem === 'savedAddress' && (
              <>
                {(userData?.addresses || user?.addresses) && !isHiddenAddress && (
                  <SavedPlaces>
                    <p>{t('YOUR_ADDRESSES', 'Your addresses')}</p>
                    <AddressList isModal addressList={user?.addresses} />
                  </SavedPlaces>
                )}
              </>
            )}
            {selectedItem === 'businesses' && (
              <ProfileBusinesses />
            )}
          </>
        )}
      </ProfileContent>
      {openEditModal && (
        <Modal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
        >
          <ProfileEdit
            {...props}
            user={user}
            onCancel={() => setOpenEditModal(false)}
          />
        </Modal>
      )}
    </Container>
  )
}

export const UserProfile = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
