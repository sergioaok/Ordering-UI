import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    border-radius: 30px;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;

    ${props => props.theme?.rtl ? css`
      padding-right: 50px;
    ` : css`
      padding-left: 50px;
    `}
    background-color: #F7F7F7;
    border: none;

    ${({ isCustomLayout }) => !isCustomLayout && css`
      justify-content: center;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out; 
    `}

    @media (min-width: 681px) {
      width: 100%;
      ${({ isCustomLayout }) => !isCustomLayout && css`
        width: 200px;
        &:focus {
          width: 50%;
        }
      `}
    }

  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  padding-top: 8px;
  color: #333;
  font-size: 14px;
  border-radius: 25%;
  max-height: 100%;

  ${props => props.theme?.rtl ? css`
    right: 15px;
  ` : css`
    left: 15px;
  `}

  svg {
    cursor: pointer;
    color: #ccc;
    font-size: 24px;
  }

  img{
    width: 20px;
  }
`
export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};
`
