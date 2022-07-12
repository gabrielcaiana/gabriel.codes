<template>
  <div>
    <img
      :src="`${$config.apiURL}${experience.cover.data[0].attributes.url}`"
      :alt="experience.title"
      class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
    />
  </div>
</template>

<script>
export default {
  name: 'AboutExperienceSingle',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
}
</script>
