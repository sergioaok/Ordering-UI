import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    span {
      display: flex;
      align-items: flex-end;
      position: relative;
      p {
        position: absolute;
        height: 15px;
        width: 15px;
        margin: 0;
        background: ${props => props.theme.colors.primary};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        ${props => props.theme?.rtl ? css`
          left: 0;
        ` : css`
          right: 0;
        `}
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

  `}

  ${({ variant }) => variant === 'moment' && css`
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
      `}
    }
  `}

  ${({ isHome }) => isHome && css`
    color: #FFF;
  `}
`
