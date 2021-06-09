import styled from 'styled-components'
import colors from '../../../theme.json'
export const PaymentOptionIvrContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1
`

export const Code = styled.h1`
  font-size: 28px
`

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.primary}
`

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
  }
`
