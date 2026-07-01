import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    image: images.clinic,
    label: "İzmir Üniversitesi",
    detail: "Fizik Tedavi ve Rehabilitasyon, 2015",
  },
  {
    image: images.services.ortopedik,
    label: "Çorum",
    detail: "Memleket",
  },
  {
    image: images.portrait,
    label: "Aile",
    detail: "Evli, bir çocuk babası",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-28">
      <section className="bg-gradient-to-b from-slate-50 to-white pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hakkımda"
            title="Soner Hıra"
            description="Güvenilir, profesyonel ve etik standartlara uygun fizik tedavi hizmeti."
            align="left"
          />

          <div className="grid items-start gap-16 lg:grid-cols-5">
            <AnimateOnScroll className="lg:col-span-2">
              <div className="sticky top-28 space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200/80">
                  <Image
                    src={images.portrait}
                    alt="Soner Hıra — Fizyoterapist portre fotoğrafı"
                    fill
                    sizes="40vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {credentials.map((item) => (
                    <div
                      key={item.label}
                      className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-xs font-semibold text-navy-900">
                          {item.label}
                        </p>
                        <p className="text-[10px] text-slate-500">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-3" delay={0.1}>
              <article>
                <p className="text-xl leading-relaxed text-slate-700 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-teal-600">
                  {aboutBio}
                </p>

                <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
                  <Image
                    src={images.hero}
                    alt="Fizyoterapi kliniği"
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-12 space-y-8 border-t border-slate-100 pt-12">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-navy-900">
                      Klinik Deneyim
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Özel hastaneler, tıp merkezleri ve kendi kliniğimde ortopedi,
                      nöroloji, pediatri ve yoğun bakım alanlarında kapsamlı
                      deneyim kazandım.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-navy-900">
                      Manuel Terapi Uzmanlığı
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Manuel terapi alanında aldığım eğitimlerle, kas-iskelet
                      sistemi problemlerinde etkili ve kanıta dayalı tedavi
                      yöntemleri uyguluyorum.
                    </p>
                  </div>
                </div>

                <Button asChild variant="teal" className="mt-10">
                  <Link href="/randevu">Randevu Al →</Link>
                </Button>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
