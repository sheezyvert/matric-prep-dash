
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CurriculumSection } from "@/components/landing/CurriculumSection";
import { TeacherBenefitsSection } from "@/components/landing/TeacherBenefitsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CurriculumSection />
        <TeacherBenefitsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
