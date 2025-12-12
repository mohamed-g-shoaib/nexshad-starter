import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const isRTL = locale === "ar";

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Navbar */}
      <nav
        className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex w-full max-w-4xl items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <Image
                className="dark:invert"
                src="/nexcn.svg"
                alt="Nexcn logo"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
              />
              <span className="text-lg font-semibold text-black dark:text-white">
                Nexcn
              </span>
            </div>

            {/* Navigation Menu - Center */}
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <Navigation dir={isRTL ? "rtl" : "ltr"} />
            </div>

            {/* Switchers - Right/Left */}
            <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageToggle dir={isRTL ? "rtl" : "ltr"} />
              <ModeToggle dir={isRTL ? "rtl" : "ltr"} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div
            className="flex flex-col items-start gap-8 text-start sm:gap-12"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Hero Section */}
            <div className="flex flex-col gap-4 text-start">
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
                {t("content.title")}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {t("content.subtitle")}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("content.description")}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {t("content.instructions.line1")}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {t("content.instructions.line2")}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {t("content.instructions.line3")}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {t("content.instructions.line4")}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col gap-4 sm:flex-row ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 cursor-pointer px-6"
              >
                <a
                  href="https://ui.shadcn.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.shadcnDocs")}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 cursor-pointer px-6"
              >
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.nextjsDocs")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer dir={isRTL ? "rtl" : "ltr"} />
    </div>
  );
}
