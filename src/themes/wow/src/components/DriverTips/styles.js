import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryContrast};
  cursor: pointer;
  text-transform: capitalize;
  height: 30px;
  width: 30px;
  font-size: 14px;
  margin-bottom: 10px;

  &.active {
    background-color: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    border-radius: 16px;
    padding: 0px 30px;
  }
`
