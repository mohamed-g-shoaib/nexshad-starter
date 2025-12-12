# Styling Guide

This guide covers how to style your components using Tailwind CSS and the design system.

## Tailwind CSS Basics

The project uses Tailwind CSS v4 for styling. Apply styles using utility classes directly in your JSX.

### Basic Example

```tsx
export function Card() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">Title</h2>
      <p className="text-gray-600">Description</p>
    </div>
  );
}
```

## Design Tokens

The project uses CSS variables for consistent theming. These are defined in `app/globals.css`.

### Available Tokens

```tsx
// Backgrounds
className = "bg-background"; // Main background
className = "bg-card"; // Card background
className = "bg-muted"; // Muted background

// Text
className = "text-foreground"; // Main text
className = "text-muted-foreground"; // Muted text

// Borders
className = "border-border"; // Standard border

// Accent Colors
className = "bg-primary"; // Primary color
className = "bg-secondary"; // Secondary color
className = "bg-accent"; // Accent color
```

### Using Tokens

Always use design tokens instead of hardcoded colors:

```tsx
// Bad
<div className="bg-white text-black border-gray-200">

// Good
<div className="bg-background text-foreground border-border">
```

This ensures your components work in both light and dark modes.

## Dark Mode

Dark mode is handled automatically using CSS variables.

### Theme Toggle

The project includes a theme toggle component:

```tsx
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header>
      <ModeToggle />
    </header>
  );
}
```

### Dark Mode Specific Styles

If needed, use the `dark:` prefix:

```tsx
<div className="bg-white dark:bg-gray-900">Content</div>
```

But prefer using design tokens when possible.

## Common Patterns

### Layout

```tsx
// Container
<div className="container mx-auto px-4">

// Flex
<div className="flex items-center justify-between gap-4">

// Grid
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
```

### Spacing

```tsx
// Padding
className = "p-4"; // All sides
className = "px-4 py-2"; // Horizontal and vertical
className = "pt-4"; // Top only

// Margin
className = "m-4"; // All sides
className = "mx-auto"; // Center horizontally
className = "mt-4"; // Top only

// Gap (for flex/grid)
className = "gap-4"; // All directions
className = "gap-x-4"; // Horizontal only
```

### Typography

```tsx
// Headings
<h1 className="text-4xl font-bold">
<h2 className="text-3xl font-semibold">
<h3 className="text-2xl font-medium">

// Body text
<p className="text-base">
<p className="text-sm text-muted-foreground">

// Font weight
className="font-normal"    // 400
className="font-medium"    // 500
className="font-semibold"  // 600
className="font-bold"      // 700
```

### Borders and Rounded Corners

```tsx
// Borders
className = "border"; // All sides
className = "border-t"; // Top only
className = "border-border"; // Use design token

// Rounded corners
className = "rounded"; // Small
className = "rounded-lg"; // Large
className = "rounded-full"; // Circle
```

### Shadows

```tsx
className = "shadow-sm"; // Small shadow
className = "shadow"; // Medium shadow
className = "shadow-lg"; // Large shadow
```

## Responsive Design

Use breakpoint prefixes for responsive styles:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

### Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Conditional Styling

Use the `cn()` utility for conditional classes:

```tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
}

export function Button({ variant = "primary", size = "sm" }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded px-4 py-2 font-medium",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-secondary text-black",
        size === "sm" && "text-sm",
        size === "lg" && "text-lg"
      )}
    >
      Click me
    </button>
  );
}
```

## Hover and Focus States

```tsx
// Hover
<button className="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>

// Focus
<input className="border focus:border-blue-500 focus:outline-none" />

// Active
<button className="bg-blue-500 active:bg-blue-700">
  Click me
</button>
```

## Animations

### Transitions

```tsx
<div className="transition-colors duration-200 hover:bg-gray-100">
  Smooth color transition
</div>

<div className="transition-all duration-300 hover:scale-105">
  Smooth scale transition
</div>
```

### Common Transitions

```tsx
className = "transition-colors"; // Color changes
className = "transition-transform"; // Transform changes
className = "transition-all"; // All properties
```

## Component Variants

Create reusable component variants:

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva("rounded font-medium transition-colors", {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-secondary text-black hover:bg-secondary/90",
      outline: "border border-border hover:bg-accent",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## RTL Support

For Arabic (RTL) support, Tailwind automatically handles direction:

```tsx
// These work in both LTR and RTL
className = "ms-4"; // Margin start (left in LTR, right in RTL)
className = "me-4"; // Margin end (right in LTR, left in RTL)
className = "ps-4"; // Padding start
className = "pe-4"; // Padding end
```

Prefer logical properties:

- Use `ms-` instead of `ml-`
- Use `me-` instead of `mr-`
- Use `ps-` instead of `pl-`
- Use `pe-` instead of `pr-`

## Custom Styles

### Adding Custom CSS

For styles that can't be done with Tailwind, add them to `app/globals.css`:

```css
.custom-gradient {
  background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
}
```

Use in components:

```tsx
<div className="custom-gradient">Content</div>
```

### Extending Tailwind Config

Add custom values in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        brand: "#667eea",
      },
      spacing: {
        "128": "32rem",
      },
    },
  },
};
```

## Best Practices

### 1. Use Design Tokens

```tsx
// Bad
<div className="bg-white text-black">

// Good
<div className="bg-background text-foreground">
```

### 2. Keep Classes Organized

```tsx
// Bad
<div className="text-white p-4 bg-blue-500 rounded hover:bg-blue-600 flex items-center">

// Good
<div className="flex items-center rounded bg-blue-500 p-4 text-white hover:bg-blue-600">
```

Order: Layout → Spacing → Sizing → Typography → Visual → Misc

### 3. Extract Repeated Styles

```tsx
// Bad - repeated in multiple places
<div className="rounded-lg border bg-card p-6 shadow-sm">

// Good - create a component
export function Card({ children }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      {children}
    </div>
  );
}
```

### 4. Use Responsive Design

Always consider mobile first:

```tsx
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

### 5. Avoid Arbitrary Values

```tsx
// Bad
<div className="w-[347px]">

// Good
<div className="w-80">  // or w-96, w-full, etc.
```

Use arbitrary values only when necessary.

## Common Components

### Card

```tsx
<div className="bg-card rounded-lg border p-6 shadow-sm">
  <h3 className="text-lg font-semibold">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Button

```tsx
<button className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white">
  Click me
</button>
```

### Input

```tsx
<input
  className="border-border bg-background focus:border-primary rounded border px-3 py-2 focus:outline-none"
  type="text"
/>
```

### Badge

```tsx
<span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
  New
</span>
```

## Debugging Styles

### VS Code Extension

Install "Tailwind CSS IntelliSense" for autocomplete and previews.

### Browser DevTools

Inspect elements to see applied Tailwind classes.

### Tailwind Play

Test styles at [play.tailwindcss.com](https://play.tailwindcss.com)

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- Design tokens: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
