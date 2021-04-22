import React from 'react'
import { PickupBusinessesListing } from '../../../src/components/PickupBusinessesListing'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const PickupPage = (props) => {
  const [events] = useEvent()

  const pickupBusinessListProps = {
    ...props,
    initialOrderType: 2,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <>
      <HelmetTags page='pickup' />
      <PickupBusinessesListing {...pickupBusinessListProps} />
    </>
  )
}
