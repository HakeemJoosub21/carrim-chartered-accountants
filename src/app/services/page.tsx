"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  TrendingUp,
  Shield,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";
import { serviceCategories } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  FileText,
  TrendingUp,
  Shield,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Solutions Tailored to You"
        subtitle="Accounting, tax, advisory, and compliance — clearly structured for your needs."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <SectionLabel className="mb-3">What We Offer</SectionLabel>
            <p className="text-brand/60 leading-relaxed">
              Four core areas of support, designed to keep your finances clear
              and your business moving forward.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category, index) => {
              const Icon = iconMap[category.icon];

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-sm border border-cream-200 bg-white p-8 transition-shadow duration-300 hover:shadow-card md:p-9"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand/5 text-gold transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-serif text-xl font-medium text-brand md:text-2xl">
                        {category.title}
                      </h2>
                      <p className="mt-2 text-sm text-brand/55">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3 border-t border-cream-200 pt-7">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-brand/75"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
