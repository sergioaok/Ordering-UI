import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 98px)'};


  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    ${({ isPopup }) => !isPopup && css`
      background-color: #FAFAFA;
    `}
  }

  @media (min-width: 950px) {
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  background-color: #FFF;

  h1 {
    margin: 0;
  }

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup ? css`
    margin: auto;
  ` : css`
    margin: 0 auto;
  `}
    ${({ isPopup }) => isPopup && css`
      margin: 20px auto;
    `}
  }

  @media (min-width: 992px) {
    width: 45%;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
    ${({ isPopup }) => isPopup && css`
      width: 55%;
    `}
    h1 {
      font-size: 42px;
    }
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

  input:not(:last-child) {
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

    &:visited,
    &:link {
      color: ${props => props.theme.colors.primary} !important;
    }
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
    margin-bottom: 10px
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

export const WrapperPassword = styled.div`
  position: relative;
  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
  }
`
export const OtpWrapper = styled.div`
  .otp-container{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    
    .otp-input{
      width: 30px;
      height: 30px;
      padding: 12px 20px;
      border: 2px solid #CCC;
      border-radius: 16px;
      background-color: #FFF;
      outline: none;
      font-size: 20px;
      font-weight: bold; 

      &:focus{
        border-color: ${() => darken(0.07, '#CCC')} !important;
      }

      &::placeholder,
      &::-webkit-input-placeholder {
        color: #DBDCDB;
      }
      &:-ms-input-placeholder {
        color: #DBDCDB;
      }
    }
  }
`

export const CountdownTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  
  span {
    &:first-child {
      font-size: 30px;
      font-weight: bold;
      color: ${props => props.theme.colors.primary}
    }
    &:last-child {
      font-size: 24px;
      color: #DBDCDB;
      cursor: pointer;
      :hover {
        color: ${() => darken(0.07, '#DBDCDB')} !important;
      }
      :active {
        color: ${() => darken(0.09, '#DBDCDB')} !important;
      }
    }
  }

`
