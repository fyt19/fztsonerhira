import type { Metadata } from "next";
import { BlogHero, PostFeed } from "@/components/social/PostCard";
import { getPosts } from "@/actions/posts";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog & Haberler",
  description:
    "Soner Hıra kliniğinden güncel haberler, sağlık ipuçları, blog yazıları ve uzman görüşleri.",
  alternates: { canonical: `${siteConfig.url}/sosyal-hub` },
};

export default async function SocialHubPage() {
  const posts = await getPosts();

  return (
    <main id="main-content" className="pt-28">
      <section className="pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogHero />
          <PostFeed posts={posts} />
        </div>
      </section>
    </main>
  );
}
