<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ new Date().getFullYear() }}.
      <a
        href="https://github.com/gabrielcaiana"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >Portfolio</a
      >
      . Developed by
      <a
        href="https://gabrielcaiana.com"
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >Gabriel Caiana</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright'
};
</script>
