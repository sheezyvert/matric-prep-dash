
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
  return (
    <section id="curriculum" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive Coverage of High School Subjects
        </h2>
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {subjects.map((subject, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/4">
                  <Card
                    className={cn(
                      "p-6 text-center transition-all duration-300 transform hover:scale-105",
                      subject.color
                    )}
                  >
                    <div className="text-4xl mb-3">{subject.icon}</div>
                    <h3 className="font-medium text-lg">{subject.name}</h3>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
