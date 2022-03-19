import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projetos",
  projectsDescription: "Alguns dos projetos que concluí com sucesso",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Google Health Platform",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/gabrielgueedes",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/gabrielcaiana",
        },
      ],
    },
  ],
  clientsHeading: "Algumas das empresas com quem trabalhei",
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
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Sou um desenvolvedor de software de 25 anos, trabalho com tecnologias como (Javascript, Typescript, Vue, Nuxt, Vuex, Pinia, Jest, GraphQL, Storybook, Vite, Vuetify, Tailwind, Node, Cypress), amo construir aplicações web utilizando o ecosistema do VueJS, sempre focado em entregar uma boa experiência para os usuários seguindo as melhores práticas de UI/UX.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
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
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
