import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
`

export const InnerContainer = styled.div`
  display: flex;

  svg {
    cursor: pointer;
    z-index: 100;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
  }
`

export const ErrorMessage = styled.span`
  padding: 10px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`
