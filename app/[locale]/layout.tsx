/**
 * Root Layout
 *
 * Defines the base HTML structure, fonts, and providers for the entire application.
 *
 * To customize:
 * - Update SEO metadata below (title, description, icons)
 * - Modify fonts by changing the Google Fonts imports
 * - Update the theme provider settings if needed
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

/**
 * SEO Metadata
 *
 * Update these values to match your project:
 * - title: Your site name and page title template
 * - description: A brief description of your site (150-160 characters recommended)
 * - icons: Path to your favicon and apple-touch-icon
 *
 * For page-specific metadata, export metadata from individual page.tsx files.
 */
export const metadata: Metadata = {
  title: {
    default: "Nexcn Starter", // Update with your site name
    template: "%s | Nexcn Starter", // Page title format
  },
  description:
    "Production-ready Next.js 16 starter with TypeScript, shadcn/ui, comprehensive testing, and bilingual support (EN/AR).", // Update with your site description
  icons: {
    icon: "/icon.svg", // Path to favicon
    apple: "/apple-touch-icon.png", // Path to Apple touch icon
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === "ar";
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning dir={isRTL ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          locale === "ar" ? cairo.variable : ""
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            storageKey="nexcn-theme"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
