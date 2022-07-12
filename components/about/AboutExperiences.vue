<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      Algumas das empresas em que trabalhei
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-6 mt-10 sm:mt-14 gap-2">
      <AboutExperienceSingle
        v-for="experience in experiences"
        :key="experience.id"
        class="experiencie"
        :experience="experience.attributes"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutExperiences',

  props: {
    experiences: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style lang="css" scoped>
.experiencie {
  filter: grayscale(100%);
  transition: all 300ms;
}
.experiencie:hover {
  filter: grayscale(0);
}
</style>
