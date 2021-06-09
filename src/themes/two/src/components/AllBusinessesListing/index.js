import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useOrder, useSession } from 'ordering-components'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { Button } from '../../styles/Buttons'
import { BusinessController } from '../BusinessController'
import { NotFoundSource } from '../NotFoundSource'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { PickupOrderTypeToggleButton } from '../PickupOrderTypeToggleButton'
import {
  AllBuinessContainer,
  LeftContent,
  Title,
  AllStoreNumber,
  WrapperSeeAllButton,
  WrapButtonGroup,
  AllBusinessList,
  ErrorMessage,
  InnerContainer,
  WrapperBusinesses,
  LeftInnerContainer
} from './styles'

export const AllBusinessesListing = (props) => {
  const {
    businessesList,
    paginationProps,
    getBusinesses,
    setIsPickupClicked,
    handleBusinessClick,
    handleGoToPage,
    handleChangeCategory
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const PIXELS_TO_SCROLL = document.getElementById('footer')?.offsetHeight + 100 || 700

  const [modals, setModals] = useState({ listOpen: false, formOpen: false })

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
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

  return (
    <AllBuinessContainer>
      <InnerContainer>
        <WrapperBusinesses>
          <LeftContent>
            <LeftInnerContainer>
              <Title>
                {t('ALL_BUSINESS', 'All Business')}
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
              <BusinessTypeFilter
                noAutoScroll
                handleChangeBusinessType={handleChangeCategory}
              />
              <>
                <WrapperSeeAllButton>
                  <WrapButtonGroup>
                    <PickupOrderTypeToggleButton
                      isMainBusinessListingPage
                      handleCustomClick={() => setIsPickupClicked(true)}
                    />
                    <Button
                      color='secondary'
                      onClick={() => handleGoToPage('timeLimit=0:30')}
                    >
                      {t('UNDER_30_MIN', 'Under 30 min')}
                    </Button>
                  </WrapButtonGroup>
                </WrapperSeeAllButton>
              </>
            </LeftInnerContainer>
          </LeftContent>
          <AllBusinessList>
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
                (business && (
                  <BusinessController
                    key={business.id}
                    className='card'
                    business={business}
                    handleCustomClick={handleBusinessClick}
                    orderType={orderState?.options?.type}
                  />
                ))
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
          </AllBusinessList>
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
    </AllBuinessContainer>
  )
}
