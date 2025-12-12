"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { siGithub, siX } from "simple-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FooterProps {
  dir?: "ltr" | "rtl";
}

export function Footer({ dir }: FooterProps) {
  const t = useTranslations();

  return (
    <footer
      className="mt-auto w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      dir={dir}
    >
      <div className="flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Top Row: Logo and Links */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {/* Logo and Description */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="dark:invert"
                    src="/nexcn.svg"
                    alt="Nexcn logo"
                    width={32}
                    height={32}
                    style={{ width: "32px", height: "32px" }}
                  />
                  <span className="text-lg font-semibold text-black dark:text-white">
                    Nexcn
                  </span>
                </div>
                <p className="max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
                  {t("footer.description")}
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                    {t("footer.links.resources")}
                  </h3>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    {t("navigation.nextjs")}
                  </a>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    {t("navigation.shadcn")}
                  </a>
                  <a
                    href="https://next-intl.dev/docs/getting-started/app-router"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    {t("navigation.nextIntl")}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-black dark:text-white">
                  {t("footer.links.social")}
                </h3>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                        aria-label="GitHub"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `<svg class="size-5" fill="currentColor" viewBox="0 0 24 24">${siGithub.svg}</svg>`,
                          }}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t("footer.links.github")}</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                        aria-label="X"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `<svg class="size-5" fill="currentColor" viewBox="0 0 24 24">${siX.svg}</svg>`,
                          }}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t("footer.links.x")}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* Bottom Row: Copyright */}
            <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="text-start text-sm text-zinc-600 dark:text-zinc-400">
                {t("footer.copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
