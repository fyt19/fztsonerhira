import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  name: string;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function BrandLogo({
  name,
  href = "/",
  variant = "dark",
  className,
}: BrandLogoProps) {
  const isLight = variant === "light";

  const content = (
    <span className={cn("group inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "mb-0.5 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-[0.65rem] font-bold uppercase tracking-[0.28em] text-transparent sm:text-[0.7rem]",
          isLight && "from-accent-soft via-white to-accent-soft",
        )}
      >
        Fizyoterapist
      </span>
      <span className="relative inline-block">
        <span
          className={cn(
            "font-script text-[1.65rem] font-semibold tracking-tight sm:text-[1.85rem]",
            isLight ? "text-white" : "text-gray-900",
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-300 group-hover:scale-x-100",
            isLight && "from-accent-soft via-white to-accent-soft",
          )}
          aria-hidden="true"
        />
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label={`${name} ana sayfa`}>
        {content}
      </Link>
    );
  }

  return content;
}
