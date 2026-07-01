import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { getAllLocalKeywords } from "@/lib/local-seo";
import { images } from "@/lib/images";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ankara fizyoterapist",
    "fizyoterapist ankara",
    "çukurambar fizyoterapist",
    "çankaya fizyoterapist",
    "keçiören fizyoterapist",
    "ayaş fizyoterapist",
    "ankara fizik tedavi",
    "ankara manuel terapi",
    "ankara rehabilitasyon",
    "fizik tedavi",
    "manuel terapi",
    "Soner Hıra",
    ...getAllLocalKeywords().slice(0, 20),
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: images.og, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-screen bg-white font-sans text-navy-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
