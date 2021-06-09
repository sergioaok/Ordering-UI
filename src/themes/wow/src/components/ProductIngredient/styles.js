import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #CCC;

  span {
    display: flex;
    font-weight: 300;
    color: #555;
  }

  span:nth-child(1) {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 25px;
      &[disabled] {
        color: #CBCBCB;
      }
    }
  }
`
