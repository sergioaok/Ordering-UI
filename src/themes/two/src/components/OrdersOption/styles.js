import styled, { css } from 'styled-components'

export const OptionTitle = styled.div`
  width: ${({ isBusinessList }) => isBusinessList ? '80%' : '100%'};
  margin: ${({ isBusinessList }) => isBusinessList ? '10px 20px 0' : '0 auto'};
  padding: ${({ isBusinessList }) => !isBusinessList && '0 15px'};

  h1{
    text-transform: capitalize;
    font-size: 18px;
    margin: 18px 0;
  }

  @media (min-width: 768px){
    padding: 0;
    width: 100%
  }
`

export const OrdersContainer = styled.div`
  ${({ activeOrders }) => activeOrders && css`
    padding: 0 10px;
    text-align: center;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: ${({ ordersLength }) => !ordersLength ? 'flex-start' : 'center'};
    width: 100%;
    margin: auto 0px auto auto;
    box-sizing: border-box;
    ${props => props.theme?.rtl && css`
      margin: auto auto auto 0px;
    `}
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    ${({ isSkeleton }) => !isSkeleton && css`
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ${({ ordersLength, isBusinessList }) => !ordersLength && !isBusinessList && css`
        > div {
          margin-left: -10px;
          ${props => props.theme?.rtl && css`
            margin-left: 0;
            margin-right: -10px;
          `}
        }
        > div:first-child {
          margin-left: -15px;
          ${props => props.theme?.rtl && css`
            margin-left: 0;
            margin-right: -15px;
          `}
        }
      `}
    `}

    @media (min-width: 768px) {
      width: 100%;
      justify-content: flex-start;
      ${({ isSkeleton, ordersLength }) => !isSkeleton && !ordersLength && css`
        > div:first-child {
          ${({ isBusinessList }) => !isBusinessList && css`
            margin-left: -10px;
            ${props => props.theme?.rtl && css`
              margin-left: 0;
              margin-right: -10px;
            `}
          `}
        }
      `}
    }
  `}

  ${({ activeOrders }) => !activeOrders && css`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    border: 1px solid ${props => props.theme.colors.secondary};
    box-sizing: border-box;

    p{
      margin-block-end: 0;
      margin-block-start: 0;
      color: #9A9A9A;
    }

    @media(min-width: 480px){
      padding: 0;
      div:last-child {
        border-top: none;
      }
    }
  `}
`

export const SkeletonOrder = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding: 0 15px;

  ${({ activeOrders }) => activeOrders && css`
    width: auto;
    text-align: center;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  `}

  ${({ activeOrders }) => !activeOrders && css`
    width: 100%;
    flex-direction: column;
    margin: 10px 0;
    > * {
      margin: 20px 0;
    }
  `}
`

export const SkeletonCard = styled.div`
  margin: 10px 5px 10px 5px;
`

export const SkeletonMap = styled.div`
  border-radius: 16px;
  span{
    width: 300px;
    height: 88px;
  }
  @media(min-width: 480px){
    span{
      height: 100px;
      width: 400px;
    }
  }
`

export const SkeletonContent = styled.div`
  display: flex;
  width: 100%;

  ${({ activeOrders }) => activeOrders && css`
    > * {
      margin: 5px;
    }
  `}

  ${({ activeOrders }) => !activeOrders && css`
    justify-content: space-between;
  `}

  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
`

export const SkeletonButton = styled.div`
    span{
      border-radius: 24px;
      width: 270px;
      height: 36px;
    }
  @media(min-width: 480px){
    span{
      width: 360px;
    }
  }
`

export const SkeletonInformation = styled.div`
  display: flex;
  > *{
    margin: 0 5px;
  }
`

export const SkeletonReorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;

  span {
    border-radius: 20px;
  }

  span:first-child span{
    width: 75px;
  }

  span:last-child{
    width: 75px;
    height: 30px;
  }

  @media(min-width: 480px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
    span:first-child span{
      width: 150px;
    }
    span:last-child{
      width: 150px;
    }
  }

  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ImageNotFound = styled.div`
  
  margin: 0 auto;
  img{
    width: 100%;
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  font-size: 0.9em;
  ${({ activeOrders }) => activeOrders && css`
      width: 30%;
  `}
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
  `}
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
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
    font-size: 14px;
  }

  p[name='view_order'] {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
  }

  @media (min-width: 480px){
    h2 {
    font-size: 20px;
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    }
    p{
      ${({ activeOrders }) => activeOrders && css`
        font-size: 18px;
      `}
    }
    p[name='order_number']{
      width: 230px;
    }
  }

  @media (min-width: 768px){
    font-size: 18px;
    p {
      font-size: 18px;
    }
  }
`
