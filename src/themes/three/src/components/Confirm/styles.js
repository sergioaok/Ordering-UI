import styled, { css } from 'styled-components'

// export const PopupBackDrop = styled.div`
//   background-color: rgba(0, 0, 0, 0.4);
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
// `

export const PopupWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  outline: none;
`

export const PopupDialog = styled.div`
  background-color: #FFF;
  padding: 20px;
  width: 70%;
  border-radius: 10px;
`

export const PopupActions = styled.div`
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
        margin-right: 0; 
      `}  
    }
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0;
      ` : css`
        margin-right: 0;
      `}  
    }
  }
`

export const PopupTitle = styled.h2`
  text-align: left;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin-top: 0px;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}  
`

export const PopupContent = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}  
  ul {
    padding-left: 30px;
    ${props => props.theme?.rtl && css`
      padding-right: 30px;
      padding-left: 0;
    `}
    li {
      margin-top: 7px;
      margin-bottom: 7px;
    }
  }
`

export const PopupIcon = styled.span`
  float: right;
  font-size: 30px;
  cursor: pointer;
  ${props => props.theme?.rtl && css`
    float: left;
  `}
`
