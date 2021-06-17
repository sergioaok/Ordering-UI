import React from 'react'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'

import { convertHoursToMinutes } from '../../../../../utils'

import {
  ContainerCard,
  WrapperBusinessCard,
  BusinessHero,
  BusinessHeader,
  BusinessTags,
  BusinessContent,
  BusinessInfo,
  BusinessInfoItem,
  BusinessName,
  Categories,
  Medadata
} from './styles'
import GrClock from '@meronex/icons/gr/GrClock'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrStar from '@meronex/icons/gr/GrStar'
import FaCrown from '@meronex/icons/fa/FaCrown'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    orderState,
    handleClick,
    orderType
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()

  const types = ['food', 'alcohol', 'groceries', 'laundry']

  const businessType = () => {
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
      <ContainerCard isSkeleton={isSkeleton}>
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => !isSkeleton && handleClick && handleClick(business)}>
          <BusinessHero>
            {business?.header ? (
              <BusinessHeader bgimage={optimizeImage(business?.header, 'h_400,c_limit')} isClosed={!business?.open}>
                <BusinessTags>
                  {business?.featured &&
                    <span className='crown'>
                      <FaCrown />
                    </span>}
                  <div>
                    {getBusinessOffer(business?.offers) && <span>{getBusinessOffer(business?.offers) || parsePrice(0)}</span>}
                    {!business?.open && <span>{t('PREORDER', 'PreOrder')}</span>}
                  </div>
                </BusinessTags>
                {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
              </BusinessHeader>
            ) : (
              <Skeleton height={150} />
            )}
          </BusinessHero>
          <BusinessContent>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {business?.name ? (
                    <BusinessName>{business?.name}</BusinessName>
                  ) : (
                    <Skeleton width={100} />
                  )}
                  {business?.reviews?.total > 0 ? (
                    <div className='reviews'>
                      <GrStar />
                      <span>{business?.reviews?.total}</span>
                    </div>
                  ) : (
                    business?.reviews?.total !== 0 && <Skeleton width={50} />
                  )}
                </div>
                <Categories>
                  {
                    Object.keys(business).length > 0 ? (
                      businessType()
                    ) : (
                      <Skeleton width={100} />
                    )
                  }
                </Categories>
                <Medadata>
                  {Object.keys(business).length > 0 ? (
                    <p className='bullet'>
                      <GrClock />
                      {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                    </p>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {business?.distance >= 0 ? (
                    <p className='bullet'>
                      <GrLocation />
                      {parseDistance(business?.distance)}
                    </p>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {orderType === 1 && (
                    <>
                      {business?.delivery_price >= 0 ? (
                        <p>
                          <GrDeliver />
                          {business && parsePrice(business?.delivery_price)}
                        </p>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                </Medadata>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
        </WrapperBusinessCard>
      </ContainerCard>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessController = (props) => {
  const businessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI
  }

  return (
    <BusinessSingleCard {...businessControllerProps} />
  )
}
