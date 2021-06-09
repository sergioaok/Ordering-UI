import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: 30px;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
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
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
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
  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primaryContrast};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primaryContrast)};
    }
    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      &:active {
        background: ${props => props.theme.colors.primaryContrast};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.primaryContrast)};
        color: #FFF;
      }
    `}
    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.primaryContrast};
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primaryContrast};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => darken(0.07, props.theme.colors.primaryContrast)};
        background: ${props => darken(0.07, props.theme.colors.primaryContrast)};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primaryContrast};
      border-color: ${props => props.theme.colors.primaryContrast};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => props.theme.colors.primaryContrast};
        background: ${props => props.theme.colors.primaryContrast};
      }
    `}
  `}
`
