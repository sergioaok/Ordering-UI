import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  input {
    width: 100%;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;
    border: unset;

    ${props => props.theme?.rtl ? css`
      padding-right: 35px;
    ` : css`
      padding-left: 35px;
    `}
    background-color: ${props => props.theme?.colors?.backgroundPage};

    @media (min-width: 681px) {
      width: 200px;
    }
  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 14px;
  left: 15px;
  border-radius: 25%;
  max-height: 100%;
  ${props => props.theme?.rtl && css`
    left: initial;
    right: 15px;
  `}
  span{
    cursor: pointer;
  }
  img{
    width: 20px;
    transform: translate(-25%, 0%);
    ${props => props.theme?.rtl && css`
      transform: translate(25%, 0%);
    `}
  }
`
export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};
`
