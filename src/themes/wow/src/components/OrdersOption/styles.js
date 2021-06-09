import styled from 'styled-components'

export const Container = styled.div`
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${props => props.theme.colors.primary};
    margin: 0px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  p {
    color: ${props => props.theme.colors.grayColor};
    text-align: center;
  }

  button {
    font-weight: 600;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
  }
`
