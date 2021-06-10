import styled, { css } from 'styled-components'

export const PhoneContainer = styled.div`
  width: 100%;
  height: calc(100vh - 97px);

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: bottom;
    background-image: url(${bgimage});
  `}

  .spinner-content{
    > div{
      width: 40px;
      height: 40px;
      border-width: 5px;
    }
  }

 .autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  }
  input {
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
  }
  input[type=text] {
    background-color: #f1f1f1;
    width: 100%;
  }
  input[type=submit] {
    background-color: #f1f1f1;
    width: 100%;
  }
  .autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
    overflow: auto;
    max-height: 200px
  }
  .autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
  }
  .autocomplete-items div:hover {
    /*when hovering an item:*/
    background-color: #e9e9e9;
  }
  .autocomplete-active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important;
    color: #ffffff;
  }

  @media (min-width: 821px) {
    height: calc(100vh - 65px);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0px 20px 0px;

  .basic-single {
    margin-bottom: 15px;
  }

  .select__control {
    border-radius: 30px;
  }

  .select__control.select__control--is-focused {
    border-color: ${props => props.theme?.colors?.primary} !important;
    box-shadow: 0 0 0 1px ${props => props.theme?.colors?.primary} !important;
  }

  .select__value-container {
    padding: 10px 8px 0;
  }
  .select__indicator.select__loading-indicator {
    color: ${props => props.theme?.colors?.primary} !important;
  }

  .select__indicator.select__dropdown-indicator,
  .select__indicator-separator {
    display: none;
  }

  ${props => props.theme?.rtl && css`
      padding: 0px 20px 0px;
    `}

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 45%;
      }
    }

    @media (min-width: 768px) {
      padding: 0px 40px 0px;

      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
`

export const WrappBtn = styled.div`
  width: 50%;

  button {
    min-width: 130px;
  }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font: normal normal normal 80px ${props => props.theme.fonts.special?.name || 'Georgia'};
  letter-spacing: 0px;
  color: #000000;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 35px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 18px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 15px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;

  ${({ withIcon }) => withIcon && css`
    width: calc(100% - 20px);
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }

    @media (min-width: 1024px) {
      width: calc(50% - 20px);
    }
  `}
  
  div{
    color: #FFF;
    position: relative;
    bottom: 25px;
    left: 15px;
    ${props => props.theme?.rtl && css`
      left: initial;
      right: 15px;
    `}
  }

  svg {
    color: #FFF;
    position: absolute;
    font-size: 22px;

    margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}

    ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}

  }
`

export const AutoComplete = styled.div`
  width: 45%; 
  button {
    position: absolute;
    left: 100%;
    transform: translate(-90%, -165%)
  }
`

export const UserEdit = styled.div`
  > :first-child{
     margin-bottom: 20px;  
  }
`

export const Info = styled.p``
