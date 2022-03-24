<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <div v-if="headerVersion" class="w-full bg-green-500">
      <p class="text-white text-center">
        Você está visualizando a nova versão do meu site, caso deseje visitar a
        antiga
        <a
          class="underline-offset-1 font-bold"
          href="https://v1.gabrielcaiana.com"
          >clique aqui</a
        >
      </p>
    </div>

    <!-- App header -->
    <AppHeader />

    <!-- Render contents with transition -->
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>

    <!-- App footer -->
    <AppFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      "
    >
      <BackToTop />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";
export default {
  data: () => {
    return {};
  },

  computed: {
    headerVersion() {
      return this.$route.name === "index";
    },
  },

  mounted() {
    feather.replace();
  },
  components: { AppFooter, BackToTop, AppHeader },
};
</script>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-green-400 hover:bg-green-500 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
