"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  TrendingUp,
  Shield,
  type LucideIcon,
} from "lucide-react";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import { serviceCategories } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  FileText,
  TrendingUp,
  Shield,
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <SectionLabel className="mb-4">Our Services</SectionLabel>
          <h2 className="section-heading">Solutions Tailored To You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand/65">
            Clear, practical support across accounting, tax, advisory, and
            compliance — designed for growing businesses and ambitious
            individuals.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="card-luxury group flex h-full flex-col"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand">
                  {category.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand/60">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-cream-200 pt-5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs leading-relaxed text-brand/55 before:mr-2 before:text-gold before:content-['•']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/services" variant="dark" showArrow>
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
