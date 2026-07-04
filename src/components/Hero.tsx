"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { heroContent } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand">
      {/* CA watermark */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 flex w-full items-center select-none lg:w-[55%]"
        aria-hidden="true"
      >
        <span className="translate-x-[5%] font-serif text-[20rem] font-bold leading-none text-white/[0.04] md:text-[26rem] lg:text-[32rem]">
          CA
        </span>
      </div>

      <div className="relative min-h-screen lg:grid lg:grid-cols-2">
        {/* Left — copy */}
        <div className="flex min-h-[60vh] flex-col justify-center px-6 pb-16 pt-32 md:px-10 lg:min-h-screen lg:px-16 lg:pb-0 lg:pt-0 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {heroContent.label}
            </p>

            <h1 className="mt-5 font-serif text-4xl font-medium uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {heroContent.headline.split(" ").slice(0, 2).join(" ")}
              <br />
              {heroContent.headline.split(" ").slice(2).join(" ")}
            </h1>

            <div className="mt-8 h-px w-20 bg-gold" />

            <p className="mt-8 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
              {heroContent.subheading}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                variant="gold"
                showArrow
                className="text-white"
              >
                Book a Consultation
              </Button>
              <Button
                href="/services"
                variant="gold-outline"
                className="border-gold text-white hover:bg-gold/10 hover:text-white"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right — full-height portrait */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[50vh] lg:min-h-screen"
        >
          <Image
            src="/images/image3.jpeg"
            alt="Kulsum Carrim — Founder of Carrim Chartered Accountants"
       
            fill
            className="object-cover object-[center_15%]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Left-edge blend into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/60 to-transparent lg:from-brand lg:via-brand/30 lg:to-transparent" />

          {/* Subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand/80 to-transparent lg:from-brand/40" />
        </motion.div>
      </div>
    </section>
  );
}
