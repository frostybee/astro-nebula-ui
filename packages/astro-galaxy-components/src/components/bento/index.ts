/**
 * Bento Grid Components
 * Modern, auto-reorganizing grid layouts with container query support
 */

// Core Components
export { default as AutoBentoGrid } from './AutoBentoGrid.astro';
export { default as BentoItem } from './BentoItem.astro';
export { default as BentoCard } from './BentoCard.astro';
export { default as BentoContainer } from './BentoContainer.astro';
export { default as BentoSection } from './BentoSection.astro';

// Alternative Layout
export { default as BentoMasonry } from './BentoMasonry.astro';

// Type Definitions
export interface AutoBentoGridProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  minColumnWidth?: string;
  gap?: string;
  maxColumns?: number;
  dense?: boolean;
  class?: string;
  containerQueries?: boolean;
}

export interface BentoItemProps {
  colSpan?: number;
  rowSpan?: number;
  size?: 'auto' | 'small' | 'medium' | 'large' | 'xl';
  aspectRatio?: string;
  priority?: number;
  minHeight?: string;
  maxHeight?: string;
  class?: string;
  contentAware?: boolean;
  background?: string;
  borderRadius?: string;
}

export interface BentoCardProps extends BentoItemProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'highlighted' | 'minimal' | 'media';
  headerBackground?: string;
  icon?: string;
  href?: string;
  target?: string;
  loading?: boolean;
  interactive?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export interface BentoContainerProps {
  maxWidth?: string;
  padding?: string;
  enableQueries?: boolean;
  theme?: 'auto' | 'light' | 'dark';
  background?: 'none' | 'subtle' | 'elevated';
  class?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  responsive?: boolean;
}

export interface BentoSectionProps {
  title?: string;
  description?: string;
  id?: string;
  colSpan?: number;
  collapsible?: boolean;
  collapsed?: boolean;
  variant?: 'default' | 'highlighted' | 'bordered' | 'minimal';
  class?: string;
  headerBackground?: string;
  semantic?: boolean;
}

export interface BentoMasonryProps {
  columns?: number;
  gap?: string;
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  minColumnWidth?: string;
  class?: string;
  balanced?: boolean;
}

// Utility Constants
export const BENTO_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export const BENTO_ITEM_SIZES = ['auto', 'small', 'medium', 'large', 'xl'] as const;
export const BENTO_VARIANTS = ['default', 'highlighted', 'minimal', 'media'] as const;
export const BENTO_SECTION_VARIANTS = ['default', 'highlighted', 'bordered', 'minimal'] as const;
export const BENTO_CONTAINER_SIZES = ['sm', 'md', 'lg', 'xl', 'full'] as const;
export const BENTO_THEMES = ['auto', 'light', 'dark'] as const;
export const BENTO_BACKGROUNDS = ['none', 'subtle', 'elevated'] as const;

// Default Configuration
export const BENTO_DEFAULTS = {
  grid: {
    size: 'md' as const,
    dense: true,
    containerQueries: true,
  },
  item: {
    size: 'auto' as const,
    contentAware: true,
  },
  card: {
    variant: 'default' as const,
    interactive: false,
  },
  container: {
    size: 'full' as const,
    theme: 'auto' as const,
    background: 'none' as const,
    responsive: true,
    enableQueries: true,
  },
  section: {
    variant: 'default' as const,
    collapsible: false,
    semantic: true,
  },
  masonry: {
    columns: 3,
    balanced: true,
    responsive: { sm: 1, md: 2, lg: 3, xl: 4 },
  },
} as const;

// Utility Functions
export function createBentoGridConfig(overrides: Partial<AutoBentoGridProps> = {}) {
  return { ...BENTO_DEFAULTS.grid, ...overrides };
}

export function createBentoItemConfig(overrides: Partial<BentoItemProps> = {}) {
  return { ...BENTO_DEFAULTS.item, ...overrides };
}

export function createBentoCardConfig(overrides: Partial<BentoCardProps> = {}) {
  return { ...BENTO_DEFAULTS.card, ...overrides };
}

export function createBentoContainerConfig(overrides: Partial<BentoContainerProps> = {}) {
  return { ...BENTO_DEFAULTS.container, ...overrides };
}

export function createBentoSectionConfig(overrides: Partial<BentoSectionProps> = {}) {
  return { ...BENTO_DEFAULTS.section, ...overrides };
}

export function createBentoMasonryConfig(overrides: Partial<BentoMasonryProps> = {}) {
  return { ...BENTO_DEFAULTS.masonry, ...overrides };
}

// Grid Layout Helpers
export function calculateOptimalColumns(
  containerWidth: number,
  minColumnWidth: number,
  gap: number = 16
): number {
  const availableWidth = containerWidth - gap;
  const columnWithGap = minColumnWidth + gap;
  return Math.max(1, Math.floor(availableWidth / columnWithGap));
}

export function generateGridTemplate(
  columns: number,
  minWidth: string = '280px'
): string {
  return `repeat(${columns}, minmax(min(100%, ${minWidth}), 1fr))`;
}

// Responsive Breakpoint Helpers
export const BENTO_BREAKPOINTS = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1600,
} as const;

export function getResponsiveColumns(
  width: number,
  config: { sm?: number; md?: number; lg?: number; xl?: number } = {}
): number {
  if (width >= BENTO_BREAKPOINTS.xl) return config.xl || 4;
  if (width >= BENTO_BREAKPOINTS.lg) return config.lg || 3;
  if (width >= BENTO_BREAKPOINTS.md) return config.md || 2;
  return config.sm || 1;
}

// CSS Variable Helpers
export function setBentoVariable(property: string, value: string): string {
  return `--bento-${property}: ${value}`;
}

export function getBentoVariable(property: string): string {
  return `var(--bento-${property})`;
}