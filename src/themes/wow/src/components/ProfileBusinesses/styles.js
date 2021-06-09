import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
  }
`

export const WrapperBusinessMap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-child(2) {
    height: 500px;
    padding: 0px;
    #map {
      width: 100% !important;
      border-radius: unset;
    }
  }

  > button {
    position: absolute;
    bottom: 10px;
    width: 90%;
    margin: 0 5%;
    padding: 5px 0;
    max-width: 500px;
  }

  @media (min-width: 992px) {
    > div:nth-child(2) {
      height: 600px;
    }
  }
`
export const MapSkeleton = styled.div`
  height: 500px;
  width: 100%;

  span {
    height: 100% !important;
  }
`
export const WrapSearchBar = styled.div`
  position: absolute;
  top: 0px;
  width: 90%;
  margin: 0 5%;
  z-index: 100;
  
  input {
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
    border-radius: 10px;
  }
`

export const ShowListContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    input {
      box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
      border-radius: 10px;
    }
  }
`

export const BusinessListContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: calc(50% - 20px);
    }
  }
`

export const ShowMapButtonWrapper = styled.div`
  text-align: center;
  > button {
    padding: 5px 0;
    width: 100%;
    max-width: 300px;
    margin: 30px 0;
  }
`
