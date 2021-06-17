import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }  
`

export const OrderTypeWrapper = styled.span`
  div {
    max-width: 120px;
  }

  #list {
    ${props => props.theme?.rtl ? css`
      left: inherit;
    ` : css`
      right: inherit;
    `}
  }
  @media (min-width: 380px) {
    div{
      max-width: initial;
    }
  }
`

export const SelectedOption = styled.p`  
  margin: 0;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 380px) {
      max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: 80px;
`

export const OrderTypeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  width: fit-content;

  svg {
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  > div {
    svg {
      display: none;
    }
  }
`
