import { siteConfig } from "@/lib/constants";
import { images } from "@/lib/images";
import {
  ankaraAreas,
  ANKARA_CENTER,
} from "@/lib/local-seo";

/** Local Business / MedicalClinic structured data for organic local SEO. */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician"],
    "@id": `${siteConfig.url}/#organization`,
    name: `${siteConfig.name} — Ankara Fizyoterapist`,
    description: siteConfig.description,
    url: siteConfig.url,
    image: images.og,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    medicalSpecialty: [
      "PhysicalTherapy",
      "Orthopedic",
      "Neurologic",
      "Pediatric",
    ],
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
      name: area.type === "mahalle" && area.parentIlce
        ? `${area.name}, ${area.parentIlce}, Ankara`
        : `${area.name}, Ankara`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Fizyoterapist",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "İzmir Üniversitesi",
      },
    },
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
    description,
    url: `${siteConfig.url}/ankara/${slug}`,
    telephone: siteConfig.phone,
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
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
