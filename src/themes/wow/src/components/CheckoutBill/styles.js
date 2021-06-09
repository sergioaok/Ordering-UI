import styled, { css } from 'styled-components'
export const CheckoutBillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  table {
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.colors?.grayColor};

    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
      font-weight: 500;
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
    }
  }

  @media (min-width: 411px) {
    table {
      font-size: 18px;
    }
  }
`
