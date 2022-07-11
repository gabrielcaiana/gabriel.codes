import { projectsQuerie } from '~/graphql/queries'

export default function ({ app }, inject) {
  const client = app.apolloProvider.defaultClient

  const getProjects = async () => {
    const { data } = await client.query({
      query: projectsQuerie(),
    })

    return data?.projects.data
  }

  inject('api', {
    getProjects,
  })
}
