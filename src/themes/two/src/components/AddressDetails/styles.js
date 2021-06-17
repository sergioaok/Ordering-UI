import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CCC;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const WrappMap = styled.div`
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-right: 5px;
  ` : css`
    margin-left: 5px;
  `}

  h4 {
    margin-bottom: 0px;
  }
`

export const Map = styled.div`
  font-size: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height);
  }
`

export const Text = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 20px;
    margin: 0px;
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    font-size: 14px;
    font-weight: 600;

    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 230px;
    flex-direction: column;
    align-items: initial;

    a {
      ${props => props.theme?.rtl ? css`
        margin-right: 0px;
      ` : css`
        margin-left: 0px;
      `}
    }
  }
`
