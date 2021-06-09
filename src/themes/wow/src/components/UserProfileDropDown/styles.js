import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: #F9F9F9;
  padding: 20px 0px;
  border-radius: 20px;
  margin-top: -20px;
  h1 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    border-top: 1px solid #CCC;
    padding: 15px 0;
    margin: 0px 25px;
  }

  @media (min-width: 992px) {
    background-color: transparent;
  }
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;
  color: ${props => props.theme.colors?.grayColor};
  &:hover {
    background-color: #CCC;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors?.primary};
    ${props => props.theme?.rtl ? css`
      border-right: 4px solid ${props.theme.colors.primary};
    ` : css`
      border-left: 4px solid ${props.theme.colors.primary};
    `}
  `}

  span {
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
`

export const IconWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #F9F9F9;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 18px;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px;
  margin: 0 25px;
  border-top: 1px solid #CCC;
  cursor: pointer;

  > span:first-child {
    background: #F9F9F9;
    backdrop-filter: blur(15px);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    svg {
      color: #F7705D;
      width: 30px;
      height: 30px;
    }
  }

  > span:last-child {
    color: ${props => props.theme.colors?.grayColor};
    font-size: 16px;
    margin: 0 15px;
  }
`
