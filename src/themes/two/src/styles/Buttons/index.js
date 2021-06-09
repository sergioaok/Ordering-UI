import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: #CCC;
  color: #FFF;

  border: 1px solid #CCC;
  border-radius: 30px;
  line-height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ bgtransparent }) => bgtransparent && css`
      background: transparent !important;
  `}

  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}

  ${({ borderRounded }) => borderRounded && css`
    border-radius: 10px;
  `}

  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;

    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;

    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;

    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ color }) => color === 'blue' && css`
    background: ${props => props.theme.colors.blueColor};
    color: #fff;
    border-color: ${props => props.theme.colors.blueColor};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.blueColor)};
    }
  `}

  ${({ color }) => color === 'dark' && css`
    background: ${props => props.theme.colors.darkTextColor};
    color: #fff;

    &:active {
      background: ${props => darken(0.07, props.theme.colors.darkTextColor)};
    }

    &:hover {
      background: ${props => darken(0.07, props.theme.colors.darkTextColor)};
    }
  `}

  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }

    &:hover {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }

    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};

      &:active {
        color: ${props => props.theme.colors.primaryContrast};
        background: ${props => props.theme.colors.primary};
      }

      &:hover {
        background: ${props => darken(0.07, props.theme.colors.primary)};
        color: ${props => darken(0.07, props.theme.colors.primaryContrast)};
      }
    `}

    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${props => darken(0.07, props.theme.colors.primary)};
        background: ${props => darken(0.07, props.theme.colors.primary)};
      }
    `}

    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
      }
    `}
  `}

  ${({ color }) => color === 'secondary' && css`
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondaryContrast};
    border-color: ${props => props.theme.colors.secondary};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.secondary)};
      color: ${props => props.theme.colors.secondaryContrast};
    }

    &:hover {
      background: ${props => darken(0.07, props.theme.colors.secondary)};
      color: ${props => props.theme.colors.secondaryContrast};
    }

    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};

      &:active {
        color: ${props => props.theme.colors.secondaryContrast};
        background: ${props => darken(0.05, props.theme.colors.secondary)};
      }

      &:hover {
        background: ${props => darken(0.07, props.theme.colors.secondary)};
        color: #FFF;
      }
    `}

    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.secondaryContrast};
      border-color: ${props => props.theme.colors.secondary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        color: ${props => props.theme.colors.secondaryContrast};
        border-color: ${props => darken(0.07, props.theme.colors.secondary)};
        background: ${props => darken(0.07, props.theme.colors.secondary)};
      }
    `}

    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${props => props.theme.colors.secondary};
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.secondaryContrast};
      }
    `}
  `}
`
