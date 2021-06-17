import styled from 'styled-components'
import { Button } from '../../../../../styles/Buttons'
import { darken } from 'polished'

export const FacebookButton = styled(Button)`
  background: #3B5998;
  color: #FFF;
  border-color: #EFEFEF;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  &:active {
    background: ${darken(0.07, '#3B5998')};
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
