import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  max-width: 500px;
  margin: 20px auto;
`

export const BuisinessInfo = styled.div`
`
export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #CCC;
  padding: 15px 0;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  span {
    color: ${props => props.theme.colors?.grayColor};
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
  .open {
    color: #85C347;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors?.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 10px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
  box-shadow: 0px 3px 4px rgba(128, 128, 128, 0.05), 0px 3px 3px rgba(128, 128, 128, 0.05), 0px 1px 8px rgba(128, 128, 128, 0.05);
`
export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}
