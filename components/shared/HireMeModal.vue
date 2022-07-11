<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <div
        v-show="modal"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
        @click="showModal()"
      ></div>
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
              >
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  Qual projeto você está procurando?
                </h5>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click=";[showModal(), resetForm()]"
                >
                  <BaseIcon name="x" class="w-8 sm:w-12" />
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form
                  ref="form"
                  class="max-w-xl m-4 text-left"
                  @submit.prevent="sendForm"
                >
                  <div class="mt-0">
                    <input
                      id="user_name"
                      v-model="form.name"
                      class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      name="user_name"
                      type="text"
                      required=""
                      placeholder="Nome"
                      aria-label="Nome"
                    />
                  </div>
                  <div class="mt-6">
                    <input
                      id="user_email"
                      v-model="form.email"
                      class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      name="user_email"
                      type="text"
                      required=""
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-6">
                    <select
                      id="user_category"
                      v-model="form.category"
                      class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      name="user_category"
                      type="text"
                      required=""
                      aria-label="Categoria do projeto"
                    >
                      <option value="" disabled>Selecione uma categoria</option>
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.value"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="mt-6">
                    <textarea
                      id="message"
                      v-model="form.message"
                      class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Detalhes"
                      placeholder="Detalhes do projeto"
                    ></textarea>
                  </div>

                  <div class="mt-6 pb-4 sm:pb-1">
                    <Button
                      title="Enviar"
                      class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-green-400 hover:bg-green-500 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                      type="submit"
                      aria-label="Enviar formulário"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'HireMeModal',
  props: {
    showModal: {
      type: Function,
      default: () => false,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      form: {
        name: '',
        email: '',
        category: '',
        message: '',
      },
    }
  },
  methods: {
    async sendForm() {
      const { serviceId, templateId2, userId } = this.$config.emailjs

      try {
        this.$nuxt.$loading.start()
        // eslint-disable-next-line import/no-named-as-default-member
        const result = await emailjs.sendForm(
          serviceId,
          templateId2,
          this.$refs.form,
          userId
        )
        console.log('SUCCESS!', result.text)
      } catch (error) {
        console.log('FAILED...', error.text)
      } finally {
        this.$nuxt.$loading.finish()
        this.form = {}
      }
    },

    resetForm() {
      this.form = {}
    },
  },
}
</script>

<style>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
