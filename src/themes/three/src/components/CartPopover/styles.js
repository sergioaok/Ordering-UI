import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  color: ${props => props.theme.colors.primaryContrast};
  display: flex;
  align-items: center;
  padding: 5px 10px;

  svg {
    font-size: 20px;
  }
  
  p {
    margin: 0px;

    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
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
