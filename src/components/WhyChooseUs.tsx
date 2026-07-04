"use client";

import { motion } from "framer-motion";
import {
  Award,
  User,
  Lightbulb,
  Cloud,
  Building2,
  Briefcase,
  Rocket,
  UserCircle,
  type LucideIcon,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import { whyChooseUs, whoWeWorkWith } from "@/lib/constants";
import { cn } from "@/lib/utils";

const whyChooseIconMap: Record<string, LucideIcon> = {
  Award,
  User,
  Lightbulb,
  Cloud,
};

const whoWeWorkWithIconMap: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Rocket,
  UserCircle,
};

function SectionIntro({
  label,
  title,
  description,
  light = false,
}: {
  label: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
    >
      <SectionLabel className="mb-4" light={light}>
        {label}
      </SectionLabel>
      <h2 className={light ? "section-heading-light" : "section-heading"}>
        {title}
      </h2>
      <p
        className={cn(
          "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
          light ? "text-white/65" : "text-brand/65"
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  index,
  variant = "dark",
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  variant?: "dark" | "light";
}) {
  const Icon = icon;
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={cn(
        "group flex h-full flex-col rounded-xl p-7 transition-all duration-300 md:p-8",
        isDark
          ? "border border-white/10 bg-white/[0.04] hover:border-gold/25 hover:bg-white/[0.07]"
          : "card-luxury"
      )}
    >
      <div
        className={cn(
          "mb-6 flex h-12 w-12 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105",
          isDark
            ? "border-gold/25 bg-gold/10 text-gold"
            : "border-gold/20 bg-gold/5 text-gold"
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <h3
        className={cn(
          "font-serif text-xl font-medium leading-snug",
          isDark ? "text-white" : "text-brand"
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          isDark ? "text-white/60" : "text-brand/65"
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      <section className="section-padding bg-brand">
        <div className="container-wide">
          <SectionIntro
            light
            label="Why Choose Us"
            title="Why Choose Carrim Chartered Accountants?"
            description="Professional authority, approachable expertise, and modern elegance — built around trust, clarity, and results."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={whyChooseIconMap[item.icon]}
                index={index}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <SectionIntro
            label="Who We Work With"
            title="Clients We're Proud to Support"
            description="From growing businesses to established professionals, we tailor our services to the people and organisations we serve."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeWorkWith.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={whoWeWorkWithIconMap[item.icon]}
                index={index}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
