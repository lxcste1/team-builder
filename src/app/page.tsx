import { CTASection } from "@/components/Sections/CTASection";
import { HeroSection } from "@/components/Sections/HeroSection";
import { StepSection } from "@/components/Sections/StepSection";
import { TestimonialSection } from "@/components/Sections/TestimonialSection";

export const Home = () => {
  return (
    <main>
      <div className="min-h-screen bg-[#010101] text-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Steps Section */}
        <StepSection />

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Final CTA Section */}
        <CTASection />
      </div>
    </main>
  );
};

export default Home;
