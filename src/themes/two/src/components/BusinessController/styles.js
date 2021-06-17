import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  margin: 20px 0px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #F7F7F7;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;

  &:hover {
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;
  }
  width: 100%;
  
  @media (min-width: 768px) {
    width: calc(100% - 40px);
    margin: 30px 20px;
  }

  @media (min-width: 992px) {
    width: calc(50% - 40px);
  }
`

export const WrapperBusinessCard = styled.div`
  border-radius: 8px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 8px;
`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 175px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  h1 {
    color: #FFF;
    opacity: 0.5;
  }

  @media (min-width: 481px) {
    min-height: 200px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 15px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #FFC917;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    background-color: #6C6C6C;
    font-size: 12px;
    color: #FFF;
    padding: 8px;
    border-radius: 8px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
    ` : css`
        margin-right: 0px;
    `
    }
    }
  }
`

export const BusinessContent = styled.div`
  display: flex;
  margin-top: 15px;
`

export const BusinessInfo = styled.div`
  display: flex;
  width: 100%;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: ${props => props.theme.colors?.darkGray};
  .reviews {
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
      font-size: 22px;
      color: #FDC918;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    p {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      img {
        margin-right: 4px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
       `}
      }
    }
    p.bold {
      font-weight: bold;
    }
  }

  @media (min-width: 481px){
    font-size: 16px;
  }
`

export const BusinessName = styled.h6`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #191919;
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #6C6C6C;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin: 5px 0;
  color: ${props => props.theme.colors?.darkGray};

  @media (min-width: 481px) {
    font-size: 16px;
  }
`

export const Medadata = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;

  p {
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 481px) {
    font-size: 14px;
  }
`
