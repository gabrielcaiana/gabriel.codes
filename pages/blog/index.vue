<template>
  <div class="container mx-auto">
    <div class="w-full flex justify-center items-center mt-10">
      <h1 class="dark:text-white text-gray-500 text-xl">Disponível em breve</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBlog',
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Leia os artigos que já escrevi',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path,
        },
      ],
    }
  },
}
</script>
