<template>
  <div class="container mx-auto">
    <pre>{{ project }}</pre>
    <!-- <div v-if="project"> -->
      <!-- <div>
        <p
          class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-14
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <BaseIcon
              name="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            />

            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <BaseIcon
              name="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            />
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            @click="showProjectImageDialog(projectImage.img)"
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
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
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.objectivesTitle }}
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.objectivesDetails }}
            </p>
          </div>

          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.techTitle }}
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.technologies.join(", ") }}
            </p>
          </div>

          <div>
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.socialTitle }}
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a
                v-for="social in project.socialSharings"
                :key="social.id"
                :href="social.url"
                target="__blank"
                aria-label="Share Project"
                class="
                  bg-ternary-light
                  dark:bg-ternary-dark
                  text-gray-400
                  hover:text-primary-dark
                  dark:hover:text-primary-light
                  p-2
                  rounded-lg
                  shadow-sm
                  duration-500
                "
              >
                <BaseIcon :name="social.icon" class="w-4 lg:w-5 h-4 lg:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            "
          >
            {{ project.detailsTitle }}
          </p>
          <p
            v-for="projectDetail in project.projectDetails"
            :key="projectDetail.id"
            class="
              font-general-regular
              mb-5
              text-lg text-ternary-dark
              dark:text-ternary-light
            "
          >
            {{ projectDetail.details }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div> -->
  </div>
</template>

<script>
import BaseIcon from "@/components/reusable/BaseIcon.vue";
import AppModal from "@/components/shared/AppModal.vue";

export default {
  scrollToTop: true,
  components: { BaseIcon, AppModal },

  head() {
    return {
      title: this.project?.title,
      meta: [
        { hid: 'description', name: 'description', content: this.project?.projectDetails?.details},
        { name: 'twitter:title', content: this.project?.title},
        { name: 'twitter:description', content: this.project?.projectDetails[0].details},
        { name: 'twitter:image', content: this.project?.projectImages[0].img},  
        { name: 'twitter:card', content: 'summary_large_image'},
        { hid: 'og-title', property: 'og:title', content:  this.project?.title},
        { hid: 'og-desc', property: 'og:description', content: this.project?.projectDetails[0].details },
        { hid: 'og-image', property: 'og:image', content: this.project?.projectImages[0].img},
        { hid: 'og-url', property: 'og:url', content: `https://gabrielcaiana.com/projetos/${this.project?.id}` } 
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path
        }
      ]
    }
  },

  data: () => ({
    dialogImage: null,
  }),

  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },

  mounted() {
    console.log(this)
  },

  methods: {
    showProjectImageDialog(image) {
      this.dialogImage = image;
      this.$nuxt.$emit("dialogProjectImage");
    },
  },
};
</script>
