import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessListHeroStyled = styled.div`
  width: 100%;
  height: 200px;
  margin-top: -15px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  h1 {
    width: 60%;
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (min-width: 768px) {
    height: 400px;
    padding: 0 40px;
  }
`

export const BusinessListHero = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessListHeroStyled {...props} style={style}>
      {props.children}
    </BusinessListHeroStyled>
  )
}

export const BusinessListContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 91%;
  }
`

export const SectionContent = styled.div`
  padding: 20px 0;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`
