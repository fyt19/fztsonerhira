import type { MetadataRoute } from "next";
import { getPosts } from "@/actions/posts";
import { siteConfig } from "@/lib/constants";
import { generateAreaSlugs } from "@/lib/local-seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/hakkimda", priority: 0.95 },
    { path: "/hizmetlerimiz", priority: 0.9 },
    { path: "/randevu", priority: 0.9 },
    { path: "/sosyal-hub", priority: 0.8 },
    { path: "/ankara", priority: 0.9 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const areaPages = generateAreaSlugs().map((slug) => ({
    url: `${base}/ankara/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      slug === "cukurambar" || slug === "cankaya" || slug === "kecioren"
        ? 0.85
        : 0.75,
  }));

  const posts = await getPosts();
  const blogPages = posts.map((post) => ({
    url: `${base}/blog/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...areaPages, ...blogPages];
}
