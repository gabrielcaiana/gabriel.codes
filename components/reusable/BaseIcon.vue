<template>
  <div v-on="$listeners">
    <i :height="size" :width="size" :data-feather="name" :stroke="color"></i>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "white",
    },
    size: {
      type: String,
      default: "24",
    },
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
