import styled from 'styled-components'
import { Button } from '../../../../../styles/Buttons'

export const AppleButton = styled(Button)`
  background: #181818;
  border-color: #EFEFEF;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  svg {
    font-size: 28px;
    color: #FFF;
  }

  div {
    margin: 0 auto;
    color: #FFF;
    text-transform: uppercase;
  }
`
