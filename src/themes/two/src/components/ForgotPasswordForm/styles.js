import styled, { css } from 'styled-components'

export const ForgotPasswordContainer = styled.div`
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
export const HeroSide = styled(Side)`
  height: ${({ isPopup }) => isPopup ? '50vh' : 'calc(40vh - 65px)'};
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryContrast};
  background-color:  ${props => props.theme.colors.primary};
  padding-bottom: 5px;

  @media (min-width: 992px) {
    width: 55%;
    height: ${({ isPopup }) => isPopup ? 'auto' : 'calc(100vh - 65px)'};
  }
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

export const FormTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 0px;

  @media (max-width: 992px) {
    font-size: 32px;
  }
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
