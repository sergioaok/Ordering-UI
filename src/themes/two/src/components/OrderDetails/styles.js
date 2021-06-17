import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 992px) {
    margin-top: 40px;
  }
`

export const WrapperContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 300px);

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const LeftContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 992px) {
    width: calc(100% - 450px);
    padding: 10px 20px 40px 20px;
  }
`

export const RightContainer = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  border-top: 1px solid #E7E7E7;

  @media (min-width: 992px) {
    border-top: none;
    width: 450px;
    padding: 10px 20px 20px 20px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E7E7E7;
    ` : css`
      border-left: 1px solid #E7E7E7;
    `}
  }
`

export const RightInnerContainer = styled.div`
  position: sticky;
  top: 20px;
`

export const OrderInfo = styled.div`
  border-bottom: 1px solid #E7E7E7;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;

  > div:first-child {
    flex: 1;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const OrderBusiness = styled.div`
  border-bottom: 1px solid #E7E7E7;
  padding-bottom: 20px;
  padding-top: 20px;
  display: block;
`

export const BusinessHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    flex: 1;
    margin: 0 0 5px 0;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  p {
    margin: 3px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors?.darkGray};
  }
`

export const ActionsBlock = styled.div`
  > * {
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
  display: flex;
  span {
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
    font-size: 24px;
  }
`

export const OrderData = styled.div`
  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
    font-size: 24px;
  }
  p {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p:nth-child(1) {
    opacity: 0.8;
  }
  p.date {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors?.darkGray};
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 32px;
    }
  }
`

const StatusBarStyled = styled.div`
  height: 7px;
  margin: 20px 0px 10px;
  border-radius: 7px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)
  `}
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const OrderStatus = styled.div`
  > span {
    color: ${props => props.theme.colors.darkGray};
    font-size: 14px;
  }
`

export const SectionTitle = styled.h1`
  margin: 0px;
  font-size: 20px;
`

export const OrderCustomer = styled.div`
  padding: 20px 0;

  h1 {
    margin: 0 0 5px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 0 0 3px 0;
    color: ${props => props.theme.colors?.darkGray};
  }
`

export const PhotoBlock = styled.img`
  border-radius: 8px;
  object-fit: cover;
  margin: 0 10px;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
`

export const InfoBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1,
  span {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors?.darkGray};
  }
`

export const Map = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }
`

export const OrderDriver = styled.div`
  display: flex;
  margin: 10px 0px 20px;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }
  justify-content: space-between;
  align-items: center;
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 60px;
      height: 60px;
      margin: 0px 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const OrderProducts = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #E7E7E7;
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  table {
    width: 100%;
    font-size: 12px;
    td {
      font-size: 16px;
    }
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
    border-top: 1px solid #E7E7E7;
    margin-top: 15px;
    tr {
      td {
        font-size: 16px;
        font-weight: bold;
        padding-top: 10px;
      }
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  button {
    width: 100%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    button {
      width: 70%;
    }
  }
`

export const FootActions = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-weight: bold;
  }

  padding-top: 10px;

  @media (min-width: 768px) {
    padding-top: 0px;

    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const ShareOrder = styled.div`
  padding: 20px 0;
  border-top: 1px solid #E7E7E7;
  display: flex;
  margin: 0 0 20px;
  justify-content: space-between;
  z-index: 1;

  h1 {
    font-size: 18px;
    margin: 0px;
  }

  p {
    font-size: 14px;
    margin: 0px;
    color: ${props => props.theme.colors?.darkGray};
  }

  div.wrap {
    width: 40px;
    z-index: 1;
    > div {
      position: relative;
    }

    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;
`

export const ExclamationWrapper = styled.div`
  position: absolute;
  top: -5px;

  ${props => props.theme.rtl ? css`
    left: -5px;
  ` : css`
    right: -5px;
  `}
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`

export const DriverInfo = styled.div`
  border-top: 1px solid #E7E7E7;
  padding: 20px 0;
`
