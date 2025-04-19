
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CurriculumSection } from "@/components/landing/CurriculumSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CurriculumSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
