<template>
  <div class="container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5"
        >
          Siga-me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.attributes.url"
            target="__blank"
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
          >
            <AppIcon
              :name="social.attributes.icon"
              class="w-6 sm:w-8 h-6 sm:h-8"
            />
          </a>
        </ul>
      </div>
      <div class="flex justify-center items-center text-center">
        <div
          class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
        >
          &copy; {{ new Date().getFullYear() }}.
          <a
            href="https://github.com/gabrielcaiana"
            target="__blank"
            class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
            >Portfolio</a
          >
          . Developed by
          <a
            href="https://gabrielcaiana.com"
            target="__blank"
            class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
            >Gabriel Caiana</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',

  data() {
    return {
      socialProfiles: [],
    }
  },

  async mounted() {
    const socialProfiles = await this.$api.getSocials()
    this.socialProfiles = socialProfiles
  },
}
</script>
