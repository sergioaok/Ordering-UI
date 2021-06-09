import styled from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
  color: ${props => props.theme.colors.primary};
`

export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: #A52121;
  font-weight: 500;

  @media (min-width: 381px) {
    font-size: 14px;
  }
`
