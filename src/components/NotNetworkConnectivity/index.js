import React from 'react'
import { useTheme } from 'styled-components'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import {
  Container,
  Image
} from './styles'

export const NotNetworkConnectivity = (props) => {
  const onlineStatus = useOnlineStatus()
  const theme = useTheme()

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
      <Container id='container' isOnline={props.isOnline ?? onlineStatus}>
        <Image>
          <img id='not-network' src={props.image || theme.images?.general?.notNetwork} alt='Not network' width='640' height='320' loading='lazy' />
        </Image>
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

export default NotNetworkConnectivity
