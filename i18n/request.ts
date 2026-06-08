import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !hasLocale(locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});