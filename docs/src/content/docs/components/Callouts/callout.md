---
title: Callout
description: Display inline callouts with different styles and icons
---

# Callout Component

The Callout component allows you to display inline callouts with different styles and icons for various types of information or alerts.

## Basic Usage

Import the Callout component in your Astro page or component:

```astro
---
import Callout from '@/components/Callout.astro';
---
```

Then use it to create callouts:

```astro
<Callout type="info">
  This is an informational callout.
</Callout>
```

## Callout Types

The component supports the following callout types:

- **info** (default): For general information
- **alert**: For important alerts that need attention
- **danger**: For critical issues or errors
- **success**: For successful operations
- **warning**: For cautionary information
- **tip**: For helpful suggestions

Each type has its own icon and color scheme:

```astro
<Callout type="info">Info callout</Callout>
<Callout type="alert">Alert callout</Callout>
<Callout type="danger">Danger callout</Callout>
<Callout type="success">Success callout</Callout>
<Callout type="warning">Warning callout</Callout>
<Callout type="tip">Tip callout</Callout>
```

## Adding Titles

You can add an optional title to your callout:

```astro
<Callout type="warning" title="Important Warning">
  Make sure to follow the instructions carefully.
</Callout>
```

## Including Links

You can add links within your callouts:

```astro
<Callout type="info">
  This is an informational callout with a <a href="/docs/guide">link to the guide</a>.
</Callout>
```

## Markdown Support

When using callouts in MDX files, you can include markdown content inside:

```mdx
<Callout type="warning" title="Important">
  **Make sure** to follow these instructions *carefully*.
</Callout>
```

## Dark Mode Support

The component automatically adapts to light and dark themes with appropriate color adjustments.

## Example

Here's a complete example showing different types of callouts on a page:

```astro
---
import Callout from '@/components/Callout.astro';
---

<div>
  <h2>API Documentation</h2>
  
  <Callout type="info" title="Rate Limits">
    API requests are limited to 100 per minute. <a href="/docs/api-limits">Learn more</a>
  </Callout>
  
  <h3>Authentication</h3>
  <p>...</p>
  
  <Callout type="warning">
    API keys should never be exposed in client-side code.
  </Callout>
  
  <h3>Error Handling</h3>
  <p>...</p>
  
  <Callout type="danger" title="Deprecation Notice">
    The endpoint will be deprecated on December 31st. <a href="/docs/migration">See migration guide</a>
  </Callout>
</div>
``` 