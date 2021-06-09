import styled from 'styled-components'
import { darken } from 'polished'

export const FacebookButton = styled.button`
  background-color: #405993;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  &:active {
    background: ${props => darken(0.07, '#405993')};
  }
  svg {
    font-size: 28px;
    color: #FFF;
  }

  div {
    margin: 0 auto;
    color: #FFF;
  }
`
