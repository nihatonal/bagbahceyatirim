import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
   images: {
    qualities: [65,75, 90, 100],
  },
};

export default withNextIntl(nextConfig);
