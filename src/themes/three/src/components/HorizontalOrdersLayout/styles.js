import styled, { css } from 'styled-components'

export const OpenOrder = styled.div`
  height: 15%;
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  button {
    width: 100%;
    font-size: 0.8em;
    height: 36px;
  }

  @media (min-width: 480px){
    button{
      font-size: 1em
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
`

export const ActiveHeaderImage = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 125px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 35%;
  h2 {
    font-size: 14px;
    margin-block-end: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    margin-block-start: 0.1em;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    color: #ff9300;
    font-size: 0.8em;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
  }
  p[name='view-cart']{
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

export const Card = styled.div`
  min-width: 300px;
  width: 300px;
  margin: 10px;
  display: inline-block;
  background: white;
  text-align: left;
  cursor: ${({ isBusinessesPage }) => isBusinessesPage && 'pointer'};

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => (props.nobg || props.isBusinessesPage) && css`
    background: transparent;
  `}

  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  `}

  @media (min-width: 480px){
    width: 400px;
  }

  @media(min-width: 993px){
    ${({ isBusinessesPage }) => isBusinessesPage && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
    `}
  }
`

export const Reorder = styled.div`
  margin-bottom: 10px;
  button{
    line-height: 0;
    height: 30px;
    font-size: 14px;
  }
`

export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  font-size: 0.9em;
  width: 30%;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
  `}
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    color : #9A9A9A;
    white-space: nowrap;
    font-size: 0.9em;
    font-size: 0.8em;
  }

  p[name='order_number']{
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p[name='view_order'] {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
  }
  p[name='order_status']{
    color: #53ad26;
    height: 17px;
  }

  @media (min-width: 480px){
    h2 {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
    }
    p {
      font-size: 0.9em;
    }
    p[name='order_number']{
      width: 230px;
    }
  }

  @media (min-width: 768px){
    font-size: 0.9em;
    p {
      font-size: 1em;
    }
    h2 {
      font-size: 18px;
    }
  }
`
