import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'
import BsChevronUp from '@meronex/icons/bs/BsChevronUp'
import {
  useLanguage,
  useOrder,
  useEvent
} from 'ordering-components'
import {
  Container,
  Title,
  SortContainer,
  SortItem,
  WrapFilterSectionTitle,
  ClearAll,
  BusinessNumber
} from './styles'
export const BusinessesFilter = (props) => {
  const {
    isFilterPage,
    loading,
    totalItems,
    searchValue,
    businessTypeSelected,
    defaultOrderByValue,
    defaultMaxDeliveryFee,
    handleChangeSort
  } = props
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [orderState] = useOrder()
  const [sortSelected, setSortSelected] = useState(null)
  const [maxDeliveryFee, setMaxDeliveryFee] = useState(2)
  const [openSortFilter, setOpenSortFilter] = useState(true)

  const filterTypes = [
    { value: null, content: t('PICKED_FOR_YOU_(DEFAULT)', 'Picked for you (default)') },
    { value: 'name', content: t('NAME)', 'Name') },
    { value: 'rating', content: t('RATING', 'Rating') },
    { value: 'distance', content: t('DISTANCE', 'Distance') },
    { value: 'minimun', content: t('MINIMUM_PURCHASE', 'Minimum purchase') },
    { value: 'newest', content: t('NEWER_STORE', 'Newer store') }
  ]

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleSort = (value) => {
    setSortSelected(value)
    if (isFilterPage) {
      handleChangeSort(value)
    } else {
      handleGoToPage({ page: 'filter', search: `?orderBy=${value}` })
    }
  }

  useEffect(() => {
    if (!defaultOrderByValue || defaultOrderByValue === sortSelected) return
    setSortSelected(defaultOrderByValue)
  }, [defaultOrderByValue])

  useEffect(() => {
    if (!defaultMaxDeliveryFee || defaultMaxDeliveryFee === maxDeliveryFee) return
    setMaxDeliveryFee(defaultMaxDeliveryFee)
  }, [defaultMaxDeliveryFee])

  return (
    <Container>
      <Title>
        {(searchValue === '' || searchValue === null || !searchValue) ? (
          <>
            {(businessTypeSelected === null || businessTypeSelected === 'null') ? t('ALL_STORES', 'All stores') : businessTypeSelected}
          </>
        ) : (
          <>
            {searchValue && <span>"{searchValue}"</span>}
          </>
        )}
      </Title>
      {isFilterPage && (
        <BusinessNumber>
          {!loading ? (
            <>
              {totalItems} {t('RESTAURANTS', 'Restaurants')}
            </>
          ) : (
            <Skeleton width={150} />
          )}
        </BusinessNumber>
      )}
      {isFilterPage && (
        <ClearAll onClick={() => handleGoToPage({ page: 'search' })}>
          {t('CLEAR_ALL', 'Clear all')}
        </ClearAll>
      )}
      <SortContainer>
        <WrapFilterSectionTitle onClick={() => setOpenSortFilter(!openSortFilter)}>
          <p>{t('SORT', 'Sort')}</p>
          {openSortFilter ? <BsChevronDown /> : <BsChevronUp />}
        </WrapFilterSectionTitle>
        {openSortFilter && filterTypes.map(item => (
          <SortItem
            key={item.value}
            onClick={() => handleSort(item.value)}
          >
            {item.value === 'delivery_time'}
            {orderState.options?.type === 1}
            {sortSelected === item.value ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
            <span>{item.content}</span>
          </SortItem>
        ))}
      </SortContainer>
    </Container>
  )
}
