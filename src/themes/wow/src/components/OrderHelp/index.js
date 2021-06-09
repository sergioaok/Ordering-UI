import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'
import { Button } from '../../styles/Buttons'
import {
  Container,
  InnerContainer,
  OrderInfo,
  Logo,
  BusinessInformation,
  CancelButtonContainer,
  HelpContent,
  HelpItem,
  HelpItemHeader,
  HelpSection
} from './styles'

export const OrderHelp = (props) => {
  const {
    order,
    handleCancel
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const deliveryHelpItems = [
    {
      value: 1,
      header: t('DID_NOT_ARRIVE', 'Did not arrive')
    },
    {
      value: 2,
      header: t('PROBLEMS_WITH_DELIVERY_MAN', 'I had problems with the delivery man')
    }
  ]
  const paymentHelpItems = [
    {
      value: 1,
      header: t('DOUBTS_IN_THE_COLLECTION', 'Doubts in the collection')
    },
    {
      value: 2,
      header: t('DISCOUNTS_AND_PROMOTIONS', 'Discounts and promotions')
    },
    {
      value: 3,
      header: t('HOW_PAYMENTS_WORKS_WITH_WOW', 'How payment works with Balance Wow')
    },
    {
      value: 4,
      header: t('HOW_DOES_THE_RETURN_PROCESS_WORK', 'How does the return process work?')
    },
    {
      value: 5,
      header: t('THEY_RECORDED_TWO_CHARGES_ON_THIS_ORDER', 'They recorded two charges on this order')
    },
    {
      value: 6,
      header: t('TIP_HOW_DOES_IT_WORK', 'Tip: How does it work?')
    }
  ]
  return (
    <Container>
      <InnerContainer>
        <OrderInfo>
          {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
            <Logo>
              <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='75px' height='75px' />
            </Logo>
          )}
          <BusinessInformation>
            <h2>{order.business?.name}</h2>
            <p name='order_number'>{t('ORDER_NUMBER', 'Order No.')} {order.id}</p>
            <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
          </BusinessInformation>
        </OrderInfo>
        <HelpContent>
          <HelpSection>
            <h1>{t('MY_ORDERS', 'My orders')}</h1>
            <HelpItem>
              <HelpItemHeader>
                <span>{t('ARRIVED_INCOMPLETE', 'Arrived incomplete')}</span>
                <BsChevronDown />
              </HelpItemHeader>
            </HelpItem>
            <HelpItem>
              <HelpItemHeader>
                <span>{t('IT_DID_NOT_ARRIVE_IN_GOOD_CONDITION', 'It did not arrive in good condition')}</span>
                <BsChevronDown />
              </HelpItemHeader>
            </HelpItem>
            <HelpItem>
              <HelpItemHeader>
                <span>{t('IT_CAME_DIFFERENCE_THAN_I_EXPECTED', 'It came different than I expected')}</span>
                <BsChevronDown />
              </HelpItemHeader>
            </HelpItem>
          </HelpSection>
          <HelpSection>
            <h1>{t('MY_DELIVERY', 'My delivery')}</h1>
            {deliveryHelpItems.map(item => (
              <HelpItem key={item.value}>
                <HelpItemHeader>
                  <span>{item.header}</span>
                  <BsChevronDown />
                </HelpItemHeader>
              </HelpItem>
            ))}
          </HelpSection>
          <HelpSection>
            <h1>{t('MY_PAYMENT', 'My payment')}</h1>
            {paymentHelpItems.map(item => (
              <HelpItem key={item.value}>
                <HelpItemHeader>
                  <span>{item.header}</span>
                  <BsChevronDown />
                </HelpItemHeader>
              </HelpItem>
            ))}
          </HelpSection>
        </HelpContent>
        <CancelButtonContainer>
          <Button
            color='primary'
            onClick={() => handleCancel()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
        </CancelButtonContainer>
      </InnerContainer>
    </Container>
  )
}
