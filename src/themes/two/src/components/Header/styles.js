import styled, { css } from 'styled-components'

export const Header = styled.div`
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  height: 60px;
  ${({ isHome }) => isHome && css`
    position: absolute;
  `}
  ${({ isHome }) => !isHome && css`
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    position: fixed;
    top: 0px;
    background-color: #fff;
    z-index: 1100;
  `}
  ${({ isAuthPage }) => isAuthPage && css`
    @media (max-width: 576px) {
      display: none;
    }
  `}
`

export const InnerHeader = styled.div`
  display: flex;
  color: #FFF;
  width: 91%;
  margin: 0px auto;
  position: relative;
  justify-content: space-between;
`

export const LogoHeader = styled.div`
  cursor: pointer;
  img {
    margin: 0;
    vertical-align: middle;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    @media (min-width: 768px) {
      width: 173px;
    }
  }

  img:nth-child(1) {
    display: none;
  }

  @media (min-width: 768px) {
    img:nth-child(1) {
      display: block;
    }
    img:nth-child(2) {
      display: none;
    }
  }

  ${({ isHome }) => isHome && css`
    img:nth-child(1) {
      display: block;
    }
    img:nth-child(2) {
      display: none;
    }
  `}
`

export const CenterHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0px;

  @media (max-width: 992px) {
    ${({ isHome }) => !isHome && css`
      position: relative;
      flex: 1;
      justify-content: flex-start;
    `}
  }

  @media (max-width: 576px) {
    ${({ isHome }) => isHome && css`
      top: 70px;
    `}
  }
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
  z-index: 2;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  &.left-header {
    > :first-child {
      margin-left: 15px;
      ${props => props.theme?.rtl && css`
        margin-right: 15px;
        margin-left: 0;
      `}
    }
  }

  > *:not(:last-child) {
    margin: 0 15px;
  }

  .moment-popover,
  .address-popover {
    display: none;
  }

  @media (min-width: 821px) {
    .moment-popover,
    .address-popover {
      display: flex;
    }
  }
`

export const MenuItem = styled.div`
  display: flex;
`

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  padding: 7px 20px;
  color: #FFF;
  cursor: pointer;
  border: 1px solid #c31d20;
  background-color: #c31d20;
  border-radius: 100px;

  ${({ highlight }) => highlight && css`
    background-color: #fff;
    color: ${props => props.theme.colors.grayTextColor};
  `}
`

export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px 7px;
  box-sizing: border-box;
  margin: 0px;

  @media (min-width: 821px) {
    display: none;
  }
`
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`
export const ToText = styled.p`
  color: ${props => props.theme.colors.darkTextColor};
  text-transform: lowercase;
  padding: 0 10px;
`
export const WrapMomentAndAddress = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderMobileViewBottom = styled.div`
  background: #fff;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  width: 100vw;
  height: 60px;
  margin-top: 60px;
`

export const HeaderMobileViewInnerBottom = styled.div`
  width: 91%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
