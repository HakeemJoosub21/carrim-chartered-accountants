"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import {
  beyondTheNumbersIntro,
  beyondTheNumbersTopics,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function BeyondTheNumbersPage() {
  return (
    <>
      <PageHeader
        label="Beyond the Numbers"
        title="Insights. Inspiration. Growth."
        subtitle="A space that showcases entrepreneurship, leadership, professional development, and personal insight — making our brand memorable without compromising professionalism."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionLabel className="mb-4">My Story</SectionLabel>
            <h2 className="section-heading">{beyondTheNumbersIntro.title}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-10 max-w-3xl space-y-5"
          >
            {beyondTheNumbersIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="border-l-2 border-gold/40 pl-6 text-base leading-relaxed text-brand/75 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center lg:col-span-4"
            >
              <SectionLabel className="mb-4">Explore</SectionLabel>
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
                  <a
                    href={`#${topic.id}`}
                    className="group block overflow-hidden rounded-sm bg-cream-50 shadow-card transition-all duration-300 hover:shadow-elevated"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/20 to-transparent" />
                    </div>
                    <div className="bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand transition-colors group-hover:text-gold">
                        {topic.title}
                      </p>
                      <div className="mt-2 h-px w-8 bg-gold transition-all duration-300 group-hover:w-full" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {beyondTheNumbersTopics.map((topic, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-cream-50" : "bg-white";

        const imageBlock = (
          <motion.div
            initial={{ opacity: 0, x: isEven ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-100 shadow-elevated ring-1 ring-brand/10">
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                className={topic.imageClassName}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-gold/25 shadow-[0_24px_48px_rgba(11,43,38,0.16)]"
            />
          </motion.div>
        );

        const textBlock = (
          <motion.div
            initial={{ opacity: 0, x: isEven ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-4">{topic.title}</SectionLabel>
            <h2 className="section-heading">{topic.subtitle}</h2>
            <p className="mt-6 leading-relaxed text-brand/70">{topic.body}</p>
            <ul className="mt-8 space-y-3 border-t border-cream-200 pt-8">
              {topic.topics.map((item) => (
                <li
                  key={item}
                  className="text-sm text-brand/65 before:mr-2 before:text-gold before:content-['•']"
                >
                  {item}
                </li>
              ))}
            </ul>
            {index < beyondTheNumbersTopics.length - 1 && (
              <Link
                href={`#${beyondTheNumbersTopics[index + 1].id}`}
                className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-gold"
              >
                Next: {beyondTheNumbersTopics[index + 1].title}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </motion.div>
        );

        return (
          <section
            key={topic.id}
            id={topic.id}
            className={cn("scroll-mt-28 section-padding", bgClass)}
          >
            <div className="container-wide">
              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                {isEven ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
