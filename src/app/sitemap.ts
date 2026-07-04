import type { MetadataRoute } from "next";
import { getPosts } from "@/actions/posts";
import { siteConfig } from "@/lib/constants";
import { generateAreaSlugs } from "@/lib/local-seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const posts = await getPosts();
  const blogPages = posts.map((post) => ({
    url: `${base}/blog/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...areaPages, ...blogPages];
}
