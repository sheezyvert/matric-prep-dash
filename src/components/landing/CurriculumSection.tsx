
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const subjects = [
  { name: "Mathematics", icon: "📐", color: "bg-blue-100" },
  { name: "Physical Sciences", icon: "🧪", color: "bg-purple-100" },
  { name: "Life Sciences", icon: "🧬", color: "bg-green-100" },
  { name: "Accounting", icon: "📊", color: "bg-yellow-100" },
  { name: "Economics", icon: "📈", color: "bg-red-100" },
  { name: "Business Studies", icon: "💼", color: "bg-orange-100" },
  { name: "Geography", icon: "🌍", color: "bg-emerald-100" },
  { name: "History", icon: "📚", color: "bg-amber-100" },
];

export function CurriculumSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-carousel');
          } else {
            entry.target.classList.remove('animate-carousel');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="curriculum" className="py-16 px-4 bg-gradient-to-br from-white to-sa-gold/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-sa-charcoal">
          Comprehensive Coverage of High School Subjects
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Full CAPS-aligned curriculum for South African learners
        </p>
        
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>
          
          <div 
            ref={containerRef} 
            className="flex gap-6 py-4 carousel-container"
          >
            {/* Double the subjects for infinite carousel effect */}
            {[...subjects, ...subjects].map((subject, i) => (
              <Card
                key={i}
                className={cn(
                  "flex-shrink-0 p-6 text-center transition-all duration-300 transform",
                  hoveredIndex === i ? "scale-110 shadow-lg" : "hover:scale-105",
                  subject.color
                )}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-5xl mb-3 transform transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === i ? 'scale(1.2)' : 'scale(1)'
                  }}
                >
                  {subject.icon}
                </div>
                <h3 className="font-medium text-lg">{subject.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
