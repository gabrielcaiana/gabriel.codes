<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        :src="`${$config.apiURL}/uploads/profile_pic_2_fe571b9cb5.png?updated_at=2022-09-07T10:54:29.703Z`"
        class="rounded-lg w-96"
        alt="Gabriel Caiana"
      />
    </div>
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        sou um desenvolvedor Frontend apaixonado por tecnologia e design. Sou
        formado em Análise e desenvolvimento de sistemas pela FIAP, além de
        possuir diversas formações de especialização em tecnologias de Frontend,
        Design e UX.
      </p>

      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        Adoro desenvolver aplicações aleatórias para experimentar novas
        tecnologias e arquiteturas de projeto, então fique a vontade para
        visitar meu Github e portfólio pois sempre estou me aventurando em um
        novo projeto.
      </p>

      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        Nos últimos anos trabalhei com diversas tecnologias, algumas que gosto
        bastante e fazem parte do meu dia a dia como desenvolvedor são
        (Javascript, Typescript, Vue, Nuxt, Vuex, Pinia, Jest, GraphQL,
        Storybook, Vite, Vuetify, Tailwind, Node).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>
