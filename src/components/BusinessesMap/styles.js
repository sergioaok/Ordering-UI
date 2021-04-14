import styled, { css } from 'styled-components'

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  > div {
    position: relative !important; 
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none
  `}

  @media(min-width: 681px){
    padding: 0px;
    > div {
      width: 75% !important;
    }
  }

  @media(min-width: 1201px){
    > div {
      width: 50% !important;
    }
  }

`
