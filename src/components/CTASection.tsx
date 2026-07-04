"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function CTASection() {
  return (
    <section className="border-b border-white/10 bg-brand-dark">
      <div className="container-wide px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center md:gap-12"
        >
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
              Ready to Build with Confidence?
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/65">
              Let&apos;s discuss how we can support your business and financial
              goals.
            </p>
          </div>

          <Button
            href="/contact"
            variant="gold"
            showArrow
            className="shrink-0"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
