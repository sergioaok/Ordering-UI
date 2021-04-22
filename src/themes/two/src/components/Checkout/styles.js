import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
`

export const WrappContainer = styled.div`
  width: 91%;
  margin: auto;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`
export const LeftContainer = styled.div`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
  }
`
export const RightContainer = styled.div`
  width: 30%;
  border-left: 1px solid ${props => props.theme.colors.secondary};

  ${props => props.theme?.rtl && css`
    border-left: none;
    border-right: 1px solid ${props => props.theme.colors.secondary};
  `}

  @media (max-width: 992px) {
    width: 100%;
    border-left: none;

    ${props => props.theme?.rtl && css`
      border-right: none;
    `}
  }
`
export const RightInnerContainer = styled.div`
  position: sticky;
  top: 60px;
  padding: 30px 10px;
  max-height: calc(100vh - 60px);
  overflow-x: hidden;
`
export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 20px;
  flex-wrap: wrap;
`

export const BusinessDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;

  > div {
    &:not(:first-child) {
      p {
        margin: 0px;
        font-size: 20px;
        font-weight: 500;
        &:first-child {
          color: ${props => props.theme.colors.grayTextColor};
          text-transform: uppercase;
          font-size: 18px;
        }
      }
    }
  }
`

export const WrapOrderTypeMethod = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  h1 {
    text-transform: uppercase;
    margin: 0px;
    width: 200px;
    font-size: 20px;
  }

  > div {
    flex: 1;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    h1 {
      width: 100%;
      font-size: 18px;
    }
  }
`
export const WrapDeliveryTimeSelect = styled(WrapOrderTypeMethod)``
export const CartContainer = styled(WrapOrderTypeMethod)``
export const PaymentMethodContainer = styled(WrapOrderTypeMethod)``

export const UpsellingPageContainer = styled(WrapOrderTypeMethod)`
  h1 {
    padding-bottom: 10px;
  }
`
export const DriverTipContainer = styled(WrapOrderTypeMethod)`
  flex-direction: column;
`
export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 20px;

  button {
    width: 100%;
    padding: 5px 20px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  ${({ bottom }) => !bottom && css`
    display: none;
  `}

  @media (min-width: 992px) {
    display: flex;
  }

  @media (min-width: 513px) {
    ${({ bottom }) => bottom && css`
      button {
        width: calc(100% - 200px);
      }
    `}
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
        left: initial
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
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const WrapperBusinessLogo = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 70px;
  max-height: 70px;
  height: 70px;
  width: 70px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  overflow: hidden;

  > span {
    > span {
      border-radius: 5px;
    }
  }
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

export const WrapCartPrice = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  > div {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }
`
export const WrapCartTotalPrice = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`
export const WrapMaxLimtAndSavePrice = styled.div`
  padding: 20px 0;

  > div {
    font-weight: 500;
    &:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    &:nth-child(2) {
      background: #FEFF58;
      display: flex;
      justify-content: center;
      column-gap: 5px;
      padding: 10px 0;
      margin-bottom: 20px;
    }
    &:nth-child(3) {
      background: #D7F5F5;
      display: flex;
      justify-content: center;
      column-gap: 5px;
      padding: 10px 0;
    }
  }
`
export const PickupOrderTitle = styled.div`
  padding: 20px 0 30px 0;
  p {
    text-align: center;
    margin: 0px;
    font-weight: 500;
    font-size: 20px;

    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
    }
  }
`
export const PaymentContent = styled.div`
  flex: 1;
`
export const WrapFloatingButton = styled.div`
  @media (max-width: 992px) {
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #fff;
    box-sizing: border-box;
    width: 100vw;
    z-index: 100;
    border-top: 1px solid ${props => props.theme.colors.secondary};
    box-shadow: 0px -3px 6px #00000029;
    padding: 0 10px;
    > div {
      justify-content: center;
    }
  }
`
