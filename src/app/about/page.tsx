"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import { founder } from "@/lib/constants";

const values = [
  {
    icon: Gem,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every client interaction and financial recommendation.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue mastery in our craft, delivering precise, timely, and insightful financial services.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in open communication, clear reporting, and honest advice you can depend on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="About Carrim Charted Accountants"
        subtitle="A boutique chartered accounting firm dedicated to helping growing businesses navigate complexity with clarity and confidence."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel className="mb-4">Our Story</SectionLabel>
              <h2 className="section-heading">
                Built on Trust, Driven by Results
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-brand/70">
                <p>
                  Founded with a vision to provide premium accounting services
                  to ambitious businesses, Carrim Chartered Accountants has
                  grown into a trusted advisory partner for companies across
                  South Africa.
                </p>
                <p>
                  We combine the rigour of chartered accountancy with a
                  boutique, client-first approach — ensuring every business we
                  serve, receives the attention, expertise, and strategic
                  guidance it deserves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-brand/5 shadow-elevated ring-1 ring-brand/10">
                <Image
                  src="/images/image1.jpeg"
                  alt="Carrim Chartered Accountants office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-gold/25 shadow-[0_24px_48px_rgba(11,43,38,0.16)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:mx-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand/5 shadow-elevated ring-1 ring-brand/10">
                <Image
                  src="/images/image2.jpeg"
                  alt={founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-gold/25 shadow-[0_24px_48px_rgba(11,43,38,0.16)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel className="mb-4">
                Meet the Founder and Managing Director
              </SectionLabel>
              <h2 className="section-heading">{founder.greeting}</h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gold">
                {founder.title}
              </p>
              <p className="mt-6 leading-relaxed text-brand/70">{founder.bio}</p>
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
              <div className="mt-8 space-y-4 border-t border-cream-200 pt-8">
                {founder.extendedBio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="leading-relaxed text-brand/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <SectionLabel className="mb-4">Our Values</SectionLabel>
            <h2 className="section-heading">What Guides Us</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center text-gold">
                  <value.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-brand/65">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
