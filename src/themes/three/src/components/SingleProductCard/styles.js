import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid ${props => props.theme.colors?.lightGray};

  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};

  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(50% - 20px);
    }
  ` : css`
    @media (min-width: 681px) {
      width: calc(50% - 20px);
    }

    @media (min-width: 993px) {
      width: calc(33.33% - 20px);
    }
  `}
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #D6D6D6 0% 0% no-repeat padding-box;
  border-radius: 23px;
  padding: 5px 10px;
  top: 8px;
  right: 6px;
  text-transform: uppercase;
  font-size: 14px;
  ${props => props.theme?.rtl && css`
    left: 6px;
    right: initial;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 90px);
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 16px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '200'};
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    color: ${props => props.theme.colors?.darkGray};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${({ soldOut, theme }) => soldOut ? lighten(0.05, theme.colors.primary) : theme.colors.primary};
    font-weight: bold;
  }

  p, span {
    font-size: 13px;
  }

  @media (min-width: 992px) {
    width: calc(100% - 130px);
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }

    span {
      font-size: 15px;
    }
  }
`

export const WrapLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
  @media (min-width: 1024px) {
    max-width: 120px;
    max-height: 120px;
    height: 120px;
    width: 120px;
  }
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 75px;
  border-radius: 5px;

  @media (min-width: 1024px) {
    min-height: 120px;
  }
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}
