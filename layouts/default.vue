<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <AppHeader />

    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>

    <AppFooter />

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
  components: { AppFooter, BackToTop, AppHeader },
  computed: {
    headerVersion() {
      return this.$route.name === "index";
    },
  },
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
  animation: coming 0.5s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.5s;
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
