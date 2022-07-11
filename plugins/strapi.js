import { projectsQuerie, projectSlugQuerie } from '~/graphql/projects/queries'
import { ExperiencesQuerie } from '~/graphql/experiences/queries'

export default function ({ app }, inject) {
  const client = app.apolloProvider.defaultClient

  const getProjects = async () => {
    const { data } = await client.query({
      query: projectsQuerie(),
    })

    return data?.projects.data
  }

  const getProject = async (slug) => {
    const { data } = await client.query({
      query: projectSlugQuerie(),
      variables: {
        slug,
        publicationState: 'live',
        modelName: 'project',
      }
    })

    return data?.findSlug.data
  }

  const getExperiences = async () => {
    const { data } = await client.query({
      query: ExperiencesQuerie(),
    })

    return data?.experiences.data
  }

  inject('api', {
    getProjects,
    getProject,
    getExperiences
  })
}
