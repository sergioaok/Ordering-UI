import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`
export const BusinessHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;
  justify-content: left;
  align-items: flex-end;
  position: relative;
  background-color: #FFF;

  img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: calc(100% + 50px);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}
`

export const HeaderImage = styled.div`
  width: 20%;
  margin-top: auto;
  > img {
    width: 100%;
    height: 100%;
  }
`

export const BusinessBasicContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  max-height: 90px;
  width: 340px;
  z-index: 1;
`

export const WrapperBusinessLogo = styled.div`
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
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  ${props => props.theme?.rtl && css`
    padding: 0px 16px 0px 5px;
  `}
  div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    h5,
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 300;
      svg {
        margin-right: 4px;
        margin-bottom: 1px;
        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}
        &.start {
          color: #FFC917;
        }
        &.popup {
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
          transform: rotate(180deg);
        }
      }
    }
    p.bold {
      font-weight: 600;
    }
    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`

export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5 {
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.3em;
    > svg {
      vertical-align: middle;
    }
  }
`

export const BusinessContent = styled.div`
  padding: 0 10px;
  background: #FFF;
  @media(min-width: 768px){
    padding: 0 20px;
  }
`

export const FlexTabs = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10%;
  padding-top: 30px;
`

export const SectionTitle = styled.h3`
  font-weight: bold;
`

export const Map = styled.div`
  width: 100%;
  height: 50vh;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const ScheduleSection = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

export const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  > div {
    width: 100%;
  }

`

export const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 15px;
  border-right: 1px solid #CCC;
  width: 10%;
  min-width: 80px;
  ${props => props.theme?.rtl && css`
    border-left: 1px solid #CCC;
    border-right: none;
  `}
  h4 {
    margin: 0px 0px 3px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme?.colors?.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }

  &:last-child {
    border: 0;
  }
  @media(min-width: 768px){
    min-width: initial;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  border-top: 1px solid #CCC;
  border-bottom: 1px solid #CCC;

  div {
    width: 100%;
    &:last-child {
      h5:not(:last-child) {
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    div {
      width: 50%;
      &:last-child {
        h5:not(:last-child) {
          margin-top: 22.1776px;
        }
      }
    }
  }
`
export const BusinessMediaContent = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    > img,
    > iframe {
      object-fit: cover;
      border-radius: 10px;
      margin: 10px 10px;
      width: calc(100% - 12px);
      cursor: pointer;

      @media (min-width: 481px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 681px) {
        width: calc(33% - 20px);
      }

      @media (min-width: 993px) {
        width: calc(25% - 20px);
      }
    }
  }
`

export const ModalIcon = styled.span`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  z-index: 1;
  background: rgba(0,0,0,0.3);
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  @media (min-width: 578px){
    right: 10px;
    ${props => props.theme?.rtl && css`
    left: 10px;
    right: initial;
  `}
  }
  @media (min-width: 768px){
    right: 5px;
    ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
  }
`

export const Description = styled.p`
  margin: 0 10px;
`

export const ImageContainer = styled.div` 
  max-height: 500px;
  img{
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
export const OffersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
`

export const OfferText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const OfferTextP = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
`

export const OfferTable = styled.div`
  width: 100%;
  margin-top: 15px;

  table>tbody>tr>td, table>tbody>tr>th,
  table>thead>tr>td, table>thead>tr>th
  {
    border-top: 0
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
    border: 1px solid  ${props => props.theme.colors.disabled};

    thead {
      background-color: ${props => props.theme.colors.disabled};
    }
    tr th {
      font-size: 15px;
    }
    tr td {
      font-size: 12px;
    }
    td span {
      unicode-bidi: bidi-override;
    }
    tr td,
    tr th {
      text-align: left;
      padding: 10px;
      ${props => props.theme?.rtl && css`
        text-align: right;
      `}
    }
  }
`
