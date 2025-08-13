import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import astroGalaxyComponents from 'astro-galaxy-components'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/astro-galaxy-components/edit/main/docs/',
      },
      plugins: [astroGalaxyComponents()       ],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started'],
        },

        {
          label: 'Components',
          items: [
            {
              label: 'Callouts',
              autogenerate: { directory: 'components/Callouts' }
            },
            {
              label: 'Slide Viewer',
              autogenerate: { directory: 'components/slides' }
            }
          ]          
        }
      ],
      social: [
        { href: 'https://github.com/frostybee/astro-galaxy-components', icon: 'github', label: 'GitHub' },
      ],
      title: 'astro-galaxy-components',
    }),
  ],
})
