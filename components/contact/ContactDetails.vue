<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2
        class="
          font-general-medium
          text-2xl text-primary-dark
          dark:text-primary-light
          mt-8
          mb-8
        "
      >
        Informações de contato
      </h2>
      <ul class="font-general-regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <BaseIcon
            :name="contact.icon"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
          />

          <a
            href="#"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
            :class="
              contact.icon === 'mail' || contact.icon === 'phone'
                ? 'hover:underline cursor-pointer'
                : ''
            "
            aria-label="Website and Phone"
          >
            {{ contact.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetails',
  props: ["contacts"],
};
</script>
