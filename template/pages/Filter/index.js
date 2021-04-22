import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'
import { FilterBusinessesListing } from '../../../src/components/FilterBusinessesListing'

export const FilterPage = (props) => {
  const [events] = useEvent()
  const { search } = useLocation()
  const [initalFilter] = search && search.substring(1).split('&')
  const initialFilterKey = initalFilter && initalFilter.split('=')[0]
  const initialFilterValue = initalFilter && initalFilter.split('=')[1]

  const FilteringProps = {
    ...props,
    initialFilterKey,
    initialFilterValue,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    onFilterBusinessRedirect: () => {
      events.emit('go_to_page', { page: 'filter', replace: true })
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <>
      <HelmetTags page='filter' />
      <FilterBusinessesListing {...FilteringProps} />
    </>
  )
}
