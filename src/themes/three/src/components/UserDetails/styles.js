import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #CCC;
  h1 {
    font-size: 24px;
    margin: 10px 0;
  }

  button {
    padding-left: 25px;
    padding-right: 25px;
    color: ${props => props.theme.colors.primary};
  }
`

export const SideForm = styled.div`
  width: 100%;
  margin-top: 25px;

  input,
  input.PhoneInputInput {
    border-radius: unset;
    background: #F6F6F6;
    border: none;
    border-bottom: 1px solid #CCC;
  }

  button {
    border-radius: unset;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  > * {
    margin: 8px 0;
    width: 75%;
  }
`
