import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(tr|en)/:path*"],
};