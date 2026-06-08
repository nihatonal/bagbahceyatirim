import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://floraadinda.com"),
  title: {
    default: "Bag Bahce Yatirim",
    template: "%s | Flora Studio",
  },
  description:
    "Flora Studio; peyzaj mimarisi, bahçe tasarımı ve uygulama hizmetleriyle doğayla uyumlu, zamansız yaşam alanları tasarlar.",
  keywords: [
    "peyzaj",
    "peyzaj tasarımı",  
    "bahçe tasarımı",
    "flora tasarım",
    "landscape design",
    "villa bahçesi",
    "premium peyzaj",
  ],
  authors: [{ name: "Flora Studio" }],
  creator: "Flora Studio",
  publisher: "Flora Studio",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://floraadinda.com",
    siteName: "Flora Studio",
    title: "Flora Studio | Premium Peyzaj ve Flora Tasarımı",
    description:
      "Doğayla uyum içinde, zamansız mekanlar tasarlayan premium peyzaj ve flora tasarım stüdyosu.",
    images: [
      {
        url: "/images/og/flora-adinda-og.jpg",
        width: 1200,
        height: 630,
        alt: "Flora Studio Landscape Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Studio | Premium Peyzaj ve Flora Tasarımı",
    description:
      "Doğayla uyum içinde, zamansız mekanlar tasarlayan premium peyzaj ve flora tasarım stüdyosu.",
    images: ["/images/og/flora-adinda-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-flora-ivory font-body text-flora-charcoal antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}