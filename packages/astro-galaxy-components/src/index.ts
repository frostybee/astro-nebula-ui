import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function astroGalaxyComponents(): StarlightPlugin {
  return {
    name: 'astro-galaxy-components',
    hooks: {
      'config:setup'({ logger }) {        
        logger.info('Hello from the astro-galaxy-components plugin!')
      },
    },
  }
}
