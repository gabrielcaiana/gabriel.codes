<template>
  <select
    :id="select"
    :name="select"
    class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    @change="$emit('change', $event.target.value)"
  >
    <option value class="text-sm sm:text-md">Todos projetos</option>
    <option
      v-for="option in selectOptions"
      :key="option.name"
      :value="option.name"
      class="sm:text-md"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: 'projects',
    },
    selectOptions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
