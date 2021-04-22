import styled, { css } from 'styled-components'

export const SingleCard = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  border: none;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  overflow: hidden;

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  `}

  @media(min-width: 480px){
    ${props => (
      props.theme.colors.backgroundPage === '#FFF' ||
      props.theme.colors.backgroundPage === '#FFFFFF'
    ) && css`
      border-top: none !important;
    `}
    border-top: 1px solid #ccc;
  }

  button {
    font-weight: 500;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const OrderPastContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-right: 5px;
  min-width: 220px;

  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0px;
  `}
`

export const WrapperBusinessTitle = styled.div`
  width: 95%
`

export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  align-items: center;
  font-size: 0.8em;

  p {
    color: #53ad26;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  button {
    margin: 5px 0;
    width: 100%;
    font-size: 0.9em;
    white-space: nowrap;
  }

  @media (min-width: 480px){
    font-size: 1em;
    button{
      width: 90%;
      font-size: 0.9em;
    }
  }

  @media (min-width: 768px){
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
    button{
      width: 80%;
    }
  }

  @media (min-width: 1024px){
    button{
      width: 50%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
    column-gap: 20px;
  }
`

export const WrappButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px auto;

  button {
    padding: 10px 0px;
    width: 100%;
  }

  @media (min-width: 768px) {
    button {
      width: 60%;
    }
  }
`
export const WrapProducts = styled.div`
  max-width: 800px;
`
