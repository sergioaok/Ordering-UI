import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const HeaderItem = styled.div`
  cursor: pointer;
  height: ${({ isPhoto }) => isPhoto ? 'auto' : '25px'};
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.primary};
    height: 25px;
    width: 25px;
  }

  span {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : `
      margin-left: 5px;
    `}
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding-top: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  opacity: 0.95;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`

export const PopoverList = styled.div`
  display: flex;
  flex-direction: column;
`

const PopoverListItemStyles = css`
  display: flex;
  padding: 7px 15px;
  border-bottom: 1px solid #eee;
  align-items: center;
  color: #333;
  font-size: 18px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  :hover {
    cursor: pointer;
    background-color: #eee;
  }

  :last-child {
    border-bottom: 0;
  }
`

export const PopoverListItem = styled.div`
  ${PopoverListItemStyles}
`

export const PopoverListLink = styled.a`
  ${PopoverListItemStyles}
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  ${({ active }) => active && css`
    color: ${props => lighten(0.2, props.theme.colors.primary)};
  `}
`

export const DownloadAppContainer = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  padding: 10px 15px;
`

export const DownloadAppInnerContainer = styled.div`
  display: flex;
`

export const LogoWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-right: 10px;

  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 10px;
  `}

  img {
    width: 80%;
  }
`

export const AppLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DownloadAppLink = styled.a`
  img {
    width: 100px;
    height: 31px;
    border-radius: 5px;
  }
`
