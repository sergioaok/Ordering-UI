import styled, { css } from 'styled-components'

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}

  button.add {
    height: 50px;
  }
`

export const AddressListUl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 40px;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const AddressItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;

  ${({ active }) => active && css`
    background-color: #F9F9F9;
    box-shadow: none;

    .address {
      span {
        color: ${props => props.theme.colors.primary};
      }
    }
  `}

  label {
    font-size: 15px;
    margin-left: 5px;
    font-weight: bold;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0;
  `}
  }

  .wrapAddress {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      display: flex;
      cursor: pointer;
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
      `}

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    line-height: 1.5;

    span:first-child {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    span:last-child {
      opacity: 0.5;
      font-size: 12px;
    }
  }

  &:last-child {
    border-bottom: 1px solid #00000029;
  }

  @media (min-width: 992px) {
    width: calc(50% - 20px);
    margin: 10px;
  }
`

export const AddressItemActions = styled.div`
  display: flex;
  align-items: center;
  > span {
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 30px;
    }
  }
  > a {
    display: flex;
    cursor: pointer;
    margin: 0px 5px;
    font-size: 30px;
  }
  a.edit {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  a.delete {
    svg {
      color: #D81212;
    }
  }
  > a.disabled {
    svg {
      color: #CCC;
    }
    pointer-events: none;
  }
`

export const WrappNotAddresses = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px auto 10px;

  img {
    width: 200px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 45px;
    flex: 1;

    &:last-child#second-btn {
      margin-left: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
        margin-right: 10px;
      `}
    }
  }

  @media (min-width: 769px) {
    button {
      &:last-child#second-btn {
        margin-left: 25px;
        ${props => props.theme?.rtl && css`
          margin-left: 0;
          margin-right: 25px;
      `}
      }
    }
  }
`

export const ContinueButton = styled.div`
  width: 100%;
  position: sticky;
  bottom: 1px;
  
  button {
    width: 100%;
    white-space: nowrap;
    height: 50px;
  }
`
export const TagWrapper = styled.div`
  background: #F9F9F9;
  backdrop-filter: blur(15px);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  min-width: 40px;
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }
`
