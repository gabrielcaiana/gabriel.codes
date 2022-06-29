<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="
        font-general-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      "
    >
    Algumas das empresas com quem trabalhei
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-6 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        class="client"
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'AboutClients',
  computed: {
    ...mapState(["clientsHeading", "clients"]),
  },
};
</script>

<style lang="css" scoped>
.client {
  filter: grayscale(100%);
  transition: all 300ms;
}
.client:hover {
  filter: grayscale(0);
}
</style>
