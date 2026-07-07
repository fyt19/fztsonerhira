import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { servicesMetadata } from "@/lib/seo";
import { getServiceImage } from "@/lib/images";

export const metadata: Metadata = servicesMetadata;

const extendedDetails: Record<string, string> = {
  ortopedik:
    "Eklem protezleri sonrası rehabilitasyon, spor yaralanmaları, bel-boyun ağrıları ve postür bozukluklarında kişiselleştirilmiş tedavi programları uygulanmaktadır.",
  norolojik:
    "İnme, Parkinson, MS ve periferik sinir yaralanmaları sonrası nörolojik rehabilitasyon programları ile hastaların bağımsızlık düzeyini artırmayı hedefliyoruz.",
  pediatrik:
    "Serebral palsi, gelişimsel gecikme ve ortopedik sorunlarda çocuk dostu, oyun temelli rehabilitasyon yaklaşımları ile aileleri de sürece dahil ediyoruz.",
  "yogun-bakim":
    "Yoğun bakım sonrası solunum egzersizleri, yatak içi mobilizasyon ve erken ayağa kalkma programları ile komplikasyon riskini minimize ediyoruz.",
  "evde-fizyoterapi":
    "Yaşlı, yatalak veya hareket kısıtlılığı olan danışanlar için evde değerlendirme, egzersiz uygulaması ve aile eğitimi ile güvenli rehabilitasyon süreci sunuyoruz.",
  "manuel-terapi":
    "Mobilizasyon, manipülasyon ve yumuşak doku teknikleri ile ağrı yönetimi ve fonksiyonel iyileşme sağlanır. Her seans öncesi detaylı değerlendirme yapılır.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="pt-28">
      <section className="bg-slate-50 pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Uzmanlık Alanlarım"
            description="Farklı klinik alanlarda edindiğim deneyimle, ihtiyacınıza özel rehabilitasyon programları sunuyorum."
          />

          <div className="space-y-12">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <AnimateOnScroll key={service.id} delay={index * 0.08}>
                  <article
                    className={`overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm lg:grid lg:grid-cols-2 ${
                      !isEven ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] ${
                        !isEven ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <Image
                        src={getServiceImage(service.id)}
                        alt={service.title}
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900/20" />
                    </div>

                    <div
                      className={`flex flex-col justify-center p-8 lg:p-12 ${
                        !isEven ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                        0{index + 1} — Uzmanlık
                      </span>
                      <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-900 lg:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <p className="mt-4 leading-relaxed text-slate-500">
                        {extendedDetails[service.id]}
                      </p>
                      <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm text-slate-600">
                        <li>• Detaylı fiziksel değerlendirme</li>
                        <li>• Kişiye özel egzersiz programı</li>
                        <li>• İlerleme takibi ve raporlama</li>
                      </ul>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="teal" size="lg">
              <Link href="/randevu">Randevu Al →</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
