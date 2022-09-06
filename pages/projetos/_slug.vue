<template>
  <div class="container mx-auto">
    <div v-if="project">
      <div>
        <p
          class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <AppIcon
              name="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            />

            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ shortDate(project.createdAt) }}</span
            >
          </div>
          <div class="flex items-center">
            <AppIcon
              name="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            />
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          v-for="projectImage in project.images.data"
          :key="projectImage.id"
          class="mb-10 sm:mb-0"
        >
          <img
            :src="`${$config.apiURL}${projectImage.attributes.url}`"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            @click="
              showProjectImageDialog(
                `${$config.apiURL}${projectImage.attributes.url}`
              )
            "
          />
        </div>
      </div>

      <AppModal>
        <img
          :src="dialogImage"
          class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        />
      </AppModal>

      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <div class="w-full sm:w-1/3 text-left">
          <div class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              Objetivo
            </p>
            <p
              class="font-general-regular text-primary-dark dark:text-ternary-light"
            >
              {{ project.objective }}
            </p>
          </div>

          <div class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              Tecnologias
            </p>
            <p
              class="font-general-regular text-primary-dark dark:text-ternary-light"
            >
              {{ project.technologies.join(', ') }}
            </p>
          </div>

          <div>
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              Links
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a
                v-for="(social, index) in project.links"
                :key="index"
                :href="social.url"
                target="__blank"
                aria-label="Share Project"
                class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
              >
                <AppIcon :name="social.icon" class="w-4 lg:w-5 h-4 lg:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
          >
            Descrição
          </p>
          <p
            class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>Nenhum projeto encontrado</h1>
    </div>
  </div>
</template>

<script>
import socialMeta from '@/utils/social-meta'
import { shortDate } from '@/utils/shortDate'
export default {
  async asyncData({ $api, params }) {
    const project = await $api.getProject(params.slug)
    return {
      project: project.attributes,
    }
  },

  data: () => ({
    dialogImage: null,
  }),
  head() {
    return {
      title: this.project?.title,
      meta: [...this.meta],
      link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path,
        },
      ],
    }
  },

  computed: {
    meta() {
      const data = {
        title: this.project?.title,
        description: this.project?.description,
        img: `${this.$config.apiURL}${this.project?.images.data[0].attributes.url}`,
        url: `https://gabrielcaiana.com/projetos/${this.project?.slug}`,
      }

      return socialMeta(data)
    },
  },

  methods: {
    shortDate,
    showProjectImageDialog(image) {
      this.dialogImage = image
      this.$nuxt.$emit('dialogProjectImage')
    },
  },
}
</script>
