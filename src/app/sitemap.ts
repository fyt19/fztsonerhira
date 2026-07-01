import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { generateAreaSlugs } from "@/lib/local-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    "",
    "/hakkimda",
    "/hizmetlerimiz",
    "/sosyal-hub",
    "/randevu",
    "/ankara",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const areaPages = generateAreaSlugs().map((slug) => ({
    url: `${base}/ankara/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "cukurambar" || slug === "cankaya" ? 0.9 : 0.7,
  }));

  return [...staticPages, ...areaPages];
}
