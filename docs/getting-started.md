# Getting Started

This guide will help you get up and running with the boilerplate quickly.

## Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd nexcn
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nexcn/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Locale-specific routes
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── i18n/                 # Internationalization config
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── lib/                  # Utility functions
├── public/              # Static assets
└── tests/               # Test files
```

## Key Files to Know

### Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `eslint.config.mjs` - ESLint rules
- `.prettierrc` - Code formatting rules

### Core Files

- `app/[locale]/layout.tsx` - Root layout with providers
- `app/[locale]/page.tsx` - Homepage
- `i18n/routing.ts` - Supported locales configuration
- `i18n/request.ts` - Server-side i18n setup

## Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Check for linting errors
pnpm lint:fix         # Fix linting errors automatically
pnpm format           # Format code with Prettier
pnpm type-check       # Check TypeScript types
pnpm test             # Run unit tests
pnpm test:ui          # Run tests with UI
pnpm test:e2e         # Run end-to-end tests
```

## Next Steps

- Read [Adding Components](./adding-components.md) to learn how to add new components
- Read [Internationalization](./internationalization.md) to learn about i18n
- Read [Testing Guide](./testing.md) to learn about testing
