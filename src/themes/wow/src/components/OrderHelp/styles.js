import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  padding: 30px 0;
`

export const InnerContainer = styled.div`
  width: 91%;
  margin: 0px auto;

  @media (min-width: 992px) {
    width: 80%;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: 55px;
  height: 55px;
  box-shadow: 0px 3px 4px rgb(128 128 128 / 5%), 0px 3px 3px rgb(128 128 128 / 5%), 0px 1px 8px rgb(128 128 128 / 5%);
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  @media (min-width: 480px){
    width: 75px;
    height: 75px;
  }
`

export const BusinessInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 85px);
  ${props => props.theme?.rtl ? css`
    padding-right: 10px;
  ` : css`
    padding-left: 10px;
  `}

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.grayColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const CancelButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  > button {
    padding: 5px 0;
    width: 100%;
    max-width: 300px;
  }
`
export const HelpContent = styled.div`
`

export const HelpItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors?.grayColor};
`
export const HelpItemHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  padding: 15px;

  svg {
    font-size: 24px;
  }
`
export const HelpSection = styled.div`
  margin-top: 30px;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }
`
