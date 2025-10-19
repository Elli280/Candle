import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CandleSlideshow from "@/components/CandleSlideshow";
import WhySection from "@/components/WhySection";
import PackagesSection from "@/components/PackagesSection";
import ColorPreview from "@/components/ColorPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CandleSlideshow />
      <WhySection />
      <PackagesSection />
      <ColorPreview />
      <CallToAction />
      <Footer />
    </div>
  );
}
