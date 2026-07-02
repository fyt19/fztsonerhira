"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "@/lib/images";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 5000;

export function HeroImageSlider() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const timer = setInterval(next, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, isPaused, next, activeIndex]);

  const slide = heroSlides[activeIndex];

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_64px_-12px_rgba(43,124,184,0.18)] ring-1 ring-white/80 lg:max-w-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.src}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-primary-light/10" />

      {/* Slide indicators */}
      <div
        className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slider görselleri"
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Görsel ${index + 1}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === activeIndex
                ? "w-6 bg-white shadow-sm"
                : "w-1.5 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>

      {/* Name overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent px-6 pb-6 pt-16 text-center">
        <p className="font-serif text-xl font-semibold text-primary">
          Soner Hıra
        </p>
        <p className="mt-0.5 text-sm text-gray-600">Fizyoterapist</p>
      </div>
    </div>
  );
}
