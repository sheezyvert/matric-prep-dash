
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Select Language & Subject",
    description: "Choose from 11 South African languages and your preferred subject.",
    animation: "slide-right"
  },
  {
    icon: Brain,
    title: "Get Your AI Lesson",
    description: "Receive personalized AI-powered explanations, examples, and practice.",
    animation: "fade-in"
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description: "See your growth over time with detailed analytics and insights.",
    animation: "slide-left"
  }
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const cards = document.querySelectorAll('.how-it-works-card');
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 relative overflow-hidden"
    >
      {/* Background and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-sa-sky/5 to-sa-emerald/5 -z-10" />
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-sa-charcoal">
          How It Works
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple steps to accelerate your learning journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <Card 
              key={i} 
              className={`how-it-works-card opacity-0 ${step.animation === 'slide-right' ? '-translate-x-20' : 
                step.animation === 'slide-left' ? 'translate-x-20' : 'translate-y-20'} 
                transition-all duration-700 delay-${i * 200} hover:shadow-lg`}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-sa-sunset to-sa-gold text-white">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sa-charcoal">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
