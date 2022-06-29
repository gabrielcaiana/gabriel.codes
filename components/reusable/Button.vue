<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      required: true
    }
  },
};
</script>
