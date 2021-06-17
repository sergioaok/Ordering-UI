import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
  }
`

export const ProductsContainer = styled.div`
  width: 100%;
  padding: 30px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    width: calc(100% - 450px);
    padding: 30px 20px;
  }
`

export const BusinessCartContainer = styled.div`
  width: 100%;
  padding: 0px 10px 30px 20px;
  box-sizing: border-box;
  border-top: 1px solid #CCC;
  
  ${props => props.theme?.rtl && css`
    padding: 0px 20px 30px 10px;
  `}

  @media (min-width: 1024px) {
    width: 450px;
    border-top: none;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  }
`

export const BusinessCartInnerContainer = styled.div`
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  > div.cart {
    border-bottom: none;
    width: 100%;
    box-sizing: border-box;

    > div {
      box-shadow: none;
    }
  }

  img {
    width: 200px;
  }

  > span {
    width: 100%;
  }

  p {
    color: ${props => props.theme.colors?.darkGray};
    margin: 5px 0;
  }

  @media (min-width: 1024px) {
    max-height: calc(100vh - 60px);
    overflow: auto;
  }
`

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 15px;
  }
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ isDelivery }) => isDelivery && css`
    padding-top: 20px;
  `}
  width: 100%;

  > div:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }

  @media (min-width: 768px) {
    width: inherit;
  }
`

export const ProductsNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
  }

  @media (min-width: 411px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const ProductLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SkeletonItem = styled.div`
  width: 80%;
  margin: 30px auto;

  span {
    margin-bottom: 10px;
  }
`

export const WrappLayout = styled.div`
  max-width: 1200px;
  width: 100%;
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    display: flex;
    flex-direction: column;

    .bp-list,
    .cart {
      width: 100%;
    }

    @media (min-width: 870px) {
      flex-direction: row;
      .bp-list {
        width: 55%;
      }
      .cart {
        width: calc(45% - 20px);
        margin-left: 20px;
      }
    }

    @media (min-width: 1024px) {
      .bp-list {
        width: 60%;
      }
      .cart {
        width: calc(40% - 20px);
      }
    }  

    @media (min-width: 1200px) {
      .bp-list {
        width: 70%;
      }
      .cart {
        width: calc(30% - 20px);
      }
    }  
  `}
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 25px 0px 10px 0;

  ${({ isDelivery }) => !isDelivery && css`
    justify-content: flex-end;
  `}
`

export const DeliveryInfo = styled.div`
  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 0;
  display: flex;
  width: 45%;
  max-width: 450px;
  min-width: 300px;
  box-sizing: border-box;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const DeliveryTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  width: 50%;

  h2,
  p {
    margin: 0px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: ${props => props.theme.colors.darkGray};
  }
`

export const DeliveryPrice = styled(DeliveryTime)`
  ${props => props.theme?.rtl ? css`
    border-left: 1px solid #E7E7E7;
  ` : css`
    border-right: 1px solid #E7E7E7;
  `}
`

