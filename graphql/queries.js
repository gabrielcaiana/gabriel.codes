import { gql } from 'graphql-tag'

export const projectsQuerie = () => gql`
  {
    projects {
      data {
        id
        attributes {
          title
          description
          categorie
          objective
          cover {
            data {
              id
              attributes {
                name
                alternativeText
                url
              }
            }
          }
          images {
            data {
              id
              attributes {
                name
                alternativeText
                url
              }
            }
          }
          links
          technologies
          slug
          author {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`
