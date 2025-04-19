
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Thabo M.",
    role: "Grade 12 Student",
    content: "The AI explanations in my language helped me understand calculus like never before. My marks improved significantly!",
  },
  {
    name: "Mrs. Patel",
    role: "Mathematics Teacher",
    content: "This platform has transformed how I support my students. The multilingual feature ensures no student is left behind.",
  },
  {
    name: "Amahle N.",
    role: "Grade 12 Student",
    content: "Being able to practice with past papers and get instant AI help made me feel confident for my matric exams.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="hover:scale-105 transition-transform duration-300">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
