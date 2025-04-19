
import { Button } from "@/components/ui/button";
import { Brain, Flag, BarChart, Languages } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Master Mathematics with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Grade 12 Maths, explained step-by-step in your language
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="text-lg">
            Start Learning
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            I&apos;m a Teacher
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Brain, text: "AI-Powered Tutoring" },
            { icon: Flag, text: "CAPS Aligned" },
            { icon: Languages, text: "11 Languages" },
            { icon: BarChart, text: "Track Progress" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <feature.icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
