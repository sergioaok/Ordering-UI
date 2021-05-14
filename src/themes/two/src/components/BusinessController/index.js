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
  BusinessName,
  BusinessInfoRow
} from './styles'
import AiFillStar from '@meronex/icons/ai/AiFillStar'

const BusinessControllerUI = (props) => {
  const {
    isPickupView,
    twoColumnView,
    isFeaturePage,
    isSkeleton,
    business,
    getBusinessOffer,
    orderState,
    handleClick
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber, optimizeImage }] = useUtils()

  const types = ['food', 'laundry', 'alcohol', 'groceries']

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => {
      if (business[type]) {
        _types.push(t(type.toUpperCase(), type))
      }
    })
    return _types.join(', ')
  }

  return (
    <>
      <ContainerCard
        isSkeleton={isSkeleton}
        pickupView={isPickupView}
        twoColumnView={twoColumnView}
      >
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={() => !isSkeleton && handleClick && handleClick(business)}>
          <BusinessHero>
            {business?.header ? (
              <BusinessHeader twoColumnView={twoColumnView} bgimage={optimizeImage(business?.header, 'h_400,c_limit')} isClosed={!business?.open}>
                <BusinessTags>
                  <div>
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
            <BusinessInfoRow>
              {business?.name ? (
                <BusinessName>{business?.name}</BusinessName>
              ) : (
                <Skeleton width={100} />
              )}
            </BusinessInfoRow>
            <BusinessInfoRow>
              {business && Object.keys(business).length > 0 ? (
                <span>
                  {getBusinessType()}
                </span>
              ) : (
                <Skeleton width={50} />
              )}
              {business && Object.keys(business).length > 0 ? (
                <span className='bullet'>
                  {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                </span>
              ) : (
                <Skeleton width={70} />
              )}
            </BusinessInfoRow>
            {!twoColumnView && !isFeaturePage && (
              <BusinessInfoRow>
                {business?.reviews?.total > 0 ? (
                  <div className='reviews'>
                    <AiFillStar />
                    <span>{business?.reviews?.total}</span>
                  </div>
                ) : (
                  business?.reviews?.total !== 0 && <Skeleton width={50} />
                )}
                {business?.offers ? (
                  <div>
                    {getBusinessOffer(business?.offers) ? (
                      <span>{t('FREE_DELIVEY_OVER', 'Free delivery over')} {getBusinessOffer(business?.offers) || parsePrice(0)}</span>
                    ) : (
                      <>
                        {orderState?.options.type === 1 && (
                          <span>
                            {parsePrice(business?.delivery_price || 0)} {t('DELIVERY', 'delivery')}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <Skeleton width={70} />
                )}
              </BusinessInfoRow>
            )}
          </BusinessContent>
        </WrapperBusinessCard>
      </ContainerCard>
    </>
  )
}

export const BusinessController = (props) => {
  const AllBusinessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI
  }

  return (
    <BusinessSingleCard {...AllBusinessControllerProps} />
  )
}
