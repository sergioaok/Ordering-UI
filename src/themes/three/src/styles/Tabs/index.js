import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}
  
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 3px solid;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}
`
