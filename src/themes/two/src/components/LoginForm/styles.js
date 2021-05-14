import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : '100vh'};
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
    background: ${props => props.theme.colors.lightGrayColor};
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 90px)'};
    flex-direction: row;
    ${({ isPopup }) => !isPopup && css`
      padding-top: 60px;
    `}
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 40px;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }

  @media (min-width: 992px) {
    min-width: 580px;
    width: ${({ isPopup }) => isPopup ? '100%' : '45%'};
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

  input {
    padding: 10px 20px;
  }

  input:not(:last-child) {
    margin: 10px 0px;
  }

  button {
    margin-top: 10px;
    padding: 10px 15px;
  }

  @media (max-width: 576px) {
    width: 91%;
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
    color: ${props => props.theme.colors.grayTextColor};

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
   margin-top: 5px;

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

  @media (max-width: 576px) {
    width: 91%;
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  span{
    border-radius: 30px;
  }
`

export const WrapperPassword = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 20px 0;
  label {
    color: ${props => props.theme.colors.darkTextColor};
    font-weight: 500;
    font-size: 18px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > div {
      padding: 0px;
      
      > a {
        color: ${props => props.theme.colors.grayTextColor};
      }
    }
  }
`

export const WrapperInputPhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 20px 0;
  label {
    color: ${props => props.theme.colors.darkTextColor};
    font-weight: 500;
    font-size: 18px;
  }
`

export const LoginWithEmail = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  p {
    color: ${props => props.theme.colors.grayTextColor};
    padding: 0 10px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    width: 91%;
  }
`
export const Line = styled.div`
  flex: 1;
  border-bottom: 1px solid ${props => props.theme.colors.grayTextColor};
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  label {
    color: ${props => props.theme.colors.darkTextColor};
    font-weight: 500;
    font-size: 18px;
  }
`
export const FormTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 0px;

  @media (max-width: 992px) {
    font-size: 32px;
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
