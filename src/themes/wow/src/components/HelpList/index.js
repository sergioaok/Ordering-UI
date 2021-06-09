import React from 'react'
import { useLanguage } from 'ordering-components'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import {
  HelpListContainer,
  HelpItemWrapper,
  HelpItem
} from './styles'

export const HelpList = (props) => {
  const [, t] = useLanguage()
  return (
    <HelpListContainer>
      <h1>{t('HELP', 'Help')}</h1>
      <h1>{t('HOW_CAN_WE_HELP', 'How can we help you?')}</h1>
      <HelpItemWrapper>
        <HelpItem active>
          <span>{t('WITH_MY_ORDERS', 'With my orders')}</span>
          <BsChevronRight />
        </HelpItem>
        <HelpItem>
          <span>{t('WITH_MY_PAYMENTS', 'With my payments')}</span>
          <BsChevronRight />
        </HelpItem>
        <HelpItem>
          <span>{t('WITH_MY_ACCOUNT', 'With my account')}</span>
          <BsChevronRight />
        </HelpItem>
        <HelpItem>
          <span>{t('WITH_ME_BALANCE_WOW', 'With me Balance Wow')}</span>
          <BsChevronRight />
        </HelpItem>
        <HelpItem>
          <span>{t('WITH_ORDER_INFORMATION', 'With other information')}</span>
          <BsChevronRight />
        </HelpItem>
      </HelpItemWrapper>
    </HelpListContainer>
  )
}
