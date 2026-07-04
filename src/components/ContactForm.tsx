"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import { contactInfo } from "@/lib/constants";

const inputClass =
  "w-full rounded-sm border border-cream-200 bg-white px-4 py-3 text-brand transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Consultation Request from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
          placeholder="+27 ..."
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your business and how we can help..."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-dark"
        >
          <Send className="h-4 w-4" />
          Send via Email
        </button>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello, I'd like to book a consultation with Carrim Chartered Accountants.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand px-8 py-3 text-xs font-semibold uppercase tracking-widest text-brand transition-all hover:bg-brand hover:text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        subtitle="Ready to take the next step? Reach out to schedule a consultation or ask us anything."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <SectionLabel className="mb-4">Reach Out</SectionLabel>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="mt-4 leading-relaxed text-brand/65">
                We&apos;d love to hear from you. Fill out the form and we&apos;ll
                respond within one business day, or reach us directly.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 rounded-sm border border-cream-200 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-card"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">Email</p>
                    <p className="mt-1 text-sm text-brand/65">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 rounded-sm border border-cream-200 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-card"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">Phone</p>
                    <p className="mt-1 text-sm text-brand/65">{contactInfo.phone}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-sm border border-cream-200 bg-white p-8 shadow-card lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
