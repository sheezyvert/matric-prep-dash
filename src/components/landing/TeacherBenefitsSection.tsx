
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Users, ChartBar } from "lucide-react";

const benefits = [
  {
    icon: Book,
    title: "AI-Powered Question Generation",
    description: "Generate unique, CAPS-aligned questions and full exam papers tailored to your class's needs."
  },
  {
    icon: ChartBar,
    title: "Real-time Progress Monitoring",
    description: "Track individual student progress and identify areas where additional support is needed."
  },
  {
    icon: Users,
    title: "Class Management",
    description: "Easily organize students into classes and assign targeted practice materials."
  },
  {
    icon: GraduationCap,
    title: "Performance Analytics",
    description: "Get detailed insights into student performance and learning patterns."
  }
];

export function TeacherBenefitsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Empower Your Teaching
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Enhance your teaching experience with powerful tools designed specifically for educators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
