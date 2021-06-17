import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`

export const Container = styled.div`
  padding: 20px 10px;

  @media (min-width: 769px) {
    padding: 0px;
  }
`

export const Title = styled.h1`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  padding: 0px 10px 15px;
`
