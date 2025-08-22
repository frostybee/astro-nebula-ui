import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://frostybee.github.io/astro-nebula-ui',
  base: '/astro-nebula-ui',
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/astro-nebula-ui/edit/main/docs/',
      }, 
      // components: {
      //   Head: './src/components/TelescopeClient.astro',
      // },
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
              label: 'Bento',
              autogenerate: { directory: 'components/bento' }
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
        { href: 'https://github.com/frostybee/astro-nebula-ui', icon: 'github', label: 'GitHub' },
      ],
      title: 'astro-nebula-ui',
    }),
  ],
})
