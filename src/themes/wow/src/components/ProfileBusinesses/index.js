import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useOrder,
  useConfig,
  BusinessList as BusinessListController
} from 'ordering-components'
import { Modal } from '../../../../../components/Modal'
import { SearchBar } from '../../../../../components/SearchBar'
import { BusinessesMap } from '../../../../../components/BusinessesMap'
import { ProfileBusinesBasicInformation } from '../ProfileBusinesBasicInformation'
import { SpecificBusiness } from '../SpecificBusiness'

import {
  Container,
  WrapperBusinessMap,
  MapSkeleton,
  WrapSearchBar,
  ShowListContainer,
  BusinessListContainer,
  ShowMapButtonWrapper
} from './styles'
import { Button } from 'ordering-ui/theme_wow'

const ProfileBusinessesUI = (props) => {
  const {
    isCustomLayout,
    businessesList,
    searchValue,
    paginationProps,
    handleChangeSearch,
    getBusinesses
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [configState] = useConfig()
  const PIXELS_TO_SCROLL = document.getElementById('footer')?.offsetHeight + 100 || 300

  const [showList, setShowList] = useState(false)
  const [businessDetailShow, setBusinessDetialShow] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  const onBusinesClick = (business) => {
    setBusinessDetialShow(true)
    setSelectedBusiness(business)
  }

  const onBusinessCustomClick = (slug) => {
    const business = businessesList.businesses.find(_business => _business?.slug === slug)
    onBusinesClick(business)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <Container>
      <h1>{t('BUSINESSES', 'Businesses')}</h1>
      {!showList && (
        <WrapperBusinessMap>
          <WrapSearchBar>
            <SearchBar
              lazyLoad
              search={searchValue}
              isCustomLayout={isCustomLayout}
              placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
              onSearch={handleChangeSearch}
            />
          </WrapSearchBar>
          {!businessesList.loading && !configState.loading ? (
            <BusinessesMap
              businessList={businessesList.businesses}
              userLocation={orderState?.options?.address?.location}
              onBusinessCustomClick={onBusinessCustomClick}
            />
          ) : (
            <MapSkeleton>
              <Skeleton />
            </MapSkeleton>
          )}
          <Button
            color='primary'
            onClick={() => setShowList(true)}
          >
            {t('SHOW_LIST', 'Show list')}
          </Button>
        </WrapperBusinessMap>
      )}
      {businessDetailShow && (
        <Modal
          open={businessDetailShow}
          width='60%'
          onClose={() => setBusinessDetialShow(false)}
        >
          <SpecificBusiness
            business={selectedBusiness}
          />
        </Modal>
      )}
      {showList && (
        <ShowListContainer>
          <SearchBar
            lazyLoad
            search={searchValue}
            isCustomLayout={isCustomLayout}
            placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
            onSearch={handleChangeSearch}
          />
          <BusinessListContainer>
            {businessesList.businesses?.map((business) => (
              <ProfileBusinesBasicInformation
                key={business.id}
                business={business}
                orderType={orderState?.options?.type}
                onBusinesClick={onBusinesClick}
              />
            ))}
            {businessesList.loading && (
              [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()].map(i => (
                <ProfileBusinesBasicInformation
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  orderType={orderState?.options?.type}
                />
              ))
            )}
          </BusinessListContainer>
          <ShowMapButtonWrapper>
            <Button
              color='primary'
              onClick={() => setShowList(false)}
            >
              {t('SHOW_MAP', 'Show map')}
            </Button>
          </ShowMapButtonWrapper>
        </ShowListContainer>
      )}
    </Container>
  )
}

export const ProfileBusinesses = (props) => {
  const BusinessesListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    propsToFetch: ['id', 'name', 'header', 'logo', 'address', 'location', 'timezone', 'schedule', 'open', 'phone', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'menus'],
    UIComponent: ProfileBusinessesUI
  }

  return <BusinessListController {...BusinessesListingProps} />
}
