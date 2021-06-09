import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
`

export const InnerContainer = styled.div`
  display: flex;

  svg {
    cursor: pointer;
    z-index: 100;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
  }
`

export const WrapperBusinessLogo = styled.div`
  align-self: center;
  width: 90px;
  height: 75px;
  max-width: 90px;
  min-height: 75px;
  margin: 8px;

  ${({ isSkeleton }) => isSkeleton && css`
    width: auto;
    height: auto;
  `}
`

const BusinessLogoStyled = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.2), 0px 1px 10px rgba(128, 128, 128, 0.2), 0px 3px 5px rgba(128, 128, 128, 0.2);
  border-radius: 16px;
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

export const LoadMore = styled(WrapperBusinessLogo)`
  color: ${props => props.theme.colors.darkBlueColor};
  display: flex;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.2), 0px 1px 10px rgba(128, 128, 128, 0.2), 0px 3px 5px rgba(128, 128, 128, 0.2);
  border-radius: 16px;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
`

export const ErrorMessage = styled.span`
  padding: 10px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`
