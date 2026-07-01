"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { getPostImage, images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const platformConfig = {
  INSTAGRAM: { label: "Instagram", variant: "instagram" as const },
  LINKEDIN: { label: "LinkedIn", variant: "linkedin" as const },
  ARTICLE: { label: "Blog", variant: "article" as const },
  GENERAL: { label: "Haber", variant: "teal" as const },
};

type PostCardProps = {
  post: Post;
  featured?: boolean;
};

export function PostCard({ post, featured = false }: PostCardProps) {
  const platform = platformConfig[post.platform];
  const cover = getPostImage(post.imageUrl);

  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-xl hover:shadow-teal-600/10",
        featured && "md:col-span-2 lg:row-span-2",
      )}
    >
      <Link href={`/blog/${post.id}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[16/9] lg:aspect-auto lg:h-[320px]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={cover}
            alt={post.title}
            fill
            sizes={featured ? "60vw" : "33vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          <div className="absolute left-4 top-4">
            <Badge variant={platform.variant}>{platform.label}</Badge>
          </div>
        </div>

        <div className={cn("p-6", featured && "lg:p-8")}>
          <time
            dateTime={post.createdAt.toISOString()}
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            {post.createdAt.toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <h3
            className={cn(
              "mt-2 font-serif font-semibold text-navy-900 transition-colors group-hover:text-teal-700",
              featured ? "text-2xl lg:text-3xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>

          <p
            className={cn(
              "mt-3 leading-relaxed text-slate-600",
              featured ? "line-clamp-4 text-base" : "line-clamp-3 text-sm",
            )}
          >
            {post.content}
          </p>

          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
            Devamını Oku
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

type PostFeedProps = {
  posts: Post[];
  limit?: number;
  layout?: "grid" | "masonry";
};

export function PostFeed({ posts, limit, layout = "grid" }: PostFeedProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  if (displayPosts.length === 0) {
    return (
      <div className="overflow-hidden rounded-3xl border border-dashed border-slate-200">
        <div className="relative aspect-[21/9]">
          <Image
            src={images.blogDefault}
            alt="Blog"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="rounded-full bg-white/90 px-6 py-3 text-slate-500 shadow-sm">
              Henüz blog yazısı bulunmuyor.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (layout === "masonry") {
    return (
      <motion.div
        className="columns-1 gap-6 sm:columns-2 lg:columns-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {displayPosts.map((post, i) => (
          <div key={post.id} className="mb-6 break-inside-avoid">
            <PostCard post={post} featured={i === 0} />
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {displayPosts.map((post, i) => (
        <PostCard
          key={post.id}
          post={post}
          featured={i === 0 && !limit}
        />
      ))}
    </motion.div>
  );
}

/** Blog section hero banner for pages */
export function BlogHero() {
  return (
    <div className="relative mb-14 overflow-hidden rounded-3xl">
      <div className="relative aspect-[21/7] min-h-[200px]">
        <Image
          src={images.blogDefault}
          alt="Blog ve sağlık yazıları"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-widest text-teal-300"
          >
            Blog & Haberler
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
          >
            Sağlık, Tedavi ve Klinik Güncellemeleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-xl text-slate-200"
          >
            Uzman görüşleri, rehabilitasyon ipuçları ve kliniğimizden haberler.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
