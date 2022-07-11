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

export const projectSlugQuerie = () => gql`
  query($slug: String, $publicationState: String, $modelName: String) {
    findSlug(
      slug: $slug,
      publicationState: $publicationState,
      modelName: $modelName,
    ) {
      ...on ProjectEntityResponse {
        data {
          id
          attributes {
            title
            description
            categorie
            objective
            tag
            cover {
              data {
                attributes {
                  url
                }
              }
            }
            links
            technologies
            author {
              data {
                attributes {
                  username
                }
              }
            }
            images {
              data {
                id
                attributes {
                  url
                }
              }
            }
            createdAt
            updatedAt
            publishedAt
          }
        }
      }
    }
  }
`
