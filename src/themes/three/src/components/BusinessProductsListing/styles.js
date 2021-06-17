import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  min-height: calc(100vh - 300px);
`

export const BusinessProductsContent = styled.div`
  width: 91%;
  margin: 0 auto;
`

export const WrapContent = styled.div`
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};

  @media (min-width: 381px) {
    padding: 15px;
  }
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    border: none;
    border-radius: unset;
    border-bottom: 1px solid #CCC;
    background-color: ${props => props.theme.colors?.lightGray};
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
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    display: flex;
    flex-direction: column;
    width: 100%;

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
