<template>
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Formulário de contato
      </p>
      <form
        ref="form"
        class="font-general-regular space-y-7"
        @submit.prevent="sendForm"
      >
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Nome</label
          >
          <input
            id="user_name"
            v-model="form.name"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            name="user_name"
            type="text"
            required=""
            placeholder="Digite seu nome"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            id="user_email"
            v-model="form.email"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            name="user_email"
            type="text"
            required=""
            placeholder="Digite seu email"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Assunto</label
          >
          <input
            id="user_subject"
            v-model="form.subject"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            name="user_subject"
            type="text"
            required=""
            placeholder="Digite o assunto"
            aria-label="assunto"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Mensagem</label
          >
          <textarea
            id="message"
            v-model="form.message"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            name="message"
            cols="14"
            rows="6"
            aria-label="Mensagem"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Enviar mensagem"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-green-400
              hover:bg-green-500
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Enviar mensagem"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: 'ContactForm',
  data: () => {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },

  methods: {
    async sendForm() {
      const { serviceId, templateId1, userId } = this.$config.emailjs;

      try {
        this.$nuxt.$loading.start();
        // eslint-disable-next-line import/no-named-as-default-member
        const result = await emailjs.sendForm(
          serviceId,
          templateId1,
          this.$refs.form,
          userId
        );
        console.log("SUCCESS!", result.text);
      } catch (error) {
        console.log("FAILED...", error.text);
      } finally {
        this.$nuxt.$loading.finish();
        this.form = {};
      }
    },
  },
};
</script>
