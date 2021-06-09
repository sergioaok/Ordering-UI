import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FaStar from '@meronex/icons/fa/FaStar'
import GiTronArrow from '@meronex/icons/gi/GiTronArrow'
import { useTheme } from 'styled-components'
import { useLanguage, useUtils } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { getHourMin } from '../../../../../utils'
import {
  Container,
  Header,
  BuinsinessInfo,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessMainInfo,
  MetaInfo
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const ProfileBusinesBasicInformation = (props) => {
  const {
    isSkeleton,
    business,
    onBusinesClick
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDistance, optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types
  }
  return (
    <Container
      onClick={() => !isSkeleton && onBusinesClick(business)}
    >
      <Header>
        <BusinessMainInfo>
          <WrapperBusinessLogo>
            {!isSkeleton ? (
              <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
            ) : (
              <Skeleton height={70} width={70} />
            )}
          </WrapperBusinessLogo>
          <MetaInfo>
            {!isSkeleton ? (
              <h1>{business?.name}</h1>
            ) : (
              <Skeleton width={100} />
            )}
            {!isSkeleton ? (
              <p>
                <span className='primary'>{business?.reviews?.total}</span>
                <FaStar className='star' />
                <span className='primary'>{parseDistance(business?.distance || 0)}</span>
              </p>
            ) : (
              <Skeleton />
            )}
          </MetaInfo>
        </BusinessMainInfo>
        <Button
          color='primary'
        >
          <GiTronArrow />
          {t('IR', 'IR')}
        </Button>
      </Header>
      <BuinsinessInfo>
        {!isSkeleton ? (
          <p>{business?.address}</p>
        ) : (
          <Skeleton />
        )}
        {!isSkeleton ? (
          <p>
            {business?.today?.enabled && (
              <>
                <span className='open'>{t('OPEN', 'Open')}</span>
                <span>{getHourMin(business?.today?.lapses[0]?.open?.hour, business?.today?.lapses[0]?.open?.minute)}</span>
                <span>-</span>
                <span>{getHourMin(business?.today?.lapses[0]?.close?.hour, business?.today?.lapses[0]?.close?.minute)}</span>
              </>
            )}
          </p>
        ) : (
          <Skeleton />
        )}
        {!isSkeleton ? (
          <p className='type'>
            {getBusinessType().map(type => (
              <span className='type' key={type}>
                {type}
              </span>
            ))}
          </p>
        ) : (
          <Skeleton width={100} />
        )}
      </BuinsinessInfo>
    </Container>
  )
}
