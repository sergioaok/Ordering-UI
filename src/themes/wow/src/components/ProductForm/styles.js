import React from 'react'
import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 1201px) {
    overflow: auto;
    max-height: 70vh;
  }
`

export const ProductImageStyled = styled.div`
  width: 100%;
  height: 200px;
  min-height: 200px;

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (min-width: 768px) {
    height: 300px;
    min-height: 300px;
  }

  @media (min-width: 1400px) {
    height: 350px;
    min-height: 350px;
  }
`

export const ProductImage = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <ProductImageStyled {...props} style={style}>
      {props.children}
    </ProductImageStyled>
  )
}

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin-top: -10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #FFF;
  backdrop-filter: blur(15px);
  p {
    font-size: 14px;
    font-weight: 200;
    margin-top: 0px;
    line-height: 1.5em;
    width: 100%;
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }

  @media (min-width: 381px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;

  h1 {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin-top: 0px;
  }
`

export const ProductEdition = styled.div``

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 115px;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  @media (min-width: 577px) {
    margin-bottom: 62px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`
export const ProductActions = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  position: sticky;
  bottom: 0;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: rgb(0 0 0 / 16%) 0px -3px 6px;
`

export const ProductActionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
  h1 {
    margin: 0px;
    display: flex;
    align-items: center;
    > span {
      font-size: 20px;
      font-weight: 500;
    }

    > p {
      margin: 0px 15px;
      span {
        font-size: 14px;
        font-weight: 300;
        &:last-child {
          margin: 5px;
        }
      }
    }
  }

  > span {
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    width: 90%;
    margin: 0 auto 10px auto;
  }
`

export const ProductActionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.incdec-control {
    width: fit-content;
    display: flex;
    align-items: center;
    justiy-content: space-around;

    svg {
      width: 35px;
      height: 35px;
      cursor: pointer;
      color: ${props => props.theme.colors?.primaryContrast};
    }

    span {
      color: ${props => props.theme.colors?.primary};
      font-weight: 500;
      margin: 0 20px;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }

  svg.disabled {
    pointer-events: none;
  }

  button.add {
    width: 90%;
    padding: 5px 10px;
    margin: 10px 0px 0px;
    position: relative;

    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 577px) {
    justify-content: space-between;
    flex-direction: row;

    div:last-child {
      width: 75%;
    }
    button.add {
      width: 75%;
      margin: 0 10px;
    }

    div.incdec-control {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }

  @media (min-width: 769px) {
    button.add {
      width: 100%;
      margin: 0px;
    }
  }

  @media (min-width: 1201px) {
    div.incdec-control {
      span {
        margin: 0 30px;
      }
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
      ` : css`
        margin-right: 0px;
      `}
    }
    div:last-child {
      width: 70%;
      button {
        width: 100%;
      }
    }
    button.add {
      width: 68%;
    }
  }

  @media (max-width: 576px) {
    div.incdec-control {
      justify-content: space-around;
      width: 90%;
    }
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin: auto;

  span {
    margin-bottom: 10px;
  }
`

export const WrapperSubOption = styled.div`
  border-radius: 10px;
  &.error {
    background-color: ${lighten(0.58, '#A52121')};
  }
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }

  > div:last-child {
    border-bottom: none;
  }
`

export const ProductInfoInnerContainer = styled.div`
  padding: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (min-width: 1201px) {
    padding: 10px 20px;
  }
`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}

  > div:last-child {
    border-bottom: none;
  }
`
