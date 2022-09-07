<template>
  <div class="flex-col md:flex-row flex">
    <img
      :src="`${$config.apiURL}${experience.cover.data[0].attributes.url}`"
      :alt="experience.title"
      class="w-24 h-24 rounded-lg mb-8 cursor-pointer"
    />

    <div class="m-0 md:mx-4">
      <span class="text-white text-xl font-medium block">
        {{ experience.title }}</span
      >
      <span class="text-white text-body font-regular block">{{
        experience.company
      }}</span>
      <span class="text-gray-400 text-sm font-regular block">{{
        experience.period
      }}</span>
      <p class="text-white text-body font-regular my-2">
        {{ experience.description }}
      </p>
    </div>
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

  mounted() {
    console.log(this.experience)
  },
}
</script>
