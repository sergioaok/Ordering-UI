import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import HiLocationMarker from '@meronex/icons/hi/HiLocationMarker'
import MdcClockTimeThree from '@meronex/icons/mdc/MdcClockTimeThree'
import MdcSilverwareForkKnife from '@meronex/icons/mdc/MdcSilverwareForkKnife'
import FaPhoneAlt from '@meronex/icons/fa/FaPhoneAlt'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import { getHourMin } from '../../../../../utils'

import {
  Container,
  BuisinessInfo,
  InfoBlock,
  Header,
  WrapperBusinessLogo,
  BusinessLogo
} from './styles'
export const SpecificBusiness = (props) => {
  const {
    business
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <WrapperBusinessLogo>
          <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
        </WrapperBusinessLogo>
        <h1>{business?.name}</h1>
      </Header>
      <BuisinessInfo>
        <InfoBlock>
          <HiLocationMarker />
          <span>{business?.address}</span>
        </InfoBlock>
      </BuisinessInfo>
      <InfoBlock>
        <MdcClockTimeThree />
        <span className='open'>{t('OPEN', 'Open')}</span>
        <span>{getHourMin(business?.today?.lapses[0]?.open?.hour, business?.today?.lapses[0]?.open?.minute)}</span>
        <span>-</span>
        <span>{getHourMin(business?.today?.lapses[0]?.close?.hour, business?.today?.lapses[0]?.close?.minute)}</span>
      </InfoBlock>
      <InfoBlock>
        <MdcSilverwareForkKnife />
        <span>{t('MENU', 'Menu')}</span>
        <EnDotSingle />
        {business?.menus.map(menu => (
          <span key={menu.id}>
            {menu?.name},
          </span>
        ))}
      </InfoBlock>
      <InfoBlock>
        <FaPhoneAlt />
        <span>{business?.phone}</span>
      </InfoBlock>
    </Container>
  )
}
