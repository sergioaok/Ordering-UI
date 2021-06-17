import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

export const ModalDialog = styled.div`
  position: relative;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' : '#FFF'};
  padding: ${({ padding }) => padding || '20px'};
  width: 100vw;
  border-radius: 0px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  height: ${({ height }) => height || '100%'};;
  max-height: 100vh;
  overflow: auto;

  @media (min-width: 769px) {
    width: ${({ width }) => width || '50%'};
    max-height: 90vh;
    border-radius: 10px;
    height: auto;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px;
  button {
    width: 100%;
    border-radius: 32px;
    opacity: 1;
    height: 45px;
    &:nth-child(1) {
      margin-right: 25px;
      ${props => props.theme?.rtl && css`
        margin-left: 25px;
        margin-right: 0px;
      `}
    }
  }
`
export const ModalHeader = styled.div`
  display: flex;

`

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-transform: capitalize;
  flex: 1;
  ${props => props.theme?.rtl && css`
    text-align: right;
    padding-right: 10px;
    padding-left: 0px;
  `}
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
  ${props => props.theme?.rtl && css`
    padding-left: 15px;
    padding-right: 0px;
  `}
`
export const ModalIcon = styled.span`
  position: fixed;
  left: 15px;
  top: 6px;
  font-size: 30px;
  cursor: pointer;
  z-index: 2;
  ${props => props.theme?.rtl && css`
    right: 15px;
    left: initial;
  `}
  svg{
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    color: #494949;
    font-size: 24px;
  }

  @media(min-width: 769px){
    position: absolute;
  }
`

export const ModalBackHeader = styled.div`
  height: 50px;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`
