"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Extend DropdownMenu to accept dir prop
declare module "@/components/ui/dropdown-menu" {
  interface DropdownMenuProps {
    dir?: "ltr" | "rtl";
  }
}

interface LanguageToggleProps {
  dir?: "ltr" | "rtl";
}

export function LanguageToggle({ dir }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from pathname
    const pathWithoutLocale = pathname.slice(locale.length + 1);

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale || "/"}`);
  };

  return (
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" suppressHydrationWarning={true}>
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("languages.switchLabel")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          {t("languages.english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ar")}>
          {t("languages.arabic")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
