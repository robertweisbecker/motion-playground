# Color System & Theming Architecture

This document explains how the color cascading and theming system works in this project, built with Tailwind CSS v4 and CSS custom properties.

## Overview

The color system uses a three-layer architecture:

1. **Base Color Palette** (`colors.css`) - Raw color definitions in oklch format
2. **Semantic Variables** (`globals.css`) - Theme-agnostic semantic color tokens
3. **Hue Overrides** (`hues.css`) - Dynamic theme overrides via `data-hue` attribute

## Layer 1: Base Color Palette (`colors.css`)

### Location

`src/app/styles/colors.css`

### Purpose

Defines the raw color palette using Tailwind v4's `@theme` directive. All colors are defined in the oklch color space for perceptual uniformity.

### Structure

```css
@theme {
  --color-ruby-25: oklch(97.91% 0.016828 345.77);
  --color-ruby-50: oklch(94.87% 0.03706 357.98);
  --color-ruby-500: oklch(0.5774 0.2542 13.92);
  /* ... more shades ... */
}
```

### Color Scales

Each color palette includes shades from `25` (lightest) to `975` (darkest):

- **25-200**: Light tints (backgrounds, subtle highlights)
- **300-400**: Mid-light (borders, inputs)
- **500**: Base color (primary actions)
- **600-700**: Mid-dark (hover states, emphasis)
- **800-975**: Dark shades (text, strong emphasis)

### Special Palettes

- **Neutral colors**: `gray`, `zinc`, `ash`, `plum`, `sand`, `sage`, `steel`
- **Alpha variants**: `black-alpha-*` and `white-alpha-*` for overlays and shadows
- **Semantic mappings**: `error-*`, `caution-*`, `info-*`, `success-*`, `warning-*`, `brand-*`

### Import Order

**Critical**: `colors.css` must be imported **before** any layer imports in `globals.css` to ensure `@theme` blocks are processed first.

```css
/* globals.css */
@import 'tailwindcss';
@import 'tw-animate-css';
@import './colors.css'; /* ← Must come before layer imports */
@import './typography.css' layer(components);
```

## Layer 2: Semantic Variables (`globals.css`)

### Location

`src/app/styles/globals.css`

### Purpose

Maps base colors to semantic tokens that components use. These variables are theme-agnostic and work in both light and dark modes.

### Two Types of Semantic Variables

#### 1. Global Semantic Variables (Theme-Overrideable)

These variables **can be overridden** by the `data-hue` attribute. They're used for general UI elements that should adapt to the theme.

**Examples:**

- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--background`, `--foreground`
- `--border`, `--ring`

**Usage:**

```tsx
// These adapt to data-hue attribute
<Button className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground" />
```

**Behavior:**

- Default: Uses brand/neutral colors
- With `data-hue`: Overridden to use hue colors (e.g., ruby, orange)

#### 2. Semantic Mapped Hues (Fixed Semantic Colors)

These variables **cannot be overridden** by `data-hue`. They always maintain their semantic meaning (error = red, success = green, etc.).

**Examples:**

- `--color-error-*` → Always maps to `--color-red-*`
- `--color-success-*` → Always maps to `--color-green-*`
- `--color-caution-*` → Always maps to `--color-orange-*`
- `--color-info-*` → Always maps to `--color-cyan-*`
- `--color-warning-*` → Always maps to `--color-yellow-*`

**Usage:**

```tsx
// These maintain semantic meaning regardless of data-hue
<Alert variant="error" className="bg-error-25 text-error-500" />
<Alert variant="success" className="bg-success-25 text-success-500" />
```

**Behavior:**

- Always: Uses the mapped color (error = red, success = green)
- With `data-hue`: Still uses the mapped color (not overridden)

**Why This Distinction Matters:**

- **Global semantic variables** (`text-muted-foreground`) are for theming - they adapt to the chosen hue
- **Semantic mapped hues** (`error-500`) are for meaning - they preserve semantic associations (red = error, green = success)

This ensures that error states always appear red, success states always appear green, etc., regardless of the theme hue applied to the rest of the UI.

**Visual Comparison:**

```tsx
{
  /* Without data-hue attribute */
}
<div>
  <Button className="bg-primary">Primary</Button> {/* Blue (brand) */}
  <Alert variant="error">Error</Alert> {/* Red (error) */}
</div>;

{
  /* With data-hue="ruby" attribute */
}
<div data-hue="ruby">
  <Button className="bg-primary">Primary</Button> {/* Ruby (overridden) */}
  <Alert variant="error">Error</Alert> {/* Red (NOT overridden) */}
