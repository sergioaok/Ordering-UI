import styled from 'styled-components'
export const Container = styled.div`
  min-width: 220px;
`
export const Title = styled.h1`
  font-size: 32px;
  text-transform: capitalize;
  color: ${props => props.theme.colors?.darkTextColor};
  margin: 0px;
`
export const SortContainer = styled.div`
`
export const SortItem = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;

  svg {
    color: ${props => props.theme.colors?.darkTextColor};
    font-size: 24px;
  }

  span {
    white-space: nowrap;
  }
`
export const WrapFilterSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 20px;
    color: ${props => props.theme.colors?.darkTextColor};
    margin: 10px 0;
  }
`
export const ClearAll = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-weight: 600;
`
export const BusinessNumber = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`
