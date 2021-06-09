import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  input.form {
    padding: 10px 15px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;    
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }

  input {
    border: none !important;
    border-radius: unset !important;
    border-bottom: 1px solid #CCC !important;
    &:focus {
      border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    flex: 1;
    margin-top: 10px;
    padding: 7px 0px;
    width: 49%;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }

  ${props => props.theme?.rtl && css`
    button {
      &:nth-child(1) {
        margin-right: 0px;
      }
      &:last-child {
        margin-right: 5px;
      }
    }
  `}
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`
