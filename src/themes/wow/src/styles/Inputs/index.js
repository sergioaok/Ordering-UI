import styled, { css } from 'styled-components'

export const WrapIconInput = styled.div`
  position: relative;
  border-bottom: 1px solid #CCCCCC;

  input {
    border: none;
    ${props => props.theme?.rtl ? css`
      padding-right: 50px;
    `
    : `
      padding-left: 50px;
    `}
  }

  svg,
  img
  {
    position: absolute;
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.primary};
    top: 8px;
    ${props => props.theme?.rtl ? css`
      right: 10px;
    `
    : `
      left: 10px;
    `}
  }
`
