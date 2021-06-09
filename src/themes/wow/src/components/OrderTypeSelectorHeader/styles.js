import styled, { css } from 'styled-components'

export const OrderTypeWrapper = styled.span`
  ${({ isTabStyle }) => isTabStyle ? css`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.lightGrayColor};
    width: fit-content;
    border-radius: 30px;
    > div:first-child:after {
      display: none;
    }
    > div:first-child {
      margin: 0;
    }
  `
  : css`
    div {
      max-width: 120px;
    }
    @media (min-width: 380px) {
      div{
        max-width: initial;
      }
    }
  `}
`

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }  
`

export const SelectedOption = styled.p`  
  margin: 0;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 380px) {
    max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: 80px;
`

export const Tab = styled.div`
  cursor: pointer;
  padding: 7px 15px;
  margin-left: 10px;
  border-radius: 25px;
  position: relative;
  &:after {
    display: block;
    position: absolute;
    top: 7px;
    bottom: 7px;
    border-right: 1px solid ${props => props.theme.colors.grayColor};
    content: '';
    margin: 0 -20px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  p {
    display: none;
  }

  svg,
  p {
    color: ${props => props.theme.colors.primary};
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary};
    svg,
    p {
      color: #FFF;
      display: block;
    }
    @media (max-width: 576px) {
      p {
        display: none;
      }
    }
  `}
`

export const SkeletonWrapper = styled.div`
  > span {
    display: flex;
  }
  span {
    border-radius: 30px;
  }
`
