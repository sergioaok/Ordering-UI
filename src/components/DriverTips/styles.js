import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  text-transform: capitalize;
  height: 30px;
  min-width: 30px;
  font-size: 14px;
  padding: 5px 20px;

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  }

  @media (min-width: 768px) {
    padding: 5px 30px;
  }
`

export const FormDriverTip = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DriverTipLabel = styled.label`
  font-size: 16px;
  align-self: flex-start;

  ${props => props.theme?.rtl && css`
    margin-left: 20px;
    margin-right: 0;
  `}
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  input {
    width: 65%;
    padding: 4px 15px;
    box-sizing: border-box;
    flex: 1;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    input {
      width: 80%;
    }
  }
`

export const DriverTipMessage = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`

export const WrapperTips = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  > div {
    margin: 5px;
  }
`
