"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import { beyondTheNumbersTopics } from "@/lib/constants";

export default function InsightsPreview() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-4"
          >
            <SectionLabel className="mb-4">Beyond the Numbers</SectionLabel>
            <h2 className="section-heading">
              Insights.
              <br />
              Inspiration.
              <br />
              Growth.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand/65">
              Explore perspectives on entrepreneurship, leadership, women in
              business, and community — going beyond the numbers to empower
              confident decisions.
            </p>
            <div className="mt-8">
              <Button href="/beyond-the-numbers" variant="dark" showArrow>
                Explore Beyond the Numbers
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-8 lg:grid-cols-4">
            {beyondTheNumbersTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/beyond-the-numbers#${topic.id}`}
                  className="group block overflow-hidden rounded-sm bg-white shadow-card transition-all duration-300 hover:shadow-elevated"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/20 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand transition-colors group-hover:text-gold">
                      {topic.title}
                    </p>
                    <div className="mt-2 h-px w-8 bg-gold transition-all duration-300 group-hover:w-full" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
