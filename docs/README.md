# Documentation

Complete guides for using this Next.js boilerplate.

## Quick Start

New to the project? Start here:

1. **[Getting Started](./getting-started.md)** - Installation and setup
2. **[Project Structure](./project-structure.md)** - Understanding the codebase
3. **[Adding Components](./adding-components.md)** - Creating and using components

## Core Guides

### Development

- **[Adding Components](./adding-components.md)** - How to add shadcn/ui components and create custom ones
- **[Styling](./styling.md)** - Using Tailwind CSS and the design system
- **[Internationalization](./internationalization.md)** - Working with next-intl for multi-language support
- **[Testing](./testing.md)** - Unit testing with Vitest and E2E testing with Playwright
- **[Quick Reference](./quick-reference.md)** - Fast lookup for common commands and patterns

### Reference

- **[Project Structure](./project-structure.md)** - Detailed breakdown of directories and files

## Common Tasks

### Adding a New Page

1. Create `app/[locale]/your-page/page.tsx`
2. Add translations to `messages/en.json` and `messages/ar.json`
3. Add navigation link if needed

### Adding a New Component

1. Run `pnpm dlx shadcn@latest add <component>` for UI components
2. Or create custom component in `components/`
3. Import and use: `import { Component } from "@/components/component"`

### Adding Translations

1. Edit `messages/en.json` and `messages/ar.json`
2. Use in components: `const t = useTranslations("YourNamespace")`
3. Display: `{t("key")}`

### Running Tests

```bash
pnpm test              # Unit tests
pnpm test:e2e          # E2E tests
pnpm test:coverage     # Coverage report
```

### Code Quality

```bash
pnpm lint              # Check for errors
pnpm lint:fix          # Fix errors automatically
pnpm format            # Format code
pnpm type-check        # Check TypeScript types
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI
- **i18n**: next-intl
- **Testing**: Vitest + Playwright
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## Project Features

- Multi-language support (English, Arabic)
- Dark mode support
- RTL layout for Arabic
- Type-safe with TypeScript
- Accessible components
- Comprehensive testing setup
- Code formatting and linting
- Pre-commit hooks

## Getting Help

- Check the relevant guide in this docs folder
- Review the code examples in each guide
- Check the official documentation for each tool

## Contributing

When adding new features:

1. Follow the existing code structure
2. Add tests for new components
3. Update translations for both languages
4. Run linting and type checking before committing
5. Ensure all tests pass

## Quick Reference

### File Locations

- Pages: `app/[locale]/`
- Components: `components/`
- Translations: `messages/`
- Tests: `tests/` or `*.test.tsx`
- Styles: `app/globals.css`

### Import Aliases

Use `@/` for imports:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Available Scripts

```bash
pnpm dev              # Development server
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # Lint code
pnpm lint:fix         # Fix linting errors
pnpm format           # Format code
pnpm test             # Run unit tests
pnpm test:e2e         # Run E2E tests
pnpm type-check       # Check types
```

## Documentation Index

1. [Getting Started](./getting-started.md) - Setup and installation
2. [Project Structure](./project-structure.md) - Directory and file organization
3. [Adding Components](./adding-components.md) - Component creation and usage
4. [Styling](./styling.md) - Tailwind CSS and design system
5. [Internationalization](./internationalization.md) - Multi-language support
6. [Testing](./testing.md) - Testing strategies and examples
7. [Quick Reference](./quick-reference.md) - Common commands and patterns
