import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  background: #FFF;
`

const AccordionStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: initial;
  transition: background-color 0.6s ease;
  margin: 0 10px;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: initial;
    `}
  }

`

export const Accordion = (props) => {
  const style = {}
  if (!props.isValid) {
    style.opacity = '0.5'
  }
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const WrapperProductImage = styled.div`
  max-width: 55px;
  max-height: 55px;
  height: 55px;
  width: 55px;

  @media (min-width: 361px) {
    max-width: 65px;
    max-height: 65px;
    height: 65px;
    width: 65px;
  }

  @media (min-width: 411px) {
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
  }
`

const ProductImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`

export const ProductImage = (props) => {
  return (
    <ProductImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ProductImageStyled>
  )
}

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
  width: 55%;

  @media (min-width: 411px) {
    flex: 1;
  }

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  h3 {
     font-size: 18px;
    margin: 0px;
    font-weight: 600;
  }

  span {
    display: flex;
    justify-content: space-between;
    margin: 0px;

    p {
      margin: 0px;
       font-size: 18px;
    }

    div {
      display: flex;

      span {
        height: 20px;
        svg {
          font-size: 20px;
          &:nth-child(1) {
            margin-right: 3px;
            ${props => props.theme?.rtl && css`
              margin-left: 3px;
              margin-right: 0px;
            `}
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 14px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  padding-left: 43px;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 18px;
  padding: 18px;
`

export const ProductComment = styled.div`
  padding-left: 40px;
  ${props => props.theme?.rtl && css`
    padding-right: 40px;
    padding-left: 0px;
  `}
  p {
    font-weight: bold;
    margin: 0px;
  }

  h3 {
    font-weight: normal;
    text-transform: capitalize;
    margin: 0px 20px 0px 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    ${props => props.theme?.rtl && css`
      margin: 0px 40px 0px 20px
    `}
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  h1,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 20px;
    margin: 0px 5px;
  }

  @media (min-width: 481px) {
    width: 70%;
  }
`

export const ProductError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 18px;
    text-align: center;
  }

  @media (min-width: 411px){
    width: 35%;

    span{
      text-align: right;
    }
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  ${props => props.theme?.rtl && css`
    padding-left: 0px;
    padding-right: 50px;
  `}
`

export const ProductActionsEdit = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 13px;
  svg {
    font-size: 20px;
    margin-right: 5px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const ProductActionsDelete = styled(ProductActionsEdit)`
  svg {
    margin-right: 0px;
  }
`

export const ProductPriceSection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  p,
  span {
     font-size: 18px;
  }

  span {
    font-weight: 500;
    white-space: nowrap;
  }

  p {
    margin: 0px 5px;
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    p,
    span {
      font-size: 14px;
    }
  }
`

export const ProductSelect = styled.select`
  max-width: 55px;
  height: 50px;
  border: 0;
  background-color: transparent;
  font-size: 17px;
  outline: none;
  margin-right: 5px;
  cursor: pointer;

  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

export const ProductNotAvailable = styled.span`
  color: #D81212;
`

export const ProductOptionsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  .suboption {
    margin-left: 25px;
    ${props => props.theme?.rtl && css`
      margin-right: -25px;
      margin-left: 0px;
  `}
  }

  p:nth-child(1) {
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    margin: 0px;
    font-size: 13px;
  }

  li span {
    font-weight: 300;
    font-size: 13px;
  }

  li.ingredient {
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0px;
    `}
  }
`

export const ProductQuantity = styled.span`
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`
