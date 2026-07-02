import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Heart,
  Stethoscope,
  Hand,
  ArrowRight,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { aboutBio, siteConfig } from "@/lib/constants";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `${siteConfig.name} hakkında — İzmir Üniversitesi mezunu fizyoterapist, ortopedi, nöroloji, pediatri ve manuel terapi uzmanı.`,
  alternates: { canonical: `${siteConfig.url}/hakkimda` },
};

const credentials = [
  {
    icon: GraduationCap,
    label: "İzmir Üniversitesi",
    detail: "Fizik Tedavi ve Rehabilitasyon, 2015",
  },
  {
    icon: MapPin,
    label: "Çorum",
    detail: "Memleket",
  },
  {
    icon: Heart,
    label: "Aile",
    detail: "Evli, bir çocuk babası",
  },
];

const highlights = [
  {
    icon: Stethoscope,
    title: "Klinik Deneyim",
    description:
      "Özel hastaneler, tıp merkezleri ve kendi kliniğimde ortopedi, nöroloji, pediatri ve yoğun bakım alanlarında kapsamlı deneyim kazandım.",
  },
  {
    icon: Hand,
    title: "Manuel Terapi Uzmanlığı",
    description:
      "Manuel terapi alanında aldığım eğitimlerle, kas-iskelet sistemi problemlerinde etkili ve kanıta dayalı tedavi yöntemleri uyguluyorum.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-28">
      {/* Page hero */}
      <section className="relative overflow-hidden bg-off-white pb-16 pt-12 lg:pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-off-white via-white to-primary-light/40" />
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-accent-soft/40 blur-[80px]" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary-light/60 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Hakkımda
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Güvenilir, profesyonel ve etik standartlara uygun fizik tedavi
              hizmeti.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — portrait & credentials */}
            <AnimateOnScroll className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_64px_-12px_rgba(43,124,184,0.15)] ring-1 ring-gray-100/80">
                  <Image
                    src={images.portrait}
                    alt="Soner Hıra — Fizyoterapist portre fotoğrafı"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/15 via-transparent to-transparent" />
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {credentials.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-600">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right — bio & highlights */}
            <AnimateOnScroll className="lg:col-span-7" delay={0.1}>
              <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
                <p className="text-lg leading-[1.85] text-gray-700">
                  <span className="float-left mr-3 mt-1 font-serif text-5xl font-semibold leading-none text-primary">
                    B
                  </span>
                  {aboutBio.slice(1)}
                </p>

                <div className="mt-10 space-y-5">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-off-white p-6 ring-1 ring-gray-100/80"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h2 className="font-serif text-xl font-semibold text-gray-800">
                            {item.title}
                          </h2>
                          <p className="mt-2 leading-relaxed text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-600">
                    Randevu için hemen iletişime geçin.
                  </p>
                  <Button asChild variant="teal" size="lg" className="rounded-xl">
                    <Link href="/randevu">
                      Randevu Al
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            Sağlığınız için doğru adımı atın
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-light/90">
            Ankara&apos;da ortopedi, nöroloji, pediatri ve manuel terapi
            alanlarında kişiye özel tedavi planları.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white text-primary-dark hover:bg-primary-light"
            >
              <Link href="/randevu">Randevu Al</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
