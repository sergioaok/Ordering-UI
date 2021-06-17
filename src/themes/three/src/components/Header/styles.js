import styled, { css } from 'styled-components'
import { Select } from '../../styles/Selects'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #F2F2F2;

  ${props => props.home ? css`
    background-color: #FFF;

  & ${Select} {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
  }
  `
  : css`
    & ${SubMenu}{
      div{
        color: #333;
      }
    }
  `}

  #select-input {
    color: ${props => props.theme.colors.primary} !important;
  }
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 10px auto;
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
    width: 35px;
    height: 45px;
    margin: 0;
    vertical-align: middle;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    @media (min-width: 768px) {
      width: 150px;
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
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
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
  font-size: 16px;
  padding: 10px;
  color: #333;
  cursor: pointer;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors?.lightGray};
    color: ${props => props.theme.colors.primary};
    border-radius: 100px;
    padding: 5px 15px;
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
