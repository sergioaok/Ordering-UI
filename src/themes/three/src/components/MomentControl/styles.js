import styled from 'styled-components'

export const MomentControlContainer = styled.div`
  > button {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  button.asap {
    color: #000;
  }

  > * {
    margin-bottom: 15px;
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Days = styled.div`
  #select-input {
    width: 100%;
    border-radius: unset;
    height: inherit;

    > div:first-child {
      font-size: 16px;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    #list {
      width: 100%;
      border-radius: unset;
    }
  }
`

export const Hours = styled.div`
  #select-input {
    width: 100%;
    border-radius: unset;
    height: inherit;

    >div:first-child {
      justify-content: space-between;
      font-size: 16px;
      padding-top: 4px;
      padding-bottom: 4px;
    }
    #list {
      width: 100%;
      border-radius: unset;
    }
  }
`
