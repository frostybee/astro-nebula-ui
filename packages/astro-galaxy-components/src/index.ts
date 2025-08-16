// Re-export all components for easy importing
export { default as Callout } from './components/callouts/Callout.astro';
export { default as TextScaler } from './components/ui/TextScaler.astro';
export { default as NewCallout } from './components/callouts/NewCallout.astro';
export { default as CollapsiblePanel } from './components/CollapsiblePanel.astro';
export { default as SlideViewer } from './components/SlideViewer/SlideViewer.astro';
export { default as LearningObjectives } from './components/LearningObjectives.astro';
export { default as CheatSheet } from './components/CheatSheet.astro';
export { default as CheatSheetSection } from './components/CheatSheetSection.astro';
export { default as CheatSheetResource } from './components/CheatSheetResource.astro';
export { default as CheatSheetResources } from './components/CheatSheetResources.astro';
export { default as CodeBlock } from './components/CodeBlock.astro';
export { default as CheatsheetCard } from './components/edu/CheatsheetCard.astro';

// Modern Bento Grid Components
export { 
  AutoBentoGrid,
  BentoItem,
  BentoCard,
  BentoContainer,
  BentoSection,
  BentoMasonry,
  // Type exports
  type AutoBentoGridProps,
  type BentoItemProps,
  type BentoCardProps,
  type BentoContainerProps,
  type BentoSectionProps,
  type BentoMasonryProps,
  // Utility exports
  BENTO_SIZES,
  BENTO_ITEM_SIZES,
  BENTO_VARIANTS,
  BENTO_SECTION_VARIANTS,
  BENTO_CONTAINER_SIZES,
  BENTO_THEMES,
  BENTO_BACKGROUNDS,
  BENTO_DEFAULTS,
  BENTO_BREAKPOINTS,
  createBentoGridConfig,
  createBentoItemConfig,
  createBentoCardConfig,
  createBentoContainerConfig,
  createBentoSectionConfig,
  createBentoMasonryConfig,
  calculateOptimalColumns,
  generateGridTemplate,
  getResponsiveColumns,
  setBentoVariable,
  getBentoVariable,
} from './components/bento/index.ts';

