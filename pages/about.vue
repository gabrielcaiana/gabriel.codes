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
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
