import React, { useEffect } from 'react'
import { AutoScroll } from '../AutoScroll'
import { useSearchValue } from '../../contexts/SearchValueContext'
import { BusinessList as BusinessListController, useOrder, useLanguage } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import {
  Container,
  InnerContainer,
  ErrorMessage
} from './styles'

const PromotionsBusinessesUI = (props) => {
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
        <AutoScroll scrollId='promotionScroll'>
          {(isSkeleton || businessesList.loading) && (
            [...Array(10).keys()].map(index => (
              <BusinessController
                isPromotion
                key={index}
                className='card'
                business={{}}
                isSkeleton
                orderType={orderState?.options?.type}
              />
            ))
          )}
          {
            businessesList.businesses?.map(business => (
              <BusinessController
                isPromotion
                key={business.id}
                className='card'
                business={business}
                handleCustomClick={onBusinessClick}
                orderType={orderState?.options?.type}
              />
            ))
          }
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

export const PromotionsBusinesses = (props) => {
  const businessListingProps = {
    ...props,
    isOfferBusinesses: true,
    UIComponent: PromotionsBusinessesUI
  }
  return <BusinessListController {...businessListingProps} />
}
