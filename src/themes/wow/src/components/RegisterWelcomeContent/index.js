import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  Container,
  Content,
  Slogan
} from './styles'

export const RegisterWelcomeContent = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <h1>{t('REGISTER_WELCOME_TITLE', 'Welcome to Wow +, we are improving the experience for you')}</h1>
        <Content>
          <img src={theme.images.general?.socialMedia} alt='Social Media' loading='lazy' />
          <Slogan>
            <p>{t('REGISTER_DESCRIPTION', 'If you already had a Wow Rewards account, use your own email to enter Wow + and follow the process to log in. If you have problems updating your balance in the app, do the following:')}</p>
            <p>{t('REGISTER_METHOD', '- Go to "My Account", click on "Close session and start again with your email."')}</p>
          </Slogan>
        </Content>
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
