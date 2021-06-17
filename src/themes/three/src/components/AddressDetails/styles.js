import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCC;
  margin-bottom: 20px;
  button {
    color: ${props => props.theme.colors.primary};
    padding-left: 25px;
    padding-right: 25px;
  }
  h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
    margin: 10px 0;
    font-size: 24px;
  }

  svg {
    color: #F2BB40;
    margin-left: 5px;
    font-size: 24px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: initial;
    `}
  }
`

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`
