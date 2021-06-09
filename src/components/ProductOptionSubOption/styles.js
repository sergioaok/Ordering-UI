import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

export const IconControl = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primary};
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
  svg {
    font-size: 25px;
  }

  svg[disabled] {
    color: #CBCBCB;
  }
`
export const Text = styled.div`
  flex: 1 1 auto;
  display: flex;
  font-weight: 300;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5px;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-left: 10px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => props.theme?.rtl && css`
      margin-left: 0;
      margin-right: 10px;    
    `}
  }
`

export const SubOptionThumbnail = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-image: url(${({src}) => src});
  background-repeat: no-repeat, repeat;
  width: 40px;
  height: 40px;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`

export const QuantityControl = styled.div`
  display: flex;
  color: #555;
  align-items: center;
  font-weight: 300;
  font-size: 18px;
  margin: 0 5px;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    margin-right: 3px;
    ${props => props.theme?.rtl && css`
      margin-left: 3px;
      margin-right: 0px;
    `}
  }

  svg[disabled] {
    color: #CBCBCB;
  }

  svg:last-child {
    margin-left: 3px;
    margin-right: 0;
    ${props => props.theme?.rtl && css`
      margin-right: 3px;
      margin-left: 0px;
  `}
  }
`

export const PositionControl = styled.div`
  display: flex;
  align-items: center;
  color: #CBCBCB;
  font-weight: 300;
  font-size: 18px;
  margin: 0 5px;

  svg {
    font-size: 20px;
    margin-right: 3px;
    ${props => props.theme?.rtl && css`
      margin-left: 3px;
      margin-right: 0px;
    `}
    &.reverse {
      transform: rotate(180deg);
    }

    &.selected {
      color: ${props => props.theme.colors.primary};
    }

    &:last-child {
      margin-right: 0;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
      `}
    }
  }
`

export const SuboptionPrice = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 300;
  font-size: 14px;
  color: #555;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`
