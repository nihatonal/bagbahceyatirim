import { getTranslations } from 'next-intl/server';

import ContactHero from '@/components/sections/contact/ContactHero';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';
import ContactClosingSection from '@/components/sections/contact/ContactClosingSection';

import { locales, type Locale } from '@/i18n/routing';

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps) {
  const { locale } = await params;

  const currentLocale = locale as Locale;

  const t = await getTranslations({
    locale: currentLocale,
    namespace: 'contact.meta',
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;

  const currentLocale = locale as Locale;

  if (!locales.includes(currentLocale)) {
    return null;
  }

  return (
    <main className="bg-flora-ivory text-flora-forest">
      <ContactHero />

      <ContactFormSection />

      <ContactClosingSection locale={currentLocale} />
    </main>
  );
}