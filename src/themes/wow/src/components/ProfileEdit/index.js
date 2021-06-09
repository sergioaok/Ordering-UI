import React, { useState, useRef, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import BiImage from '@meronex/icons/bi/BiImage'
import { UserFormDetailsUI } from '../UserFormDetails'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components'
import { Alert } from '../../../../../components/Confirm'
import { bytesConverter } from '../../../../../utils'
import {
  Container,
  Image,
  SkeletonWrapper,
  UploadImageIcon,
  ProfileContent
} from './styles'

export const ProfileEdit = (props) => {
  const {
    user,
    formState,
    handlechangeImage,
    handleButtonUpdateClick,
    onCancel
  } = props
  const [, t] = useLanguage()
  const inputRef = useRef(null)
  const userRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleClickImage = () => {
    inputRef.current.click()
  }
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

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  return (
    <Container>
      <h1>{t('EDIT_PROFILE', 'Edit your profile')}</h1>
      <Image ref={userRef} onClick={() => handleClickImage()} isImage={user?.photo || (formState?.changes?.photo && !formState.result.error)}>
        <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
          <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
            {formState.changes?.photo && formState.loading
              ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
              : ((!formState.changes?.photo || formState.result?.result === 'Network Error' || formState.result.error)
                ? user?.photo
                  ? (<img src={user?.photo} alt='user image' width='200px' height='200px' loading='lazy' />)
                  : (
                    <UploadImageIcon>
                      <BiImage />
                      <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                    </UploadImageIcon>
                  )
                : formState?.changes?.photo && formState.result.error &&
                  <img src={formState?.changes?.photo} alt='user image' loading='lazy' />
              )}
          </DragAndDrop>
        </ExamineClick>
      </Image>
      <ProfileContent>
        <UserFormDetailsUI
          {...props}
          isEdit
          onCancel={onCancel}
        />
      </ProfileContent>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
