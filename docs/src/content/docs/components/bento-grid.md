---
title: Bento Grid
description: Display cheatsheet-style content in a responsive bento grid
---

# Bento Grid Component

The Bento Grid component allows you to display cheatsheet-style content in a responsive grid layout, with support for cards that can span multiple rows or columns.

## Basic Usage

Import the necessary components in your Astro page or component:

```astro
---
import BentoGrid from '@/components/BentoGrid.astro';
import BentoCard from '@/components/BentoCard.astro';
import CodeBlock from '@/components/CodeBlock.astro';
---
```

Then use them to create your grid:

```astro
<BentoGrid title="My Cheatsheet">
  <BentoCard title="First Card">
    Content for the first card
  </BentoCard>
  
  <BentoCard title="Second Card">
    Content for the second card
  </BentoCard>
</BentoGrid>
```

## Card Spanning

You can make cards span multiple rows or columns using the `rowSpan` and `colSpan` props:

```astro
<BentoGrid title="Grid with Spanning">
  <BentoCard title="Regular Card">
    Regular content
  </BentoCard>
  
  <BentoCard title="Wide Card" colSpan={2}>
    This card spans 2 columns
  </BentoCard>
  
  <BentoCard title="Tall Card" rowSpan={2}>
    This card spans 2 rows
  </BentoCard>
  
  <BentoCard title="Big Card" colSpan={2} rowSpan={2}>
    This card spans 2 columns and 2 rows
  </BentoCard>
</BentoGrid>
```

## Adding Code Blocks

Use the `CodeBlock` component to add syntax-highlighted code with a copy button:

```astro
<BentoCard title="JavaScript Example">
  <CodeBlock 
    lang="js" 
    code={`function hello() {
  console.log("Hello, world!");
}`} 
  />
</BentoCard>
```

## Full Example

Here's a complete example of a bento grid with different types of content:

```astro
<BentoGrid title="CSS Flexbox">
  <BentoCard title="Basic Container">
    <CodeBlock 
      lang="css" 
      code={`.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}`} 
    />
  </BentoCard>
  
  <BentoCard title="Flex Items" rowSpan={2}>
    <CodeBlock 
      lang="css" 
      code={`.flex-item {
  flex: 1 1 auto;
  /* shorthand for flex-grow, flex-shrink, flex-basis */
}`} 
    />
    <p>Individual item properties:</p>
    <CodeBlock 
      lang="css" 
      code={`.item {
  align-self: center; /* Override alignment */
  order: 2; /* Change display order */
}`} 
    />
  </BentoCard>
  
  <BentoCard title="Alignment">
    <CodeBlock 
      lang="css" 
      code={`.container {
  justify-content: space-between; /* Main axis */
  align-items: center; /* Cross axis */
}`} 
    />
  </BentoCard>
</BentoGrid>
``` 