<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <ContactForm />
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
export default {
  name: 'AppContact',
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "São Paulo, Brasil",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "gabrielcaianaguedes@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "11 94987-5163",
          icon: "phone",
        },
      ],
    };
  },
  head() {
    return {
      title: 'Contato',
      meta: [
        { hid: 'description', name: 'description', content: 'Fale comigo por email ou por alguma rede social'},
      ],
    link: [
        {
          rel: 'canonical',
          href: 'https://gabrielcaiana.com' + this.$route.path
        }
      ]
    }
  },
};
</script>
