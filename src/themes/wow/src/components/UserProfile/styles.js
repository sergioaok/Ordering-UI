import styled, { css } from 'styled-components'
import { Image } from '../../../../../components/Image'

export const Container = styled.div`
  width: 91%;
  margin: 25px auto;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`

export const ProfileSidebar = styled.div`
  @media (min-width: 992px) {
    width: 300px;
  }
`

export const ProfileSidebarInnerContainer = styled.div`
  @media (min-width: 992px) {
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
    border-radius: 15px;
  }
`

export const Header = styled.div`
  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors?.primary};
    font-size: 24px;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }

  > p {
    display: flex;
  }

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    margin: 0px;
    padding: 0px 15px;
  }

  @media (min-width: 992px) {
    box-shadow: none;
    border-radius: unset;
  }
`

export const UserHeaderInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 15px;
    color: ${props => props.theme.colors?.grayColor};
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;
`

export const MyProfileInfo = styled.div`
  h2 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 992px) {
    box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);
    border-radius: 16px;

  }
`

export const MyProfileInnerContainer = styled.div`
  @media (min-width: 992px) {
    width: 80%;
    margin: 0px auto;
    padding: 30px 0;
  }
`

export const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #CCC;
  padding: 15px;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }

  p {
    margin: 0 15px;
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${props => props.theme.colors.primary};
      font-size: 14px;
    }
    span:last-child {
      color: ${props => props.theme.colors?.grayColor};
      font-size: 16px;
    }
  }
`

export const SavedPlaces = styled.div`
  > p {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
`

export const ProfileContent = styled.div`
  @media (min-width: 992px) {
    width: calc(100% - 320px);
  }
`

export const GuestProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 91%;
  margin: 20px auto;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    text-align: center;
  }

  img {
    max-width: 300px;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`
export const GoBackContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  svg {
    font-size: 30px;
  }
  span {
    margin: 0 10px;
    font-size: 20px;
  }
`

export const EidtProfile = styled.div`
  cursor: pointer;
`

export const EditProfileButton = styled.span`
  cursor: pointer;
  
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }
`

export const DropDownCircleImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 1000px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0;
  `}

  :last-child {
    ${props => props.theme?.rtl ? css`
        margin-left: 0;
    ` : css`
        margin-right: 0;
    `}
  }

  @media (min-width: 992px) {
    width: 90px;
    height: 90px;
  }
`
