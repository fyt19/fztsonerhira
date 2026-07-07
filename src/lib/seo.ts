import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllLocalKeywords } from "@/lib/local-seo";

/** Marka odaklı anahtar kelimeler — "fizyoterapist soner hıra" aramaları için */
export const brandKeywords = [
  "fizyoterapist soner hıra",
  "soner hıra fizyoterapist",
  "fzt soner hıra",
  "soner hıra ankara",
  "fizyoterapist soner hıra ankara",
  "soner hira fizyoterapist",
  "soner hıra fizik tedavi",
  "soner hıra manuel terapi",
  "soner hıra klinik",
  "ankara soner hıra",
] as const;

export const BRAND_ALTERNATE_NAMES = [
  "Fizyoterapist Soner Hıra",
  "Soner Hıra Fizyoterapist",
  "Fzt. Soner Hıra",
  "Soner Hira",
  "Fizyoterapist Soner Hira Ankara",
] as const;

export const coreServiceKeywords = [
  "ankara fizyoterapist",
  "fizyoterapist ankara",
  "ankara fizik tedavi",
  "ankara manuel terapi",
  "ankara rehabilitasyon",
  "evde fizyoterapi ankara",
  "çukurambar fizyoterapist",
  "çankaya fizyoterapist",
  "keçiören fizyoterapist",
  "yenimahalle fizyoterapist",
  "ortopedik rehabilitasyon ankara",
  "nörolojik rehabilitasyon ankara",
  "pediatrik fizyoterapi ankara",
  "yoğun bakım sonrası fizik tedavi",
] as const;

export function getGlobalKeywords(limit = 60): string[] {
  const local = getAllLocalKeywords();
  return [...new Set([...brandKeywords, ...coreServiceKeywords, ...local])].slice(
    0,
    limit,
  );
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const mergedKeywords = [
    ...new Set([...brandKeywords, ...keywords, ...coreServiceKeywords.slice(0, 8)]),
  ];

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "health",
    alternates: {
      canonical: url,
      languages: { "tr-TR": url },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: `Fizyoterapist ${siteConfig.name}`,
      title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const homeMetadata = buildPageMetadata({
  title:
    "Fizyoterapist Soner Hıra | Ankara Fizik Tedavi, Manuel Terapi & Rehabilitasyon",
  description:
    "Fizyoterapist Soner Hıra — Ankara Çukurambar ve Çankaya'da ortopedik, nörolojik, pediatrik rehabilitasyon, evde fizyoterapi ve manuel terapi. Randevu: +90 533 290 58 29.",
  path: "",
  keywords: getGlobalKeywords(),
});

export const aboutMetadata = buildPageMetadata({
  title: "Fizyoterapist Soner Hıra Hakkında | Ankara Fizik Tedavi Uzmanı",
  description:
    "Fizyoterapist Soner Hıra kimdir? İzmir Üniversitesi mezunu, ortopedi, nöroloji, pediatri ve manuel terapi alanında uzman Ankara fizyoterapisti. Misyon ve vizyon.",
  path: "/hakkimda",
  keywords: [
    "soner hıra hakkında",
    "fizyoterapist soner hıra kimdir",
    "ankara fizyoterapist deneyim",
  ],
});

export const servicesMetadata = buildPageMetadata({
  title: "Hizmetler | Fizyoterapist Soner Hıra — Ankara Rehabilitasyon",
  description:
    "Fizyoterapist Soner Hıra hizmetleri: ortopedik rehabilitasyon, nörolojik tedavi, pediatrik fizyoterapi, evde fizyoterapi, yoğun bakım sonrası fizik tedavi ve manuel terapi.",
  path: "/hizmetlerimiz",
});

export const bookingMetadata = buildPageMetadata({
  title: "Randevu Al | Fizyoterapist Soner Hıra — Ankara",
  description:
    "Fizyoterapist Soner Hıra'dan online randevu alın. Ankara'da fizik tedavi, manuel terapi ve rehabilitasyon için hemen randevu oluşturun.",
  path: "/randevu",
});

export const blogHubMetadata = buildPageMetadata({
  title: "Blog & Haberler | Fizyoterapist Soner Hıra",
  description:
    "Fizyoterapist Soner Hıra blog yazıları, sağlık ipuçları, rehabilitasyon rehberleri ve Ankara fizik tedavi güncellemeleri.",
  path: "/sosyal-hub",
});

export const ankaraHubMetadata = buildPageMetadata({
  title: "Ankara Fizyoterapist Hizmet Bölgeleri | Soner Hıra",
  description:
    "Fizyoterapist Soner Hıra — Ankara'nın tüm ilçe ve mahallelerinde fizik tedavi, manuel terapi ve rehabilitasyon hizmeti. Çukurambar, Çankaya, Keçiören ve daha fazlası.",
  path: "/ankara",
});
