/**
 * Curated Unsplash photos — physiotherapy & healthcare themed.
 * https://unsplash.com/license (free for commercial use)
 */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  /** Ana sayfa hero / slider görseli */
  hero: "/images/slider.jpeg",
  slider: "/images/slider.jpeg",
  portrait: "/images/slider.jpeg",
  clinic: u("photo-1519494024563-4f70378a4fd2", 1600),
  blogDefault: u("photo-1576091160399-112ba8d25d1d", 1200),
  og: "/images/slider.jpeg",
  services: {
    ortopedik: u("photo-1599058917765-a780eda07a93", 1000),
    norolojik: u("photo-1559757148-5c350d0d3c56", 1000),
    pediatrik: u("photo-1503454537195-1dcabb73ffb9", 1000),
    "yogun-bakim": u("photo-1579684385127-1ef15a50893", 1000),
    "evde-fizyoterapi": u("photo-1586773865888-76d01f958963", 1000),
    "manuel-terapi": u("photo-1544161515-4ab6ce6db874", 1000),
  },
  trust: {
    guvenilir: u("photo-1573496359142-b8d87734a5a2", 800),
    profesyonel: u("photo-1559839734-2b71ea197ec2", 800),
    etik: u("photo-1582750431439-352cc7478e3e", 800),
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

export function getPostImage(imageUrl: string | null | undefined): string {
  if (!imageUrl) return images.blogDefault;
  if (imageUrl.endsWith(".svg")) return images.blogDefault;
  return imageUrl;
}
