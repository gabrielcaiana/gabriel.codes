<template>
  <transition name="fade-up-down">
    <div
      v-if="show"
      class="w-screen h-screen bg-gradient-to-t from-black z-10 fixed flex justify-center items-center top-0 left-0"
    >
      <div class="w-4/5 lg:w-2/4 relative">
        <div
          class="absolute -right-3 -top-3 bg-green-500 rounded-full p-2"
          @click="close"
        >
          <BaseIcon class="text-primary-light cursor-pointer" name="x" />
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',

  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.$nuxt.$on('dialogProjectImage', () => {
      this.show = true
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('dialogProjectImage')
  },

  methods: {
    close() {
      this.show = false
    },
  },
}
</script>

<style scoped>
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
</style>
