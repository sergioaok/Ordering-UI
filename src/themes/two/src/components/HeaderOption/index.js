import React from 'react'
import { useUtils, useLanguage, useConfig } from 'ordering-components'
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

  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
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
              ? parseDate(momentState, { outputFormat: configs?.dates_moment_format?.value })
              : t('ASAP_ABBREVIATION', 'ASAP')}
          </>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}
