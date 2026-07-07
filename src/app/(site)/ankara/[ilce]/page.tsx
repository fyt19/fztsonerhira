import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LocalAreaJsonLd } from "@/components/seo/JsonLd";
import { siteConfig, services } from "@/lib/constants";
import {
  ankaraAreas,
  getAreaBySlug,
  getAreaKeywords,
  getAreaMetaDescription,
  getAreaTitle,
  generateAreaSlugs,
} from "@/lib/local-seo";
import { images } from "@/lib/images";
import { getPostByTitle } from "@/actions/posts";

type Props = { params: Promise<{ ilce: string }> };

export function generateStaticParams() {
  return generateAreaSlugs().map((ilce) => ({ ilce }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const area = getAreaBySlug(ilce);
  if (!area) return { title: "Bölge Bulunamadı" };

  const title = getAreaTitle(area);
  const description = getAreaMetaDescription(area);

  return {
    title,
    description,
    keywords: getAreaKeywords(area),
    openGraph: { title, description, images: [{ url: images.og }] },
    alternates: { canonical: `${siteConfig.url}/ankara/${ilce}` },
  };
}

export default async function LocalAreaPage({ params }: Props) {
  const { ilce } = await params;
  const area = getAreaBySlug(ilce);
  if (!area) notFound();

  const locationLabel =
    area.type === "mahalle" && area.parentIlce
      ? `${area.name}, ${area.parentIlce}`
      : area.name;

  const relatedAreas = ankaraAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 8);

  const blogPost = await getPostByTitle(
    `${area.name} Fizyoterapist | Ankara Fizik Tedavi Rehberi`,
  );

  return (
    <main id="main-content" className="pt-28">
      <LocalAreaJsonLd
        areaName={area.name}
        slug={area.slug}
        description={getAreaMetaDescription(area)}
      />

      <article>
        <header className="relative overflow-hidden bg-navy-900 py-20">
          <div className="absolute inset-0 opacity-15">
            <Image src={images.slider} alt="" fill className="object-cover" aria-hidden />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Ankara · {area.type === "mahalle" ? "Mahalle" : "İlçe"}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
              {area.name} Fizyoterapist Soner Hıra
            </h1>
            <p className="mt-2 text-lg text-teal-200">
              Fizyoterapist {siteConfig.name} — Ankara
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-slate-300">{area.intro}</p>
            <Button asChild variant="teal" size="lg" className="mt-8">
              <Link href="/randevu">{locationLabel} Randevu Al →</Link>
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <section aria-labelledby="area-about">
            <h2 id="area-about" className="font-serif text-2xl font-semibold text-navy-900">
              {locationLabel} Fizik Tedavi ve Rehabilitasyon
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                <strong>{locationLabel}</strong> bölgesinde aktif olarak hizmet
                veren fizyoterapist <strong>{siteConfig.name}</strong>,
                ortopedik rehabilitasyon, nörolojik rehabilitasyon, pediatrik
                rehabilitasyon ve manuel terapi alanlarında uzman destek sunmaktadır.
              </p>
              <p>
                {area.intro} Kişiye özel değerlendirme sonrası bilimsel temelli
                tedavi planları oluşturulmakta; her danışan için güvenilir,
                profesyonel ve etik standartlara uygun hizmet sağlanmaktadır.
              </p>
              <p>
                Ankara genelinde, özellikle {area.type === "mahalle" && area.parentIlce
                  ? `${area.parentIlce} ilçesi ${area.name} mahallesi`
                  : `${area.name} ilçesi`}{" "}
                ve çevresinden gelen danışanlarımıza randevu sistemi üzerinden
                kolayca ulaşabilirsiniz.
              </p>
            </div>
          </section>

          <section className="mt-14" aria-labelledby="area-services">
            <h2 id="area-services" className="font-serif text-2xl font-semibold text-navy-900">
              {area.name}&apos;da Sunduğumuz Hizmetler
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <li
                  key={s.id}
                  className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                >
                  <h3 className="font-semibold text-navy-900">
                    {area.name} {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                    {s.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {blogPost && (
            <section className="mt-14 rounded-2xl border border-primary/20 bg-primary-light/40 p-8">
              <h2 className="font-serif text-xl font-semibold text-navy-900">
                {area.name} Fizyoterapist Detaylı Rehber
              </h2>
              <p className="mt-3 text-slate-600">
                {area.name} bölgesinde fizik tedavi, rehabilitasyon ve manuel terapi
                hakkında kapsamlı bilgi için blog yazımızı okuyun.
              </p>
              <Button asChild variant="teal" className="mt-5">
                <Link href={`/blog/${blogPost.id}`}>
                  {area.name} Fizyoterapist Blog Yazısı →
                </Link>
              </Button>
            </section>
          )}

          <section className="mt-14 rounded-2xl bg-teal-50 p-8 text-center">
            <h2 className="font-serif text-xl font-semibold text-navy-900">
              {locationLabel} Fizyoterapist Randevusu
            </h2>
            <p className="mt-3 text-slate-600">
              Online randevu sistemimizle birkaç adımda randevunuzu oluşturun.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="teal">
                <Link href="/randevu">Randevu Al</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteConfig.phoneRaw}`}>Hemen Ara</a>
              </Button>
            </div>
          </section>
        </div>

        <section className="border-t border-slate-100 bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-xl font-semibold text-navy-900">
              Diğer Ankara Hizmet Bölgeleri
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {relatedAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/ankara/${a.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                >
                  {a.name} Fizyoterapist
                </Link>
              ))}
              <Link
                href="/ankara"
                className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"
              >
                Tüm Bölgeler →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
