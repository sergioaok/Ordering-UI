import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 7px 15px;
  p {
    color: #FFF;
    margin: 0px;
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : css`
      margin-left: 5px;
    `}
  }
  svg {
    color: #FFF;
    font-size: 20px;
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
