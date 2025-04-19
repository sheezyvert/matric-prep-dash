
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CurriculumSection } from "@/components/landing/CurriculumSection";
import { TeacherBenefitsSection } from "@/components/landing/TeacherBenefitsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TeacherDashboardPreview } from "@/components/landing/TeacherDashboardPreview";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sa-gold/5 to-sa-emerald/10">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CurriculumSection />
        <TeacherDashboardPreview />
        <TeacherBenefitsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
