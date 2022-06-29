import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projects: [
    {
      id: uuidv4(),
      title: "Dev Pomodoro",
      category: "Nuxt",
      img: "/images/dev-pomodoro/preview-1.png",
      publishDate: "Abril 15, 2022",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Desenvolver uma aplicação para realizar a técnica de pomodoro",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Link do site",
      projectImages: [
        {
          id: uuidv4(),
          title: "Dev Pomodoro",
          img: "/images/dev-pomodoro/preview-1.png",
        },
        {
          id: uuidv4(),
          title: "Dev Pomodoro",
          img: "/images/dev-pomodoro/preview-2.png",
        },
      ],
      technologies: ["Nuxtjs", "vuex", "typescript", "Jest", "Tailwind CSS"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Este projeto tem como objetivo proporcionar o dev a utilizar a técnica de pomodoro para melhorar a produtividade e foco, além disso incluindo um sistema de experiência com desafios para ir avançando de nível conforme completa os ciclos realizados.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/dev-pomodoro",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Nuxtbnb",
      category: "Nuxt",
      img: "/images/nuxtbnb/nuxtbnb.png",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "O objetivo desse projeto foi desenvolver um clone do airbnb pronto para produção.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "Nuxtbnb",
          img: "/images/nuxtbnb/nuxtbnb-1.png",
        },
        {
          id: uuidv4(),
          title: "Nuxtbnb",
          img: "/images/nuxtbnb/nuxtbnb-2.png",
        },
        {
          id: uuidv4(),
          title: "Nuxtbnb",
          img: "/images/nuxtbnb/nuxtbnb-3.png",
        },
        {
          id: uuidv4(),
          title: "Nuxtbnb",
          img: "/images/nuxtbnb/nuxtbnb-4.png",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "Algolia",
        "Jest",
        "Google maps",
        "Nodejs",
        "Stripe",
        "Vuex",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "O nuxtbnb foi um projeto desenvolvido dentro do treinamento mastering nuxt, com o objetivo de explorar os melhores e modernos recursos que o framework nuxtjs tem para oferecer para os desenvolvedores, além disso utilizando tecnologias de pagamento, armazenamento de dados e mapas para trazer uma experiência muito semelhante ao airbnb.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/NuxtBnB",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "NLW Heat Vue",
      category: "Vue",
      img: "/images/nlw7/cover.png",
      publishDate: "Jan 05, 2022",
      tag: "Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Reproduzir o projeto da NLW 7 utilizando o ecosistema vuejs.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "NLW Heat Vue",
          img: "/images/nlw7/cover.png",
        },
      ],
      technologies: ["vue3", "vitejs", "composition api"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "O projeto NLW Heat foi desenvolvido inspirado na next level week da rocketseat desenvolvido originalmente com react, decidi reproduzir o mesmo projeto porém utilizando o VueJs 3 com composition API e Vite.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/nlw-heat-vue",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Gravador de tela com vuejs",
      category: "Vue",
      img: "/images/screen-record/screen-recorder.png",
      publishDate: "Jan 24, 2022",
      tag: "Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Conseguir capturar a tela do computador utilizando javascript e vuejs.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "Screen Record",
          img: "/images/screen-record/screen-recorder.png",
        },
      ],
      technologies: ["vue3", "vitejs", "composition api"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Esse projeto é um gravador de tela e áudio desenvolvido utilizando vue 3, utilizando a API de captura de mídia e a API de gravaçāo de audio e vídeo, além disso dando a possibilidade de realizar o download do arquivo.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/screen-recorder-vue3",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Ibook",
      category: "Nuxt",
      img: "/images/ibook/ibook-1.png",
      publishDate: "Jan 24, 2022",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails: "Desenvolver uma bibilhoteca online.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "Ibook",
          img: "/images/ibook/ibook-1.png",
        },
        {
          id: uuidv4(),
          title: "Screen Record",
          img: "/images/ibook/ibook-2.png",
        },
      ],
      technologies: ["nuxtjs", "typescript"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "O Ibook é uma bibilhoteca de livros online, onde você encontra uma grande diversidade de livros para você ler, compartilhar com os amigos e se divertir, o sistema foi feito usando Atomic Design e NuxtJs.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/iBook",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Gabriel website v1",
      category: "Nuxt",
      img: "/images/gabrielcaiana-v1/website-1.png",
      publishDate: "set 14, 2021",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Desenvolver meu website para documentar projetos e experimentar novas tecnologias.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "gabrielcaiana website v1",
          img: "/images/gabrielcaiana-v1/website-1.png",
        },
        {
          id: uuidv4(),
          title: "gabrielcaiana website v1",
          img: "/images/gabrielcaiana-v1/website-2.png",
        },
        {
          id: uuidv4(),
          title: "gabrielcaiana website v1",
          img: "/images/gabrielcaiana-v1/website-3.png",
        },
        {
          id: uuidv4(),
          title: "gabrielcaiana website v1",
          img: "/images/gabrielcaiana-v1/website-4.png",
        },
      ],
      technologies: ["nuxtjs", "nuxt content", "typescript", "vuex", "algolia"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Este é o meu site que eu construí em NuxtJS. Eu o uso como meu playground para experimentar coisas novas e me divertir. Sinta-se à vontade para dar uma olhada e copiar o que quiser, pois o código é de código aberto, então, se isso o ajudar, ótimo.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/myWebSite",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Gym Manager",
      category: "HTML/CSS/JS",
      img: "/images/gym-manager/gym-1.png",
      publishDate: "set 03, 2020",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Desenvolver o projeto do bootcamp launchbase - controle de academia",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "gym manager",
          img: "/images/gym-manager/gym-1.png",
        },
        {
          id: uuidv4(),
          title: "gym manager",
          img: "/images/gym-manager/gym-2.png",
        },
      ],
      technologies: [
        "HTML5",
        "Nunjucks",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Nodemon",
        "PostgreSQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Projeto realizado no Bootcamp LaunchBase da Rocketseat, foi utilizado o banco de dados PostgreSQL, A aplicação consiste em fazer o cadastro de instrutores e membros, aonde eles possam editar os dados e deletar o perfil, cada perfil cadastrado é listado na página principal, aonde é também possível fazer um filtro para buscar alguns perfis cadastrado.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/GymManager",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Sampa eventos",
      category: "Nuxt",
      img: "/images/sampa-events/sampa-1.png",
      publishDate: "jun 15, 2021",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails: "Desenvolver um portal de eventos",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "Sampa eventos",
          img: "/images/sampa-events/sampa-1.png",
        },
        {
          id: uuidv4(),
          title: "Sampa eventos",
          img: "/images/sampa-events/sampa-2.png",
        },
        {
          id: uuidv4(),
          title: "Sampa eventos",
          img: "/images/sampa-events/sampa-3.png",
        },
        {
          id: uuidv4(),
          title: "Sampa eventos",
          img: "/images/sampa-events/sampa-4.png",
        },
      ],
      technologies: ["Node.js", "Adonis", "CSS3", "Nuxt"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "O sampa eventos é um portal fictício onde você pode encontrar e cadastrar eventos em São Paulo.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/Sampa-Eventos",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Jogo da memória",
      category: "HTML/CSS/JS",
      img: "/images/memory-game/memory-game-1.png",
      publishDate: "jun 15, 2021",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails: "Desenvolver um jogo da memória com javascript",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Repositório no github",
      projectImages: [
        {
          id: uuidv4(),
          title: "Jogo da memória",
          img: "/images/memory-game/memory-game-1.png",
        },
      ],
      technologies: ["HTML", "CSS3", "Javascript"],
      projectDetails: [
        {
          id: uuidv4(),
          details: "É um jogo de cartas, para testar a memória do jogador.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "https://github.com/gabrielcaiana/Jogo-da-memoria",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Biobe",
      category: "Nuxt",
      img: "/images/biobe/biobe-1.png",
      publishDate: "jul 24, 2021",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails: "Desenvolver um site institucional para a biobe.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Link do site",
      projectImages: [
        {
          id: uuidv4(),
          title: "Biobe",
          img: "/images/biobe/biobe-1.png",
        },
        {
          id: uuidv4(),
          title: "Biobe",
          img: "/images/biobe/biobe-2.png",
        },
        {
          id: uuidv4(),
          title: "Biobe",
          img: "/images/biobe/biobe-3.png",
        },
        {
          id: uuidv4(),
          title: "Biobe",
          img: "/images/biobe/biobe-4.png",
        },
      ],
      technologies: ["Nuxtjs", "HTML5", "CSS3"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "A biobe nasceu da sensibilidade e experiência no mercado dito “tradicional”, percebendo que muitos processos podem ser mais bem estruturados e transparentes em benefício do cliente.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "website",
          icon: "layout",
          url: "https://biobe.com.br/",
        },
        {
          id: uuidv4(),
          name: "website",
          icon: "layout",
          url: "https://dev-pomodoro.gabrielcaiana.com/",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Gabriel Website Admin",
      category: "Vue",
      img: "/images/gabrielcaiana-website-admin/admin-1.png",
      publishDate: "fev 22, 2022",
      tag: "UI / Frontend",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Desenvolver um sistema para gerir as informações para meu website.",
      techTitle: "Ferramentas e tecnologias",
      detailsTitle: "Desafio",
      socialTitle: "Link do site",
      projectImages: [
        {
          id: uuidv4(),
          title: "Gabriel website admin",
          img: "/images/gabrielcaiana-website-admin/admin-1.png",
        },
      ],
      technologies: ["Vuejs", "Pinia", "Sentry", "Vitejs", "Tailwind CSS"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "este projeto é responsável por publicar, editar e deletar conteúdo do meu site pessoal, além de ser um playground onde gosto de experimentar coisas novas relacionadas ao ecossistema vuejs.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Github",
          icon: "github",
          url: "",
        },
      ],
    },
  ],
  clients: [
    {
      id: uuidv4(),
      title: "Petlove",
      img: "../brands/petlove.png",
    },
    {
      id: uuidv4(),
      title: "OnClass",
      img: "../brands/onclass.png",
    },
    {
      id: uuidv4(),
      title: "I4pro",
      img: "../brands/i4pro.png",
    },
    {
      id: uuidv4(),
      title: "Signa Consultoria e sistemas",
      img: "../brands/signa.png",
    },
    {
      id: uuidv4(),
      title: "AGB Computadores",
      img: "../brands/agb.png",
    },
    {
      id: uuidv4(),
      title: "Freelance",
      img: "../brands/freelancer.png",
    },
  ],
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/gabrielcaiana",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/gabrielgueedes",
    },
    {
      id: uuidv4(),
      name: "Medium",
      icon: "book",
      url: "https://medium.com/@gabrielcaianaguedes",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/gabriel.caiana",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com/in/gabrielcaiana",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "nuxt",
      name: "Nuxt",
    },
    {
      id: uuidv4(),
      value: "vue",
      name: "Vue",
    },
    {
      id: uuidv4(),
      value: "html",
      name: "HTML/CSS/JS",
    },
    {
      id: uuidv4(),
      value: "react",
      name: "React",
    },
    {
      id: uuidv4(),
      value: "next",
      name: "Next",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};
