import { gql } from 'graphql-tag'

export const SocialQuerie = () => gql`
  {
    socials {
      data {
        id
        attributes {
          name
          icon
          url
          slug
        }
      }
    }
  }
`
