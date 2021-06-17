import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
`

export const BusinessHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 200px;
  height: 200px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 8px;

  ${props => props.isSkeleton && css`
    background-color: #F8F8F8;
  `}

  ${props => props.bgimage && !props.isClosed && css`
    background-image: url(${props.bgimage});
  `}

  ${props => props.bgimage && props.isClosed && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage});
  `}

  h1 {
    color: #FFF;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10px;
    padding: 0;
  }

  @media (min-width: 490px) {
    justify-content: flex-start;
  }

  @media (min-width: 768px) {
    max-height: 250px;
    height: 250px;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 50px;
  max-height: 90px;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 90px;
  max-height: 90px;
  height: 90px;
  width: 90px;
  position: absolute;
  bottom: -45px;
  ${props => props.theme?.rtl ? css`
    right: 25px;
  ` : css`
    left: 25px;
  `}

  span {
    border-radius: 100%;
  }

  @media (min-width: 768px) {
    ${props => props.theme?.rtl ? css`
      right: 45px;
    ` : css`
      left: 45px;
    `}
  }
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
  min-height: 90px;
  border-radius: 100%;
  box-shadow: 0px 3px 6px #00000029;
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
  width: 100%;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.theme?.rtl && css`
    padding: 0px 16px 0px 5px;
  `}

  div {
    font-size: 14px;
    display: flex;

    span {
      margin: 0 5px;
    }

    h5 {
      font-weight: 300;
      svg{
        margin-bottom: 1px;
      }
    }

    h5,
    p {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      color: ${props => props.theme.colors.darkGray};

      svg {
        margin-right: 4px;

        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}

        &.popup {
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
          transform: rotate(180deg);
        }
      }

      &.bold {
        font-weight: 600;
        font-size: 32px;
        color: #191919;
      }

      &.type {
        font-weight: 300;
      }

      ${props => props.theme?.rtl ? css`
        margin-left: 15px;
      ` : css`
        margin-right: 15px;
      `}
    }

    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`
