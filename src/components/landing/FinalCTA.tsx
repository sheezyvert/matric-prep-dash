
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function FinalCTA() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
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
    <section className="py-20 relative overflow-hidden">
      {/* Background with cursor-following gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-sa-sunset/20 via-sa-emerald/20 to-sa-sky/20 
        bg-[length:200%_200%] animate-morph-gradient -z-10" 
        style={gradientStyle}
      />
      
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sa-charcoal">
          Join UpGrade Today
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 [text-wrap:balance]">
          Empower your learning journey with AI-powered, multilingual education tailored for South African learners
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="text-lg bg-sa-emerald hover:bg-sa-emerald/90 gap-2 group transition-all duration-300 hover:shadow-lg hover:scale-105"
            asChild
          >
            <a href="/auth?mode=signup">
              Get Started 
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
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
      </div>
    </section>
  );
}
