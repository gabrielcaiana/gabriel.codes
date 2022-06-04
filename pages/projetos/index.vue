<template>
  <div class="container mx-auto">
    <ProjectsGrid />
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  head() {
    return {
      title: 'Projetos',
      meta: [
        { hid: 'description', name: 'description', content: 'veja alguns dos projetos que já desenvolvi'},
      ]
    }
  },
};
</script>
