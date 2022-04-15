<template>
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
  >
    <NuxtLink
      to="/projects"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Projetos</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="About Me"
      >Sobre mim</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="Contact"
      >Contato</NuxtLink
    >
    <NuxtLink
      to="/blog"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="blog"
      >Blog</NuxtLink
    >
    <div
      class="
        font-general-regular
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
    >
      <button
        class="
          sm:hidden
          block
          text-left text-md
          bg-green-400
          hover:bg-green-500
          text-white
          shadow-sm
          rounded-md
          px-4
          py-2
          mt-2
        "
        @click="showModal()"
        aria-label="Fale comigo Button"
      >
        Fale comigo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen", "showModal", "modal", "categories"],
};
</script>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-green-400 dark:text-green-400;
}
</style>
