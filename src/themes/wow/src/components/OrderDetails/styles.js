import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const Map = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const OrderDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const LeftContent = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    width: calc(50% - 10px);
  }  
`

export const RightContent = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  > button {
    width: 100%;
    margin: 10px 0;
    padding: 5px 0;
  }

  @media (min-width: 1200px) {
    width: calc(50% - 10px);
  }  

`

export const LogoWrapper = styled.div`
  max-width: 60px;
  max-height: 60px;
  height: 60px;
  width: 60px;
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
  min-height: 60px;
  border-radius: 100%;
`

export const BusinessLogo = (props) => {
  return (
    <BusinessLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessLogoStyled>
  )
}

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  border-radius: 15px;
  opacity: 1;
  margin: 20px 0px;
  padding: 10px;
`

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 75px);
  h1,
  p {
    margin: 3px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #FFF;
  }

  h1 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    opacity: 0.8;
  }
`

export const BusinessAction = styled.div`
  display: flex;
  align-items: center;
  > span {
    cursor: pointer;
  }
  svg {
    font-size: 24px;
    color: #FFF;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 15px;
      ` : css`
        margin-left: 15px;
      `}
    }
  }
`

export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`

export const ExclamationWrapper = styled.div`
  position: absolute;
  transform: translate(0%, -25%);
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primaryContrast}
  }
`

export const OrderStatus = styled.div`
`

export const StatusItem = styled.div`
  color: ${props => props.theme.colors?.grayColor};

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}

  display: flex;
  align-items: center;

  span {
    font-weight: 600;

    ${props => props.theme?.rtl ? css`
      padding-right: 10px;
    ` : css`
      padding-left: 10px;
    `}
  }

  svg {
    font-size: 20px;
  }
`

export const Line = styled.div`
  width: 1px;
  height: 20px;
  margin: 0px 9px;
  background: #CCC;
`

export const EstimatedTime = styled.div`
  p {
    &:first-child {
      color: ${props => props.theme.colors?.grayColor};
      margin: 0px;
    }

    &:last-child {
      color: ${props => props.theme.colors?.primary};
      font-size: 24px;
      margin: 10px 0;
    }
  }
`

export const OrderProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`

export const ProgressItem = styled.div`
  background-color: ${props => props.theme.colors?.grayColor};
  border-radius: 15px;
  height: 8px;
  width: calc(33% - 10px);
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors?.primaryContrast};
  `}
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 85px);
`

export const OrderDeliveryTimeContainer = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 10px 0;

  p {
    margin: 0px;
    color: ${props => props.theme.colors?.grayColor};
  }
`

export const CustomerInfo = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
  }

  p {
    color: ${props => props.theme.colors?.grayColor};
  }

  border-bottom: 1px solid #CCC;
`

export const OrderPaymentMethod = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
  }

  > div {
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: ${props => props.theme.colors?.grayColor};
      margin: 0 10px;
    }

    svg {
      font-size: 24px;
      color: ${props => props.theme.colors.primary};
    }
  }
`
