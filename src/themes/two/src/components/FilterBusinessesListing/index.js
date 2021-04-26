import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useOrder,
  useSession,
  useEvent,
  BusinessList as BusinessListController
} from 'ordering-components'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { Button } from '../../styles/Buttons'
import { SearchBar } from '../SearchBar'
import { BusinessController } from '../BusinessController'
import { NotFoundSource } from '../NotFoundSource'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { PickupOrderTypeToggleButton } from '../PickupOrderTypeToggleButton'
import { FilterViewBackButton } from '../FilterViewBackButton'
import {
  FilterBuinessContainer,
  LeftContent,
  Title,
  AllStoreNumber,
  WrapButtonGroup,
  FilterBusinessList,
  ErrorMessage,
  InnerContainer,
  WrapperBusinesses,
  LeftInnerContainer
} from './styles'

const FilterBusinessesListingUI = (props) => {
  const {
    onFilterBusinessRedirect,
    businessesList,
    paginationProps,
    searchValue,
    timeLimitValue,
    businessTypeSelected,
    getBusinesses,
    handleChangeSearch,
    handleBusinessClick,
    handleChangeBusinessType,
    handleChangeTimeLimit
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const PIXELS_TO_SCROLL = document.getElementById('footer')?.offsetHeight + 100 || 700

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))
  const [isGoBackClicked, setIsGoBackClicked] = useState(false)

  const handleGoToPage = () => {
    events.emit('go_to_page', { page: 'search' })
  }

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const changeBusinessType = (type) => {
    handleChangeBusinessType(type)
    onFilterBusinessRedirect()
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const toggelTimeLimit = () => {
    onFilterBusinessRedirect()
    if (!timeLimitValue) {
      handleChangeTimeLimit('0:30')
    } else {
      handleChangeTimeLimit(null)
    }
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (!isGoBackClicked) return
    if (orderState?.options?.type === 1) {
      handleGoToPage()
    }
  }, [isGoBackClicked, orderState?.options?.type])

  return (
    <FilterBuinessContainer>
      <SearchBar
        lazyLoad
        isCustomMode
        search={searchValue}
        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
        onSearch={handleChangeSearch}
      />
      <InnerContainer>
        <WrapperBusinesses>
          <LeftContent>
            <LeftInnerContainer>
              <>
                <FilterViewBackButton
                  handleCustomClick={() => setIsGoBackClicked(true)}
                />
                <Title>
                  {(businessTypeSelected === null || businessTypeSelected === 'null') ? t('ALL_BUSINESS', 'All Business') : businessTypeSelected}
                </Title>
                <AllStoreNumber>
                  {!businessesList.loading ? (
                    <>
                      {paginationProps?.totalItems} {t('STORES_NEARBY', 'STORES NEARBY')}
                    </>
                  ) : (
                    <Skeleton width={150} />
                  )}
                </AllStoreNumber>
              </>
              <BusinessTypeFilter
                noAutoScroll
                handleChangeBusinessType={changeBusinessType}
              />
              <WrapButtonGroup>
                <PickupOrderTypeToggleButton />
                <Button
                  color={timeLimitValue ? 'dark' : 'secondary'}
                  onClick={() => toggelTimeLimit()}
                >
                  {t('UNDER_30_MIN', 'Under 30 min')}
                </Button>
              </WrapButtonGroup>
            </LeftInnerContainer>
          </LeftContent>
          <FilterBusinessList>
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
          </FilterBusinessList>
        </WrapperBusinesses>
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
    </FilterBuinessContainer>
  )
}

export const FilterBusinessesListing = (props) => {
  const AllBusinessesListingProps = {
    ...props,
    UIComponent: FilterBusinessesListingUI
  }

  return <BusinessListController {...AllBusinessesListingProps} />
}
