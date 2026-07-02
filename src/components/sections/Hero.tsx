"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";

const highlightImages = [
  { src: images.services.ortopedik, label: "Ortopedi" },
  { src: images.services["manuel-terapi"], label: "Manuel Terapi" },
  { src: images.services.pediatrik, label: "Pediatri" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-off-white via-white to-primary-light/50 pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-soft/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-light/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-soft bg-primary-light px-4 py-1.5 text-sm font-medium text-primary-dark"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Fizyoterapist · Ankara
          </motion.p>

          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            Sağlığınız İçin{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Güvenilir
            </span>{" "}
            ve Profesyonel Fizik Tedavi
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            Ortopedi, nöroloji, pediatri ve manuel terapi alanlarında uzman
            fizyoterapist Soner Hıra ile iyileşme yolculuğunuza bugün başlayın.
          </p>

          {/* Visual highlight strip instead of icon list */}
          <div className="mt-8 flex gap-3">
            {highlightImages.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="relative h-20 w-20 overflow-hidden rounded-2xl ring-2 ring-white shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-dark/30" />
                <span className="absolute bottom-1 left-0 right-0 text-center text-[10px] font-semibold text-white">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/randevu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-dark/20 transition-all hover:bg-navy-800 hover:shadow-xl"
            >
              Randevu Al
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/hakkimda"
              className="inline-flex items-center justify-center rounded-full border border-gray-100 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-accent-soft hover:bg-primary-light/60"
            >
              Hakkımda
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[782/1102] max-w-md overflow-hidden rounded-3xl shadow-2xl shadow-primary-dark/15 ring-1 ring-gray-100/80 lg:max-w-none">
            <Image
              src={images.slider}
              alt="Soner Hıra — Fizyoterapist"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/25 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-gray-50 sm:-left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-serif text-3xl font-semibold text-gray-800">10+</p>
            <p className="text-sm text-gray-600">Yıllık Klinik Deneyim</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
