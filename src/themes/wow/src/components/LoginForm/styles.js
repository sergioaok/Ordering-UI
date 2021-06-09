import React from 'react'
import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 56px)'};

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSideStyled = styled.div`
  dispaly: none;
  @media (min-width: 992px) {
    width: 50%;
    height: calc(100vh - 69px);
   
    ${({ bgimage }) => bgimage && css`
      background-repeat: no-repeat, repeat;
      background-size: cover;
      object-fit: cover;
      background-position: center;
    `}
  }
`

export const HeroSide = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroSideStyled {...props} style={style}>
      {props.children}
    </HeroSideStyled>
  )
}

export const FormSideContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: inherit;
  display: flex;
  @media (min-width: 992px) {
    width: 50%;
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const LoginWith = styled.div`
  font-size: 14px;

  @media (min-width: 425px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 17px;
    `};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  > div {
    margin: 10px 0px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
    font-weight: 600;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 425px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 16px;
    `};
  }
`

export const SocialButtons = styled.div`
   width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
   margin-top: 10px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  span{
    border-radius: 30px;
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  color: #333;
  font-size: 26px;
  max-height: 100%;
  cursor: pointer;
  top: 4px;
  ${props => props.theme?.rtl ? css`
      left: 10px;
    `
    : `
      right: 10px;
    `}
  svg {
    color: ${props => props.theme.colors.primary};
  }
`

export const WrapperPassword = styled.div`
  position: relative;

  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
  }
`

export const TitleContainer = styled.div`
  width: 80%;
  h1 {
    font-weight: 600;
    font-size: 32px;
    margin: 10px 0;
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.grayColor};
    margin: 0 0 30px 0;
  }
`

export const BackButton = styled.div`
  cursor: pointer;
  position: absolute;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  top: 25px;
  ${props => props.theme?.rtl ? css`
    right: 25px;
  `
  : `
    left: 25px;
  `}
  display: flex;
  align-items: center;

  span {
    padding: 0 10px;
  }
`
