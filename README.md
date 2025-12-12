# Nexshad

A modern Next.js starter template with shadcn/ui components and built-in internationalization (i18n) support for English and Arabic.

## What is this?

This is a ready-to-use boilerplate for building multilingual Next.js applications. It comes with:

- Next.js 16 with App Router
- shadcn/ui components (Radix UI based)
- Tailwind CSS for styling
- next-intl for internationalization
- Dark and light theme support
- Full RTL (right-to-left) support for Arabic
- Responsive navbar and footer
- Social media links in footer

## Quick Start

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will auto-reload as you edit files.

## Project Structure

```
app/
  [locale]/
    layout.tsx       - Root layout with providers
    page.tsx         - Home page
messages/
  en.json           - English translations
  ar.json           - Arabic translations
components/
  language-toggle.tsx   - Language switcher
  mode-toggle.tsx       - Dark/light theme toggle
  navigation.tsx        - Top navigation menu
  ui/               - shadcn/ui components
i18n/
  routing.ts        - Locale configuration
  request.ts        - Server-side locale detection
lib/
  utils.ts          - Utility functions
```

## How to Edit Content

### Change Text and Translations

1. Open `messages/en.json` for English text
2. Open `messages/ar.json` for Arabic text
3. Edit the values in JSON
4. The page updates automatically

Example:

```json
{
  "content": {
    "title": "Your Title Here"
  }
}
```

Then use in code:

```tsx
const t = useTranslations();
<h1>{t("content.title")}</h1>;
```

### Edit the Home Page

Main content is in `app/[locale]/page.tsx`:

- Navbar: Lines 16-47
- Main content: Lines 48-130
- CTA buttons: Lines 97-130
- Footer: Lines 131-249

### Update Brand/Logo

1. Replace `public/mg-8bit.svg` with your logo
2. Update "Nexshad" text in navbar (line 32)
3. Update footer logo (line 156)

### Change Navigation Links

Edit `components/navigation.tsx`:

```tsx
const navigationItems = [
  {
    title: t("navigation.home"),
    href: "/",
    description: t("footer.content"),
  },
  // Add more items here
];
```

Then update `messages/en.json` and `messages/ar.json` with the text.

### Update Social Media Links

In footer (around line 220-235), change the href values:

```tsx
<a href="https://github.com/your-profile" ...>
```

## Customization

### Change Theme Colors

Edit `app/globals.css` to adjust Tailwind theme or use Tailwind's built-in color system.

### Modify Navbar

In `app/[locale]/page.tsx` (lines 16-47):

- Change logo
- Adjust padding and spacing
- Add or remove navigation items
- Change colors

### Modify Footer

In `app/[locale]/page.tsx` (lines 131-249):

- Add more footer sections
- Change link text
- Add more social media icons

### Switch to Different Language

The app supports English (en) and Arabic (ar) by default. To add another language:

1. Create `messages/[lang-code].json`
2. Add to `i18n/routing.ts`:
   ```ts
   locales: ["en", "ar", "fr"];
   ```
3. Update `app/[locale]/layout.tsx` generateStaticParams:
   ```ts
   return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }];
   ```

## Adding shadcn/ui Components

### Install a Component

```bash
npx shadcn@latest add button
```

### Use It

```tsx
import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Click me</Button>;
}
```

Browse available components at [shadcn.com](https://shadcn.com)

## Clean Up the Boilerplate

To remove demo content and start fresh:

### 1. Clear Home Page Content

Edit `app/[locale]/page.tsx`:

- Remove logo section (lines 61-70)
- Replace content section (lines 72-86) with your own
- Remove CTA buttons (lines 88-130)

### 2. Update Messages

Clear or update:

- `messages/en.json`
- `messages/ar.json`

### 3. Replace Logo

Put your logo in `public/` and update src paths in page.tsx

### 4. Simplify Navigation

Edit `components/navigation.tsx` to match your needs

### 5. Clean Footer

Adjust footer content and links in `app/[locale]/page.tsx`

## Building for Production

```bash
pnpm build
```

Then:

```bash
pnpm start
```

## Deployment

Deploy to Vercel (easiest for Next.js):

```bash
vercel
```

Or use any other hosting that supports Node.js.

## Key Technologies

- **Next.js 16** - React framework with server components
- **next-intl** - Internationalization for multiple languages
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **next-themes** - Dark/light mode management

## Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [next-intl Docs](https://next-intl-docs.vercel.app/)

## Browser Support

Works on all modern browsers that support ES2020+.

## License

MIT - Use freely in your projects.
