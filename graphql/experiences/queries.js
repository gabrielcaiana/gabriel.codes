import { gql } from 'graphql-tag'

export const ExperiencesQuerie = () => gql`
  {
    experiences {
      data {
        id
        attributes {
          title
          slug
          company
          period
          description
          cover {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`
