import styled, { css } from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  padding: 15px;
 
  width: 100%;
  margin: 15px 0px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 15px 10px;
    width: calc(100% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(50% - 20px);
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #CCC;
  padding-top: 10px;
`

export const DeliveryTime = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  max-width: calc(100% - 110px);
  p {
    margin: 0px;
    font-weight: 600;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : `
      margin-left: 5px;
    `}
  }
`

export const Logo = styled.div`
  width: 55px;
  height: 55px;
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

export const OrderContent = styled.div`
  display: flex;
  flex: 1;
  max-width: calc(100% - 120px);
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

export const ActionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: ${props => props.theme.colors.primary};

  p {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
  }

  span {
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
  }
`

export const LoadMoreButtonWrap = styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  button {
    width: 100%;
    padding: 7px 0;
  }
`

export const ReviewContainer = styled.div`
  h2 {
    color: ${props => props.theme.colors?.grayColor};
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
  }
`
