
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { Brain, Globe, FileSpreadsheet, BarChart3, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart AI Tutoring",
    description: "Personalized learning paths that adapt to your pace and level of understanding.",
    color: "from-sa-sunset to-red-400"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Learn in Zulu, Xhosa, Tswana, Afrikaans, English and more South African languages.",
    color: "from-sa-sky to-blue-400"
  },
  {
    icon: FileSpreadsheet,
    title: "Exam & Paper Generator",
    description: "Create customized tests and practice papers with automatic marking and feedback.",
    color: "from-sa-emerald to-green-400"
  },
  {
    icon: BarChart3,
    title: "Class Monitoring",
    description: "Track student progress with interactive dashboards and real-time analytics.",
    color: "from-purple-500 to-violet-400"
  },
  {
    icon: GraduationCap,
    title: "Full Curriculum",
    description: "Coverage across Maths, Physics, Accounting, Economics, Life Sciences and more.",
    color: "from-sa-gold to-yellow-400"
  },
];

export function FeaturesSection() {
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
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="features" 
      className="py-20 px-4 bg-features-gradient from-sa-sky/10 via-white to-sa-sunset/10 relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sa-emerald/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sa-sunset/30 to-transparent" />
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-sa-charcoal">
          Why Choose UpGrade?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Innovative features designed to transform learning and teaching
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className="feature-card opacity-0 translate-y-10 transition-all duration-700 hover:shadow-lg hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className={`mb-6 p-4 inline-block rounded-2xl bg-gradient-to-br ${feature.color} text-white`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-sa-charcoal">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
