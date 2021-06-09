import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  overflow-x: auto;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  text-align: center;

  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  div.special{
    ${props => !props.featured && css`
      display: none
    `}
  }

  @media (min-width: 381px) {
    padding: 15px;
  }
`
