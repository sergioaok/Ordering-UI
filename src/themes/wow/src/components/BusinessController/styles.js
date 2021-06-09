import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  max-height: 300px;
  border-radius: 10px;
  margin: 30px 20px;
  width: 300px;

  ${({ isPromotion }) => isPromotion && css`
    width: 250px;
    height: 150px;
    margin: 8px;
  `}
`

export const WrapperBusinessCard = styled.div`
  border-radius: 10px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 10px;
  z-index: 10;
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
  min-height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  h1 {
    color: #FFF;
    opacity: 0.5;
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
    
    svg {
      color: #FFC917;
    }
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
    border-radius: 10px;
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
  margin-top: -20px;
  padding: 5px 10px;
  z-index: 20;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.2), 0px 1px 10px rgba(128, 128, 128, 0.2), 0px 3px 5px rgba(128, 128, 128, 0.2);
`

export const BusinessInfo = styled.div`
  display: flex;
  width: 100%;

  .bullet,
  .reviews {
    svg {
      background: transparent;
      border: unset;
    }
  }
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  .reviews {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
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

    ${props => props.theme?.rtl && css`
        padding: 0px 16px 0px 5px;
    `}
  }
`

export const BusinessName = styled.h6`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors.primary};
`

export const Categories = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  background-color: #D6EBC2;
  border-radius: 25px;
  padding: 5px 15px;
  width: fit-content;
  margin: 7px 0;
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

export const BusinessOfferName = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.lightGrayColor};
  padding-bottom: 5px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
