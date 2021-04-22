import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  max-height: 100vh;
  position: relative;

  @media (min-width: 577px) {
    overflow: auto;
  }

  @media (min-width: 769px) {
    max-height: 90vh;
  }
`
export const AuthContainer = styled.div`
  @media (min-width: 769px) {
    > div {
      height: 90vh;
    }
  }
`
export const ProductHeader = styled.div`
  padding: 20px;
  z-index: 10;  
  position: relative;
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
  width: 100%;

  img {
    border-radius: 16px;
    height: 100%;
    box-sizing: border-box;
  }

  height: 350px;
  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    height: 250px;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 10px;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
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

  @media (min-width: 1201px) {
    margin-top: 0px;
  }
`

export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  h1 {
    margin-bottom: 0px;
  }
  @media (min-width: 1201px) {
    width: calc(100% - 25px);
  }
`

export const ProductEdition = styled.div``

export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
  color: #333333;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

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
  row-gap: 10px;
  align-items: center;
  padding: 10px;
  width: 100%;
  box-shadow: 0px -3px 6px #00000029;
  z-index: 100;
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;

  button {
    display: flex;
    justify-content: center;
    column-gap: 5px;
  }

  div.incdec-control {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius: 10px;
      min-width: 80px;
      text-align: center;
      padding: 10px 0;
    }

    svg {
      width: 35px;
      height: 35px;
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
    position: absolute;
    right: 20px;
    padding: 10px 15px;

    &.soldout {
      width: 100%;
      pointer-events: none;
      position: relative;
      right: 0px;
    }
  }

  @media (min-width: 766px) {
    position: fixed;
    bottom: 0px;
    justify-content: center;
    flex-direction: row;
    button {
      min-width: 190px;
    }
  }


  @media (min-width: 1201px) {
    div.incdec-control {
      width: 30%;
    }
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    button.add {
      position: relative;
      right: 0px;
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

  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`

export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`
export const SectionDescription = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
`
