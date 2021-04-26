import React, { useState, useCallback, useEffect } from 'react'
import {
  BusinessList as BusinessListController,
  useOrder,
  useLanguage,
  useSession
} from 'ordering-components'
import { BusinessesFilter } from '../BusinessesFilter'
import { BusinessController } from '../BusinessController'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../../../../../components/Modal'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { Alert } from '../../../../../components/Confirm'
import { SearchBar } from '../SearchBar'
import {
  Container,
  FilterBusinessList,
  ErrorMessage
} from './styles'

const PIXELS_TO_SCROLL = 500

const FilterBusinessListingUI = (props) => {
  const {
    onFilterBusinessRedirect,
    orderByValue,
    maxDeliveryFee,
    searchValue,
    businessesList,
    businessTypeSelected,
    handleBusinessClick,
    paginationProps,
    handleChangeOrderBy,
    handleChangeSearch,
    handleChangeMaxDeliveryFee,
    getBusinesses
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

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

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
  }

  const handleChangeSort = (value) => {
    handleChangeOrderBy(value)
    onFilterBusinessRedirect()
  }

  const handleMaxDeliveryFee = (value) => {
    handleChangeMaxDeliveryFee(value)
    onFilterBusinessRedirect()
  }

  const handleOnSearch = (value) => {
    handleChangeSearch(value)
    onFilterBusinessRedirect()
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <Container>
        <SearchBar
          lazyLoad
          isCustomMode
          search={searchValue}
          placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
          onSearch={handleOnSearch}
        />
        {!(businessTypeSelected === 'null') && (
          <BusinessesFilter
            isFilterPage
            defaultOrderByValue={orderByValue}
            defaultMaxDeliveryFee={maxDeliveryFee}
            searchValue={searchValue}
            businessTypeSelected={businessTypeSelected}
            loading={businessesList.loading}
            totalItems={paginationProps?.totalItems}
            handleChangeSort={handleChangeSort}
            handleMaxDeliveryFee={handleMaxDeliveryFee}
          />
        )}
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
            businessesList.businesses.length > 0 && businessesList.businesses?.map((business) => (
              <BusinessController
                isCustomMode
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
                isCustomMode
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
            title={t('SEARCH', 'Search')}
            content={alertState.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={alertState.open}
            onClose={() => handleCloseAlerts()}
            onAccept={() => handleCloseAlerts()}
            closeOnBackdrop={false}
          />
        </FilterBusinessList>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}

export const FilterBusinessesListing = (props) => {
  const FilterBusinessListingProps = {
    ...props,
    UIComponent: FilterBusinessListingUI
  }
  return <BusinessListController {...FilterBusinessListingProps} />
}
