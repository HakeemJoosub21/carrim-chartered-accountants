import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond the Numbers",
  description:
    "Perspectives on entrepreneurship, leadership, women in business, and community from Kulsum Carrim — going beyond the numbers to empower confident decisions.",
};

export default function BeyondTheNumbersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
