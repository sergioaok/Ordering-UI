import React from 'react'
import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    width: 50%;
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;

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

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  div.phone_number {
    margin: 10px 0px;
    width: 100%;
  }

  input.form:not(:last-child) {
    margin: 10px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
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

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;
    margin-bottom: 15px;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 30px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  span{
    margin-top: 0;
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

export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 26px;
  transform: translate(-150%, 10%);
  max-height: 100%;
  ${props => props.theme?.rtl && css`
    transform: translate(150%, 10%);
  `}
  span{
    cursor: pointer;
  }
`

export const RegisterMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RegisterMethodsInnerContainer = styled.div`
  width: 80%;
  > * {
    width: 100%;
    margin: 10px 0;
  }

  button {
    padding: 5px;
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
