import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #CCC;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Header = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 20px;
    margin: 0px;
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 230px;
    flex-direction: column;
    align-items: initial;

    a {
      ${props => props.theme?.rtl ? css`
        margin-right: 0px;
      ` : css`
        margin-left: 0px;
      `}
    }
  }
`

export const SideForm = styled.div`
  padding: 10px;
`

export const UserData = styled.div`
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-right: 5px;
  ` : css`
    margin-left: 5px;
  `}

  > * {
    margin-top: 3px;
    margin-bottom: 8px;
  }
`
