# `astro-nebula-ui`

A collection of customized UI components for Astro and Starlight projects with built-in Starlight theme support.

## Installation

```bash
npm install astro-nebula-ui
```

## Quick Start

Import and use components in your Astro files:

```astro
---
import { Callout, BentoGrid, BentoCard } from 'astro-nebula-ui';
---

<Callout type="info">
  This is an info callout!
</Callout>

<BentoGrid>
  <BentoCard title="Feature 1" description="Amazing feature description" />
  <BentoCard title="Feature 2" description="Another great feature" />
</BentoGrid>
```

## Components

- **Callout** - Styled callout boxes with different types
- **NeoCallout** - Modern callout component with enhanced styling
- **BentoGrid** - Responsive grid layout for card collections
- **BentoCard** - Individual cards for bento grid layouts
- **CollapsiblePanel** - Expandable content panels
- **CheatSheet** - Reference sheets for quick information
- **CheatsheetCard** - Individual cards for cheat sheets
- **LearningObjectives** - Educational content structuring
- **NebulaSlider** - Image/content slider component
- **TextScaler** - Text scaling utility component
- **TelescopeProvider** - Context provider for telescope functionality

### Starlight Integration

For Starlight projects, the components automatically inherit your Starlight theme configuration and styling.

## Package

If you are looking for the Starlight plugin package, you can find it in the [`packages/astro-nebula-ui/`](/packages/astro-nebula-ui/) directory.

## Project structure

This project uses pnpm workspaces to develop a single Starlight plugin from the `packages/astro-nebula-ui/` directory. A Starlight documentation site is also available in the `docs/` directory that is also used for testing and demonstrating the Starlight plugin.

## License

Licensed under the MIT License, Copyright © frostybee.

See [LICENSE](https://github.com/frostybee/astro-nebula-ui/blob/main/LICENSE) for more information.
