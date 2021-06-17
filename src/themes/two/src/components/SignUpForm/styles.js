import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${({ isPopup }) => !isPopup && css`
    background-color: #FAFAFA;
  `}
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 98px)'};

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
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
  margin: 0 auto;
  justify-content: center;
  background-color: ${props => props.theme.colors?.backgroundPage};
  h1 {
    margin: 10px 0 0 0;
  }

  @media (min-width: 769px) {
    h1 {
      margin: 0px;
    }
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

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  div.phone_number {
    margin: 10px 0px;
    width: 100%;

    input.PhoneInputInput {
      border-radius: 5px;
    }
  }

  input.form:not(:last-child) {
    margin: 10px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }

  > button {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    > button {
      margin-bottom: 0px;
    }
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
  color: ${props => props.theme.colors?.darkGray};

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary} !important;
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

export const OrDividerContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.darkGray};
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  margin: 10px 0;

  > div {
    flex: 1;
    height: 1px;
    background-color: ${props => props.theme.colors?.darkGray};
  }

  span {
    margin: 0 5px;
  }
`
