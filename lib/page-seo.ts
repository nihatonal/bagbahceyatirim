import { type Locale } from "@/i18n/routing";
import { type RouteKey } from "@/lib/localized-path";

const siteUrl = "https://www.bagbahceyatirim.com";

type SeoConfig = {
  title: string;
  description: string;
};

export const pageSeo: Record<RouteKey | "home", Record<Locale, SeoConfig>> = {
  home: {
    tr: {
      title: "Bağ Bahçe Yatırım | Kalıcı Değer Üreten Bağ Yatırımları",
      description:
        "Profesyonel yönetilen bağ yatırımlarıyla toprağın gücünü uzun vadeli, sürdürülebilir ve kalıcı değere dönüştürün.",
    },
    en: {
      title: "Bag Bahce Investment | Vineyard Investments Creating Lasting Value",
      description:
        "Build long-term sustainable value through professionally managed vineyard investments and productive agricultural assets.",
    },
  },

  vineyardInvestment: {
    tr: {
      title: "Bağ Yatırımı | Üreten Topraklarla Kalıcı Değer",
      description:
        "Bağ yatırımı nedir, nasıl değer üretir ve neden uzun vadeli bir gerçek varlık yatırımıdır? Bağ Bahçe Yatırım modeliyle keşfedin.",
    },
    en: {
      title: "Vineyard Investment | Lasting Value from Productive Land",
      description:
        "Discover how vineyard investment creates value through production income, land appreciation and professional management.",
    },
  },

  vineyards: {
    tr: {
      title: "Bağlarımız | Seçilmiş Topraklar, Kalıcı Değer",
      description:
        "Konya Bozkırı başta olmak üzere uzun vadeli değer üretme potansiyeline göre seçilen bağ portföyümüzü inceleyin.",
    },
    en: {
      title: "Our Vineyards | Selected Lands, Lasting Value",
      description:
        "Explore our vineyard portfolio selected for long-term value creation, including the Konya Bozkır vineyard.",
    },
  },

  investmentModel: {
    tr: {
      title: "Yatırım Modeli | Profesyonel Bağ Yönetimi",
      description:
        "Arazi analizi, profesyonel yönetim, şeffaf raporlama ve risk yönetimiyle bağ yatırım modelimizi keşfedin.",
    },
    en: {
      title: "Investment Model | Professional Vineyard Management",
      description:
        "Explore our vineyard investment model based on land analysis, professional management, transparent reporting and risk control.",
    },
  },

  about: {
    tr: {
      title: "Hakkımızda | Toprağın Gücüne İnanıyoruz",
      description:
        "Bağ Bahçe Yatırım’ın sürdürülebilir üretim, uzun vadeli değer ve profesyonel tarım yönetimi felsefesini keşfedin.",
    },
    en: {
      title: "About Us | We Believe in the Power of Land",
      description:
        "Discover Bag Bahce Investment’s philosophy of sustainable production, long-term value and professional agricultural management.",
    },
  },

  contact: {
    tr: {
      title: "İletişim | Bağ Yatırımınızı Birlikte Planlayalım",
      description:
        "Bağ yatırımı hakkında bilgi almak ve size uygun yatırım modelini değerlendirmek için Bağ Bahçe Yatırım ile iletişime geçin.",
    },
    en: {
      title: "Contact | Let’s Plan Your Vineyard Investment",
      description:
        "Contact Bag Bahce Investment to evaluate the vineyard investment model best suited to your goals.",
    },
  },

  journal: {
    tr: {
      title: "Journal | Bağ Yatırımı ve Tarım Yatırımı İçgörüleri",
      description:
        "Bağ yatırımı, tarım arazisi yatırımı, üzüm bağı kurulumu ve sürdürülebilir üretim hakkında içgörüler.",
    },
    en: {
      title: "Journal | Vineyard and Agricultural Investment Insights",
      description:
        "Insights on vineyard investment, agricultural land investment, vineyard setup and sustainable production.",
    },
  },
};

export function getCanonicalUrl(locale: Locale, path = "") {
  return `${siteUrl}/${locale}${path}`;
}