import styled, { css } from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 16px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
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

  p {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  button {
    font-size: 14px;
    font-weight: 600;
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
