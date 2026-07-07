import { siteConfig as defaultConfig } from "@/lib/constants";

export type SiteContentData = {
  name: string;
  title: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappMessage: string;
  aboutBio: string;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  addressStreet: string;
  addressCity: string;
  addressDistrict: string;
  addressPostalCode: string;
  instagramUrl: string;
};

export const defaultSiteContent: SiteContentData = {
  name: defaultConfig.name,
  title: defaultConfig.title,
  description: defaultConfig.description,
  phone: defaultConfig.phone,
  phoneRaw: defaultConfig.phoneRaw,
  email: defaultConfig.email,
  whatsappMessage: defaultConfig.whatsappMessage,
  aboutBio:
    "Ben, Soner Hıra. Çorum'da doğdum, evli ve bir çocuk babasıyım. 2015 yılında İzmir Üniversitesi Fizik Tedavi ve Rehabilitasyon bölümünden mezun oldum. Kariyerime özel hastaneler, tıp merkezleri ve kendi kliniğimde, ortopedi, nöroloji, pediatri, yoğun bakım gibi alanlarda tecrübe kazandım. Manuel terapi alanında eğitimler aldım. Annem de bir fizyoterapist olduğu için bu mesleği severek ve etik değerlere bağlı kalarak seçtim. Her danışanım için güvenilir, profesyonel ve etik standartlara uygun bir hizmet sunuyorum.",
  heroBadge: "Fizyoterapist Soner Hıra · Ankara",
  heroTitleLine1: "Fizyoterapist Soner Hıra",
  heroTitleLine2: "Ankara'da Güvenilir Fizik Tedavi",
  heroDescription:
    "Ortopedik rehabilitasyon, nörolojik tedavi, pediatrik fizyoterapi, evde fizyoterapi ve manuel terapi alanlarında kişiye özel tedavi planları.",
  stat1Value: "10+",
  stat1Label: "Yıllık Deneyim",
  stat2Value: "2.500+",
  stat2Label: "Mutlu Hasta",
  stat3Value: "15+",
  stat3Label: "Tedavi Alanı",
  addressStreet: defaultConfig.address.street,
  addressCity: defaultConfig.address.city,
  addressDistrict: defaultConfig.address.district,
  addressPostalCode: defaultConfig.address.postalCode,
  instagramUrl: defaultConfig.social.instagram,
};
