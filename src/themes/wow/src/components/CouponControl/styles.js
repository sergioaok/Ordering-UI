import styled, { css } from 'styled-components'

export const CouponContainer = styled.div`
  padding-bottom: 10px;
  input {
    width: 100%;
    box-sizing: border-box;
    border-color: #FF842C;
    border-radius: 10px;

    &:focus {
      border-color: #FF842C;
    }
  }
`

export const ActionButton = styled.div`
  margin: 5px 0;
  text-align: end;
  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `}
  span {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
    font-weight: 600;
  }
`
