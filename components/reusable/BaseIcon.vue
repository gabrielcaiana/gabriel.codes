<template>
  <div v-on="$listeners">
    <i
      :height="size"
      :width="size"
      :data-feather="name"
      :class="$attrs.class"
    ></i>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "BaseIcon",
  props: {
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
