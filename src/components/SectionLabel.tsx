import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({
  children,
  className,
  light = false,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "section-label",
        light ? "text-gold" : "text-gold",
        className
      )}
    >
      {children}
    </p>
  );
}
