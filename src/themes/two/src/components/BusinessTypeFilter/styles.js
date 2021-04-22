import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  justify-content: flex-start;
  text-align: center;

  ::-webkit-scrollbar {
      opacity: 0
  }
  
  > div {
    margin: 0 auto;   
    > span {
      column-gap: 10px;
    }
    > div {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }

  .category{
    padding: 10px 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${({ noAutoScroll }) => noAutoScroll && css`
    .category{
      width: 90px;
      padding: 10px 5px;
      p {
        margin: 0px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
    }
    > div {
      flex-wrap: wrap;
      column-gap: 20px;
      > div {
        width: inherit;
      }
    }
  `}

  @media (min-width: 480px){
    .category{
      padding: 10px 15px;
      column-gap: 50px;
    }

    ${({ noAutoScroll }) => noAutoScroll && css`
      .category{
        padding: 10px 5px;
      }
    `
  }
`

export const ImageContainer = styled.div`
  width: 120px;
  height: 125px;
    img{
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      padding: 4px;
      box-sizing: border-box;
    }

  ${({ load }) => !load && css`
    opacity: 0;
  `}

  ${({ noAutoScroll }) => noAutoScroll && css`
    width: 70px;
    height: 75px;
  `}
`
