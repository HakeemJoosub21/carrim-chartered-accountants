import Hero from "@/components/Hero";
import ValueBar from "@/components/ValueBar";
import FounderSection from "@/components/FounderSection";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import InsightsPreview from "@/components/InsightsPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueBar />
      <FounderSection />
      <ServicesPreview />
      <WhyChooseUs />
      <InsightsPreview />
      <CTASection />
    </>
  );
}
