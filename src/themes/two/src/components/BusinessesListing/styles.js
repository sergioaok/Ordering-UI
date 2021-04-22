import React from 'react'
import styled, { css } from 'styled-components'

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
export const InnerContainer = styled.div`
  width: 91%;
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

export const WrapperGoButton = styled.div`
  position: absolute;
  left: 70%;
  top: 60%;

  svg {
    color: #fff;
    font-size: 32px;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    left: 35%;
  }

  ${props => props.theme?.rtl && css`
    left: initial;
    right: 70%;

    @media (min-width: 576px) {
      left: initial;
      right: 35%;
    }
  `}
`
