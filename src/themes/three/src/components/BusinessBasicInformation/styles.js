import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 260px;
  height: 260px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: flex-end;

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
`

export const BusinessContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  max-height: 90px;
  width: 340px;

  @media (min-width: 426px) {
    margin: 15px;
  }
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

    h5 {
      font-weight: 300;
      svg{
        margin-bottom: 1px;
      }
    }

    h5,
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;

      svg {
        margin-right: 4px;

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

      &.bold {
        font-weight: 600;
      }

      &.type {
        font-weight: 300;
      }
    }

    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`

export const MoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 60%;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};

    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }

  @media (min-width: 768px) {
    margin: 0 15px;
  }
`
