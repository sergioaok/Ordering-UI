import styled, { css } from 'styled-components'

export const HelpListContainer = styled.div`
  padding: 15px 0;
  h1 {
    padding: 0 15px;
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`

export const HelpItemWrapper = styled.div`
  border-radius: 16px;
  > div:last-child {
    border-bottom: none;
  }
`

export const HelpItem = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors?.grayColor};

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl ? css`
      border-right: 5px solid ${props.theme.colors.primary};
    ` : css`
      border-left: 5px solid ${props.theme.colors.primary};
    `}
  `}

  span {
    font-weight: 500;
  }

  svg {
    font-size: 24px;
  }
`
