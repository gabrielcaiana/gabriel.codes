<template>
  <i
    :height="size"
    :width="size"
    :data-feather="name"
    :class="$attrs.class"
  ></i>
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
