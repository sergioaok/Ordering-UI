import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 400px;

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
  `}
  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1400px) {
    height: 550px;
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
  margin: 0px;
  text-align: left;
  letter-spacing: 0px;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    height: 50px;
    width: 100%;
    max-width: 600px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    
    > button {
      width: initial;
    }
  }
`

export const WrapInput = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 30px;
  padding: 0 5px;
  margin-right: 15px;
  box-sizing: border-box;
  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 15px;
  `}
  @media (max-width: 992px) {
    width: 100%;
    max-width: 600px;
    margin: 0 0 10px 0;
  }
`
export const SearchAddress = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.grayColor};
  }

  span {
    padding: 0 5px;
    color: ${props => props.theme.colors.grayColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 50px;
  }

  @media (min-width: 768px) {
    span {
      max-width: initial;
    }
  }
`
