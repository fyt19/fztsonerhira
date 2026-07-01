import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-navy-900 text-white",
        teal: "border-transparent bg-teal-100 text-teal-800",
        outline: "border-slate-200 text-slate-600",
        instagram: "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        linkedin: "border-transparent bg-[#0A66C2] text-white",
        article: "border-transparent bg-amber-100 text-amber-800",
        pending: "border-transparent bg-yellow-100 text-yellow-800",
        approved: "border-transparent bg-green-100 text-green-800",
        completed: "border-transparent bg-blue-100 text-blue-800",
        cancelled: "border-transparent bg-red-100 text-red-800",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
