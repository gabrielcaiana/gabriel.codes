<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        :src="`${$config.apiURL}/uploads/profile_pic_2_bbd6e2c7c4.png?updated_at=2022-09-06T19:18:46.898Z`"
        class="rounded-lg w-96"
        alt=""
      />
    </div>
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        Sou um desenvolvedor de software de 25 anos, trabalho com tecnologias
        como (Javascript, Typescript, Vue, Nuxt, Vuex, Pinia, Jest, GraphQL,
        Storybook, Vite, Vuetify, Tailwind, Node, Cypress), amo construir
        aplicações web utilizando o ecosistema do VueJS, sempre focado em
        entregar uma boa experiência para os usuários seguindo as melhores
        práticas de UI/UX.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>
