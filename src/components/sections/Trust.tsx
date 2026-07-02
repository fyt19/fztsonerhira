"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustValues } from "@/lib/constants";
import { images } from "@/lib/images";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const trustImages = [
  images.trust.guvenilir,
  images.trust.profesyonel,
  images.trust.etik,
];

export function Trust() {
  return (
    <section
      id="neden-biz"
      className="relative overflow-hidden bg-primary-dark py-20 lg:py-28"
      aria-labelledby="trust-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image
          src={images.clinic}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            eyebrow="Neden Biz?"
            title="Değerlerimizle Fark Yaratıyoruz"
            description="Her tedavi sürecinde güven, profesyonellik ve etik ilkeler temel önceliğimizdir."
            align="center"
            theme="dark"
          />
        </div>

        <motion.div
          className="mt-4 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          aria-labelledby="trust-heading"
        >
          <h3 id="trust-heading" className="sr-only">
            Temel Değerlerimiz
          </h3>

          {trustValues.map((value, index) => (
            <motion.article
              key={value.title}
              variants={fadeInUp}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-900/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={trustImages[index]}
                  alt={value.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-serif text-xl font-semibold text-white">
                  {value.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {value.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
