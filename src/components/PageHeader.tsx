"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end select-none pr-16"
        aria-hidden="true"
      >
        <span className="font-serif text-[20rem] font-bold leading-none text-white/[0.03]">
          CA
        </span>
      </div>

      <div className="container-wide relative px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {label && <SectionLabel className="mb-4 text-gold">{label}</SectionLabel>}
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
