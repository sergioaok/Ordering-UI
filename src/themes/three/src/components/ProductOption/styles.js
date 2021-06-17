import styled, { css } from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  
  cursor: pointer;
  background-color: ${props => props.theme.colors?.lightGray};
  transition: background-color 0.6s ease;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }

  > span {
    background-color: #FFF;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e2e2;
  }
`

export const TitleContainer = styled.div`
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
  display: flex;
  align-items: center;  

  *:first-child {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  span {
    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
      font-size: 12px;
      font-weight: 400;
    }
  }
`

export const WrapTitle = styled.div`
  
`

export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: ${props => props.theme.colors?.darkGray};

  ${({ error }) => error && css`
    color: #A52121;
  `}

  font-weight: 500;

  @media (min-width: 381px) {
    font-size: 14px;
  }
`
export const OptionThumbnail = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat, repeat;
  width: 40px;
  height: 40px;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`

export const WrapperOption = styled.div`
  overflow: hidden;
`
