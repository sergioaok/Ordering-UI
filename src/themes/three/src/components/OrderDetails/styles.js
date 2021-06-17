import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const WrapperContainer = styled.div`
  width: ${({ isLoading }) => isLoading ? '100%' : '80%'};
  margin: auto;
`

export const Header = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;

  @media (min-width: 768px) {
    min-height: 340px;
  }
`

export const HeaderImg = styled.div`
  img {
    display: none;

    @media (min-width: 678px) {
      display: block;
      height: 200px;
      object-fit: cover;
      width: 100%;
      border-radius: 10px;
      aspect-ratio: attr(width) / attr(height)

      ${props => props.theme?.rtl && css`
        transform: scaleX(-1);
      `}
    }

    @media (min-width: 768px) {
      height: 340px;
    }
  }
`

export const HeaderInfo = styled.div`
  background-color: ${props => props.theme.colors?.secundary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 7px;
  min-height: 140px;

  @media (min-width: 678px) {
    position: absolute;
    top: 0;
    width: 50%;
    border-radius: ${props => props.theme?.rtl ? '0 7px 7px 0' : '7px 0 0 7px'};
    min-height: 160px;
  }

  @media (min-width: 768px) {
    min-height: 300px;
  }
`

export const HeaderText = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primaryContrast};
  text-align: center;

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0;
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 480px) {
    margin: 0px 20px;
  }

  @media (min-width: 769px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  margin: 20px 0px;
  padding: 10px;
`

export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`

export const LogoWrapper = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`

export const BusinessLogo = (props) => {
  return (
    <BusinessLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  h1,
  p {
    margin: 3px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    opacity: 0.8;
  }

  @media (min-width: 380px) {
    width: 75%;
  }
`

export const ActionsBlock = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
  `}
  }
  svg {
    font-size: 20px;
    cursor: pointer;
  }

  @media (min-width: 380px) {
    flex-direction: row;

    svg {
      font-size: 24px;
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px 20px;
`

export const OrderData = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
    font-size: 24px;
  }
  p {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p:nth-child(1) {
    opacity: 0.8;
  }
  p.date {
    font-weight: bold;
  }
  p.uuid {
    display: none;
  }

  @media (min-width: 768px){
    width: 75%;
  }

  @media (min-width: 512px) {
    p.uuid {
      display: block;
    }
  }

  @media (min-width: 425px) {
    p {
      font-size: 18px;
    }
  }
`

const StatusBarStyled = styled.div`
  height: 7px;
  margin: 10px 0px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.secundary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.secundary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)
  `}
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
      // style={{ background: `linear-gradient(to right, #D81212 ${props.percentage}%, #BFBFBF ${props.percentage}%)` }}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const OrderStatus = styled.div`
  width: 45%;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    padding: 5px 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

  @media (min-width: 410px) {
    span {
      font-size: initial;
    }
  }

  @media (min-width: 768px) {
    width: 25%;
    max-width: 25%;
  }
`

export const StatusImage = styled.div`
  img {
    display: flex;
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    margin-top: 15px;
  }

  @media (min-width: 410px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`

export const SectionTitle = styled.h1`
  margin: 0px;
  font-size: 26px;

  @media (max-width: 410px) {
    font-size: 24px;
  }
`

export const OrderCustomer = styled.div`
  display: flex;
  margin: 10px 0px 20px;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const PhotoBlock = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 0 10px;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
`

export const InfoBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1,
  span {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    opacity: 0.8;
  }
`

export const Map = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const OrderDriver = styled(OrderCustomer)`
  justify-content: space-between;
  align-items: center;
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0px 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 90%;
    font-size: 12px;
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 20px;
      td:nth-child(1) {
        font-weight: bold;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
        padding-top: 10px;
      }
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  button {
    width: 100%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    button {
      width: 70%;
    }
  }
`

export const FootActions = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-weight: bold;
  }
  svg {
    margin-left: 5px;
    transform: rotate(90deg)
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
      transform: rotate(-90deg)
    `}
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  span:nth-child(2),span:nth-child(5){
      span{
        height: 100px;
      }
    }
  @media (min-width: 768px){
    span:nth-child(2), span:nth-child(5){
      span{
        height: 200px;
      }
    }
  }
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
`

export const ShareOrder = styled.div`
  display: flex;
  margin: 0 0 20px;
  justify-content: space-between;
  z-index: 1;

  h1 {
    font-size: 15px;
    margin: 0px;
  }

  p {
    font-size: 13px;
    margin: 0px;
  }

  button {
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 14px;
    align-items: center;
    background: ${props => props.theme.colors.backgroundPage};

    svg {
      left: 0;
      margin-right: 6px;
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      svg {
        color: #FFFFFF;
      }
    }
  }

  div.text {
    width: 60%;
  }

  div.wrap {
    display: flex;
    align-items: center;

    & > div:first-child {
      width: 100%;
      position: relative;
      div {
        right: 0px;
        left: initial;
        top: 35px;
      }
    }
  }

  @media (min-width: 1201px) {
    div.wrap {
      & > div:first-child {
        left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    div.wrap {
      width: 30%;
    }

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }

    button {
      font-size: 18px;
      width: 100%;
      svg {
        position: absolute;
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 425px) {
    div.text {
      width: 70%;
    }

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
`

export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;
`

export const ExclamationWrapper = styled.div`
  position: absolute;
  transform: translate(75%, -25%);
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`
