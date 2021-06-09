import styled, { css } from 'styled-components'

export const Container = styled.div`
  @media (min-width: 992px) {
    width: calc(100% - 320px);
  }
`

export const OrdersOptionTabsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #CCC;
`

export const OptionInnerContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.theme.colors?.grayColor};

  ${({ active }) => active && css`
    color: ${props => props.theme.colors?.primary};
  `}
`
