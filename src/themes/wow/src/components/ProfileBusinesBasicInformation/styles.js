import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 5px 15px 15px 15px;
  margin: 10px 0px 20px 0px;
  ${({ isSkeleton }) => !isSkeleton && css`
    cursor: pointer;
  `}
  @media (min-width: 992px) {
    border-bottom: none;
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
    border-radius: 16px;
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    margin: 10px 10px 20px 10px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
  transform: translateY(-15px);
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
  }

  button {
    display: flex;
    align-items: center;

    svg {
      ${props => props.theme?.rtl ? css`
        margin-left: 5px;
      ` : css`
        margin-right: 5px;
      `}
    }
  }
`

export const BuinsinessInfo = styled.div`
  p {
    display: flex;
    align-items: center;
    margin: 5px 0;

    span,
    svg {
      ${props => props.theme?.rtl ? css`
        margin-left: 5px;
      ` : css`
        margin-right: 5px;
      `}
    }
    .open {
      color: #85C347;
    }
    color: ${props => props.theme.colors?.grayColor};
    svg {
      font-size: 20px;
    }
  }
  .type {    
    display: flex;
    flex-wrap: wrap;
    
    span {
      color: ${props => props.theme.colors.primary};
      padding: 2px 10px;
      background-color: #D6EBC2;
      border-radius: 20px;
      margin-bottom: 5px;
    }
  }
`
export const BusinessMainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc(100% - 70px);
`

export const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: calc(100% - 80px);

  h1,
  p {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 16px;
  }

  p {
    margin: 0 5px;
  }

  .primary {
    color: ${props => props.theme.colors.primary};
  }
  .star {
    color: #FFD605;
  }
`
