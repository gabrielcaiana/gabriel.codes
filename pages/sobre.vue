<template>
  <div>
    <AboutMe class="container mx-auto" />
    <AboutClients class="container mx-auto" />
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: 'Sobre',
      meta: [
        { hid: 'description', name: 'description', content: 'Conheça um pouco mais sobre minha jornada como desenvolvedor'},
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path
        }
      ]
    }
  }
};
</script>
