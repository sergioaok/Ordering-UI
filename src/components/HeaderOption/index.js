import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import IosBasket from '@meronex/icons/ios/IosBasket'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import FaRegClock from '@meronex/icons/fa/FaRegClock'

import {
  Container
} from './styles'

export const HeaderOption = (props) => {
  const {
    variant,
    addressState,
    momentState,
    totalCarts
  } = props

  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  return (
    <Container
      variant={variant}
      onClick={() => props.onClick(variant)}
      isHome={props.isHome}
    >
      {variant === 'cart' && (
        <span>
          <IosBasket id='icon' />
          {totalCarts > 0 && <p>{totalCarts}</p>}
        </span>
      )}
      {variant === 'address' && (
        <>
          <FaMapMarkerAlt id='icon' />
          {addressState || t('SELECT_AN_ADDRESS', 'Select an address')}
        </>
      )}
      {variant === 'moment' && (
        <>
          <FaRegClock id='icon' />
          {momentState
            ? parseDate(momentState, { outputFormat: 'MM/DD hh:mma' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </>
      )}
    </Container>
  )
}
