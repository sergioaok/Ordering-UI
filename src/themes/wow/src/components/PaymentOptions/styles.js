import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const PaymentMethodsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: 841px) {
    justify-content: space-around;
  }
`

export const PayCard = styled.div`
  width: calc(50% - 12px);
  height: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;

  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}

  ${props => props.isDisabled && css`
    pointer-events: none;
  `}

  svg path {
    fill: #000;
  }

  @media (min-width: 351px) {
    width: calc(33% - 12px);
  }

  @media (min-width: 513px) {
    width: calc(25% - 12px);
  }

  svg {
    font-size: 30px;
  }

  p {
    margin: 0px;
    font-size: 12px;
  }

  &.active {
    border: 1px solid ${props => props.theme.colors.primary};
  }

  &:not(.active) {
    border: ${({ isSkeleton }) => isSkeleton ? '0' : '1px solid #EAEAEA'};
  }
`

export const PayCardSelected = styled.div`
  padding: 30px 0px 0px;
`

export const CardItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;

  .checks svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  .brand svg {
    font-size: 26px;
  }

  > * {
    margin-right: 10px
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`
