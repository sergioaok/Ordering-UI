import React from 'react'
import styled, { css } from 'styled-components'

export const AdviceContainer = styled.div`
  background-color: #122428;
  padding: 30px 0;
`
export const AdviceInnerContainer = styled.div`
  width: 91%;
  margin: 0px auto;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const AdviceLeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #FFF;
    margin: 0px;
  }
  p {
    color: #FFF;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const AdviceRightContent = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 576px) {
    width: 100%;
  }
`
export const ImageContainerStyled = styled.div`
  width: 40%;
  height: 200px;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (max-width: 992px) {
    width: 50%;
  }
`
export const WrapImage = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }
  return (
    <ImageContainerStyled {...props} style={style}>
      {props.children}
    </ImageContainerStyled>
  )
}
export const AdviceDescriptionContainer = styled.div`
  width: 40%;
  background-color: #FFC043;
  padding: 10px;

  p {
    font-weight: 600;
    color: ${props => props.theme.colors?.black};
  }

  @media (max-width: 992px) {
    width: 50%;
  }
`

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  margin: 0 auto;
`

export const WrapperSearch = styled.div`
  margin: 10px 20px 0px;

  ${({ isCustomLayout }) => isCustomLayout && css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;

    svg {
      font-size: 26px;
      color: ${props => props.theme?.colors?.primary};
      margin-left: 10px;
      cursor: pointer;
    }
    
    @media(min-width: 681px){
      width: 75%;
      padding: 0;
    }

    @media(min-width: 1201px){
      width: 50%;
    }
  `}
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;
`

export const BusinessesTitle = styled.h1`
  font-size: 18px;
  margin: 0px 20px;
`

export const WrapBusinessTypeFilter = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #CCC;
`

export const BusinessListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const WrapBusinessSort = styled.div`
  @media (min-width: 992px) {
    margin: 0 20px;
  }
`

export const BusinessSortContainer = styled.div`
  position: sticky;
  top: 20px;
`

export const BusinessSortHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.6s ease;
  position: relative;
  padding: 10px 0;

  span {
    font-size: 20px;
  }

  svg {
    font-size: 24px;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }
`
export const BusinessSortContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`
export const BusinessSortItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  svg {
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`
