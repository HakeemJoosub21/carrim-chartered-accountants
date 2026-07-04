"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import { founder } from "@/lib/constants";

export default function FounderSection() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-brand/5">
              <Image
                src="/images/image2.jpeg"
                alt={`${founder.name}, professional headshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-gold/25" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-4">
              Meet the Founder and Managing Director
            </SectionLabel>
            <h2 className="section-heading">{founder.greeting}</h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gold">
              {founder.title}
            </p>
            <p className="mt-6 text-base leading-relaxed text-brand/70 md:text-lg">
              {founder.bio}
            </p>

            <ul className="mt-8 space-y-4 border-t border-cream-200 pt-8">
              {founder.highlights.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wide text-brand">
                    {item.label}
                  </span>
                  <span className="text-sm text-brand/65">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/about" variant="dark" showArrow>
                Learn More About Kulsum
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
