<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        Projetos
      </p>
    </div>

    <div class="mt-8 sm:mt-10">
      <h3
        class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        Pesquise projetos por título ou filtre por categoria
      </h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <AppIcon
              class="text-ternary-dark dark:text-ternary-light"
              name="search"
            />
          </span>
          <input
            id="name"
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            name="name"
            type="search"
            required=""
            placeholder="Pesquisar projeto"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter
          :select-options="categories"
          @change="selectedProject = $event"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projetos/${project.attributes.slug}`">
          <div v-if="project.attributes.cover.data">
            <img
              :src="`${$config.apiURL}${project.attributes.cover.data.attributes.url}`"
              :alt="project.attributes.title"
              class="rounded-t-xl h-40 w-full border-none object-cover"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
              class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ project.attributes.title }}
            </p>
            <span
              class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
              >{{ project.attributes.categorie }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProjectsGrid',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {
      selectedProject: '',
      searchProject: '',
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories',
    }),

    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory()
      } else if (this.searchProject) {
        return this.filterProjectsBySearch()
      }

      if (this.$route.name === 'index') {
        return this.projects.slice(0, 6)
      }
      return this.projects
    },
  },

  mounted() {
    console.log(this.projects)
  },

  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        const category =
          item.attributes.categorie.charAt(0).toUpperCase() +
          item.attributes.categorie.slice(1)
        return category.includes(this.selectedProject.charAt(0).toUpperCase())
      })
    },
    filterProjectsBySearch() {
      const project = new RegExp(this.searchProject, 'i')
      return this.projects.filter((el) => el.attributes.title.match(project))
    },
  },
}
</script>
