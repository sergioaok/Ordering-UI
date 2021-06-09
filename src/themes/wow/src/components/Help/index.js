import React from 'react'
import { WithMyOrders } from '../WithMyOrders'
import { Container } from './styles'
import { HelpList } from '../HelpList'

export const Help = (props) => {
  return (
    <Container>
      <HelpList />
      <WithMyOrders />
    </Container>
  )
}
