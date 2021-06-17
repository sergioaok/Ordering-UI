import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiClock from '@meronex/icons/fi/FiClock'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import { useTheme } from 'styled-components'

import { Modal } from '../../../../../components/Modal'
import { BusinessInformation } from '../../../../../components/BusinessInformation'

import { useUtils, useOrder, useLanguage } from 'ordering-components'

import { convertHoursToMinutes } from '../../../../../utils'

import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  MoreInfoContainer
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState,
    setOpenBusinessInformation,
    openBusinessInformation
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open}>
        {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
        <BusinessContent>
          <WrapperBusinessLogo>
            {!loading ? (
              <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
            ) : (
              <Skeleton height={70} width={70} />
            )}
          </WrapperBusinessLogo>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <div>
                {!loading ? (
                  <p className='bold'>{business?.name}</p>
                ) : (
                  <Skeleton width={100} />
                )}
                {!loading ? (
                  <p>
                    <FaStar className='start' />
                    {business?.reviews?.total}
                  </p>
                ) : (
                  <Skeleton width={100} />
                )}
              </div>
              <div>
                {!loading ? (
                  <p className='type'>{getBusinessType()}</p>
                ) : (
                  <Skeleton width={100} />
                )}
              </div>
              <div>
                {!loading ? (
                  <>
                    {orderState?.options?.type === 1 ? (
                      <h5>
                        <FiClock />
                        {convertHoursToMinutes(business?.delivery_time)}
                      </h5>
                    ) : (
                      <h5>
                        <FiClock />
                        {convertHoursToMinutes(business?.pickup_time)}
                      </h5>
                    )}
                  </>
                ) : (
                  <Skeleton width={70} />
                )}

                {!loading ? (
                  <h5>
                    <GrLocation />
                    {parseDistance(business?.distance || 0)}
                  </h5>
                ) : (
                  <Skeleton width={70} />
                )}
                {orderState?.options.type === 1 && (
                  <>
                    {!loading ? (
                      <h5>
                        <GrDeliver />
                        {business && parsePrice(business?.delivery_price || 0)}
                      </h5>
                    ) : (
                      <Skeleton width={70} />
                    )}
                  </>
                )}
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessContent>

        <Modal
          width='70%'
          open={openBusinessInformation}
          onClose={setOpenBusinessInformation}
          padding='0'
          hideCloseDefault
          isTransparent
        >
          <BusinessInformation
            business={business}
            getBusinessType={getBusinessType}
            optimizeImage={optimizeImage}
            onClose={setOpenBusinessInformation}
          />
        </Modal>
      </BusinessContainer>
      <MoreInfoContainer>
        <p>{business?.address}</p>
        {!loading && (
          <a onClick={() => setOpenBusinessInformation(true)}>{t('MORE_INFO', 'More info')}</a>
        )}
      </MoreInfoContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
