<template>
  <div class="container mx-auto">
    <ProjectsGrid :projects="projects" />
  </div>
</template>

<script>
export default {
  name: 'AppProjects',

  async asyncData({ $api }) {
    const projects = await $api.getProjects()
    return {
      projects,
    }
  },

  head() {
    return {
      title: 'Projetos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'veja alguns dos projetos que já desenvolvi',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path,
        },
      ],
    }
  },
}
</script>
