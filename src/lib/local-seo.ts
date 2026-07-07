/** Ankara ilçe ve mahalle bazlı yerel SEO verileri */

export type LocalArea = {
  slug: string;
  name: string;
  type: "ilce" | "mahalle";
  parentIlce?: string;
  intro: string;
};

export const ANKARA_CENTER = {
  city: "Ankara",
  region: "Ankara",
  postalCode: "06510",
  latitude: 39.9042,
  longitude: 32.8597,
} as const;

/** Tüm hizmet bölgeleri — ilçeler + yüksek arama hacimli mahalleler */
export const ankaraAreas: LocalArea[] = [
  // Mahalleler (yüksek arama hacmi)
  {
    slug: "cukurambar",
    name: "Çukurambar",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Çukurambar ve çevresinde ortopedik rehabilitasyon, manuel terapi ve kişiye özel fizik tedavi hizmeti sunuyorum. Bölgeye kolay ulaşım imkânı.",
  },
  {
    slug: "umitkoy",
    name: "Ümitköy",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Ümitköy'de yaşayan danışanlarıma ortopedi, nöroloji ve manuel terapi alanlarında profesyonel fizyoterapi hizmeti veriyorum.",
  },
  {
    slug: "oran",
    name: "Oran",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Oran bölgesinden gelen danışanlarım için kapsamlı değerlendirme ve tedavi programları uyguluyorum.",
  },
  {
    slug: "bilkent",
    name: "Bilkent",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Bilkent ve çevresinde fizik tedavi, rehabilitasyon ve manuel terapi hizmetleri sunuyorum.",
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Bahçelievler bölgesindeki danışanlarıma güvenilir ve etik standartlara uygun fizyoterapi hizmeti sağlıyorum.",
  },
  {
    slug: "dikmen",
    name: "Dikmen",
    type: "mahalle",
    parentIlce: "Çankaya",
    intro:
      "Dikmen ve yakın çevresinde ortopedik ve nörolojik rehabilitasyon alanlarında uzman destek sunuyorum.",
  },
  {
    slug: "batikent",
    name: "Batıkent",
    type: "mahalle",
    parentIlce: "Yenimahalle",
    intro:
      "Batıkent'te yaşayan danışanlarım için kişiye özel fizik tedavi ve rehabilitasyon programları hazırlıyorum.",
  },
  {
    slug: "ostim",
    name: "Ostim",
    type: "mahalle",
    parentIlce: "Yenimahalle",
    intro:
      "Ostim bölgesinden randevu alan danışanlarıma manuel terapi ve ortopedik rehabilitasyon hizmeti veriyorum.",
  },
  {
    slug: "etlik",
    name: "Etlik",
    type: "mahalle",
    parentIlce: "Keçiören",
    intro:
      "Etlik ve çevresinde fizyoterapi, ağrı yönetimi ve fonksiyonel rehabilitasyon desteği sunuyorum.",
  },
  {
    slug: "demetevler",
    name: "Demetevler",
    type: "mahalle",
    parentIlce: "Yenimahalle",
    intro:
      "Demetevler bölgesindeki danışanlarıma profesyonel fizik tedavi ve manuel terapi uygulamaları sağlıyorum.",
  },

  // İlçeler
  {
    slug: "cankaya",
    name: "Çankaya",
    type: "ilce",
    intro:
      "Ankara'nın merkez ilçesi Çankaya'da ortopedi, nöroloji, pediatri ve manuel terapi alanlarında fizyoterapi hizmeti veriyorum.",
  },
  {
    slug: "kecioren",
    name: "Keçiören",
    type: "ilce",
    intro:
      "Keçiören ilçesinden gelen danışanlarıma kapsamlı fizik tedavi ve rehabilitasyon desteği sunuyorum.",
  },
  {
    slug: "yenimahalle",
    name: "Yenimahalle",
    type: "ilce",
    intro:
      "Yenimahalle ve çevresinde güvenilir, profesyonel fizyoterapi hizmeti ile yanınızdayım.",
  },
  {
    slug: "mamak",
    name: "Mamak",
    type: "ilce",
    intro:
      "Mamak ilçesindeki danışanlarıma ortopedik rehabilitasyon ve manuel terapi uygulamaları sağlıyorum.",
  },
  {
    slug: "etimesgut",
    name: "Etimesgut",
    type: "ilce",
    intro:
      "Etimesgut bölgesinde fizik tedavi, ağrı yönetimi ve kişiye özel egzersiz programları sunuyorum.",
  },
  {
    slug: "sincan",
    name: "Sincan",
    type: "ilce",
    intro:
      "Sincan ilçesinden randevu alan danışanlarıma profesyonel rehabilitasyon hizmeti veriyorum.",
  },
  {
    slug: "pursaklar",
    name: "Pursaklar",
    type: "ilce",
    intro:
      "Pursaklar ve çevresinde ortopedik ve nörolojik rehabilitasyon alanlarında fizyoterapi desteği sunuyorum.",
  },
  {
    slug: "altindag",
    name: "Altındağ",
    type: "ilce",
    intro:
      "Altındağ ilçesindeki danışanlarıma güvenilir ve etik standartlara uygun fizik tedavi hizmeti sağlıyorum.",
  },
  {
    slug: "golbasi",
    name: "Gölbaşı",
    type: "ilce",
    intro:
      "Gölbaşı bölgesinde ortopedi, manuel terapi ve pediatrik rehabilitasyon hizmetleri sunuyorum.",
  },
  {
    slug: "polatli",
    name: "Polatlı",
    type: "ilce",
    intro:
      "Polatlı ilçesinden gelen danışanlarıma kapsamlı fizyoterapi ve rehabilitasyon programları uyguluyorum.",
  },
  {
    slug: "ayas",
    name: "Ayaş",
    type: "ilce",
    intro:
      "Ayaş ve çevresindeki danışanlarıma ortopedik rehabilitasyon ve manuel terapi hizmeti veriyorum.",
  },
  {
    slug: "beypazari",
    name: "Beypazarı",
    type: "ilce",
    intro:
      "Beypazarı ilçesinde fizik tedavi ve rehabilitasyon alanında profesyonel destek sunuyorum.",
  },
  {
    slug: "cubuk",
    name: "Çubuk",
    type: "ilce",
    intro:
      "Çubuk bölgesindeki danışanlarıma kişiye özel fizyoterapi ve ağrı yönetimi hizmeti sağlıyorum.",
  },
  {
    slug: "elmadag",
    name: "Elmadağ",
    type: "ilce",
    intro:
      "Elmadağ ilçesinden randevu alan danışanlarıma güvenilir fizik tedavi hizmeti sunuyorum.",
  },
  {
    slug: "akyurt",
    name: "Akyurt",
    type: "ilce",
    intro:
      "Akyurt ve çevresinde ortopedik rehabilitasyon ve manuel terapi uygulamaları gerçekleştiriyorum.",
  },
  {
    slug: "bala",
    name: "Bala",
    type: "ilce",
    intro:
      "Bala ilçesindeki danışanlarıma profesyonel fizyoterapi ve rehabilitasyon desteği veriyorum.",
  },
  {
    slug: "camilidere",
    name: "Çamlıdere",
    type: "ilce",
    intro:
      "Çamlıdere bölgesinde fizik tedavi ve fonksiyonel rehabilitasyon hizmetleri sunuyorum.",
  },
  {
    slug: "evren",
    name: "Evren",
    type: "ilce",
    intro:
      "Evren ilçesinden gelen danışanlarıma ortopedi ve manuel terapi alanlarında uzman destek sağlıyorum.",
  },
  {
    slug: "gudul",
    name: "Güdül",
    type: "ilce",
    intro:
      "Güdül ve çevresinde güvenilir fizyoterapi hizmeti ile sağlığınız için yanınızdayım.",
  },
  {
    slug: "haymana",
    name: "Haymana",
    type: "ilce",
    intro:
      "Haymana ilçesindeki danışanlarıma kişiye özel rehabilitasyon programları uyguluyorum.",
  },
  {
    slug: "kalecik",
    name: "Kalecik",
    type: "ilce",
    intro:
      "Kalecik bölgesinde fizik tedavi ve ortopedik rehabilitasyon hizmetleri sunuyorum.",
  },
  {
    slug: "kazan",
    name: "Kazan",
    type: "ilce",
    intro:
      "Kazan ilçesinden randevu alan danışanlarıma profesyonel fizyoterapi desteği veriyorum.",
  },
  {
    slug: "kizilcahamam",
    name: "Kızılcahamam",
    type: "ilce",
    intro:
      "Kızılcahamam ve çevresinde manuel terapi, ortopedi ve nörolojik rehabilitasyon hizmeti sunuyorum.",
  },
  {
    slug: "nallihan",
    name: "Nallıhan",
    type: "ilce",
    intro:
      "Nallıhan ilçesindeki danışanlarıma güvenilir fizik tedavi hizmeti sağlıyorum.",
  },
  {
    slug: "sereflikochisar",
    name: "Şereflikoçhisar",
    type: "ilce",
    intro:
      "Şereflikoçhisar bölgesinde ortopedik rehabilitasyon ve fizyoterapi hizmetleri sunuyorum.",
  },
];

