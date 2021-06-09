import styled from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  color: ${props => props.isHome && props.auth ? '#FFF' : props.theme.colors.primary};
  display: flex;
  align-items: center;
  font-weight: 500;
  padding-left: 15px;
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 550px;
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
