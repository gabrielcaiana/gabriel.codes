import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  socialProfiles: [
    {
      id: uuidv4(),
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/gabrielcaiana',
    },
    {
      id: uuidv4(),
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/gabrielgueedes',
    },
    {
      id: uuidv4(),
      name: 'Medium',
      icon: 'book',
      url: 'https://medium.com/@gabrielcaianaguedes',
    },
    {
      id: uuidv4(),
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/gabriel.caiana',
    },
    {
      id: uuidv4(),
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/gabrielcaiana',
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: 'nuxt',
      name: 'Nuxt',
    },
    {
      id: uuidv4(),
      value: 'vue',
      name: 'Vue',
    },
    {
      id: uuidv4(),
      value: 'html',
      name: 'HTML/CSS/JS',
    },
    {
      id: uuidv4(),
      value: 'react',
      name: 'React',
    },
    {
      id: uuidv4(),
      value: 'next',
      name: 'Next',
    },
  ],
})
