import styled from 'styled-components'

export const PickupBusinessContainer = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 60px;
  @media (max-width: 992px) {
    padding-top: 0px;    
  }
 `
export const InnerContainer = styled.div`
  width: 91%;
  padding: 20px 0;
  display: flex;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`
export const WrapperBusinessMap = styled.div`
  width: 100%;
  height: 100%;
  > div {
    height: calc(100vh - 100px);
    position: sticky;
    top: 80px;
    border-radius: 10px;
    overflow: hidden;

    #map {
      width: 100% !important;
    }
  }

  @media (max-width: 992px) {
    > div {
      height: calc(100vh - 160px);
    }
  }
`
export const MapSkeleton = styled.div`
  height: calc(100vh - 100px);
  position: sticky;
  top: 80px;
  width: 100%;

  span {
    height: 100% !important;
  }

  @media (max-width: 992px) {
    height: calc(100vh - 160px);
  }
`
export const WrapperBusinesses = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;


  > div {
    &:nth-child(2) {
      padding-bottom: 50px;
    }
  }
`
export const LeftContent = styled.div`
  width: 100%;
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
export const PickupBusinessList = styled.div`
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

export const WrapPickupButton = styled.div`
  display: none;
`
