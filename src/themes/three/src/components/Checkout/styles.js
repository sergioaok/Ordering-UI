import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  width: 91%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  background-color: #FFF;

  @media (min-width: 992px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${({ isSkeleton }) => isSkeleton && css`
    padding: 20px;
  `}
  @media (min-width: 992px) {
    width: calc(100% - 450px);
    background-color: #FFF;
  }
`

export const RightContainer = styled.div`
  width: 100%;
  ${({ isSkeleton }) => isSkeleton && css`
    padding: 20px;
  `}
  @media (min-width: 992px) {
    width: 400px;
  }
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
  div {
    h1 {
      text-transform: capitalize;
      margin: 0px;
      font-size: 24px;
      padding-bottom: 10px;
      border-bottom: 1px solid #CCC;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px 0px;
  h1 {
    margin: 0px;
    font-size: 24px;
  }
`

export const DriverTipContainer = styled(PaymentMethodContainer)`
  h1 {
    border-bottom: 1px solid #CCC;
    padding-bottom: 10px
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  h1 {
    margin: 20px 0px;
    border-bottom: 1px solid #CCC;
    padding-bottom: 10px
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
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const PaymentMethodHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #CCC;
  padding-bottom: 10px;
`

export const RightInnerContainer = styled.div`
  position: sticky;
  top: 20px;
`

export const CheckoutConfirmInfo = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 10px 0;
`

export const ConfirmInfoItem = styled.div`
  display: flex;
  margin-bottom: 10px;

  ${({ link }) => link && css`
    cursor: pointer;
    width: fit-content;

    span {
      text-decoration: underline;
      font-weight: 500;
    }
  `}
  
  svg {
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
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

export const CouponAddButton = styled.div`
  text-align: center;
  margin: 20px 0;
  span {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
`

export const CouponContainer = styled.div`
  padding: 10px;
  h2 {
    font-size: 24px;
  }

  > div {
    width: 100%;
    flex-direction: column;

    input {
      margin-bottom: 15px;
      background-color: #F6F6F6;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      margin: 0px;
      height: 41px;
    }
  }
`
