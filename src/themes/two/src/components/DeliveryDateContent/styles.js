import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  > button {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
export const WrapCalendar = styled.div`
  .react-calendar {
    width: 100%;

    .react-calendar__navigation {
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }
  }
`
export const WrapTimeSelect = styled.div`
  margin-bottom: 20px;
`
export const Option = styled.span`
`
export const TimeSelectContent = styled.div`
  display: flex;

  > span {
    margin: 0 10px;
  }

  > div {
    width: 100px;
    background-color: #fff !important;
    border-radius: 5px;

    &:last-child {
      margin: 0 20px;
    }    
  }

  #list {
    width: 100%;
  }
`
