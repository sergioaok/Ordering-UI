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

export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 35%;
  h2 {
    font-size: 14px;
    margin-block-end: ${({ isBusinessList }) => isBusinessList ? '0.1em' : '1em'};
    margin-block-start: 0.1em;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: ${({ isBusinessList }) => isBusinessList ? '0.1em' : '1em'};
    color: #ff9300;
    font-size: 0.8em;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
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

export const Card = styled.div`
  min-width: 300px;
  width: 300px;
  margin: 10px 10px 20px 10px;
  display: inline-block;
  background: white;
  height: ${({ isBusinessList }) => isBusinessList && '300px'};
  max-height: ${({ isBusinessList }) => isBusinessList ? '300px' : '220px'};
  border-radius: 16px;
  text-align: left;

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => (props.nobg || props.isBusinessList) && css`
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
    min-width: 400px;
    max-height: ${({ isBusinessList }) => isBusinessList ? '300px' : '250px'};;
    width: 400px;
  }

  @media(min-width: 993px){
    ${({ isBusinessList }) => isBusinessList && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
      min-width: initial;
    `}
  }

`

export const Map = styled.div`
  width: 100%;
  height: ${({ isBusinessList }) => isBusinessList ? '200px' : '88px'};
  min-height: ${({ isBusinessList }) => isBusinessList && '175px'};
  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-radius: ${({ isBusinessList }) => isBusinessList && '16px'};
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
  @media(min-width: 480px){
    height: ${({ isBusinessList }) => isBusinessList ? '200px' : '100px'};
    min-height: ${({ isBusinessList }) => isBusinessList && '200px'}
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
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
`
