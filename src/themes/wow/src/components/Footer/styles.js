import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  background: linear-gradient(90deg, #43BEAC 0%, #63D0DF 100%);
  padding: 50px 0;
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91%;
  margin: 0 auto;
  border-bottom: 1px solid #FFF;
  padding-bottom: 20px;
`

export const LogoContainer = styled.div`
  width: 25%;

  @media (max-width: 992px) {
    width: 35%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    > div {
      width: 50%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 576px) {
    > div {
      width: 100%;
    }
  }
`

export const Content = styled.div`
  > img {
    width: 80px;
    height: 30px;

    @media (min-width: 768px) {
      width: 120px;
      height: 45px;
    }
  }
  > * {
    font-size: 14px;
    margin: 10px 0px;
    display: block;
  }
  h1 {
    font-weight: 600;
    color: #FFF;
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  ${({ mobileSocialView }) => mobileSocialView && css`
    svg {
      color: #FFF;
    }
    @media (min-width: 768px) {
      display: none;
    }
  `}

  ${({ desktopSocilalView }) => desktopSocilalView && css`
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  `}
`

export const SocialIcon = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 5px;
  color: initial;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const DownloadAppContainer = styled.div`
  display: flex;
`

export const LogoWapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-right: 10px;

  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 10px;
  `}

  img {
    width: 80%;
  }
`

export const AppLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DownloadAppLink = styled.a`
  img {
    width: 100px;
    height: 31px;
    border-radius: 5px;
  }
`
