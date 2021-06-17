import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  span {
    display: flex;
    font-weight: 300;
    color: #555;
  }
`

export const CheckBoxContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #CBCBCB;
  background: #E7E7E7;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}

  svg {
    color: #FFF;
    font-size: 24px;
  }

  ${({ active }) => active && css`
    border: 1px solid #191919;
    background: #191919;
  `}
`
