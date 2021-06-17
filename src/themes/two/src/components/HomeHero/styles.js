import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 100vh;

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: inherit;
  `}

  @media (min-width: 768px) {
    ${({ bgimage }) => bgimage && css`
      background-position: center;
    `
  }
`

export const HeroContainer = (props) => {
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 20px 0px;
  margin: 0 auto;

  ${props => props.theme?.rtl && css`
    padding: 0px 20px 0px;
  `}

  button {
    width: 180px;
  }

  input {
    width: 90%;
    margin-bottom: 15px;
  }

  > img {
    width: 200px;
    height: 55px;
  }

  @media (min-width: 425px) {
    input {
      width: 97%;
    }
  }

  @media (min-width: 768px) {
    padding: 0px 40px 0px;
    width: 60%;

    ${props => props.theme?.rtl && css`
      padding: 0px 40px 0px;
    `}
  }

  @media (min-width: 992px) {
    max-width: 700px;
  }
`

export const Title = styled.h1`
  margin: 20px 0px 30px 0;
  line-height: 1.3;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 28px;

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 50px;
  }
`

export const WrapInput = styled.div`
  max-width: 500px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors?.backgroundPage};
  border-radius: 30px;
  height: 40px;
  width: 90%;
  color: ${props => props.theme.colors?.darkGray};
  position: relative;

  > svg {
    margin: 0 15px;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    height: 50px;
  }
`

export const WrappArrow = styled.span`
  position: absolute;
  border-radius: 100%;
  background-color: ${props => props.theme.colors?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: 0 3px;

  ${props => props.theme?.rtl ? css`
    left: 0px;
  ` : css`
    right: 0px;
  `}

  svg {
    font-size: 24px;
    color: #FFF;
  }

  @media (min-width: 992px) {
    width: 45px;
    height: 45px;
  }
`
