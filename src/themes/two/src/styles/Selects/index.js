import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  min-width: 100px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.03, '#CCC')};
  }
  ${props => props.selected && css`
    background-color: ${darken(0.07, '#CCC')};
    &:hover {
      background-color: ${darken(0.07, '#CCC')};
    }
  `}
  svg {
    vertical-align: text-top;
  }
  ${({ withIcons }) => withIcons && css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${props => props.theme?.rtl && css`
          margin-left: 3px;
          margin-right: 0px;
       `}
      }
  `}
`

export const Options = styled.div`
  position: absolute;
  background-color: #CCC;
  margin-top: 7px;
  z-index: 10000;
  border-width: 1px;
  border-style: solid;
  border-color: #CCC;
  border-radius: 15px;
  overflow: hidden;
  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
    ${props => props.theme?.rtl && css`
        margin-right: -1px;
        margin-left: 0px;
        right: 0;
        left: initial
    `}
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
        margin-left: -1px;
        margin-right: 0px;
        left: 0;
        right: initial;
    `}
  `}
`

export const Selected = styled.div`
  padding-left: 9px;
  padding-right: 9px;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;
  @media (min-width: 381px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const Select = styled.div`
  display: inline-block;
  height: 34px;
  border-radius: 34px;
  line-height: 34px;
  border-width: 1px;
  border-style: solid;
  border-color: #CCC;
  background-color: ${({ isHome }) => isHome ? 'rgba(247,247,247,0.3)' : '#CCC'} !important;
  color: ${({ isHome }) => isHome ? '#FFF' : '#333'} !important;
  position: relative;
  ${props => props.disabled && css`
    pointer-events: none;
  `}
  ${props => props.open && css`
    background-color: ${darken(0.07, '#CCC')};
  `}
`

export const Chevron = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: 0;
    `}
`

export const Header = styled.div`
  flex: 1;
  svg {
    font-size: 18px;
  }
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;
  ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
  `}
  img {
    width: 100%;
    height: 100%;
  }
`
