import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AiFillStar from '@meronex/icons/ai/AiFillStar'
import BsDot from '@meronex/icons/bs/BsDot'
import { useUtils, useOrder, useLanguage, useConfig } from 'ordering-components'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { useTheme } from 'styled-components'

import { convertHoursToMinutes } from '../../../../../utils'

import {
  BusinessContainer,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  BusinessName,
  BusinessDetail,
  WrapperBottom,
  DeliveryAndMin,
  GroupAndSelector
} from './styles'

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [configState] = useConfig()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const [{ parsePrice, optimizeImage }] = useUtils()

  return (
    <>
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container'>
        <WrapperBusinessLogo>
          {!loading ? (
            <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
          ) : (
            <Skeleton height={90} width={90} />
          )}
        </WrapperBusinessLogo>
      </BusinessContainer>

      <BusinessInfo className='info'>
        <BusinessInfoItem>
          <BusinessName>
            {!loading ? (
              <>{business?.name}</>
            ) : (
              <Skeleton width={100} />
            )}
          </BusinessName>
          <BusinessDetail>
            {!loading ? (
              <>
                {orderState?.options.type === 1 && (
                  <>
                    <p>{parsePrice(business?.delivery_price || 0)} {t('DELIVERY', 'delivery')}</p>
                    <BsDot />
                  </>
                )}
              </>
            ) : (
              <Skeleton width={200} />
            )}
            {!loading ? (
              <p>
                {business?.reviews?.total}
                <AiFillStar />
              </p>
            ) : (
              <Skeleton width={100} />
            )}
            {!loading ? (
              <>
                <p>
                  ({business?.reviews?.reviews.length} {t('RATINGS', 'ratings')})
                </p>
                <BsDot />
              </>
            ) : (
              <Skeleton width={150} />
            )}
            {!loading ? (
              <>
                {orderState?.options?.type === 1 ? (
                  <p>
                    {convertHoursToMinutes(business?.delivery_time)}
                  </p>
                ) : (
                  <p>
                    {convertHoursToMinutes(business?.pickup_time)}
                  </p>
                )}
              </>
            ) : (
              <Skeleton width={70} />
            )}
          </BusinessDetail>
        </BusinessInfoItem>
      </BusinessInfo>
      <WrapperBottom>
        <DeliveryAndMin>
          {orderState?.options.type === 1 && (
            <div className='delivery'>
              {!loading ? (
                <>
                  <p>
                    {business && parsePrice(business?.delivery_price || 0)}
                  </p>
                  <p>{t('DELIVERY_FEE', 'Delivery fee')}</p>
                </>
              ) : (
                <>
                  <p>
                    <Skeleton width={70} />
                  </p>
                  <p>
                    <Skeleton width={70} />
                  </p>
                </>
              )}
            </div>
          )}
          <div>
            {!loading ? (
              <>
                <p>{convertHoursToMinutes(business?.delivery_time)}</p>
                <p>{t('MINUTES', 'Minutes')}</p>
              </>
            ) : (
              <>
                <p>
                  <Skeleton width={70} />
                </p>
                <p>
                  <Skeleton width={70} />
                </p>
              </>
            )}
          </div>
        </DeliveryAndMin>
        {!loading && (
          <GroupAndSelector>
            <OrderTypeSelectorHeader
              configTypes={configTypes}
              toggle
            />
          </GroupAndSelector>
        )}
      </WrapperBottom>
    </>
  )
}
