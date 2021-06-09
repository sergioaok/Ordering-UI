import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #BFBFBF;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;

  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    position: sticky;
    top: 20px;
  `}

  &:last-child {
    border-bottom: 0;
    margin-bottom: 10px;
  }
`

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ isClosed }) => isClosed ? 'not-allowed' : 'pointer'};
  transition: background-color 0.6s ease;
  position: relative;
  padding: 10px;

  ${props => props.isClosed && css`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  `}

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }
`

export const WrapperBusinessLogo = styled.div`
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  box-shadow: 0px 4px 7px rgba(128, 128, 128, 0.05), 0px 1px 13px rgba(128, 128, 128, 0.05), 0px 2px 3px rgba(128, 128, 128, 0.05);

  @media (min-width: 481px){
    width: 55px;
    height: 55px;
    max-width: 55px;
    max-height: 55px;
    padding-bottom: 0 !important;
  }

  @media (min-width: 769px){
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
  }
`

const BusinessLogoStyled = styled.div`
  display: flex;
  min-height: 50px;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: contain;
  background-position: center;
  border-radius: 10px;

  @media (min-width: 481px){
    min-height: 55px;
    width: 55px;
    height: 55px;
  }

  @media (min-width: 769px){
    width: 75px;
    height: 75px;
    min-height: 75px;
  }
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

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
  width: 65%;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
  `}

  h2, span {
    margin: 0px;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  span {
    font-size: 16px;
    opacity: 0.8;
    display: flex;
    align-items: center;
    font-weight: 300;
    color: ${props => props.theme.colors?.grayColor};

    svg {
    color: ${props => props.theme.colors.primary};
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 576px) {
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 18px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const BusinessTotal = styled.div`
  width: ${({ isCartOnProductsList }) => isCartOnProductsList ? '30%' : '25%'};
  display: none;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    margin: 0px 5px;
    font-weight: 300;

    &:nth-child(1) {
      font-weight: 500;
    }
  }

  &.closed {
    flex: 1;
    p {
      text-align: center;
      margin: 0px 20px;
      font-size: 18px;
    }
  }

  @media (min-width: 481px) {
    display: flex;
  }
`

export const BusinessActions = styled.div`
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    height: 22px;
    svg {
      font-size: 22px;
    }

    &:not(:last-child) {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 768px) {
    span {
      height: 27px;
      svg {
        font-size: 27px;
      }
    }
  }
`
