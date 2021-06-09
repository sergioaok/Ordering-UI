import styled from 'styled-components'

export const Container = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  > h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`
