import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  UserFormDetails as UserProfileController,
  useLanguage,
  useSession,
  DragAndDrop,
  ExamineClick
} from 'ordering-components'

import { UserFormDetails } from '../UserFormDetails'
import { AddressList } from '../AddressList'
import { Alert } from '../Confirm'

import { Button } from '../../styles/Buttons'
import { ProfileOptions } from './ProfileOptions'

import { bytesConverter } from '../../utils'

import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  SideForm,
  Camera,
  UserData,
  SavedPlaces,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [edit, setEdit] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0].size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const toggleEditState = (val) => {
    setEdit(val)
    toggleIsEdit()
    if (!val) {
      cleanFormState()
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.changes.photo) {
      handleButtonUpdateClick()
    }
  }, [formState.changes.photo])

  return (
    <>
      <ProfileOptions value='account' />
      <Container>
        <UserProfileContainer>
          <UserImage className='user-image'>
            <Image onClick={() => handleClickImage()} isImage={user?.photo || (formState?.changes?.photo && !formState.result.error)}>
              <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={!formState.loading}>
                <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={!formState.loading}>
                  {formState.changes.photo && formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes.photo || formState.result?.result === 'Network Error' || formState.result.error)
                      ? user?.photo
                        ? (<img src={user?.photo} alt='user image' />)
                        : (
                          <UploadImageIcon>
                            <BiImage />
                            <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                          </UploadImageIcon>
                        )
                      : formState?.changes?.photo && formState.result.error
                        ? (<img src={formState?.changes?.photo} alt='user image' />)
                        : (
                          <UploadImageIcon>
                            <BiImage />
                            <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                          </UploadImageIcon>
                        )
                    )}
                </DragAndDrop>
              </ExamineClick>
            </Image>
            <Camera><FiCamera /></Camera>
          </UserImage>
          <SideForm className='user-form'>
            {!edit ? (
              formState.loading ? (
                <UserData>
                  <Skeleton width={250} height={25} />
                  <Skeleton width={180} height={25} />
                  <Skeleton width={210} height={25} />
                  <Skeleton width={100} height={40} />
                </UserData>
              ) : (
                <UserData>
                  <h1>{user.name} {user.lastname}</h1>
                  <p>{user.email}</p>
                  {user.cellphone && (
                    <p>{user.country_phone_code && `+${user.country_phone_code} `}{user.cellphone}</p>
                  )}
                  <Button
                    color='primary'
                    outline
                    onClick={() => toggleEditState(true)}
                  >
                    {t('EDIT', 'Edit')}
                  </Button>
                </UserData>
              )
            ) : (
              <WrapperForm>
                <UserFormDetails
                  t={t}
                  {...props}
                  onCancel={toggleEditState}
                  onCloseProfile={() => setEdit(false)}
                  setAlertState={setAlertState}
                />
              </WrapperForm>
            )}

          </SideForm>
        </UserProfileContainer>
        <SavedPlaces>
          <h1>Saved Places</h1>
          <AddressList addressList={user.addresses} />
        </SavedPlaces>
      </Container>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
