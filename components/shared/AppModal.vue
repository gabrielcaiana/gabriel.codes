<template>
  <div class="w-screen h-screen bg from-slate-200">
    <div class="w-auto h-auto relative">
      <BaseIcon class="absolute right-0 top-4" name="x" />
      <slot />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/reusable/BaseIcon.vue";
export default {
  name: "AppModal",

  components: {
    BaseIcon,
  },
};
</script>
