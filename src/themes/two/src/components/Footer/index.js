import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  FooterContainer,
  FooterTopContent,
  LinkBlock,
  SupportContent,
  WrapAppImgae,
  FooterBottomContent,
  SocialIcon
} from './styles'
import FaTwitter from '@meronex/icons/fa/FaTwitter'
import FaInstagram from '@meronex/icons/fa/FaInstagram'
import FaFacebook from '@meronex/icons/ai/AiFillFacebook'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'

export const Footer = () => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const location = useLocation()
  const isHomePage = location.pathname === '/home' || location.pathname === '/'

  return (
    <FooterContainer id='footer' isHomePage={isHomePage}>
      <FooterTopContent>
        <div>
          <h1>{t('TOP_CITIES', 'Top Cities')}</h1>
          <LinkBlock>
            <div>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
            </div>
            <div>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
            </div>
            <div>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
            </div>
          </LinkBlock>
        </div>
        <div>
          <h1>{t('TOP_CUISINES_NEAY_YOU', 'Top Cuisines Near You')}</h1>
          <LinkBlock>
            <div>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
            </div>
            <div>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('LOREM_IPSUM', 'Lorem Ipsum')}
              </a>
            </div>
          </LinkBlock>
        </div>
      </FooterTopContent>
      <SupportContent>
        <div>
          <h1>{t('GET_TO_KNOW_US', 'Get to Know Us')}</h1>
          <div>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
          </div>
        </div>
        <div>
          <h1>{t('LET_US_HELP_YOU', 'Let Us Help You')}</h1>
          <div>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
          </div>
        </div>
        <div>
          <h1>{t('DOING_BUSINESS', 'Doing business')}</h1>
          <div>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
              {t('LOREM_IPSUM', 'Lorem Ipsum')}
            </a>
          </div>
        </div>
        <div>
          <div>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')} className='right'>
              <WrapAppImgae>
                <img src={theme?.images?.general?.appStore} alt='app store' />
              </WrapAppImgae>
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')} className='right'>
              <WrapAppImgae>
                <img src={theme?.images?.general?.googlePlay} alt='google play' />
              </WrapAppImgae>
            </a>
          </div>
        </div>
      </SupportContent>
      <FooterBottomContent>
        <div>
          <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
            <img alt='Isotype' width='35px' height='45px' src={theme?.images?.logos?.isotypeInvert} loading='lazy' />
          </a>
          <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
            {t('LOREM_IPSUM', 'Lorem Ipsum')}
          </a>
          <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
            {t('LOREM_IPSUM', 'Lorem Ipsum')}
          </a>
          <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
            {t('LOREM_IPSUM', 'Lorem Ipsum')}
          </a>
        </div>
        <div>
          <SocialIcon
            target='_blank'
            rel='noreferrer'
            href={t('FOOTER_QL3_1_HREF')}
            aria-label='facebook'
          >
            <FaFacebook />
          </SocialIcon>
          <SocialIcon
            target='_blank'
            rel='noreferrer'
            href={t('FOOTER_QL3_2_HREF')}
            aria-label='instagram'
          >
            <FaInstagram />
          </SocialIcon>
          <SocialIcon
            target='_blank'
            rel='noreferrer'
            href={t('FOOTER_QL3_3_HREF')}
            aria-label='twitter'
          >
            <FaTwitter />
          </SocialIcon>
        </div>
      </FooterBottomContent>
    </FooterContainer>
  )
}
