import { getSiteContent } from "@/lib/site-content";
import { SiteShell } from "@/components/layout/SiteShell";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getSiteContent();

  return <SiteShell config={config}>{children}</SiteShell>;
}
