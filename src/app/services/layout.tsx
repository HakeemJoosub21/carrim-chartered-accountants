import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accounting, taxation, advisory, payroll, audit, and company secretarial services for growing businesses.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
