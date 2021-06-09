import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    font-weight: 600;
    padding: 5px 20px;
    margin: 0px;
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 80px;
  }

  @media (min-width: 1200px) {
    top: 10px;
  }
`
export const Option = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  color: ${props => props.theme.colors?.grayColor};
  font-size: 18px;

  p {
    margin: 0px;
  }

  span {
    color: #5DAF0A;
    font-size: 12px;
  }
  ${({ active }) => active && css`
    ${props => props.theme?.rtl ? css`
      border-right: 4px solid ${props.theme.colors.primary};
    ` : css`
      border-left: 4px solid ${props.theme.colors.primary};
    `}

    p {
      color: ${props => props.theme.colors.primary};
    }
  `}
`