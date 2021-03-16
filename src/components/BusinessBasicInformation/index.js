import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiClock from '@meronex/icons/fi/FiClock'
import GrLocation from '@meronex/icons/gr/GrLocation'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import BsExclamationCircle from '@meronex/icons/bs/BsExclamationCircle'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'

import { useUtils, useOrder } from 'ordering-components'

import { convertHoursToMinutes } from '../../utils'

import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem
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

  const [orderState] = useOrder()

  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return 'none'
    const typeObj = types.map(t => {
      return { [t]: business[t] }
    }).reduce((r, c) => ({ ...r, ...c }), {})
    const businessType = Object.entries(typeObj).reduce((a, [k, v]) => v !== false ? [...a, [k, v]] : a, [])[0]
    return businessType[0]
  }

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
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container'>
        <BusinessContent>
          <WrapperBusinessLogo>
            {!loading ? (
              <BusinessLogo bgimage={optimizeImage(business?.logo, 'h_200,c_limit')} />
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

                {!loading && (
                  <h5>
                    <BsExclamationCircle
                      className='popup'
                      onClick={() => setOpenBusinessInformation(true)}
                    />
                  </h5>
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
