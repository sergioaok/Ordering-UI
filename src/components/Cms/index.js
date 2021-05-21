import React from 'react'
import { CmsContent } from 'ordering-components/_modules/components'
import { useLanguage } from 'ordering-components/_modules/contexts'
import { CmsContainer, SkeletonContainer, SkeletonHeader, SkeletonContent, SkeletonInformation, SkeletonSide } from './styles'
import { NotFoundSource } from '../NotFoundSource'
import Skeleton from 'react-loading-skeleton'

const CmsUI = (props) => {
  const {
    cmsState,
    handleCmsRedirect
  } = props
  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <CmsContainer id='cms'>
        {
          cmsState.loading && !cmsState.error && (
            <SkeletonContainer>
              <SkeletonHeader>
                <Skeleton width='100%' height='100%' />
              </SkeletonHeader>
              <SkeletonContent>
                <SkeletonInformation>
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                </SkeletonInformation>
                <SkeletonSide>
                  <Skeleton width='100%' height='100%' />
                </SkeletonSide>
              </SkeletonContent>
            </SkeletonContainer>
          )
        }
        {
          cmsState.body && (
            <div dangerouslySetInnerHTML={{
              __html: cmsState.body
            }}
            />
          )
        }
        {
          cmsState.error &&
            <NotFoundSource
              content={t('ERROR_PAGE_SELECTED', 'Sorry, the selected page was not found.')}
              btnTitle={t('PAGE_REDIRECT', 'Go to pages list')}
              onClickButton={() => handleCmsRedirect()}
            />
        }
      </CmsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

export const Cms = (props) => {
  const CmsProps = {
    ...props,
    UIComponent: CmsUI
  }
  return <CmsContent {...CmsProps} />
}

export default Cms
