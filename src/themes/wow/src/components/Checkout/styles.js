import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  margin: auto;

  @media (min-width: 576px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CheckoutInfoContent = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 48%;
  }
`

export const CheckoutActionContent = styled.div`
  width: 100%;  
  @media (min-width: 992px) {
    width: 48%;
  }
`

export const CheckoutActionInnerContent = styled.div`
  background: #FFFFFF;
  margin: 20px 0;
  position: sticky;
  top: 80px;

  @media (min-width: 992px) {
    border: none;
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgb(128 128 128 / 5%), 0px 1px 18px rgb(128 128 128 / 5%), 0px 3px 5px rgb(128 128 128 / 5%);
  }

  @media (min-width: 1200px) {
    top: 20px;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px;
  h1 {
    margin: 0px;
    font-size: 24px;
  }
`

export const SectionContainer = styled(PaymentMethodContainer)`
  background: #FFFFFF;
  border-bottom: 1px solid #CCC;
  padding: 15px;
  margin-bottom: 20px;
  h1 {
    margin: 10px 0px;
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 992px) {
    border: none;
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
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

export const ActionContainer = styled.div`
  padding: 15px;
  border-top: 1px solid #CCC;

  @media (min-width: 992px) {
    border: none;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 16%) 0px -3px 6px;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary};

  span {
    font-size: 24px;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    span:not(:first-child) {
      margin: 0 10px;
      font-size: 16px;
      font-weight: 400;
    }
  }
`

export const WrapCheckoutBill = styled.div`
  padding: 15px;
`
