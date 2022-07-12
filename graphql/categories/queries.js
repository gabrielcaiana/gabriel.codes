import { gql } from 'graphql-tag'

export const CategoriesQuerie = () => gql`
  {
    categories {
      data {
        id
        attributes {
          name
          value
          slug
        }
      }
    }
  }
`
