"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import type { SiteContentData } from "@/lib/site-content-types";
import { defaultSiteContent } from "@/lib/site-content-types";
import type { ActionResult } from "./auth";

const siteContentSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  phone: z.string().min(1),
  phoneRaw: z.string().min(10),
  email: z.string().email(),
  whatsappMessage: z.string().min(1),
  aboutBio: z.string().min(10),
  heroBadge: z.string().min(1),
  heroTitleLine1: z.string().min(1),
  heroTitleLine2: z.string().min(1),
  heroDescription: z.string().min(1),
  stat1Value: z.string().min(1),
  stat1Label: z.string().min(1),
  stat2Value: z.string().min(1),
  stat2Label: z.string().min(1),
  stat3Value: z.string().min(1),
  stat3Label: z.string().min(1),
  addressStreet: z.string().min(1),
  addressCity: z.string().min(1),
  addressDistrict: z.string().min(1),
  addressPostalCode: z.string().min(1),
  instagramUrl: z.string().url().or(z.literal("")),
});

export async function updateSiteContent(
  data: SiteContentData,
): Promise<ActionResult> {
  const { requireAdmin } = await import("@/lib/auth");
  const parsed = siteContentSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Lütfen tüm alanları doğru doldurun." };
  }

  try {
    await requireAdmin();
    await prisma.siteContent.upsert({
      where: { id: "main" },
      update: { data: parsed.data },
      create: { id: "main", data: parsed.data },
    });

    revalidatePath("/", "layout");
    revalidatePath("/hakkimda");
    revalidatePath("/admin/dashboard/settings");
    return { success: true, data: undefined };
  } catch {
    return { success: false, error: "Site içeriği güncellenemedi." };
  }
}

export async function resetSiteContent(): Promise<ActionResult> {
  const { requireAdmin } = await import("@/lib/auth");

  try {
    await requireAdmin();
    await prisma.siteContent.upsert({
      where: { id: "main" },
      update: { data: defaultSiteContent },
      create: { id: "main", data: defaultSiteContent },
    });
    revalidatePath("/", "layout");
    return { success: true, data: undefined };
  } catch {
    return { success: false, error: "Sıfırlama başarısız." };
  }
}
