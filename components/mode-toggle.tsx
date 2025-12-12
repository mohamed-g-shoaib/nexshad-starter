"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

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

interface ModeToggleProps {
  dir?: "ltr" | "rtl";
}

export function ModeToggle({ dir }: ModeToggleProps) {
  const { setTheme } = useTheme();
  const t = useTranslations();

  return (
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" suppressHydrationWarning={true}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">{t("theme.toggleLabel")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("theme.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("theme.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("theme.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
