import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }
`

export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  margin-bottom: 20px;

  img,
  div {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }

  @media (min-width: 992px) {
    width: 90px;
    height: 90px;
  }
`
export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`
export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
  }

  svg {
    width: 45px;
    height: 45px;
  }
`

export const ProfileContent = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 91%;
`
