<template>
  <div class="container mx-auto">
    <div class="w-full flex justify-center items-center mt-10">
      <h1 class="dark:text-white text-gray-500 text-xl">Em breve</h1>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'Leia os artigos que já escrevi'},
      ],
    link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path
        }
      ]
    }
  },
};
</script>
