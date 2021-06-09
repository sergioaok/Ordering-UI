import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
    text-align: center;
  }

  p {
    color: ${props => props.theme.colors?.grayColor};
    text-align: center;
    margin-top: 0px;
  }

  button {
    width: 100%;
    max-width: 350px;
    margin: 10px 0;
    padding: 5px 0;
  }
`

export const NotNowAction = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors?.grayColor};
`
