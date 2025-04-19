
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thabo M.",
    role: "Grade 12 Student",
    content: "The AI explanations in my language helped me understand calculus like never before. My marks improved significantly!",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    name: "Mrs. Patel",
    role: "Mathematics Teacher",
    content: "This platform has transformed how I support my students. The multilingual feature ensures no student is left behind.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Amahle N.",
    role: "Grade 12 Student",
    content: "Being able to practice with past papers and get instant AI help made me feel confident for my matric exams.",
    image: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    name: "Mr. Khumalo",
    role: "School Principal",
    content: "UpGrade has improved our school's overall performance. The data insights help us identify areas where students need extra support.",
    image: "https://randomuser.me/api/portraits/men/66.jpg"
  },
  {
    name: "Lesedi T.",
    role: "Grade 11 Student",
    content: "Learning in Setswana makes complex topics so much easier to understand. I can finally enjoy studying physics!",
    image: "https://randomuser.me/api/portraits/women/62.jpg"
  },
];

const languageFlags = [
  "🇿🇦", // South Africa
  "🏳️", // Zulu
  "🏳️", // Xhosa
  "🏳️", // Afrikaans
  "🏳️", // Southern Sotho 
  "🏳️", // Northern Sotho
  "🏳️", // Tswana
  "🏳️", // Swati
  "🏳️", // Ndebele
  "🏳️", // Tsonga
  "🏳️", // Venda
];

const languageNames = [
  "English",
  "isiZulu",
  "isiXhosa",
  "Afrikaans",
  "Sesotho",
  "Sepedi",
  "Setswana",
  "siSwati",
  "isiNdebele",
  "Xitsonga",
  "Tshivenda"
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-8xl text-sa-sunset/10 opacity-70">
        <Quote />
      </div>
      <div className="absolute bottom-10 right-10 text-8xl text-sa-sky/10 opacity-70 transform rotate-180">
        <Quote />
      </div>
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-sa-charcoal">
          What Our Users Say
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Success stories from students and teachers across South Africa
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={carouselRef}
            className="overflow-hidden px-4"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-lg border-0">
                    <CardContent className="pt-8 pb-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-sa-gold"
                          />
                        </div>
                        <div>
                          <div className="text-sa-sky mb-1">
                            <Quote className="h-5 w-5 inline-block mr-2" />
                          </div>
                          <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.content}"</p>
                          <div>
                            <p className="font-semibold text-sa-charcoal">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-sa-charcoal" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-sa-charcoal" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(i);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex ? 'w-6 bg-sa-sunset' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Language scrolling ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-carousel space-x-8 py-4">
            {languageNames.concat(languageNames).map((name, i) => (
              <div key={i} className="flex items-center space-x-2 whitespace-nowrap px-3 py-2 bg-sa-sky/5 rounded-full">
                <span className="text-xl">{languageFlags[i % languageFlags.length]}</span>
                <span className="text-sm font-medium text-sa-sky">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
