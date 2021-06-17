import React, { useEffect, useState, useCallback } from 'react'
import FiMap from '@meronex/icons/fi/FiMap'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  FilterContainer
} from './styles'

import { Button } from '../../../../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { Modal } from '../../../../../components/Modal'
import { Alert } from '../../../../../components/Confirm'
import { AddressForm } from '../../../../../components/AddressForm'
import { AddressList } from '../../../../../components/AddressList'
import { SearchBar } from '../SearchBar'

import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessController } from '../BusinessController'
import { OrdersOption } from '../../../../../components/OrdersOption'
import { BusinessesMap } from '../../../../../components/BusinessesMap'

import {
  useOrder,
  useSession,
  useLanguage,
  BusinessList as BusinessListController
} from 'ordering-components'

const PIXELS_TO_SCROLL = 300

const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    onRedirectPage,
    handleChangeSearch,
    handleChangeBusinessType,
    handleBusinessClick,
    timeLimitValue,
    handleChangeTimeLimit
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

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

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const toggleMap = () => {
    setActiveMap(!activeMap)
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
    setMapErrors('')
  }

  const handleMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    })
  }

  useEffect(() => {
    if (mapErrors) {
      handleMapErrors(mapErrors)
      setActiveMap(false)
    }
  }, [mapErrors])

  const getCustomArray = (list) => {
    const isArray = Array.isArray(list)
    return isArray ? list : Object.values(list)
  }

  const toggelTimeLimit = () => {
    if (!timeLimitValue) {
      handleChangeTimeLimit('0:30')
    } else {
      handleChangeTimeLimit(null)
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer>
        <BusinessTypeFilter
          images={props.images}
          businessTypes={props.businessTypes}
          defaultBusinessType={props.defaultBusinessType}
          handleChangeBusinessType={handleChangeBusinessType}
        />

        <FilterContainer>
          <Button
            color={`${timeLimitValue ? 'primary' : 'secundary'}`}
            onClick={() => toggelTimeLimit()}
          >
            {t('UNDER_30_MIN', 'Under 30 min')}
          </Button>
          <WrapperSearch>
            <SearchBar
              lazyLoad
              isCustomLayout
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
              onSearch={handleChangeSearch}
            />
            {isCustomLayout && (
              <FiMap onClick={toggleMap} />
            )}
          </WrapperSearch>
        </FilterContainer>

        {activeMap && (
          <BusinessesMap
            businessList={businessesList.businesses}
            userLocation={orderState?.options?.address?.location}
            setErrors={setMapErrors}
          />
        )}

        {isCustomLayout && onRedirectPage && (
          <>
            <OrdersOption
              horizontal
              isBusinessesPage
              onRedirectPage={onRedirectPage}
              titleContent={t('CARTS', 'Carts')}
              businessesIds={businessesIds}
              customArray={
                getCustomArray(
                  orderState.carts)?.filter(cart => cart.products.length > 0
                )
              }
            />
            <OrdersOption
              horizontal
              asDashboard
              isBusinessesPage
              businessesIds={businessesIds}
              onRedirectPage={onRedirectPage}
              userCustomerId={userCustomer?.id}
            />
          </>
        )}

        {isCustomLayout && businessesList?.businesses?.length > 0 && (
          <BusinessesTitle>
            {t('BUSINESSES', 'Businesses')}
          </BusinessesTitle>
        )}

        <BusinessList>
          {
            !businessesList.loading && businessesList.businesses.length === 0 && (
              <NotFoundSource
                content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
              >
                <Button
                  outline
                  color='primary'
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
            [...Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()].map(i => (
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
        </BusinessList>

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
          title={t('ADDRESSES', 'Address List')}
          open={modals.listOpen}
          width='70%'
          onClose={() => setModals({ ...modals, listOpen: false })}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            onAccept={() => handleFindBusinesses()}
          />
        </Modal>

        <Alert
          title={!mapErrors ? t('SEARCH', 'Search') : t('BUSINESSES_MAP', 'Businesses Map')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => handleCloseAlerts()}
          onAccept={() => handleCloseAlerts()}
          closeOnBackdrop={false}
        />
      </BusinessContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
