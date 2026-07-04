import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "gold-outline" | "dark" | "dark-outline";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "dark",
  className,
  showArrow = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300";

  const variants = {
    gold: "bg-gold text-white hover:bg-gold-300 hover:shadow-soft",
    "gold-outline":
      "border border-gold bg-transparent text-gold hover:bg-gold hover:text-brand",
    dark: "bg-brand text-white hover:bg-brand-dark hover:shadow-soft",
    "dark-outline":
      "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
