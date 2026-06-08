import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './i18n/routing';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

export default intlMiddleware;

export const config = {
  matcher: ['/', '/(tr|en|ru)/:path*'],
};