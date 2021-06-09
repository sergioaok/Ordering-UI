import React from 'react'
import { useLanguage, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'
import {
  Container,
  NotNowAction
} from './styles'

export const PreorderConfirm = (props) => {
  const {
    onClose
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <img src={theme.images?.general?.preorderConfirm} alt='preorder' />
        <h1>{t('YOUR_ORDER_SCHEDULED', 'Your order was successfully scheduled!')}</h1>
        <p>{t('YOU_CAN_REVIEW', 'You can review your order and adjust it in the My Orders section')}</p>
        <Button
          color='primary'
          onClick={() => onClose()}
        >
          {t('VIEW_ORDER', 'View order')}
        </Button>
        <NotNowAction
          onClick={() => handleGoToPage({ page: 'search' })}
        >
          {t('NOT_NOW', 'Not now')}
        </NotNowAction>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