</div>;
```

The button adapts to ruby, but the error alert stays red to maintain semantic meaning.

### Light Mode (`:root`)

```css
:root {
  --background: var(--color-neutral-25);
  --foreground: var(--color-neutral-900);
  --primary: var(--color-brand-500);
  --primary-foreground: var(--color-neutral-0);
  --muted: var(--color-neutral-75);
  --muted-foreground: var(--color-neutral-500);
  /* ... */
}
```

### Dark Mode (`.dark`)

```css
.dark {
  --background: var(--color-neutral-950);
  --foreground: var(--color-neutral-100);
  --primary: var(--color-brand-500);
  --primary-foreground: var(--color-white);
  --muted: var(--color-white-alpha-75);
  --muted-foreground: var(--color-white-alpha-500);
  /* ... */
}
```

### Semantic Tokens

- **Background**: `--background`, `--card`, `--popover`
- **Foreground**: `--foreground`, `--muted-foreground`, `--accent-foreground`
- **Interactive**: `--primary`, `--secondary`, `--accent`, `--muted`
- **States**: `--primary-hover`, `--primary-active`, `--secondary-hover`, etc.
- **Borders**: `--border`, `--border-soft`, `--border-strong`, `--border-alpha-*`
- **Feedback**: `--destructive`, `--ring`, `--outline`

## Layer 3: Hue Overrides (`hues.css`)

### Location

`src/app/styles/hues.css`

### Purpose

Allows dynamic theme switching by overriding semantic variables when the `data-hue` attribute is applied. This enables components to adopt any color palette while maintaining semantic meaning.

### How It Works

#### 1. Hue Variable Mapping

Each palette defines a set of `--hue-*` variables that map to the actual color:

```css
[data-hue='ruby'] {
  --hue-25: var(--color-ruby-25);
  --hue-50: var(--color-ruby-50);
  --hue-500: var(--color-ruby-500);
  /* ... */
}
```

#### 2. Semantic Override (Light Mode)

When `data-hue` is applied, semantic variables are overridden to use hue-based colors:

```css
@layer theme {
  [data-hue] {
    --background: var(--hue-25);
    --muted: var(--hue-25);
    --primary: var(--hue-500);
    --primary-foreground: var(--color-white);
    --foreground: var(--hue-800);
    /* ... */
  }
}
```

#### 3. Dark Mode Override

Dark mode uses darker hue shades:

```css
@layer theme {
  .dark [data-hue] {
    --background: var(--color-black-1000);
    --muted: var(--hue-975);
    --primary: var(--hue-500);
    --foreground: var(--hue-100);
    /* ... */
  }
}
```

### Usage Example

```tsx
<div data-hue="ruby" className="bg-muted p-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
</div>
```

The buttons will use ruby colors instead of the default brand colors, but maintain their semantic meaning (primary vs secondary).

### Shadow & Border Colors

The `data-hue` attribute also overrides shadow-related variables to ensure borders and shadows match the hue:

```css
[data-hue] {
  --ring: var(--hue-400);
  --border-alpha-soft: color-mix(in oklch, var(--hue-950) 3.3%, transparent);
  --border-alpha: color-mix(in oklch, var(--hue-950) 15%, transparent);
  --color-border: var(--border);
  --color-primary: var(--primary);
}
```

**Note**: `--color-white-alpha-*` and `--color-black-alpha-*` are **not** overridden by `data-hue` to maintain neutral shadows and overlays.

## CSS Cascade & Import Order

### Critical Import Order

The import order is **critical** for proper cascading:

```tsx
// layout.tsx
import './styles/globals.css'; // 1. Imports colors.css, defines semantic vars
import './styles/hues.css'; // 2. Defines data-hue overrides
```

```css
/* globals.css */
@import 'tailwindcss';           // 1. Tailwind utilities
@import 'tw-animate-css';        // 2. Animations
@import './colors.css';           // 3. Base color palette (@theme blocks)
@import './typography.css' layer(components);  // 4. Typography layer
@import './code.css' layer(theme);             // 5. Code layer
```

### Why Order Matters

1. **`@theme` blocks** must be processed before layers that use them
2. **Semantic variables** (`:root`, `.dark`) must be defined before `data-hue` overrides
3. **Layer priority**: `utilities` (default) > `components` > `theme` > `base`

### CSS Layer Priority

```css
@layer theme {
  [data-hue] {
    /* ... */
  } /* Lower priority - can be overridden by utilities */
}
```

Utilities like `dark:bg-error-975` have higher priority than theme layer, ensuring they work correctly even when `data-hue` is applied.

## Dark Mode

### Custom Variant Definition

```css
@custom-variant dark (&:is(.dark *));
```

This allows Tailwind utilities to work with the `.dark` class on any ancestor.

### Dark Mode Cascade

1. **Base**: `.dark` class sets dark mode semantic variables
2. **Hue Override**: `.dark [data-hue]` overrides semantic variables with dark hue colors
3. **Utilities**: `dark:bg-*` utilities override theme layer when needed

### Example

```css
/* Base dark mode */
.dark {
  --background: var(--color-neutral-950);
}

