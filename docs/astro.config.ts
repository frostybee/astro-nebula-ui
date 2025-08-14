import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/astro-galaxy-components/edit/main/docs/',
      },      
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
            },
            {
              label: 'UI Components',
              autogenerate: { directory: 'components/ui' }
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
