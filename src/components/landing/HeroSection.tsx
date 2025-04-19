
import { Button } from "@/components/ui/button";
import { Brain, Flag, Languages, BarChart } from "lucide-react";
import { useSubjectsCount } from "@/hooks/useSubjectsCount";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  { icon: Brain, text: "AI-Powered Tutoring", ariaLabel: "AI tutoring feature" },
  { icon: Flag, text: "CAPS Aligned", ariaLabel: "CAPS curriculum aligned" },
  { icon: Languages, text: "11 Languages", ariaLabel: "Available in 11 languages" },
  { icon: BarChart, text: "Track Progress", ariaLabel: "Progress tracking feature" },
] as const;

export function HeroSection() {
  const { data: subjectsCount, isLoading } = useSubjectsCount();

  return (
    <section className="relative pt-24 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Master Mathematics with AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Grade 12 Maths, explained step-by-step in your language
        </p>

        {isLoading ? (
          <Skeleton className="h-6 w-32 mx-auto mb-8" />
        ) : (
          <p className="text-sm text-gray-500 mb-8">
            Now covering {subjectsCount} {subjectsCount === 1 ? "subject" : "subjects"}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="text-lg"
            asChild
          >
            <a href="/signup">Start Learning</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg"
            asChild
          >
            <a href="/teacher-signup">I&apos;m a Teacher</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center gap-2"
              role="listitem"
              aria-label={feature.ariaLabel}
            >
              <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
