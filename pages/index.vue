<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid :projects="projects" />

    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projetos"
        class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-green-400 hover:bg-green-500 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        aria-label="Ver mais projetos"
      >
        <AppButton title="Ver mais projetos" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',

  async asyncData({ $api }) {
    const projects = await $api.getProjects()
    return {
      projects,
    }
  },
}
</script>
