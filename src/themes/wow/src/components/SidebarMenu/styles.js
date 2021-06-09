import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ auth }) => auth && css`
    @media (min-width: 769px) {
      display: none;
    }
  `}

  ${({ auth }) => !auth && css`
    @media (min-width: 871px) {
      display: none;
    }
  `}
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secundary};
  padding: 15px 16px;
`

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${props => props.theme.colors.primary};
    height: 40px;
    width: 40px;
  }

  img {
    width: 40px !important;
    height: 40px !important;
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

export const IconContent = styled.button`
  position: relative;
  max-width: 100%;
  margin: 0px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  background-color: transparent;
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
  }
`

export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
  left: 0;
  z-index: 1000;
`

export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  ${props => props.theme?.rtl ? css`
    border-top-right-radius: 20px;
  ` : `
    border-top-left-radius: 20px;
  `}
  background-color: ${props => props.theme.colors?.backgroundPage};
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: ${({ isHome }) => isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;'};

  ${props => props.theme?.rtl ? css`
      left: 0;
  ` : css`
      right: 0;
  `}

  @media (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MenuClose = styled.button`
  max-width: 100%;
  margin: 6px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  background-color: #FFF;
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255,255,255,0.1);
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
  }
`

export const MenuLink = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0px;
  text-align: inherit;
  display: block;
  width: 100%;
  background: ${props => props.theme.colors?.backgroundPage};
  outline: none !important;

  &:hover {
    color: #f1f1f1;
  }

  ${({ isCustomer }) => isCustomer && css`
    border-bottom: 1px solid black;

    @media (min-width: 451px) {
      display: none;
    }
  `};

  @media (max-height: 450px) {
    font-size: 18px;
  }
`

export const WrappContent = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #CCC;
`

export const MenuLinkIcon = styled.div`
  grid-area: 2 / 1 / auto / auto;
  flex-shrink: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  margin: 0px;

  svg {
    flex-shrink: 0;
    color: #000;
    width: 24px;
    height: 24px;
    color: ${({ active, theme }) => active ? lighten(0.2, theme.colors.primary) : theme.colors.primary};
  }
`

export const MenuLinkText = styled.div`
  max-width: 100%;
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 100%;
  grid-area: 2 / 2 / auto / auto;
`

export const TextInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04ch;
  text-transform: capitalize;
  text-align: left;
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ active, theme }) => active ? lighten(0.2, theme.colors.primary) : theme.colors.primary};

  ${props => props.theme?.rtl && css`
    text-align: right;
    display: inline-block;
    color: #000;
  `}
`

export const MenuLinkSeparator = styled.div`
  grid-area: -1 / 1 / auto / -1;
  margin: 15px -16px -16px 0px;

  div {
    width: 100%;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;

    ${props => props.theme?.rtl ? css`
      padding-right: 0px;
      margin: 15px 0px -16px -16px;
    ` : css`
      padding-left: 0px;
      margin: 15px -16px -16px 0px;
    `}

    hr {
      display: block;
      width: 100%;
      margin: 0px;
      border: none;
      height: 1px;
      background: rgb(231, 231, 231);
    }
  }
`

export const DownloadAppContainer = styled.div`
  display: flex;
  padding: 20px 16px;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0px;
`

export const LogoWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 20px;

  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 20px;
  `}

  img {
    width: 80%;
  }
`

export const DownloadAppLink = styled.a`
  img {
    width: 100px;
    height: 31px;
    border-radius: 5px;
  }
`
export const DownloadAppLinkContainer = styled.div`
  flex: 1;
  p {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    margin: 0px;
  }
`
