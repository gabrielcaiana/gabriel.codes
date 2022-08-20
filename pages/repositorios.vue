<template>
  <div class="container mx-auto">
    <div class="w-full flex justify-center items-center mt-10">
      <h1 class="dark:text-white text-gray-500 text-xl">Listar repositorios</h1>

      <span v-if="!list">loading...</span>
      <pre v-else class="text-white">{{ list }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRepositories',

  data() {
    return {
      list: []
    }
  },

  mounted() {
    this.getRepositories()
  },
  

  methods: {
    async getRepositories() {
      const res = await window.fetch('/github/repos?page=1&per_page=10', {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await res.json()
      this.list = result
    }
  }
}
</script>