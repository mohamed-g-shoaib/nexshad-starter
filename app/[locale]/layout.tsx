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

export const metadata: Metadata = {
  title: {
    default: "Nexcn Starter",
    template: "%s | Nexcn Starter",
  },
  description:
    "Production-ready Next.js 16 starter with TypeScript, shadcn/ui, comprehensive testing, and bilingual support (EN/AR).",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
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
