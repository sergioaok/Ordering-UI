import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
  background-color: #D0EFEA;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors?.primary};
    text-align: center;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;

    h1 {
      max-width: 250px;
    }
  }
`

export const OrderContent = styled.div`
  padding: 20px 50px;
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

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 20px;
    padding: 5px 0;
  }
`

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #CCC;
  cursor: pointer;

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`

export const StarRating = styled.div`
  unicode-bidi: bidi-override;
  color: #B3B3B3;
  font-size: 25px;
  height: 25px;
  position: relative;
  padding: 0;
  margin-top: -10px;

  span {
    margin-right: 5px;
  }
`

export const StarRatingUpper = styled.div`
  color: #FFD605;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
`

export const StarRatingLower = styled.div`
  padding: 0;
  display: flex;
  z-index: 0;
`
