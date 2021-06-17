import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

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
  background-color: ${({ isHome }) => isHome ? 'transparent' : 'rgb(247, 247, 247)'};
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ isHome }) => isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)'};
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${({ isHome }) => isHome ? 'rgb(255, 255, 255)' : '#333'};
  }
`

export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background-color: ${props => props.theme.colors.backgroundPage};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: ${({ isHome }) => isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;'};

  ${props => props.theme?.rtl ? css`
      right: 0;
  ` : css`
      left: 0;
  `}

  @media (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MenuClose = styled.button`
  position: absolute;
  top: 0;
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
  background-color: ${({ isHome }) => isHome ? '#333' : 'rgb(247, 247, 247)'};
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ isHome }) => isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)'};
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${({ isHome }) => isHome ? 'rgb(255, 255, 255)' : '#333'};
  }
`

export const MenuLink = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 0px;
  margin: 0px;
  text-align: inherit;
  display: block;
  width: 100%;
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
  padding: 16px;
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
    color: ${props => props.theme.colors?.darkBlack};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
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
  color: ${props => props.theme.colors?.darkBlack};

  ${props => props.theme?.rtl && css`
    text-align: right;
    display: inline-block;
  `}

  ${({ active }) => active && css`
    color: ${props => props.theme.colors?.primary};
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
