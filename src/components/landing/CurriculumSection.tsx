
import { Progress } from "@/components/ui/progress";

const topics = [
  { name: "Algebra", coverage: 100 },
  { name: "Calculus", coverage: 100 },
  { name: "Geometry", coverage: 100 },
  { name: "Trigonometry", coverage: 100 },
  { name: "Statistics", coverage: 100 },
  { name: "Probability", coverage: 100 },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Complete Grade 12 Mathematics Coverage</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {topics.map((topic, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{topic.name}</span>
                <span className="text-sm text-gray-500">{topic.coverage}% Coverage</span>
              </div>
              <Progress value={topic.coverage} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
