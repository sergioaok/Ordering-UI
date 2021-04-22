import React from 'react'
import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  border-radius: 10px;
  margin: 10px;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 3px 6px #00000029;
  max-height: 345px;
  box-sizing: border-box;
  max-height: 345px;
  box-sizing: border-box;
  ${({ twoColumnView }) => !twoColumnView && css`
    &:hover {
      box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;
    }
  `}

  @media (max-width: 576px) {
    padding: 10px;
  }

  ${({ pickupView }) => pickupView && css`
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.colors.grayTextColor};
    border-radius: initial;
    padding: 0 0 30px 0;
    margin-right: 20px;
  `}

  ${({ twoColumnView }) => twoColumnView && css`
    padding: 0px;
    box-shadow: none;
    margin: 20px 10px;
  `}

  @media (min-width: 681px) {
    ${({ twoColumnView }) => twoColumnView && css`
      width: calc(50% - 20px);
    `}
  }
`

export const WrapperBusinessCard = styled.div`
  border-radius: 5px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 5px;
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
  min-height: 120px;
  background-position: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${({ twoColumnView }) => twoColumnView && css`
    &:hover {
      box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;
    }
  `}

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
  margin: 10px;
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

  @media (min-width: 475px) {
    margin: 15px;
  }
`

export const BusinessContent = styled.div`
  margin-top: 15px;
`

export const BusinessName = styled.h6`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`
export const BusinessInfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    color: ${props => props.theme.colors.grayTextColor};
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  span {
    color: ${props => props.theme.colors.grayTextColor};
    font-size: 18px;
  }

  svg {
    color: ${props => props.theme.colors.grayTextColor};
  }

  @media (max-width: 576px) {
    span {
      font-size: 12px;
    }
  }
`
