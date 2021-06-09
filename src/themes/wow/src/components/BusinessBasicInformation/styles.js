import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
`
export const BusinessHeader = styled.div`
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
  margin-top: -10px;

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
  margin-top: -10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
`

export const BusinessInnerContent = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 80px;
  max-height: 80px;
  height: 80px;
  width: 80px;
  box-shadow: 0px 3.33333px 4.44444px rgb(128 128 128 / 5%), 0px 3.33333px 3.33333px rgb(128 128 128 / 5%), 0px 1.11111px 8.88889px rgb(128 128 128 / 5%);
  margin-top: -20px;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : `
    margin-right: 20px;
  `}
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
  min-height: 80px;
  border-radius: 18px;
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
  margin-top: 10px;
`

export const BusinessInfoItem = styled.div`
  p {
    color: ${props => props.theme.colors.primary};
    margin: 0px;
    display: flex;
    align-items: center;
  }

  .name {
    font-size: 20px;
    font-weight: 600;
  }

  svg {
    color: #ffc917;
    margin: 0 10px;
  }
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  min-width: 300px;
`

export const BusinessLocation = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  svg {
    color: ${props => props.theme.colors.primary};
  }
  span {
    color: ${props => props.theme.colors.grayColor};
    margin: 0 10px;
    font-size: 14px;
  }

  h5 {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    margin: 0px;
  }
`
