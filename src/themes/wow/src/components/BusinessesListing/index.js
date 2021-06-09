import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { OurBusinesses } from '../OurBusinesses'
import { PromotionsBusinesses } from '../PromotionsBusinesses'
import { DiscountedBusinesses } from '../DiscountedBusinesses'
import {
  BusinessListHero,
  BusinessListContainer,
  SectionContent
} from './styles'

export const BusinessesListing = (props) => {
  const { isShowHero } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  return (
    <>
      {isShowHero && (
        <BusinessListHero bgimage={theme.images?.general?.businessesHero}>
          <h1>{t('PLACE_TO_ENJOY_GOOD_FOOD', 'A place to enjoy good food')}</h1>
        </BusinessListHero>
      )}
      <BusinessListContainer>
        <SectionContent>
          <h1>{t('OUR_RESTAURANTS', 'Our restaurants')}</h1>
          <OurBusinesses {...props} />
        </SectionContent>
        <SectionContent>
          <h1>{t('PROMOTIONS', 'Promotions')}</h1>
          <PromotionsBusinesses {...props} />
        </SectionContent>
        <SectionContent>
          <h1>{t('DISCOUNTED_RESTAURANTS', 'Discounted restaurants')}</h1>
          <DiscountedBusinesses {...props} />
        </SectionContent>
      </BusinessListContainer>
    </>
  )
}
