<template>
  <div class="container mx-auto">
      <span v-if="!list">loading...</span>
      <div class="flex flex-col gap-4 max-w-3xl m-auto mt-10">
       <h1
        class="font-general-semibold text-xl sm:text-3xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
        >
        Repositórios do github
      </h1>
        <div 
        v-for="item in list" 
        :key="item.id" 
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-6 text-white"
      >
        {{ item.name}}
      </div>
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