export function getAreaBySlug(slug: string): LocalArea | undefined {
  return ankaraAreas.find((a) => a.slug === slug);
}

export function getAreaTitle(area: LocalArea): string {
  return `${area.name} Fizyoterapist Soner Hıra`;
}

export function getAreaMetaDescription(area: LocalArea): string {
  const location =
    area.type === "mahalle" && area.parentIlce
      ? `${area.name}, ${area.parentIlce}`
      : area.name;
  return `Fizyoterapist Soner Hıra — ${location} fizyoterapist. Ortopedi, manuel terapi, nörolojik ve pediatrik rehabilitasyon. Ankara'da güvenilir fizik tedavi. Randevu: +90 533 290 58 29.`;
}

export function getAreaKeywords(area: LocalArea): string[] {
  const base = [
    `fizyoterapist soner hıra ${area.name.toLowerCase()}`,
    `${area.name.toLowerCase()} fizyoterapist soner hıra`,
    `${area.name.toLowerCase()} fizyoterapist`,
    `${area.name.toLowerCase()} fizik tedavi`,
    `${area.name.toLowerCase()} rehabilitasyon`,
    `${area.name.toLowerCase()} manuel terapi`,
    `ankara ${area.name.toLowerCase()} fizyoterapist`,
    "fizyoterapist soner hıra",
    "soner hıra fizyoterapist",
    "ankara fizyoterapist",
  ];
  if (area.parentIlce) {
    base.push(
      `${area.parentIlce.toLowerCase()} fizyoterapist`,
      `${area.name.toLowerCase()} ${area.parentIlce.toLowerCase()} fizyoterapist`,
    );
  }
  return base;
}

/** Tüm yerel SEO anahtar kelimeleri (root metadata için) */
export function getAllLocalKeywords(): string[] {
  return ankaraAreas.flatMap((a) => getAreaKeywords(a).slice(0, 3));
}

export function getIlceAreas(): LocalArea[] {
  return ankaraAreas.filter((a) => a.type === "ilce");
}

export function getMahalleAreas(): LocalArea[] {
  return ankaraAreas.filter((a) => a.type === "mahalle");
}

export function generateAreaSlugs(): string[] {
  return ankaraAreas.map((a) => a.slug);
}
