import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "on-dark" | "on-light";
  size?: "nav" | "footer";
}

export default function Logo({
  className,
  variant = "on-dark",
  size = "nav",
}: LogoProps) {
  const isDark = variant === "on-dark";
  const isNav = size === "nav";

  const nameColor = isDark ? "text-white" : "text-brand";
  const goldColor = "text-gold";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90",
        isNav ? "gap-2.5 sm:gap-3" : "gap-3",
        className
      )}
      aria-label="Carrim Chartered Accountants — Home"
    >
      {/* CA monogram */}
      <svg
        viewBox="0 0 48 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "shrink-0",
          isNav ? "h-10 w-9 sm:h-11 sm:w-10" : "h-12 w-11"
        )}
        aria-hidden="true"
      >
        <text
          x="0"
          y="40"
          fill="#C5A059"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="42"
          fontWeight="400"
        >
          C
        </text>
        <text
          x="20"
          y="40"
          fill="#C5A059"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="34"
          fontWeight="400"
        >
          A
        </text>
      </svg>

      {/* Divider */}
      <div
        className={cn(
          "w-px shrink-0 bg-gold",
          isNav ? "h-9 sm:h-10" : "h-11"
        )}
      />

      {/* Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={cn(
            "font-serif font-medium leading-none tracking-[0.12em]",
            nameColor,
            isNav
              ? "text-lg sm:text-xl md:text-[1.35rem]"
              : "text-xl md:text-2xl"
          )}
        >
          CARRIM
        </span>
        <span
          className={cn(
            "mt-1 font-sans font-medium uppercase leading-none tracking-[0.22em]",
            goldColor,
            isNav ? "text-[7px] sm:text-[8px]" : "text-[9px]"
          )}
        >
          Chartered Accountants
        </span>
        <div
          className={cn(
            "mt-1.5 flex items-center gap-1.5 font-sans uppercase leading-none tracking-[0.14em]",
            goldColor,
            isNav ? "text-[5.5px] sm:text-[6px]" : "text-[7px]"
          )}
        >
          <span className="h-px w-2 bg-gold sm:w-2.5" />
          <span>Accounting • Tax • Advisory</span>
          <span className="h-px w-2 bg-gold sm:w-2.5" />
        </div>
      </div>
    </Link>
  );
}
