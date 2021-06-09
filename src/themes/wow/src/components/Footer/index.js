import React from 'react'
import EnTwitterWithCircle from '@meronex/icons/en/EnTwitterWithCircle'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import {
  useLanguage
} from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  FooterContainer,
  InnerContainer,
  LogoContainer,
  LinkContainer,
  Content,
  SocialIcon,
  DownloadAppContainer,
  LogoWapper,
  AppLinkWrapper,
  DownloadAppLink
} from './styles'

export const Footer = (props) => {
  const theme = useTheme()
  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FooterContainer id='footer'>
        <InnerContainer>
          <LogoContainer>
            <Content>
              <img alt='Logotype Invert' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
            </Content>
            <Content mobileSocialView>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL4_1_HREF')}
                aria-label='facebook'
              >
                <FaFacebook />
              </SocialIcon>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL4_2_HREF')}
                aria-label='twitter'
              >
                <EnTwitterWithCircle />
              </SocialIcon>
            </Content>
          </LogoContainer>
          <LinkContainer>
            <Content>
              <h1 name='title-1'>{t('FOOTER_QL1_TITLE')}</h1>
              <a
                rel='noopener noreferrer'
                target='_blank'
                aria-label='link1'
                href={t('FOOTER_QL1_1_HREF')}
              >
                {t('FOOTER_QL1_1')}
              </a>
              <a
                rel='noopener noreferrer'
                target='_blank'
                aria-label='link2'
                href={t('FOOTER_QL1_2_HREF')}
              >
                {t('FOOTER_QL1_2')}
              </a>
            </Content>
            <Content>
              <h1 name='title-2'>{t('FOOTER_QL2_TITLE')}</h1>
              <a
                rel='noopener noreferrer'
                target='_blank'
                aria-label='link4'
                href={t('FOOTER_QL2_1_HREF')}
              >
                {t('FOOTER_QL2_1')}
              </a>
            </Content>
            <Content>
              <h1 name='title-3'>{t('FOOTER_QL3_TITLE')}</h1>
              <DownloadAppContainer>
                <LogoWapper>
                  <img alt='Logotype Invert' src={theme?.images?.logos?.logotype} loading='lazy' />
                </LogoWapper>
                <AppLinkWrapper>
                  <DownloadAppLink
                    target='_blank'
                    rel='noreferrer'
                    href={t('FOOTER_QL3_1_HREF')}
                    aria-label='GooglePlay'
                  >
                    <img alt='Google play' src={theme?.images?.general?.googlePlay} loading='lazy' />
                  </DownloadAppLink>
                  <DownloadAppLink
                    target='_blank'
                    rel='noreferrer'
                    href={t('FOOTER_QL3_2_HREF')}
                    aria-label='AppStore'
                  >
                    <img alt='App store' src={theme?.images?.general?.appStore} loading='lazy' />
                  </DownloadAppLink>
                </AppLinkWrapper>
              </DownloadAppContainer>
            </Content>
            <Content desktopSocilalView>
              <h1 name='title-4'>{t('FOOTER_QL4_TITLE')}</h1>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL4_1_HREF')}
                aria-label='facebook'
              >
                <FaFacebook />
              </SocialIcon>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL4_2_HREF')}
                aria-label='twitter'
              >
                <EnTwitterWithCircle />
              </SocialIcon>
            </Content>
          </LinkContainer>
        </InnerContainer>
      </FooterContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
