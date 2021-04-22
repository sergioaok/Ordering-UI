import styled from 'styled-components'

export const AllBuinessContainer = styled.div`
  background: ${props => props.theme.colors.lightGrayColor};
  display: flex;
  width: 100%;
  justify-content: center;
 `
export const InnerContainer = styled.div`
  width: 91%;
  padding: 20px 0;
  @media (max-width: 992px) {
    padding-top: 0px;    
  }
`
export const WrapperBusinesses = styled.div`
  width: 100%;
  display: flex;

  > div {
    &:nth-child(2) {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`
export const LeftContent = styled.div`
  width: 30%;
  @media (max-width: 992px) {
    width: 100%;
  }
`
export const LeftInnerContainer = styled.div`
  position: sticky;
  top: 60px;
  padding: 30px 0;
  z-index: 10;
`
export const Title = styled.h1`
  text-transform: capitalize;
  margin: 0px;
`
export const AllStoreNumber = styled.p`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 18px;
  margin-top: 0px;
`
export const WrapperSeeAllButton = styled.div`
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding-bottom: 30px;
  text-align: center;
`
export const WrapButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 15px;
  margin-top: 30px;
`
export const AllBusinessList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    > div {
      margin: 10px;
      &:not(:first-child) {
        width: calc(50% - 20px);
      }
    }
    padding-bottom: 30px;
  }
  @media (max-width: 576px) {
    > div {
      margin: 5px;

      &: first-child {
        width: 100%;
      }

      &:not(:first-child) {
        width: 100%;
      }
    }
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
