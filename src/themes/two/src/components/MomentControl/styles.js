import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Days = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  background-color: #D6D6D7;
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 10px 0;
  padding: 3px 0;
  flex-direction: column;
  align-items: center;
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5px 0;
  align-items: center;
  font-weight: 300;
  border-radius: 10px;
  color: ${props => props.theme.colors?.darkBlack};
  width: calc(100% / 3);
  /**
    ** Modify this validation in case the dates to display change
   */
  &:nth-child(1) div,
  &:nth-child(2) div,
  &:nth-child(3) div {
    margin-bottom: 5px;
  }

  &:nth-child(3) div,
  &:nth-child(6) div {
    ${props => props.theme?.rtl ? css`
        border-left: 0      
    ` : css`
       border-right: 0;
    `}
  }

  &:nth-child(4) div,
  &:nth-child(5) div,
  &:nth-child(6) div {
    margin-top: 5px;
  }

  @media (min-width: 426px) {
    width: calc(100% / 6);
  }

  ${({ selected }) => selected && css`
    font-weight: 400;
    > div {
      > div {
        color: #FFF !important;
      }
    }
    background-color: #000 !important;
  `}


  :last-child {
    ${ContentDay} {
      ${props => props.theme?.rtl ? css`
        border-left: 0;
      ` : css`
        border-right: 0;
      `}
    }
  }

  :hover {
    color: #FFF;
    background-color: #767676;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 24px;
`

export const DayNumber = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 24px;
`

export const Hours = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Hour = styled.div`
  display: flex;
  width: calc(50% - 5px);
  justify-content: center;
  cursor: pointer;
  font-weight: 300;
  border: 1px solid #d9d9d9;
  border-radius: 1000px;
  padding: 5px 10px;
  margin-bottom: 7px;
  box-sizing: border-box;
  background-color: #D6D6D7;
  color: ${props => props.theme.colors?.darkBlack};

  ${({ selected }) => selected && css`
    color: #FFF !important;
    background-color: ${props => props.theme.colors?.darkBlack};
  `}

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
`
