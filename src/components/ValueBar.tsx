"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  FileCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { valueProps } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Award,
  CheckCircle,
  FileCheck,
  TrendingUp,
};

export default function ValueBar() {
  return (
    <section className="relative z-10 border-y border-cream-200 bg-cream-50">
      <div className="container-wide px-6 py-10 md:px-10 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {valueProps.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand/60">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
