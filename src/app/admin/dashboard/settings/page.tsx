import type { Metadata } from "next";
import { getSiteContent } from "@/lib/site-content";
import { SiteSettingsForm } from "@/components/admin/SiteSettingsForm";

export const metadata: Metadata = {
  title: "Site İçeriği",
  robots: { index: false, follow: false },
};

export default async function SettingsPage() {
  const config = await getSiteContent();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Site İçeriği</h1>
        <p className="mt-1 text-sm text-gray-500">
          Telefon, hero metinleri, hakkımda ve SEO bilgilerini buradan
          güncelleyin. Değişiklikler anında sitede görünür.
        </p>
      </div>
      <SiteSettingsForm initial={config} />
    </div>
  );
}
