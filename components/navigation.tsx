"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Extend NavigationMenu to accept dir prop
declare module "@/components/ui/navigation-menu" {
  interface NavigationMenuProps {
    dir?: "ltr" | "rtl";
  }
}

interface NavigationProps {
  dir?: "ltr" | "rtl";
}

export function Navigation({ dir }: NavigationProps) {
  const locale = useLocale();
  const t = useTranslations();

  const navigationItems = [
    {
      title: t("navigation.home"),
      href: "/",
      description:
        locale === "ar" ? "ابدأ مع Nexshad" : "Get started with Nexshad",
    },
    {
      title: t("navigation.about"),
      href: "/about",
      description:
        locale === "ar"
          ? "تعرف على الميزات والتكنولوجيا"
          : "Learn about features and tech",
    },
    {
      title: t("navigation.contact"),
      href: "/contact",
      description:
        locale === "ar"
          ? "تواصل معنا للحصول على الدعم"
          : "Contact us for support",
    },
  ];

  return (
    <NavigationMenu dir={dir}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("navigation.home")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium">Nexshad</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      {locale === "ar"
                        ? "Next.js Starter مع shadcn و next-intl"
                        : "Next.js starter with shadcn and next-intl"}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {navigationItems.slice(1).map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
