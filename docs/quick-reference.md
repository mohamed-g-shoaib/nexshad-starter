# Quick Reference

Fast lookup for common tasks and commands.

## Commands

### Development

```bash
pnpm dev              # Start dev server at localhost:3000
pnpm build            # Build for production
pnpm start            # Start production server
```

### Code Quality

```bash
pnpm lint             # Check for linting errors
pnpm lint:fix         # Fix linting errors
pnpm format           # Format all files
pnpm format:check     # Check formatting
pnpm type-check       # Check TypeScript types
```

### Testing

```bash
pnpm test             # Run unit tests
pnpm test:ui          # Run tests with UI
pnpm test:coverage    # Generate coverage report
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run E2E tests with UI
```

### Dependencies

```bash
pnpm install          # Install dependencies
pnpm add <package>    # Add production dependency
pnpm add -D <package> # Add dev dependency
```

### shadcn/ui

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add input
```

## File Paths

```
app/[locale]/page.tsx              # Homepage
app/[locale]/layout.tsx            # Root layout
app/globals.css                    # Global styles
components/ui/                     # shadcn/ui components
components/                        # Custom components
messages/en.json                   # English translations
messages/ar.json                   # Arabic translations
i18n/routing.ts                    # Locale config
lib/utils.ts                       # Utility functions
```

## Import Patterns

```typescript
// Components
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

// Utils
import { cn } from "@/lib/utils";

// Next.js
import Link from "next/link";
import Image from "next/image";

// i18n
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
```

## Component Templates

### Server Component

```tsx
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("PageName");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
```

### Client Component

```tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function Component() {
  const t = useTranslations("ComponentName");
  const [state, setState] = useState(false);

  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
}
```

### Component with Props

```tsx
interface ComponentProps {
  title: string;
  description?: string;
}

export function Component({ title, description }: ComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

## Translation Usage

### Add Translation

```json
// messages/en.json
{
  "HomePage": {
    "title": "Welcome",
    "description": "Get started"
  }
}
```

### Use in Server Component

```tsx
const t = await getTranslations("HomePage");
<h1>{t("title")}</h1>;
```

### Use in Client Component

```tsx
const t = useTranslations("HomePage");
<h1>{t("title")}</h1>;
```

### With Variables

```json
{
  "greeting": "Hello, {name}!"
}
```

```tsx
{
  t("greeting", { name: "John" });
}
```

## Styling Patterns

### Basic Styling

```tsx
<div className="bg-card rounded-lg border p-6">Content</div>
```

### Responsive

```tsx
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

### Conditional

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" && "primary-class"
)}>
```

### Hover States

```tsx
<button className="bg-primary hover:bg-primary/90">Hover me</button>
```

## Common Tailwind Classes

### Layout

```
flex items-center justify-between
grid grid-cols-3 gap-4
container mx-auto px-4
```

### Spacing

```
p-4 px-6 py-2          # Padding
m-4 mx-auto mt-8       # Margin
gap-4 space-y-4        # Gap between items
```

### Typography

```
text-sm text-base text-lg text-xl
font-normal font-medium font-semibold font-bold
text-foreground text-muted-foreground
```

### Colors

```
bg-background bg-card bg-muted
text-foreground text-muted-foreground
border-border
```

### Borders & Shadows

```
border rounded-lg
shadow-sm shadow shadow-lg
```

## Testing Patterns

### Component Test

```tsx
import { render, screen } from "@testing-library/react";
import { Component } from "./component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
```

### E2E Test

```typescript
import { test, expect } from "@playwright/test";

test("page loads", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByText("Welcome")).toBeVisible();
});
```

## Route Patterns

### Static Route

```
app/[locale]/about/page.tsx → /en/about
```

### Dynamic Route

```
app/[locale]/blog/[slug]/page.tsx → /en/blog/my-post
```

### Nested Route

```
app/[locale]/dashboard/settings/page.tsx → /en/dashboard/settings
```

## Git Workflow

```bash
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit (runs pre-commit hooks)
git push                      # Push to remote
```

## Troubleshooting

### Clear Cache

```bash
rm -rf .next
pnpm dev
```

### Reinstall Dependencies

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Type Errors

```bash
pnpm type-check
```

### Lint Errors

```bash
pnpm lint:fix
```

## Environment Setup

### Create .env.local

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

### Access in Code

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Design Tokens

```css
/* Colors */
--background
--foreground
--card
--muted
--primary
--secondary
--accent
--border

/* Usage */
className="bg-background text-foreground border-border"
```

## Keyboard Shortcuts (VS Code)

```
Ctrl/Cmd + P          # Quick file open
Ctrl/Cmd + Shift + P  # Command palette
Ctrl/Cmd + B          # Toggle sidebar
Ctrl/Cmd + `          # Toggle terminal
F2                    # Rename symbol
```

## Useful Links

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- next-intl: https://next-intl-docs.vercel.app
- Vitest: https://vitest.dev
- Playwright: https://playwright.dev
