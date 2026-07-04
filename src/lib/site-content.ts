import { prisma } from "@/lib/db";
import {
  defaultSiteContent,
  type SiteContentData,
} from "@/lib/site-content-types";

export type { SiteContentData } from "@/lib/site-content-types";
export { defaultSiteContent } from "@/lib/site-content-types";

export async function getSiteContent(): Promise<SiteContentData> {
  try {
    const row = await prisma.siteContent.findUnique({ where: { id: "main" } });
    if (row?.data && typeof row.data === "object") {
      return { ...defaultSiteContent, ...(row.data as Partial<SiteContentData>) };
    }
  } catch {
    /* DB unavailable — use defaults */
  }
  return defaultSiteContent;
}
