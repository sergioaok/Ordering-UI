import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 350px);
  }
`

export const RightContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  border-top: 1px solid #CCC;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    padding: 20px;
    border-top: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  }
`

export const RightInnerContainer = styled.div`
  position: sticky;
  top: 20px;
`

export const WrappContainer = styled.div`

`

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const WrapOrderType = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CCC;
  padding: 20px 0;
  
  h1 {
    font-size: 20px;
    margin: 0 0 15px 0;
    text-transform: uppercase;
    width: 230px;
  }

  > div {
    flex: 1;
    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : css`
      margin-left: 5px;
    `}
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h1 {
      margin: 0px;
    }
  }
`

export const BusinessDetailsContainer = styled(WrapOrderType)`
  p {
    margin: 3px 0 8px 0;
  }
`

export const PaymentMethodContainer = styled(WrapOrderType)`
`

export const DriverTipContainer = styled.div`
  border-bottom: 1px solid #CCC;
  padding-bottom: 20px;
  margin-bottom: 20px;
  h1 {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  border-bottom: none;

  > div {
    border-bottom: none;
  }
`

export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 10px;

  button {
    width: 100%;
    padding: 5px 20px;
    cursor: pointer;
    box-sizing: border-box;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const WarningMessage = styled.div`
  width: 100%;
  height: 150px;
  max-height: 300px;
  background-color: #F2BB40;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: 10px;
  position: relative;

  svg {
    position: absolute;
    font-size: 30px;
    top: 0;
    left: 0;
    margin: 11px;
    ${props => props.theme?.rtl && css`
        right: 0;
        left: initial;
    `}
  }

  h1 {
    font-size: 20px;
    margin: 0px 60px;
    text-align: center;
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;

  img {
    width: 300px;
  }
`

export const CartsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  @media (min-width: 381px) {
    width: 80%;
  }
`

export const WarningText = styled.p`
  margin: 10px auto;
  color: ${props => props.theme.colors.primary};
`

export const WrapBusinessLogo = styled.div`
  display: flex;
  align-items: center;
`
const BusinessLogoStyled = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 65px;
  border-radius: 5px;
  border: 1px solid #909090;
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

export const BusinessName = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}

  span:first-child {
    color: ${props => props.theme.colors?.grayColor};
    font-size: 14px;
    font-weight: 500;
  }
  span:last-child {
    font-weight: 500;
    font-size: 20px;
  }
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  background-color: #FFF;
  color: ${props => props.theme.colors?.blackColor};
  table {
    padding: 10px 0;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      font-weight: 500;
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
    }
  }
  table.total {
    border-top: 1px solid #EAEAEA;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  @media (min-width: 411px) {
    table {
      font-size: 18px;
    }
  }
`

export const CouponContainer = styled.div`
  width: 100%;
  margin: 10px;

  input {
    padding: 5px 15px;
    border-radius: 8px;
  }
`
