import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  background-color: ${props => props.theme.colors.secundary};
  position: relative;
  z-index: 1005;

  @media (min-width: 1200px) {
    ${({ home }) => !home && css`
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    `}
  }
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  width: 91%;
  margin: 0px auto;
  padding: 10px 0;
  ${({ home }) => home && css`
    border-bottom: 1px solid #fff;
  `}
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
    width: 80px;
    height: 30px;
    margin: 0;
    vertical-align: middle;

    @media (min-width: 768px) {
      width: 120px;
      height: 45px;
    }
  }
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
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
    margin: 0 5px;
  }

  #select-input {
    background-color: ${props => props.theme.colors.primary} !important;
    color: #FFF !important;
  }

  .address-popover {
    > div {
      &:first-child {
        color: ${props => props.theme.colors.primary} !important;
        font-weight: 600;
      }
    }
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
  font-size: 16px;
  padding: 10px;
  color: #333;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;

  ${({ highlight }) => highlight && css`
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 100px;
    padding: 5px 15px;
  `}
`

export const CustomerInfo = styled.div`
  display: none;
  cursor: pointer;

  @media (min-width: 450px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      height: 30px;
      p {
        color: ${props => props.isHome ? '#FFF' : '#333'};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 50px;

        @media (min-width: 768px) {
          max-width: 70px;
        }
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
        margin-right: 5px;
      }
    }
  }
`

export const UserEdit = styled.div`
  > :first-child{
     margin-bottom: 20px;  
  }
`

export const WrapSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    width: 91%;
    margin: 0px auto;
  }
`

export const SearchBarContainer = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  width: 100%;
  padding: 10px 0;
  position: sticky;
  top: 0px;
  z-index: 1000;
  @media (max-width: 1200px) {
    ${({ home }) => !home && css`
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    `}
  }
`
