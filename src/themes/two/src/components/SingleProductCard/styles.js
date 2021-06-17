import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 1px solid #CCC;
  box-sizing: border-box;
  background: ${({ soldOut }) => soldOut ? 'rgb(25 25 25 / 40%)' : '#FFF'};
  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 1024px) {
    width: calc(100% - 20px);
  }
  @media (min-width: 1250px) {
    width: calc(50% - 20px);
  }
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  border-radius: 23px;
  padding: 5px 10px;
  color: #FFF;
  top: 5px;
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
  justify-content: space-between;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  max-width: calc(100% - 140px);

  ${({ noImage }) => noImage && css`
    max-width: 100%;
  `}
  > * {
    margin: 5px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-weight: 200;
    text-align: left;
    color: ${props => props.theme.colors?.darkGray};
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${props => props.theme.colors?.darkGray};
    font-weight: bold;
  }

  p, span {
    font-size: 13px;
  }

  @media (min-width: 1200px) {
    max-width: calc(100% - 160px);
    ${({ noImage }) => noImage && css`
      max-width: 100%;
    `}
  }
`

export const WrapLogo = styled.div`
  max-width: 130px;
  max-height: 130px;
  height: 130px;
  width: 130px;

  @media (min-width: 1200px) {
    max-width: 150px;
    max-height: 150px;
    height: 150px;
    width: 150px;
  }
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 130px;

  @media (min-width: 1200px) {
    min-height: 150px;
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
