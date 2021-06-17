import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 20px 10px;

  @media (min-width: 769px) {
    padding: 0px;
  }

  ${({ isLoading }) => isLoading && css`
      pointer-events: none;
  `}
`

export const Layer = styled.div`
  ${({ nobg }) => !nobg && css`
    background-color: rgba(255, 255, 255, 0.7);
  `}
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ height }) => height || '100vh'};
  ${props => props.theme?.rtl ? css`
    right: 0;
  ` : css`
    left: 0;
  `}
`
