import styled, { css } from 'styled-components'

export const AutoscrollContainer = styled.span`
  display: ${props => props.modal ? 'flex' : 'inherit'};
  width: ${props => props.modal ? '300vw' : 'initial'};
  
  svg {
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 16px;
    min-width: 16px;
    height: 16px;
    align-self: center;
    top: ${props => props.modal ? '35%' : '0'};
    position: sticky;
    color: #000000;
    border: 1px solid #D9D9D9;
    opacity: 0.8;
  }

  .right-autoscroll{
    ${props => props.theme?.rtl ? css`
      left: 91%;
    ` : css`
      right: 1%;
    `}
  }
  .left-autoscroll{
    ${props => props.theme?.rtl ? css`
      right: 91%;
    ` : css`
      left: 1%;
    `}    
  }
  svg:active{
    border: 0
  }
  svg.hidden{
    opacity: 0;
  }

  @media (min-width: 480px){
    .right-autoscroll{
    ${props => props.theme?.rtl && css`
      left: 94%;
    `}
   }
    .left-autoscroll{
      ${props => props.theme?.rtl && css`
        right: 94%;
      `
      }
    }
  }

  @media (min-width: 768px){
    width: ${props => props.modal && '100%'};
    display: inherit;
    ${props => props.modal && css`
      .left-autoscroll{
        opacity: 0;
      }
      .right-autoscroll{
        opacity: 0;
      }
    `}
  }

  @media (min-width: 1024px){
    .right-autoscroll{
      ${props => props.theme?.rtl && css`
        left: 97%;
      `}
    }
      .left-autoscroll{
        ${props => props.theme?.rtl && css`
          right: 97%;
        `
      }
    }
  }
`
