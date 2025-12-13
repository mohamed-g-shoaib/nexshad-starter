# 02. Project Structure

This guide maps out the codebase to help you locate and modify files effectively.

## Directory Overview

```
nexcn/
├── app/
│   ├── [locale]/          # Next.js App Router pages (e.g., /en/about)
│   └── globals.css        # Global styles and design tokens
├── components/
│   ├── ui/               # Reusable Base UI component primitives
│   └── ...               # Your custom application components
├── i18n/                 # Internationalization configuration
├── messages/             # Translation JSON files (en.json, ar.json)
├── lib/                  # Shared utility functions (e.g., utils.ts)
├── public/               # Static assets (images, fonts)
└── tests/                # End-to-end tests
```

## detailed Breakdown

### App Directory (`app/`)

Uses the Next.js 16 App Router.

- **`[locale]/layout.tsx`**: The root layout wrapping all pages. Handles providers (Theme, i18n).
- **`[locale]/page.tsx`**: The main homepage component.
- **`globals.css`**: Contains Tailwind directives and CSS variables for theming.

### Components (`components/`)

- **`ui/`**: Contains unstyled Base UI components. These are your building blocks.
- **Root level**: Place your feature-specific components here (e.g., `Header.tsx`, `Hero.tsx`).

### Internationalization (`messages/`)

Contains the actual text content for the site.

- **`en.json`**: English strings.
- **`ar.json`**: Arabic strings.

## Configuration Files

- **`next.config.ts`**: Core Next.js settings.
- **`tailwind.config.ts`**: Design system configuration (colors, fonts).
- **`i18n/routing.ts`**: Defines supported locales and default language.

## Best Practices

1. **Import Aliases**: Always use `@/` to import from the root.
   ```tsx
   import { Button } from "@/components/ui/button"; // ✅ Correct
   import { Button } from "../../components/ui/button"; // ❌ Avoid
   ```
2. **Colocation**: Keep tests near components (`Button.test.tsx` next to `Button.tsx`) for unit tests.
