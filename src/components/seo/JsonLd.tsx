import { siteConfig, services } from "@/lib/constants";
import { images } from "@/lib/images";
import { ankaraAreas, ANKARA_CENTER } from "@/lib/local-seo";
import { BRAND_ALTERNATE_NAMES } from "@/lib/seo";

const organizationId = `${siteConfig.url}/#organization`;
const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

/** Site geneli yapılandırılmış veri — @graph ile zengin schema */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: `Fizyoterapist ${siteConfig.name}`,
        alternateName: [...BRAND_ALTERNATE_NAMES],
        description: siteConfig.description,
        inLanguage: "tr-TR",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: [...BRAND_ALTERNATE_NAMES],
        jobTitle: "Fizyoterapist",
        description:
          "Ankara'da ortopedi, nöroloji, pediatri, evde fizyoterapi ve manuel terapi alanlarında uzman fizyoterapist.",
        url: `${siteConfig.url}/hakkimda`,
        image: images.og,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        worksFor: { "@id": organizationId },
        knowsAbout: [
          "Fizyoterapi",
          "Fizik Tedavi",
          "Manuel Terapi",
          "Ortopedik Rehabilitasyon",
          "Nörolojik Rehabilitasyon",
          "Pediatrik Rehabilitasyon",
          "Evde Fizyoterapi",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "İzmir Üniversitesi",
          department: "Fizik Tedavi ve Rehabilitasyon",
        },
        sameAs: [siteConfig.social.instagram],
      },
      {
        "@type": ["MedicalBusiness", "Physician", "ProfessionalService"],
        "@id": organizationId,
        name: `Fizyoterapist ${siteConfig.name}`,
        alternateName: [...BRAND_ALTERNATE_NAMES],
        description: siteConfig.description,
        url: siteConfig.url,
        image: images.og,
        logo: images.og,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        founder: { "@id": personId },
        employee: { "@id": personId },
        medicalSpecialty: [
          "PhysicalTherapy",
          "Orthopedic",
          "Neurologic",
          "Pediatric",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fizyoterapi Hizmetleri",
          itemListElement: services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              provider: { "@id": organizationId },
            },
          })),
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: ANKARA_CENTER.latitude,
          longitude: ANKARA_CENTER.longitude,
        },
        areaServed: ankaraAreas.map((area) => ({
          "@type": "Place",
          name:
            area.type === "mahalle" && area.parentIlce
              ? `${area.name}, ${area.parentIlce}, Ankara`
              : `${area.name}, Ankara`,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        sameAs: [siteConfig.social.instagram],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Ana sayfa FAQ schema — marka aramaları için */
export function HomeFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Fizyoterapist Soner Hıra kimdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Soner Hıra, İzmir Üniversitesi Fizik Tedavi ve Rehabilitasyon mezunu, Ankara'da ortopedi, nöroloji, pediatri, evde fizyoterapi ve manuel terapi alanlarında hizmet veren uzman fizyoterapisttir.",
        },
      },
      {
        "@type": "Question",
        name: "Fizyoterapist Soner Hıra nerede hizmet veriyor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fizyoterapist Soner Hıra, Ankara Çukurambar ve Çankaya merkezli kliniğinde hizmet vermekte olup Çukurambar, Ümitköy, Oran, Bilkent ve Ankara'nın tüm ilçelerinden danışan kabul etmektedir. Evde fizyoterapi hizmeti de sunulmaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "Fizyoterapist Soner Hıra'dan nasıl randevu alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "sonerhira.com/randevu adresinden online randevu alabilir veya +90 533 290 58 29 numaralı telefondan iletişime geçebilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Fizyoterapist Soner Hıra hangi tedavileri uyguluyor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ortopedik rehabilitasyon, nörolojik rehabilitasyon, pediatrik fizyoterapi, yoğun bakım sonrası fizik tedavi, evde fizyoterapi ve manuel terapi hizmetleri sunulmaktadır.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** İlçe/mahalle sayfası için yerel JSON-LD */
export function LocalAreaJsonLd({
  areaName,
  slug,
  description,
}: {
  areaName: string;
  slug: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${areaName} Fizyoterapist — ${siteConfig.name}`,
    alternateName: [
      `Fizyoterapist Soner Hıra ${areaName}`,
      `${areaName} Fizyoterapist Soner Hıra`,
    ],
    description,
    url: `${siteConfig.url}/ankara/${slug}`,
    telephone: siteConfig.phone,
    employee: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Fizyoterapist",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "Place",
      name: `${areaName}, Ankara`,
    },
    parentOrganization: {
      "@id": organizationId,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
