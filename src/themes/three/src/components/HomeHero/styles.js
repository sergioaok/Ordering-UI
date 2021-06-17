import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: calc(100vh - 97px);

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-attachment: fixed;
  `}

  @media (min-width: 821px) {
    height: calc(100vh - 65px);
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
    justify-content: center;
    height: 100%;
    padding: 0px 20px 0px;

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

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      padding: 0px 40px 0px;

      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
`

export const Title = styled.h1`
  margin-top: 0px;
  font-size: 24px;
  text-align: left;
  letter-spacing: 0px;
  color: #000;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 35px;

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  @media (min-width: 768px) [
    font-size: 32px;
  ]
`

export const FindAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  button {
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    align-items: center;
    button {
      height: 50px;
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`

export const WrapInput = styled.label`
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
  padding: 0 15px;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors?.backgroundPage};
  border: 1px solid ${props => props.theme.colors?.lightGray};
  color: ${props => props.theme.colors?.darkGray};
  margin-bottom: 10px;

  svg {
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  @media (min-width: 768px) {
    flex: 1;
    width: inherit;
    height: 50px;
    margin-bottom: 0px;
  }
`
