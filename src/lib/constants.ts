export const siteConfig = {
  name: "Soner Hıra",
  title: "Fizyoterapist Soner Hıra | Ankara Fizik Tedavi & Manuel Terapi",
  description:
    "Fizyoterapist Soner Hıra — Ankara'da ortopedi, nöroloji, pediatri, evde fizyoterapi ve manuel terapi. Çukurambar, Çankaya, Keçiören ve tüm Ankara ilçelerinde güvenilir fizik tedavi hizmeti.",
  url: "https://fztsonerhira.vercel.app",
  locale: "tr_TR",
  language: "tr",
  phone: "+90 533 290 58 29",
  phoneRaw: "905332905829",
  email: "info@sonerhira.com",
  address: {
    street: "Çukurambar Mah. 1443. Cad.",
    city: "Ankara",
    region: "Ankara",
    district: "Çankaya",
    postalCode: "06510",
    country: "TR",
  },
  whatsappMessage:
    "Merhaba Fzt. Soner Hıra, size ulaşmak ve bilgi almak istiyorum.",
  social: {
    instagram: "https://instagram.com/sonerhira",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetlerimiz", label: "Hizmetler" },
  { href: "/sosyal-hub", label: "Blog" },
  { href: "/ankara", label: "Hizmet Bölgeleri" },
  { href: "/randevu", label: "Randevu" },
] as const;

export const whatsappPresets = [
  {
    id: "appointment",
    label: "Randevu Hakkında Bilgi",
    message:
      "Merhaba Fzt. Soner Hıra, randevu konusunda yardım almak istiyorum. Uygun tarih ve saatler hakkında bilgi alabilir miyim?",
  },
  {
    id: "pricing",
    label: "Manuel Terapi Ücretleri",
    message:
      "Merhaba Fzt. Soner Hıra, manuel terapi konusunda yardım almak istiyorum. Seans ücretleri hakkında bilgi alabilir miyim?",
  },
  {
    id: "location",
    label: "Klinik Adresi & Ulaşım",
    message:
      "Merhaba Fzt. Soner Hıra, klinik adresi ve ulaşım konusunda yardım almak istiyorum. Detaylı bilgi alabilir miyim?",
  },
  {
    id: "treatment",
    label: "Tedavi & Rehabilitasyon",
    message:
      "Merhaba Fzt. Soner Hıra, tedavi ve rehabilitasyon konusunda yardım almak istiyorum. Süreç hakkında bilgi alabilir miyim?",
  },
] as const;

export const services = [
  {
    id: "ortopedik",
    title: "Ortopedik Rehabilitasyon",
    description:
      "Kas-iskelet sistemi yaralanmaları, eklem problemleri ve cerrahi sonrası iyileşme süreçlerinde kişiye özel rehabilitasyon programları.",
    icon: "bone" as const,
  },
  {
    id: "norolojik",
    title: "Nörolojik Rehabilitasyon",
    description:
      "Sinir sistemi hastalıkları ve yaralanmaları sonrası hareket, denge ve fonksiyonel kapasiteyi geri kazandırmaya yönelik tedaviler.",
    icon: "brain" as const,
  },
  {
    id: "pediatrik",
    title: "Pediatrik Rehabilitasyon",
    description:
      "Çocuklarda gelişimsel gecikmeler, nörolojik bozukluklar ve ortopedik sorunlara yönelik hassas ve oyun temelli yaklaşımlar.",
    icon: "baby" as const,
  },
  {
    id: "yogun-bakim",
    title: "Yoğun Bakım Sonrası Fizik Tedavi",
    description:
      "Yoğun bakım sürecinden sonra solunum, mobilite ve günlük yaşam aktivitelerine dönüş için kapsamlı rehabilitasyon desteği.",
    icon: "heart-pulse" as const,
  },
  {
    id: "evde-fizyoterapi",
    title: "Evde Fizyoterapi",
    description:
      "Hastane veya kliniğe gidemeyen danışanlar için ev ortamında, kişiye özel fizik tedavi ve rehabilitasyon hizmeti.",
    icon: "home" as const,
  },
  {
    id: "manuel-terapi",
    title: "Manuel Terapi",
    description:
      "Elle uygulanan özel tekniklerle ağrı azaltma, eklem mobilitesi artırma ve doku iyileşmesini destekleyen tedavi yöntemleri.",
    icon: "hand" as const,
  },
] as const;

export const trustValues = [
  {
    title: "Güvenilir",
    description:
      "Her danışanıma şeffaf iletişim ve tutarlı bakım sunarak güven inşa ediyorum.",
    icon: "shield-check" as const,
  },
  {
    title: "Profesyonel",
    description:
      "Güncel bilimsel yaklaşımlar ve klinik deneyimle en yüksek standartlarda hizmet veriyorum.",
    icon: "award" as const,
  },
  {
    title: "Etik Standartlara Uygun",
    description:
      "Mesleki etik ilkelerine bağlı kalarak her tedaviyi danışanımın iyiliği için planlıyorum.",
    icon: "scale" as const,
  },
] as const;

export const aboutBio =
  "Ben, Soner Hıra. Çorum'da doğdum, evli ve bir çocuk babasıyım. 2015 yılında İzmir Üniversitesi Fizik Tedavi ve Rehabilitasyon bölümünden mezun oldum. Kariyerime özel hastaneler, tıp merkezleri ve kendi kliniğimde, ortopedi, nöroloji, pediatri, yoğun bakım gibi alanlarda tecrübe kazandım. Manuel terapi alanında eğitimler aldım. Annem de bir fizyoterapist olduğu için bu mesleği severek ve etik değerlere bağlı kalarak seçtim. Her danışanım için güvenilir, profesyonel ve etik standartlara uygun bir hizmet sunuyorum.";
