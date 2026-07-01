import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/whatsapp/WhatsAppWidget";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe geç
      </a>
      <Header />
      {children}
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
