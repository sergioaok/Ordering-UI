import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
`

export const ErrorMessage = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const ProductsListing = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const WrapAllCategories = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-left: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
  }
`
