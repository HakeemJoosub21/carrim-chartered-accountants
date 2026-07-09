import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, contactInfo, homeServices } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/70">
      <div className="container-wide px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <Logo variant="on-dark" size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Strategic financial solutions for growing businesses. Accounting,
              tax, and advisory services you can trust.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {homeServices.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 break-words transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="min-w-0 break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Carrim Chartered Accountants. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
