"use client";

import { useState, useTransition } from "react";
import { Save, RotateCcw } from "lucide-react";
import { updateSiteContent, resetSiteContent } from "@/actions/site-content";
import type { SiteContentData } from "@/lib/site-content-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SiteSettingsFormProps = {
  initial: SiteContentData;
};

export function SiteSettingsForm({ initial }: SiteSettingsFormProps) {
  const [form, setForm] = useState<SiteContentData>(initial);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const set = (key: keyof SiteContentData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    startTransition(async () => {
      const result = await updateSiteContent(form);
      setMessage(result.success ? "Site içeriği kaydedildi." : result.error);
    });
  };

  const handleReset = () => {
    if (!confirm("Tüm site içeriği varsayılana dönsün mü?")) return;
    startTransition(async () => {
      const result = await resetSiteContent();
      if (result.success) {
        window.location.reload();
      } else {
        setMessage(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      {message && (
        <p className="rounded-lg bg-primary-light px-4 py-2 text-sm text-primary-dark">
          {message}
        </p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>İletişim Bilgileri</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Telefon (görünen)</Label>
            <Input
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>Telefon (WhatsApp, rakam)</Label>
            <Input
              value={form.phoneRaw}
              onChange={(e) => set("phoneRaw", e.target.value)}
              className="mt-1.5"
              placeholder="905332905829"
            />
          </div>
          <div>
            <Label>E-posta</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>WhatsApp varsayılan mesaj</Label>
            <Input
              value={form.whatsappMessage}
              onChange={(e) => set("whatsappMessage", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div className="sm:col-span-2">
            <Label>Adres</Label>
            <Input
              value={form.addressStreet}
              onChange={(e) => set("addressStreet", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>İlçe</Label>
            <Input
              value={form.addressDistrict}
              onChange={(e) => set("addressDistrict", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>Şehir</Label>
            <Input
              value={form.addressCity}
              onChange={(e) => set("addressCity", e.target.value)}
              className="mt-1.5"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ana Sayfa (Hero)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Üst rozet metni</Label>
            <Input
              value={form.heroBadge}
              onChange={(e) => set("heroBadge", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Başlık satır 1</Label>
              <Input
                value={form.heroTitleLine1}
                onChange={(e) => set("heroTitleLine1", e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label>Başlık satır 2 (mavi)</Label>
              <Input
                value={form.heroTitleLine2}
                onChange={(e) => set("heroTitleLine2", e.target.value)}
                className="mt-1.5"
              />
            </div>
          </div>
          <div>
            <Label>Açıklama</Label>
            <Textarea
              value={form.heroDescription}
              onChange={(e) => set("heroDescription", e.target.value)}
              rows={3}
              className="mt-1.5"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {([1, 2, 3] as const).map((n) => (
              <div key={n} className="rounded-xl border border-gray-100 p-3">
                <Label>İstatistik {n}</Label>
                <Input
                  value={form[`stat${n}Value`]}
                  onChange={(e) =>
                    set(`stat${n}Value` as keyof SiteContentData, e.target.value)
                  }
                  className="mt-1.5"
                  placeholder="10+"
                />
                <Input
                  value={form[`stat${n}Label`]}
                  onChange={(e) =>
                    set(`stat${n}Label` as keyof SiteContentData, e.target.value)
                  }
                  className="mt-2"
                  placeholder="Yıllık Deneyim"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hakkımda</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Biyografi metni</Label>
          <Textarea
            value={form.aboutBio}
            onChange={(e) => set("aboutBio", e.target.value)}
            rows={8}
            className="mt-1.5"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Site adı</Label>
            <Input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>Site başlığı</Label>
            <Input
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>Site açıklaması</Label>
            <Textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label>Instagram URL</Label>
            <Input
              value={form.instagramUrl}
              onChange={(e) => set("instagramUrl", e.target.value)}
              className="mt-1.5"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button variant="teal" disabled={pending} onClick={handleSave}>
          <Save className="h-4 w-4" />
          {pending ? "Kaydediliyor..." : "Tüm Değişiklikleri Kaydet"}
        </Button>
        <Button variant="outline" disabled={pending} onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
          Varsayılana Dön
        </Button>
      </div>
    </div>
  );
}
