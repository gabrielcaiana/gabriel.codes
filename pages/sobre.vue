<template>
  <div>
    <AboutMe class="container mx-auto" />
    <AboutClients class="container mx-auto" />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "About",
  scrollToTop: true,
  head() {
    return {
      title: 'Sobre',
      meta: [
        { hid: 'description', name: 'description', content: 'Conheça um pouco mais sobre minha jornada como desenvolvedor'},
      ]
    }
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
