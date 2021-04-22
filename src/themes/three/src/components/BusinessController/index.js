import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FaCrown from '@meronex/icons/fa/FaCrown'
import { BusinessController as BusinessSingleCard, useLanguage, useUtils } from 'ordering-components'
import { convertHoursToMinutes } from '../../../../../utils'

import {
  ContainerCard,
  BusinessHero,
  BusinessHeader,
  BusinessTags,
  BusinessContent,
  BusinessName,
  BusinessInfoRow,
  MetaContent,
  WrapperReview
} from './styles'
const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    isCustomMode,
    business,
    orderState,
    getBusinessOffer,
    handleClick
  } = props
  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber, parseDistance, optimizeImage }] = useUtils()
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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <ContainerCard
        isSkeleton={isSkeleton}
        isCustomMode={isCustomMode}
        onClick={() => !isSkeleton && handleClick && handleClick(business)}
      >
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
          <MetaContent>
            <BusinessInfoRow>
              {business?.name ? (
                <BusinessName>{business?.name}</BusinessName>
              ) : (
                <Skeleton width={100} />
              )}
            </BusinessInfoRow>
            <BusinessInfoRow>
              {Object.keys(business).length > 0 ? (
                <span>
                  {getBusinessType()}
                </span>
              ) : (
                <Skeleton width={50} />
              )}
            </BusinessInfoRow>
            <BusinessInfoRow>
              {Object.keys(business).length > 0 ? (
                <span className='bullet'>
                  {convertHoursToMinutes(orderState?.options?.type === 1 ? business?.delivery_time : business?.pickup_time) || <Skeleton width={100} />}
                </span>
              ) : (
                <Skeleton width={50} />
              )}
              {business?.distance >= 0 ? (
                <span className='bullet'>
                  {parseDistance(business?.distance)}
                </span>
              ) : (
                <Skeleton width={50} />
              )}
              {orderState?.options.type === 1 && (
                <>
                  {business?.delivery_price >= 0 ? (
                    <span>
                      {business && parsePrice(business?.delivery_price)}
                    </span>
                  ) : (
                    <Skeleton width={50} />
                  )}
                </>
              )}
            </BusinessInfoRow>
          </MetaContent>
          <WrapperReview>
            {business?.reviews?.total > 0 ? (
              <span>{business?.reviews?.total}</span>
            ) : (
              business?.reviews?.total !== 0 && <Skeleton width={25} />
            )}
          </WrapperReview>
        </BusinessContent>
      </ContainerCard>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
export const BusinessController = (props) => {
  const BusinessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI
  }
  return <BusinessSingleCard {...BusinessControllerProps} />
}
