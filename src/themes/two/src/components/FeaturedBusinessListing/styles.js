import styled, { css } from 'styled-components'

export const PopularBusinessContainer = styled.div`
  display: flex;
  margin-top: 40px;

  button.mobile {
    display: none;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    button.desktop {
      display: none;
    }
    button.mobile {
      display: flex;
      margin: 20px 0;
      width: 120px;
      align-items: center;
      justify-content: space-between;
    }
  }

  ${({ isFeaturePage }) => isFeaturePage && css`
    width: 91%;
    margin: 0 auto;
    padding-top: 60px;
  `}
`
export const PositionedContainer = styled.div`
  position: static;

  ${props =>
    props.absolute &&
    css`
      position: absolute;
    `};
  ${props =>
    props.fixed &&
    css`
      position: fixed;
    `};
  ${props =>
    props.relative &&
    css`
      position: relative;
    `};
`
export const TextContent = styled.div`
  width: 30%;
  padding: 20px 0;
  h1 {
    margin: 0px;
  }
  button {
    margin-top: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    svg {
      font-size: 24px;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`
export const PopularBusinesssList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    > div {
      margin: 10px;

      &:first-child {
        width: 100%;
      }

      &:not(:first-child) {
        width: calc(50% - 20px);
      }
    }
  }
  @media (max-width: 576px) {
    > div {
      margin: 10px 5px;

      &:not(:first-child) {
        width: 100%;
      }
    }
  }
`
export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`
export const BackView = styled.div`
  margin-bottom: 20px;
  span {
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    width: 100px;
  }
`
