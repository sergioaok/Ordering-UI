import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
`
export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background: #FFF;

  flex-direction: column;
  &.reverse {
    flex-direction: column-reverse;
  }

  ${({ column }) => column && css`
    flex-direction: column;
  `}

  ${({ bgColor }) => bgColor && css`
    background: ${bgColor};
  `}

  ${({ bgimage }) => bgimage && css`
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${bgimage});
    background-repeat: no-repeat, repeat;
    width: 100%;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    min-height: 350px;
    justify-content: center;
    align-items: center;
  `}

  @media (min-width: 943px) {
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
    &.reverse {
      flex-direction: row-reverse;
    }
  }
`

export const HomeTitle = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font: normal normal normal 45px/79px Lobster;
    font-size: 30px;
    letter-spacing: 0px;
    color: #263238;
    font-weight: bold;
    margin: 0px;
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
  @media (min-width: 481px) {
    h2 {
      font: normal normal normal 45px/79px Lobster;
    }
  }
`

export const StepsBlock = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  margin-top: 15px;
  div {
    width: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
    svg {
      font-size: 70px;
    }
    h3 {
      font-weight: normal;
      text-align: center;
    }
  }
  @media (min-width: 790px) {
    grid-template-columns: auto auto auto auto auto auto auto;
  }
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    max-height: 400px;
    max-width:100%;
    img {
      width: auto;
      height : auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 943px) {
    width: 50%;
  }
`

export const WrapTextContent = styled.div`
  padding: 20px;
  h2{
    font: normal normal normal 64px/80px ${props => props.theme.fonts.special || 'Georgia'};
  }
  div {
    padding: 0px;
  }
  @media (min-width: 943px) {
    div {
      padding: 0px 70px;
    }
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;

  div {
    text-align: left;
    margin-top: 25px;
    h2 > span {
      color: ${props => props.theme.colors.primary};
    }
  }

  h2 {
    font-size: 24px;
  }

  &.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    h2 {
      font-size: 24px;
      color: #FFF;
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    button {
      width: 122px;
    }
  }

  @media (min-width: 943px) {
    width: 50%;
    text-align: left;
  }

  @media (min-width: 481px) {
    div {
      ${props => props.theme?.rtl && css`
        text-align: right;
    `}
    }
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 0px 10px
  }
  svg {
    font-size: 4em;
    fill: ${props => props.theme.colors.primary};
  }
`
export const HomeFooter = styled.div`
  font: normal normal normal 128px/160px ${props => props.theme.fonts.special || 'Georgia'};

  @media (min-width: 768px) {
    h2 {
      font-size: 50px !important;
    }
  }
`

export const Line = styled.div`
    position: relative;
    border: 1px solid red;
    align-self: center;
    margin-bottom: 75px !important;
    transform: rotate(90deg);
    padding: 0 !important;
    width: 30px !important;
    &::after{
      content: '';
      position: absolute;
      border: 3px solid red;
      transform: translateY(-50%);
      right: 100%;
      border-radius: 50%
    }
    &::before{
      content: '';
      position: absolute;
      border: 3px solid red;
      left: 100%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
    @media (min-width: 790px) {
      transform: rotate(0deg);
    }
`

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column
`

export const SkeletonHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px auto;
`

export const SkeletonContent = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-bottom: 10px;
`

export const SkeletonInformation = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
`

export const SkeletonSide = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
  `}
`
