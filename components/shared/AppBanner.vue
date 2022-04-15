<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Olá, sou o Gabriel
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        Desenvolvedor frontend e entusiasta de design.
      </p>
      <div class="flex justify-center sm:block">
        <nuxt-link
          to="/contact"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-green-400
            text-gray-500
            hover:text-white
            duration-500
          "
          aria-label="Contact me"
        >
          <BaseIcon
            name="arrow-right-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          />
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Fale comigo</span
          ></nuxt-link
        >
      </div>
    </div>

    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="this.$colorMode.value == 'dark'"
        src="~/static/developer-dark.svg"
        alt="Developer Dark"
      />
      <img v-else src="~/static/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<script>
import BaseIcon from "@/components/reusable/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
};
</script>
