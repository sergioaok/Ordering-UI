import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useOrder,
  useEvent,
  useSession
} from 'ordering-components'
import { SearchBar } from '../SearchBar'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import { Button } from '../../styles/Buttons'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { PickupOrderTypeToggleButton } from '../PickupOrderTypeToggleButton'
import {
  BusinessContainer,
  InnerContainer,
  WrappperButtonGroup,
  WrapperOrderingPass,
  WrapperGoButton
} from './styles'
import { useTheme } from 'styled-components'
import { FeaturedBusinessListing } from '../FeaturedBusinessListing'
import { AllBusinessesListing } from '../AllBusinessesListing'
export const BusinessesListing = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const orderType = orderState?.options?.type || 1
  const [isPickupClicked, setIsPickupClicked] = useState(false)

  const handleGoToPage = (search) => {
    events.emit('go_to_page', {
      page: 'filter',
      search: `?${search}`
    })
  }

  const handleChangeCategory = (value) => {
    handleGoToPage(`category=${value}`)
  }

  useEffect(() => {
    if (!isPickupClicked) return
    if (orderType === 2) {
      events.emit('go_to_page', { page: 'filter' })
    }
  }, [orderType, isPickupClicked])

  return (
    <>
      <SearchBar
        isCustomMode
        isEnterKeyLoad
        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
        onSearch={(val) => handleGoToPage(`search=${val}`)}
      />
      <BusinessContainer>
        <InnerContainer>
          <BusinessTypeFilter
            handleChangeBusinessType={handleChangeCategory}
          />
          <WrappperButtonGroup>
            <PickupOrderTypeToggleButton
              initialOrderType={1}
              handleCustomClick={() => setIsPickupClicked(true)}
            />
            <Button
              color='secondary'
              onClick={() => handleGoToPage('timeLimit=0:30')}
            >
              {t('UNDER_30_MIN', 'Under 30 min')}
            </Button>
          </WrappperButtonGroup>
          <WrapperOrderingPass
            bgimage={theme.images?.general?.orderingPass}
            onClick={() => !auth && events.emit('go_to_page', { page: 'signup' })}
          >
            <img alt='Logotype' width='130px' height='30px' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
            <p>{t('$_0_DELIVERY_FEES_REDUCED_SERVICE_FEES', '$ 0 delivery fees, reduced service fees.')}</p>
            <p>{t('SIGN_UP_FOR_ORDERING_PASS', 'Sign Up for Ordering Pass')}</p>
          </WrapperOrderingPass>
          <FeaturedBusinessListing
            {...props}
            orderType={1}
            isSortByReview
            twoColumnView
            defaultShowNumber={4}
          />
        </InnerContainer>
        <AllBusinessesListing
          {...props}
          setIsPickupClicked={setIsPickupClicked}
          handleGoToPage={handleGoToPage}
          handleChangeCategory={handleChangeCategory}
        />
      </BusinessContainer>
    </>
  )
}
