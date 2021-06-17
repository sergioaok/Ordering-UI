import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  margin: 20px auto;
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const WrapperSearch = styled.div`
  margin-top: 20px;
  width: 100%;

  ${({ isCustomLayout }) => isCustomLayout && css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;

    svg {
      font-size: 26px;
      color: ${props => props.theme?.colors?.primary};
      margin-left: 10px;
      cursor: pointer;
    }
    
    @media(min-width: 681px){
      width: 75%;
      padding: 0;
    }

    @media(min-width: 1201px){
      width: 50%;
    }
  `}

  @media (min-width: 768px) {
    width: inherit;
    margin-top: 0px;
  }
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;
`

export const BusinessesTitle = styled.h1`
  font-size: 18px;
  margin: 0px 20px;
`

export const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 768px) {
    margin: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
