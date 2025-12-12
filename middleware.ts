import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  try {
    // Get the Accept-Language header, defaulting to English if not present
    const acceptLanguage =
      request.headers?.get("accept-language") || "en-US,en;q=0.5";
    const languages = new Negotiator({
      "accept-language": acceptLanguage,
    }).languages();
    return match(languages, locales, defaultLocale);
  } catch (error) {
    // Fallback to default locale if header parsing fails
    console.warn("Failed to parse Accept-Language header:", error);
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), static assets, and API routes
    "/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|ico|css|js|woff|woff2)).*)",
  ],
};
