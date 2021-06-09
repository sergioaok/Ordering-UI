import React, { useEffect } from 'react'
import { AutoScroll } from '../AutoScroll'
import { BusinessList as BusinessListController, useOrder, useLanguage } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { useSearchValue } from '../../contexts/SearchValueContext'
import {
  Container,
  InnerContainer,
  ErrorMessage
} from './styles'

const DiscountedBusinessesUI = (props) => {
  const {
    isSkeleton,
    businessesList,
    onBusinessClick,
    handleChangeSearch
  } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [searchValue] = useSearchValue()

  useEffect(() => {
    if (searchValue === null) return
    handleChangeSearch(searchValue)
  }, [searchValue])
  return (
    <Container>
      <InnerContainer>
        <AutoScroll scrollId='dicountBusinessScroll'>
          {(isSkeleton || businessesList.loading) ? (
            [...Array(10).keys()].map(index => (
              <BusinessController
                isDiscounted
                key={index}
                className='card'
                business={{}}
                isSkeleton
                orderType={orderState?.options?.type}
              />
            ))
          ) : (
            <>
              {
                businessesList.businesses?.map(business => (
                  <BusinessController
                    isDiscounted
                    key={business.id}
                    className='card'
                    business={business}
                    handleCustomClick={onBusinessClick}
                    orderType={orderState?.options?.type}
                  />
                ))
              }
            </>
          )}
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
    </Container>
  )
}

export const DiscountedBusinesses = (props) => {
  const businessListingProps = {
    ...props,
    isOfferBusinesses: true,
    UIComponent: DiscountedBusinessesUI
  }
  return <BusinessListController {...businessListingProps} />
}
