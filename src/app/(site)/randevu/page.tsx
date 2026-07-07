import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { bookingMetadata } from "@/lib/seo";

export const metadata: Metadata = bookingMetadata;

export default function BookingPage() {
  return (
    <main id="main-content" className="pt-28">
      <section className="bg-gradient-to-b from-slate-50 to-white pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Randevu"
            title="Online Randevu Sistemi"
            description="Birkaç basit adımda randevunuzu oluşturun. Onay için sizinle iletişime geçilecektir."
          />
          <BookingWizard />
        </div>
      </section>
    </main>
  );
}
