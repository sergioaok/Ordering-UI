import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessesList = (props) => {
  const [events] = useEvent()

  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug'],
    isCustomLayout: true,
    onRedirectPage: (data) => events.emit('go_to_page', data)
  }

  return (
    <>
      <HelmetTags page='search' />
      <BusinessesListing {...businessListingProps} />
    </>
  )
}
