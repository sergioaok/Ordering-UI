import styled, { css } from 'styled-components'

export const SingleCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0px;
  }
`

export const OrderPastContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-right: 5px;
  min-width: 220px;
  padding: 15px 0px;

  @media (min-width: 768px) {
    flex-direction: row;
    ${props => props.theme?.rtl && css`
      padding-left: 5px;
      padding-right: 0px;
    `}
  }
`

export const PastHeaderImage = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 125px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`

export const WrapperBusinessTitle = styled.h1`
  width: 95%;
  margin-top: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;

  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  button {
    margin: 5px 0;
    width: 100%;
    font-size: 0.9em;
    white-space: nowrap;
  }
  
  button.review {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 480px){
    font-size: 1em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
  }

  @media (min-width: 768px){
    width: 25%;
  }

  @media (min-width: 992px) {
    button {
      width: 80%;
    }
  }
`

export const WrappButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
    white-space: nowrap;
    font-size: 0.9em;
    ${({ activeOrders }) => activeOrders && css`
      font-size: 0.8em;
    `}
  }

  p[name='order_number']{
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p[name='view_order'] {
    color: ${props => props.theme.colors.secundary};
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
  }

  @media (min-width: 480px){
    h2 {
    font-size: 14px;
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    }
    p{
      ${({ activeOrders }) => activeOrders && css`
        font-size: 0.9em;
      `}
    }
    p[name='order_number']{
      width: 230px;
    }
  }

  @media (min-width: 768px){
    font-size: 0.9em;
    flex: 1;
    width: inherit;

    padding-left: 10px;
    font-size: 0.9em;
    ${({ activeOrders }) => activeOrders && css`
        width: 30%;
    `}
    ${props => props.theme?.rtl && css`
      padding-right: 10px;
      padding-left: 0;
    `}

    p {
      font-size: 1em;
    }
  }
`
