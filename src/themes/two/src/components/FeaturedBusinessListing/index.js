import React from 'react'
import { useLanguage, useOrder, useEvent, BusinessList as BusinessListController } from 'ordering-components'
import { SearchBar } from '../SearchBar'
import { Button } from '../../styles/Buttons'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { BusinessController } from '../BusinessController'
import {
  PopularBusinessContainer,
  TextContent,
  PopularBusinesssList,
  ErrorMessage,
  BackView,
  PositionedContainer
} from './styles'

export const FeaturedBusinessListingUI = (props) => {
  const {
    twoColumnView,
    isFeaturePage,
    defaultShowNumber,
    businessesList,
    paginationProps,
    handleBusinessClick,
    searchValue,
    handleChangeSearch
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const isPopularBisnesses = window.location.pathname === '/businesses/popular'

  return (
    <PopularBusinessContainer
      isFeaturePage={isFeaturePage}
    >
      {isFeaturePage && (
        <SearchBar
          lazyLoad
          isCustomMode
          search={searchValue}
          placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
          onSearch={handleChangeSearch}
        />
      )}
      <TextContent>
        <PositionedContainer
          fixed={isPopularBisnesses}
        >
          {isFeaturePage &&
            <BackView>
              <span onClick={() => handleGoToPage({ page: 'search' })}>
                <EnChevronLeft />
                {t('BACK', ' Back')}
              </span>
            </BackView>}
          <h1>
            {t('MOST_POPULAR_LOCAL_BUSINESSES', 'Most Popular Local Businesses')}
          </h1>
          {!isFeaturePage &&
            <Button
              color='primary'
              className='desktop'
              disabled={businessesList.loading}
              onClick={() => handleGoToPage({ page: 'businesses_feature', params: { feature: 'popular' } })}
            >
              {t('SEE_ALL', 'See All')} <BsArrowRight />
            </Button>}
        </PositionedContainer>
      </TextContent>
      <PopularBusinesssList>
        {
          !businessesList.loading && businessesList.businesses.length === 0 && (
            <BusinessController
              twoColumnView={twoColumnView}
              isFeaturePage={isFeaturePage}
              content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
            />
          )
        }
        {
          businessesList.businesses?.slice(0, !defaultShowNumber ? paginationProps?.totalItems : defaultShowNumber).map((business) => (
            <BusinessController
              twoColumnView={twoColumnView}
              isFeaturePage={isFeaturePage}
              key={business.id}
              className='card'
              business={business}
              handleCustomClick={handleBusinessClick}
              orderType={orderState?.options?.type}
            />
          ))
        }
        {businessesList.loading && (
          [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : !isFeaturePage ? 4 : 10).keys()].map(i => (
            <BusinessController
              twoColumnView={twoColumnView}
              isFeaturePage={isFeaturePage}
              key={i}
              className='card'
              business={{}}
              isSkeleton
              orderType={orderState?.options?.type}
            />
          ))
        )}
        {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </PopularBusinesssList>
      {!isFeaturePage &&
        <Button
          color='primary'
          className='mobile'
          disabled={businessesList.loading}
          onClick={() => handleGoToPage({ page: 'businesses_feature', params: { feature: 'popular' } })}
        >
          {t('SEE_ALL', 'See All')} <BsArrowRight />
        </Button>}
    </PopularBusinessContainer>
  )
}

export const FeaturedBusinessListing = (props) => {
  const AllBusinessesListingProps = {
    ...props,
    UIComponent: FeaturedBusinessListingUI
  }

  return <BusinessListController {...AllBusinessesListingProps} />
}
