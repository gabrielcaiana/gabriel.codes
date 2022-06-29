<template>
  <transition name="fade">
    <div
      v-show="isScrolled"
      class="transition duration-500 transform hover:scale-110 rounded-full cursor-pointer flex p-2 bg-green-400 hover:bg-green-500 text-white items-center hover:shadow-sm border-none ring-none outline-none"
      @click="backToTop"
    >
      <BaseIcon name="chevron-up" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      userScrollPosition: 0,
    }
  },
  computed: {
    isScrolled() {
      return this.userScrollPosition > 100
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScrollPosition)
  },
  methods: {
    updateScrollPosition() {
      this.userScrollPosition = window.scrollY
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
