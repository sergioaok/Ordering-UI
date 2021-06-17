import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 30px 0;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  margin: auto;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;

  > * {
    display: block;
    text-decoration: none;
    color: initial;
    font-size: 14px;
    margin: 10px 0;
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 33%;
    margin: 0;
  }
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

export const Copy = styled.div`
  margin: auto;
  width: 90%;
  text-align: center;
  font-size: 12px;
  color: rgba(0,0,0,0.6);

  @media (min-width: 768px) {
    margin-top: 15px;
  }
`
