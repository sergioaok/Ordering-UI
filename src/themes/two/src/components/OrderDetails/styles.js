import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 60px;
`

export const WrapperContainer = styled.div`
  width: ${({ isLoading }) => isLoading ? '100%' : '91%'};
  margin: auto;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  padding: 0 10px;
`

export const BusinessInfo = styled.div`
  h1 {
    cursor: pointer;
    width: 100%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.darkTextColor};
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
    margin-bottom: 0px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 18px;
    }
  }
`

export const OrderInfo = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 1200px) {
    padding: 0 10px;
  }
`

export const OrderData = styled.div`
  h1 {
    width: 100%;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.darkTextColor};
    span {
      &:not(:first-child) {
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
        cursor: pointer;
      }
    }
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
  }

  .order-data-section {
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    > dl dd {
      padding: 0 10px;
    }
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 24px;
    }

    .order-data-section {
      flex-direction: column;
    }
  }
`
export const OrderBusiness = styled(OrderInfo)`
`

export const StatusBar = styled.div`
  position: relative;
  height: 7px;
  margin: 25px 0px 40px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)
  `}

  > div {
    position: absolute;
    top: -8px;
    width: 100%;
    display: flex;

    div {
      width: calc(100% / 3);
      text-align: right;
    }
  }
`

export const Step = styled.span`
  background: #fff;
  padding: 0 5px;
  svg {
    color: ${props => props.theme.colors.disabled};
    font-size: 24px;
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`

export const OrderCustomer = styled(OrderInfo)`
  h1 {
    font-size: 24px;
    margin-bottom: 0px;
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
    font-size: 18px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const Map = styled.div`
  width: 60%;
  height: calc(100vh - 120px);
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }

  ${({ isSkeleton }) => isSkeleton && css`
    padding-top: 37px;
  `}

  @media (max-width: 992px) {
    height: 30vh;
    min-height: 200px;
    width: 100%;
  }
`
export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    padding: 0 30px;
    width: 100%;
    font-size: 12px;
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 20px;
      td:nth-child(1) {
        font-weight: bold;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
        padding-top: 10px;
      }
    }
  }

  @media (max-width: 1200px) {
    table {
      padding: 0 10px;
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  margin: 30px 0 20px;
  padding: 20px;
  cursor: pointer;
  background: #F7F7F7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px;
  }
  >div {
    > div {
      display: flex;
      column-gap: 5px;
  
      svg {
        color: ${props => props.theme.colors.grayTextColor};
      }
    }
  }

  svg {
    font-size: 24px;
  }
  
`

export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
  width: 100%;
`

export const ShareOrder = styled(OrderInfo)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 10px;

    p {
      margin: 0px;
      font-size: 18px;
      span {
        &:not(:first-child) {
          font-weight: 500;
          padding: 0 5px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    > div {
      p {
        font-size: 14px;
      }
    }
  }
`

export const WrapBack = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
`
