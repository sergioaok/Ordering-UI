import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSearchValue } from '../../contexts/SearchValueContext'
import { AutoScroll } from '../AutoScroll'
import { BusinessList as BusinessListController, useUtils, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  BusinessListContainer,
  InnerContainer,
  WrapperBusinessLogo,
  BusinessLogo,
  LoadMore,
  ErrorMessage
} from './styles'

const OurBusinessesUI = (props) => {
  const {
    isSkeleton,
    businessesList,
    paginationProps,
    getBusinesses,
    onBusinessClick,
    handleChangeSearch
  } = props
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [, t] = useLanguage()
  const [searchValue] = useSearchValue()

  useEffect(() => {
    if (searchValue === null) return
    handleChangeSearch(searchValue)
  }, [searchValue])

  return (
    <BusinessListContainer>
      <InnerContainer>
        <AutoScroll scrollId='ourBusinessesScroll'>
          {(isSkeleton || businessesList.loading) && (
            [...Array(20).keys()].map(index => (
              <WrapperBusinessLogo key={index}>
                <Skeleton width={90} height={75} />
              </WrapperBusinessLogo>
            ))
          )}
          <>
            {
              businessesList.businesses?.map(business => (
                <WrapperBusinessLogo
                  key={business.id}
                  onClick={() => onBusinessClick(business)}
                >
                  <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                </WrapperBusinessLogo>
              ))
            }
            {paginationProps?.totalPages && paginationProps?.currentPage < paginationProps?.totalPages && (
              <LoadMore onClick={() => getBusinesses()}>{t('LOAD_MORE', 'Load more')}</LoadMore>
            )}
          </>
        </AutoScroll>
        {
          !businessesList.loading && businessesList.businesses.length === 0 && (
            <ErrorMessage>
              {t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
            </ErrorMessage>
          )
        }
        {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </InnerContainer>
    </BusinessListContainer>
  )
}

export const OurBusinesses = (props) => {
  const businessListingProps = {
    ...props,
    paginationSettings: {
      pageSize: 20
    },
    UIComponent: OurBusinessesUI
  }
  return <BusinessListController {...businessListingProps} />
}
