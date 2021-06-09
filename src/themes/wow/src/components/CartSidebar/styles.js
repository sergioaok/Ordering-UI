import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
  align-items: center;
`
export const IconContent = styled.div`
  cursor: pointer;
  margin: 0 5px;
  span {
    display: flex;
    position: relative;
    p {
      position: absolute;
      right: -10px;
      top: -10px;
      height: 20px;
      width: 20px;
      margin: 0;
      background: #F7705D;
      color: #FFF;
      border-radius: 100%;
      border: 1px solid #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      ${props => props.theme?.rtl && css`
        left: -10px;
        right: initial;
    `} 
    }
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 26px;
    }
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
  background: ${props => props.theme.colors?.lightGrayColor};
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: ${({ isHome }) => isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;'};

  ${props => props.theme?.rtl ? css`
      left: 0;
  ` : css`
      right: 0;
  `}

  h1 {
    color: ${props => props.theme.colors.primary};
    text-align: center;
    margin: 0px;
    font-size: 24px;
  }

  @media (min-width: 576px) {
    ${props => props.theme?.rtl ? css`
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    ` : css`
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    `}
  }

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

export const WrapCartContent = styled.div`
  padding: 10px 15px;
`
