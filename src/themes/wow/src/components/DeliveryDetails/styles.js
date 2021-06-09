import styled from 'styled-components'

export const DeliveryTimeContainer = styled.div`
  border-bottom: 1px solid #CCC;
  padding-bottom: 10px;

  > button {
    font-weight: 600;
  }
`

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;

  span:first-child {
    color: ${props => props.theme.colors.primary};
  }

  span:not(:first-child) {
    color: ${props => props.theme.colors?.grayColor};
  }
`

export const AddressContainer = styled.div`
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
  }

  p {
    color: ${props => props.theme.colors?.grayColor};
    margin: 0;
  }
`
