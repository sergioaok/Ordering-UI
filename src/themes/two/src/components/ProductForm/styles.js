import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;
  padding-top: 50px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 769px) {
    padding-top: 10px;
  }

  @media (min-width: 1201px) {
    overflow: auto;
    max-height: 90vh;
  }
`

export const ProductInfoContent = styled.div`
  padding: 0 15px 15px 15px;
`

export const WrapperImage = styled.div`
  width: 100%;
  position: relative;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 300px;
  width: 100%;

  img {
    border-radius: 8px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #263238;
    margin-top: 0px;
  }

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

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
`

export const ProductEdition = styled.div``

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 10px 0 0 0;
  font-weight: 600;
  color: #333333;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  width: 100%;
  box-shadow: 0px -2px 3px #ccc;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  div.incdec-control {
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
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
    padding: 5px 15px;
    margin: 10px 0px 0px;
    width: 91%;

    &.soldout {
      position: relative;
      pointer-events: none;
    }

    > span.total {
      ${props => props.theme?.rtl ? css`
        padding-right: 20px;
      ` : css`
        padding-left: 20px;
      `}
    }
  }

  @media (min-width: 577px) {
    flex-direction: row;

    div:last-child {
      width: 75%;
    }
    button.add {
      width: initial;
      margin: 0 10px;

      &.soldout {
        width: 100%;
      }
    }

    button {
      position: absolute;
  
      ${props => props.theme?.rtl ? css`
        left: 0px;
      ` : css`
        right: 0px;
      `}
    }
  }

  @media (min-width: 769px) {
    position: sticky;
    bottom: 0px;
    right: initial;
  }

  @media (min-width: 1201px) {
    padding: 10px 0px;

    div:last-child {
      width: 70%;
      button {
        width: 100%;
      }
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

export const SkuContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }

  p {
    font-size: 14px;
  }
`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const WrapProductShare = styled.div`
  position: absolute;
  top: 10px;
  ${props => props.theme?.rtl ? css`
    right: 10px;
  ` : css`
    left: 10px;
  `}
`

export const ProductQuantity = styled.span`
  background: #F7F7F7;
  border-radius: 8px;
  width: 65px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`
