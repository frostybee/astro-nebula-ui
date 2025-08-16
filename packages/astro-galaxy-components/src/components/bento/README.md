# Bento Grid Components

Modern, auto-reorganizing grid layouts with container query support and automatic gap filling.

## Quick Start

```astro
---
import { AutoBentoGrid, BentoCard } from 'astro-galaxy-components';
---

<AutoBentoGrid size="md" dense={true}>
  <BentoCard title="Feature 1" size="medium">
    Content automatically reorganizes based on container size
  </BentoCard>
  
  <BentoCard title="Feature 2" size="large" priority={10}>
    High priority items are positioned first
  </BentoCard>
  
  <BentoCard title="Feature 3" colSpan={2}>
    Manual control still available with colSpan/rowSpan
  </BentoCard>
</AutoBentoGrid>
```

## Key Features

### ✅ **Automatic Reorganization**
- `grid-auto-flow: dense` fills gaps automatically
- Container queries adapt to any container size
- Content-aware sizing adjusts based on item content

### ✅ **Modern CSS Grid**
- `repeat(auto-fit, minmax())` for responsive columns
- Aspect ratio control with CSS `aspect-ratio`
- Priority-based positioning with CSS `order`

### ✅ **Flexible Components**
- **AutoBentoGrid**: Main container with auto-reorganization
- **BentoItem**: Basic grid item with auto-sizing
- **BentoCard**: Enhanced card with rich content support
- **BentoMasonry**: Alternative masonry layout
- **BentoContainer**: Responsive wrapper
- **BentoSection**: Semantic sections with collapsible support

### ✅ **Advanced Features**
- Container queries for component-level responsiveness
- Priority-based positioning
- Loading states and animations  
- Dark mode support
- Accessibility features
- TypeScript support

## Examples

### Basic Grid
```astro
<AutoBentoGrid>
  <BentoItem>Simple content</BentoItem>
  <BentoItem colSpan={2}>Wide item</BentoItem>
  <BentoItem rowSpan={2}>Tall item</BentoItem>
</AutoBentoGrid>
```

### Rich Cards
```astro
<AutoBentoGrid size="lg">
  <BentoCard 
    title="Media Card"
    variant="media"
    imageSrc="/image.jpg"
    href="/details"
    size="large"
  >
    Card content with image and link
  </BentoCard>
  
  <BentoCard 
    title="Priority Card"
    priority={10}
    headerBackground="linear-gradient(45deg, #3b82f6, #1d4ed8)"
    icon="⭐"
  >
    High priority card with custom styling
  </BentoCard>
</AutoBentoGrid>
```

### Masonry Layout
```astro
<BentoMasonry 
  responsive={{ sm: 1, md: 2, lg: 3, xl: 4 }}
  balanced={true}
>
  <BentoCard title="Card 1">Variable height content...</BentoCard>
  <BentoCard title="Card 2">More content...</BentoCard>
  <BentoCard title="Card 3">Even more content...</BentoCard>
</BentoMasonry>
```

### With Container
```astro
<BentoContainer size="lg" background="elevated">
  <AutoBentoGrid>
    <BentoSection title="Section 1" collapsible={true}>
      <BentoCard title="Card in section">Content</BentoCard>
    </BentoSection>
  </AutoBentoGrid>
</BentoContainer>
```

## Browser Support

- **Modern browsers** with CSS Grid Level 2 and Container Queries
- **Fallbacks included** for older browsers using media queries
- **Progressive enhancement** - works without JavaScript

## Performance

- Uses modern CSS features for optimal performance
- Container queries reduce JavaScript dependency
- Automatic layout prevents manual calculations
- Optimized for large grids with many items