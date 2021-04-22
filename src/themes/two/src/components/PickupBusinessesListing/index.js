import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useOrder, useSession, useConfig, BusinessList as BusinessListController } from 'ordering-components'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { Button } from '../../styles/Buttons'
import { SearchBar } from '../SearchBar'
import { BusinessController } from '../BusinessController'
import { NotFoundSource } from '../NotFoundSource'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { BusinessesMap } from '../BusinessesMap'
import { PickupOrderTypeToggleButton } from '../PickupOrderTypeToggleButton'

import {
  PickupBusinessContainer,
  LeftContent,
  PickupBusinessList,
  ErrorMessage,
  InnerContainer,
  WrapperBusinesses,
  MapSkeleton,
  LeftInnerContainer,
  WrapperBusinessMap,
  WrapPickupButton
} from './styles'

const PickupBusinessesListingUI = (props) => {
  const {
    initialOrderType,
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    handleChangeSearch,
    handleBusinessClick,
    handleChangeBusinessType
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [configState] = useConfig()
  const PIXELS_TO_SCROLL = document.getElementById('footer')?.offsetHeight + 100 || 700

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <PickupBusinessContainer>
      <SearchBar
        lazyLoad
        isCustomMode
        search={searchValue}
        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
        onSearch={handleChangeSearch}
      />
      <InnerContainer>
        <WrapPickupButton>
          <PickupOrderTypeToggleButton
            initialOrderType={initialOrderType}
          />
        </WrapPickupButton>
        <WrapperBusinesses>
          <LeftContent>
            <LeftInnerContainer>
              <BusinessTypeFilter
                noAutoScroll
                handleChangeBusinessType={handleChangeBusinessType}
              />
            </LeftInnerContainer>
          </LeftContent>
          <h1>
            {t('RESTAURANTS_NEARBY', 'Restaurants Nearby')}
          </h1>
          <PickupBusinessList>
            {
              !businessesList.loading && businessesList.businesses.length === 0 && (
                <NotFoundSource
                  content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
                >
                  <Button
                    color='primary'
                    outline
                    onClick={() => handleClickAddress()}
                  >
                    {t('CHANGE_ADDRESS', 'Select other Address')}
                  </Button>
                </NotFoundSource>
              )
            }
            {
              businessesList.businesses?.map((business) => (
                <BusinessController
                  key={business.id}
                  className='card'
                  business={business}
                  handleCustomClick={handleBusinessClick}
                  orderType={orderState?.options?.type}
                />
              ))
            }
            {businessesList.loading && (
              [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 10).keys()].map(i => (
                <BusinessController
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
          </PickupBusinessList>
        </WrapperBusinesses>
        <WrapperBusinessMap>
          {!businessesList.loading && !configState.loading ? (
            <BusinessesMap
              businessList={businessesList.businesses}
              userLocation={orderState?.options?.address?.location}
            />
          ) : (
            <MapSkeleton>
              <Skeleton />
            </MapSkeleton>
          )}
        </WrapperBusinessMap>
      </InnerContainer>
      <Modal
        title={t('ADDRESS_FORM', 'Address Form')}
        open={modals.formOpen}
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onClose={() => setModals({ ...modals, formOpen: false })}
          onCancel={() => setModals({ ...modals, formOpen: false })}
          onSaveAddress={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>
      <Modal
        title={t('ADDRESSES', 'Addresses')}
        open={modals.listOpen}
        width='70%'
        onClose={() => setModals({ ...modals, listOpen: false })}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          userId={isNaN(userCustomer) ? null : userCustomer}
          onCancel={() => setModals({ ...modals, listOpen: false })}
          onAccept={() => handleFindBusinesses()}
        />
      </Modal>
    </PickupBusinessContainer>
  )
}

export const PickupBusinessesListing = (props) => {
  const PickupBusinessesListingProps = {
    ...props,
    UIComponent: PickupBusinessesListingUI
  }

  return <BusinessListController {...PickupBusinessesListingProps} />
}
