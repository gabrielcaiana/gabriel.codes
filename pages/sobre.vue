<template>
  <div>
    <AboutMe class="container mx-auto" />
    <AboutExperiences :experiences="experiences" class="container mx-auto" />
  </div>
</template>

<script>
export default {
  name: 'AppAbout',
  
  async asyncData({ $api }) {
    const experiences = await $api.getExperiences()
    return {
      experiences
    }
  },
  
  head() {
    return {
      title: 'Sobre',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Conheça um pouco mais sobre minha jornada como desenvolvedor',
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
