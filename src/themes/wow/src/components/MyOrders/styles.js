import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 91%;
  min-height: calc(100vh - 350px);
  margin: 0px auto; 
  padding: 20px 0;
   @media (min-width: 992px) {
    padding: 40px 0;
    min-height: calc(100vh - 390px);
  }
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftContent = styled.div`
  flex: 1;
`

export const RightContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    margin-top: 0px;
    width: calc(100% - 300px);
    ${props => props.theme?.rtl ? css`
      padding-right: 20px;
    ` : css`
      padding-left: 20px;
    `}
  }
`

export const BackButton = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
  width: fit-content;
  ${props => props.theme?.rtl ? css`
    right: 25px;
  `
  : `
    left: 25px;
  `}
  display: flex;
  align-items: center;

  span {
    padding: 0 10px;
  }
`
