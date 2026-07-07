import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { siteConfig, services } from "@/lib/constants";
import { ankaraAreas } from "@/lib/local-seo";
import { images } from "@/lib/images";

import { ankaraHubMetadata } from "@/lib/seo";

export const metadata: Metadata = ankaraHubMetadata;

export default function AnkaraHubPage() {
  const mahalleler = ankaraAreas.filter((a) => a.type === "mahalle");
  const ilceler = ankaraAreas.filter((a) => a.type === "ilce");

  return (
    <main id="main-content" className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <Image src={images.slider} alt="" fill className="object-cover" aria-hidden />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Ankara · Yerel Hizmet
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Ankara Fizyoterapist Hizmet Bölgeleri
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Çukurambar merkezli kliniğimizden Ankara&apos;nın tüm ilçe ve
            mahallelerine ortopedi, manuel terapi ve rehabilitasyon hizmeti
            sunuyoruz.
          </p>
          <Button asChild variant="teal" size="lg" className="mt-8">
            <Link href="/randevu">Randevu Al →</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mahalleler"
            title="Popüler Mahalleler"
            description="Ankara'nın en çok aranan bölgelerinde fizyoterapi hizmeti."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mahalleler.map((area, i) => (
              <AnimateOnScroll key={area.slug} delay={i * 0.03}>
                <Link
                  href={`/ankara/${area.slug}`}
                  className="group block rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                >
                  <h2 className="font-semibold text-navy-900 group-hover:text-teal-700">
                    {area.name} Fizyoterapist
                  </h2>
                  {area.parentIlce && (
                    <p className="mt-1 text-xs text-slate-400">
                      {area.parentIlce}, Ankara
                    </p>
                  )}
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {area.intro}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="İlçeler"
            title="Ankara İlçeleri"
            description="25 ilçenin tamamında fizik tedavi ve rehabilitasyon desteği."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ilceler.map((area, i) => (
              <AnimateOnScroll key={area.slug} delay={i * 0.02}>
                <Link
                  href={`/ankara/${area.slug}`}
                  className="group block rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                >
                  <h2 className="font-semibold text-navy-900 group-hover:text-teal-700">
                    {area.name} Fizyoterapist
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">Ankara</p>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {area.intro}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services cross-link for SEO */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy-900">
            Ankara&apos;da Sunduğumuz Hizmetler
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href="/hizmetlerimiz"
                  className="text-teal-700 hover:text-teal-800 hover:underline"
                >
                  Ankara {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
