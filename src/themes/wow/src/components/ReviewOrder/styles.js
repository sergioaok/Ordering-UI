import styled from 'styled-components'
import React from 'react'

export const ReviewOrderContainer = styled.form`
  width: 100%;
  background-color: #F9F9F9;
  padding: 30px 0;
`
  
export const ReviewOrderInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }
`

export const Reviews = styled.div`
  width: 100%;
`
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div:last-child {
    border-bottom: none;
  }
`
export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCC;

  > p{
    color: ${props => props.theme.colors.primary};
  }
`
export const Stars = styled.div`
  > label {
    > input {
      display: none;
    }
  }
`
export const Comments = styled.div`
  width: 100%;
  margin-top: 20px;

  > textarea {
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
  }
`
export const Send = styled.div`
  margin: 20px 0;
  width: 100%;

  > button {
    width: 100%;
    padding: 5px 0;
  }
`

export const InvisibleInput = styled.input`
  opacity: 0;
  position: fixed;
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
`

export const LogoWrapper = styled.div`
  max-width: 60px;
  max-height: 60px;
  height: 60px;
  width: 60px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 60px;
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 10px;
`

export const BusinessLogo = (props) => {
  return (
    <BusinessLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessLogoStyled>
  )
}


export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 60px);
  h1,
  p {
    margin: 3px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #FFF;
  }

  h1 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
  }
  p {
    font-size: 15px;
    color: ${props => props.theme.colors?.grayColor};
  }
`
