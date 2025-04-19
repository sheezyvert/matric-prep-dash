
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Learning",
    description: "Get instant, personalized explanations for any math problem. Our AI tutor adapts to your learning style.",
  },
  {
    title: "CAPS Curriculum",
    description: "Full coverage of the Grade 12 Mathematics curriculum, aligned with South African standards.",
  },
  {
    title: "Your Language, Your Choice",
    description: "Learn mathematics in any of South Africa's 11 official languages, making complex concepts easier to grasp.",
  },
  {
    title: "Track Your Progress",
    description: "Monitor your improvement with detailed progress tracking and mastery indicators for each topic.",
  },
  {
    title: "Practice Past Papers",
    description: "Access a comprehensive collection of past exam papers with step-by-step solutions.",
  },
  {
    title: "Learn at Your Pace",
    description: "Study anytime, anywhere, with personalized learning paths that adapt to your schedule.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CAPS AI Tutor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
