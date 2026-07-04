import Link from "next/link";
import { Activity, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { ankaraAreas } from "@/lib/local-seo";
import { useSiteConfig } from "@/components/providers/SiteConfigProvider";

const footerAreas = ankaraAreas.filter((a) =>
  ["cukurambar", "cankaya", "kecioren", "yenimahalle", "mamak", "etimesgut", "ayas", "sincan"].includes(a.slug),
);

export function Footer() {
  const config = useSiteConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2.5"
              aria-label={`${config.name} ana sayfa`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Activity className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                {config.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Ankara&apos;da güvenilir, profesyonel ve etik standartlara uygun
              fizik tedavi ve rehabilitasyon hizmetleri.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Alt menü">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  {config.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <address className="not-italic">
                  {config.addressStreet}
                  <br />
                  {config.addressCity}, {config.addressDistrict}
                </address>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Çalışma Saatleri
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Pazartesi – Cuma: 09:00 – 18:00</li>
              <li>Cumartesi: 09:00 – 14:00</li>
              <li>Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Ankara Hizmet Bölgeleri
          </h3>
          <div className="flex flex-wrap gap-2">
            {footerAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/ankara/${area.slug}`}
                className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400 transition-colors hover:border-primary hover:text-accent"
              >
                {area.name} Fizyoterapist
              </Link>
            ))}
            <Link
              href="/ankara"
              className="rounded-full border border-primary bg-primary/20 px-3 py-1 text-xs text-accent"
            >
              Tüm Bölgeler →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {config.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-600">
            Ankara Fizyoterapist · Fizik Tedavi ve Rehabilitasyon
          </p>
        </div>
      </div>
    </footer>
  );
}
