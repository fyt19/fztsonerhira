/**
 * Yerel görsel yolları — harici CDN bağımlılığı yok, 404 riski yok.
 */
export const images = {
  /** Ana sayfa hero / slider görseli */
  hero: "/images/slider.jpeg",
  slider: "/images/slider.jpeg",
  portrait: "/images/slider.jpeg",
  clinic: "/images/slider.jpeg",
  blogDefault: "/images/slider.jpeg",
  og: "/images/slider.jpeg",
  services: {
    ortopedik: "/images/services/ortopedik.svg",
    norolojik: "/images/services/norolojik.svg",
    pediatrik: "/images/services/pediatrik.svg",
    "yogun-bakim": "/images/services/yogun-bakim.svg",
    "evde-fizyoterapi": "/images/slider.jpeg",
    "manuel-terapi": "/images/services/manuel-terapi.svg",
  },
  trust: {
    guvenilir: "/images/trust/guvenilir.svg",
    profesyonel: "/images/trust/profesyonel.svg",
    etik: "/images/trust/etik.svg",
  },
} as const;

export function getServiceImage(serviceId: string): string {
  return (
    images.services[serviceId as keyof typeof images.services] ??
    images.hero
  );
}

export function getTrustImage(index: number): string {
  const keys = Object.values(images.trust);
  return keys[index % keys.length];
}

export function isLocalImage(url: string): boolean {
  return url.startsWith("/");
}

export function getPostImage(imageUrl: string | null | undefined): string {
  if (!imageUrl) return images.blogDefault;
  return imageUrl;
}
