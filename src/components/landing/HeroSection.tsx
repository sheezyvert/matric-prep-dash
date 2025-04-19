
import { Button } from "@/components/ui/button";
import { Brain, Flag, Languages, BarChart } from "lucide-react";
import { useSubjectsCount } from "@/hooks/useSubjectsCount";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const features = [
  { icon: Brain, text: "AI-Powered Tutoring", ariaLabel: "AI tutoring feature" },
  { icon: Flag, text: "CAPS Aligned", ariaLabel: "CAPS curriculum aligned" },
  { icon: Languages, text: "11 Languages", ariaLabel: "Available in 11 languages" },
  { icon: BarChart, text: "Track Progress", ariaLabel: "Progress tracking feature" },
] as const;

export function HeroSection() {
  const { data: subjectsCount, isLoading } = useSubjectsCount();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Track cursor position for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    backgroundPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
  };

  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
      {/* Morphing background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-sa-sky/10 via-sa-gold/10 to-sa-sunset/10 
        bg-[length:200%_200%] animate-morph-gradient -z-10" 
        style={gradientStyle}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sa-emerald/10 blur-3xl animate-pulse-gentle -z-10" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-sa-sunset/10 blur-3xl animate-pulse-gentle -z-10" />
      
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sa-charcoal mb-6 animate-fade-in [text-wrap:balance]">
          AI‑Powered Tutoring in Any Language. At Your Pace.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in delay-75 [text-wrap:balance]">
          Empower learners & teachers with personalized AI lessons, instant exam creation, and real‑time progress tracking.
        </p>

        {isLoading ? (
          <Skeleton className="h-6 w-32 mx-auto mb-8" />
        ) : (
          <p className="text-sm text-gray-500 mb-8 animate-fade-in delay-150">
            Now covering {subjectsCount} {subjectsCount === 1 ? "subject" : "subjects"} aligned with CAPS curriculum
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in delay-200">
          <Button 
            size="lg" 
            className="text-lg bg-sa-emerald hover:bg-sa-emerald/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            asChild
          >
            <a href="/auth?mode=signup">Get Started</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg border-sa-sky text-sa-sky hover:bg-sa-sky/10 transition-all duration-300 hover:shadow hover:scale-105"
            asChild
          >
            <a href="/auth?mode=login">Login</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center gap-2 animate-scale-in"
              style={{ animationDelay: `${i * 100 + 300}ms` }}
              role="listitem"
              aria-label={feature.ariaLabel}
            >
              <feature.icon className="h-10 w-10 text-sa-sunset animate-float" style={{ animationDelay: `${i * 0.5}s` }} aria-hidden="true" />
              <span className="text-sm font-medium text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
