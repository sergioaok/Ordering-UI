import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 24px;
  }

  @media (min-width: 992px) {
    paddingL 40px;
  }
`
export const Content = styled.div`
  display: flex;
  img {
    max-height: 300px;
  }
`

export const Slogan = styled.div`
  ${props => props.theme?.rtl ? css`
    padding-right: 20px;
  ` : `
    padding-left: 20px;
  `}
  p {
    color: ${props => props.theme.colors.grayColor};
  }

  @media (min-width: 992px) {
    ${props => props.theme?.rtl ? css`
      padding-right: 40px;
    ` : `
      padding-left: 40px;
    `}
  }
`