/* Hue override in dark mode */
.dark [data-hue] {
  --background: var(--color-black-1000);
}

/* Component utility (highest priority) */
.dark .alert {
  background: var(--error-975); /* Uses error color, not hue */
}
```

## Component Usage

### Choosing the Right Semantic Variable Type

#### Use Global Semantic Variables (Theme-Overrideable) For:

- **General UI elements** that should adapt to theme
- **Primary/secondary actions** that can be themed
- **Backgrounds, borders, and text** that should match the theme

```tsx
// ✅ These adapt to data-hue attribute
<Button className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground border-border" />
<Card className="bg-card text-card-foreground" />
```

#### Use Semantic Mapped Hues (Fixed) For:

- **Status indicators** (error, success, warning, info)
- **Feedback messages** that need consistent meaning
- **Alerts and notifications** where color = meaning

```tsx
// ✅ These maintain semantic meaning (error = red, success = green)
<Alert variant="error" className="bg-error-25 text-error-500" />
<Alert variant="success" className="bg-success-25 text-success-500" />
<Badge className="bg-caution-100 text-caution-700">Warning</Badge>
```

### Using Semantic Tokens

Components should use semantic tokens, not direct color references:

```tsx
// ✅ Good - uses semantic token (adapts to theme)
<div className="bg-primary text-primary-foreground" />

// ✅ Good - uses semantic mapped hue (preserves meaning)
<Alert className="bg-error-25 text-error-500" />

// ❌ Bad - uses direct color (bypasses theming system)
<div className="bg-[var(--color-ruby-500)]" />
```

### Tailwind Utilities

Semantic tokens are available as Tailwind utilities:

```tsx
<div className="bg-background text-foreground border-border" />
<button className="bg-primary hover:bg-primary-hover active:bg-primary-active" />
```

### Hue Theming

Apply `data-hue` attribute to containers:

```tsx
<div data-hue="ruby">
  {/* All children inherit ruby-themed colors */}
  <Button variant="primary">Ruby Primary</Button>
</div>
```

## Color Variable Naming Convention

### Base Colors

- Format: `--color-{palette}-{shade}`
- Example: `--color-ruby-500`, `--color-gray-200`

### Semantic Tokens

- Format: `--{semantic-name}` or `--{semantic-name}-{state}`
- Examples: `--primary`, `--primary-hover`, `--muted-foreground`

### Hue Variables

- Format: `--hue-{shade}`
- Example: `--hue-500`, `--hue-800`
- Set by `[data-hue="{palette}"]` attribute selectors

### Tailwind Color Mappings

- Format: `--color-{semantic-name}`
- Example: `--color-primary`, `--color-border`
- Used by Tailwind utilities for direct color access

## Best Practices

1. **Always use semantic tokens** in components, not direct color references
2. **Import order matters** - don't change the CSS import order without understanding the cascade
3. **Test in both light and dark modes** when adding new color variables
4. **Use `data-hue` for theme switching**, not for individual component styling
5. **Keep alpha variants neutral** - don't override `--color-white-alpha-*` or `--color-black-alpha-*` in `data-hue`
6. **Layer priority**: Remember that utilities override theme layer, so `dark:bg-*` will work even with `data-hue` applied

## Troubleshooting

### Colors not updating with `data-hue`

- Check that `data-hue="{palette}"` attribute is applied (e.g., `data-hue="ruby"`)
- Verify import order: `globals.css` → `hues.css`
- Ensure variables are defined in `@layer theme`

### Dark mode not working

- Verify `.dark` class is on `<html>` or ancestor
- Check that `.dark [data-hue]` selector has higher specificity than `[data-hue]`
- Ensure `@custom-variant dark` is defined in `globals.css`

### Utilities overriding theme

- This is expected! Utilities have higher priority than theme layer
- Use semantic tokens in components, not direct utilities when you need theme consistency

## File Structure

```
src/app/styles/
├── colors.css      # Base color palette (@theme blocks)
├── globals.css     # Semantic variables (:root, .dark)
└── hues.css        # Hue overrides (@layer theme)

src/app/layout.tsx
└── Imports: globals.css → hues.css
```

## Related Files

- `src/app/colors/page.tsx` - Color palette showcase
- `src/app/colors/theme/page.tsx` - Theme examples with `data-hue` attribute
- `src/components/ui/button.tsx` - Example component using semantic tokens
- `src/components/ui/alert.tsx` - Example component with dark mode variants
