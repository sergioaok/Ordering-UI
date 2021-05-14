import React from 'react'
import styled, { css } from 'styled-components'

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

      &:first-child {
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

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  padding-top: 60px;

  @media (max-width: 992px) {
    padding-top: 0px;
  }
`

export const WrappperButtonGroup = styled.div`
  display: flex;
  width: 100%;
  column-gap: 40px;
  padding-top: 40px;

  button {
    font-weight: 500;
  }
  @media (max-width: 992px) {
    column-gap: 10px;
    flex-wrap: wrap;
    row-gap: 20px;
  }
`

export const WrapperOrderingPass = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const HeroContainerStyled = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 15px;
  margin-top: 30px;
  cursor: pointer;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    border-radius: 10px;
    box-sizing: border-box;
  `}

  p {
    margin: 0 0 0 9px;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }

  @media (max-width: 576px) {
    p {
      font-size: 12px;
    }
  }
`

export const InnerContainerAllBusiness = styled.div`
  width: 91%;
`
