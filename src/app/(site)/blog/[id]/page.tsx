import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getPosts } from "@/actions/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostImage } from "@/lib/images";
import { siteConfig } from "@/lib/constants";

const platformConfig = {
  INSTAGRAM: { label: "Instagram", variant: "instagram" as const },
  LINKEDIN: { label: "LinkedIn", variant: "linkedin" as const },
  ARTICLE: { label: "Blog", variant: "article" as const },
  GENERAL: { label: "Haber", variant: "teal" as const },
};

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return { title: "Yazı Bulunamadı" };

  const plainDescription = post.content
    .replace(/\*\*/g, "")
    .replace(/^##\s+/gm, "")
    .replace(/\n+/g, " ")
    .trim();

  return {
    title: post.title,
    description: plainDescription.slice(0, 160),
    openGraph: {
      title: post.title,
      description: plainDescription.slice(0, 160),
      images: [{ url: getPostImage(post.imageUrl) }],
    },
    alternates: { canonical: `${siteConfig.url}/blog/${id}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post || !post.published) notFound();

  const related = (await getPosts(4)).filter((p) => p.id !== post.id).slice(0, 3);
  const platform = platformConfig[post.platform];

  return (
    <main id="main-content" className="pt-28">
      <article className="pb-20">
        {/* Hero image */}
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80">
            <Image
              src={getPostImage(post.imageUrl)}
              alt={post.title}
              fill
              priority
              sizes="90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={platform.variant}>{platform.label}</Badge>
            <time
              dateTime={post.createdAt.toISOString()}
              className="text-sm text-slate-500"
            >
              {post.createdAt.toLocaleDateString("tr-TR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="!mt-10 font-serif text-2xl font-semibold text-navy-900 first:!mt-0"
                  >
                    {block.slice(3)}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-serif text-xl font-semibold text-navy-900">
                    {block.slice(4)}
                  </h3>
                );
              }
              const html = block.replace(
                /\*\*(.+?)\*\*/g,
                "<strong>$1</strong>",
              );
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            })}
          </div>

          {post.externalUrl && (
            <div className="mt-10">
              <Button asChild variant="teal">
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaynak Bağlantısı →
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-slate-100 bg-slate-50 py-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-semibold text-navy-900">
                İlgili Yazılar
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.id}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={getPostImage(rel.imageUrl)}
                        alt={rel.title}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-navy-900 line-clamp-2 group-hover:text-teal-700">
                        {rel.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
