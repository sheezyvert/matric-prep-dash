
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Book, BarChart3, Clock, Users, FileCheck, ArrowUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type StudentProgress = {
  name: string;
  subject: string;
  progress: number;
  lastActive: string;
};

type ExamMetric = {
  title: string;
  value: string | number;
  change: number;
  icon: React.ElementType;
};

const studentProgressData: StudentProgress[] = [
  { name: "Thabo Ndlovu", subject: "Mathematics", progress: 78, lastActive: "Today" },
  { name: "Lerato Molefe", subject: "Physical Sciences", progress: 65, lastActive: "Yesterday" },
  { name: "Anele Mbeki", subject: "Life Sciences", progress: 92, lastActive: "Today" },
  { name: "Sipho Nkosi", subject: "Accounting", progress: 43, lastActive: "3 days ago" },
];

const examMetrics: ExamMetric[] = [
  { title: "Total Students", value: 156, change: 12, icon: Users },
  { title: "Avg. Completion", value: "68%", change: 4, icon: FileCheck },
  { title: "Exams Created", value: 24, change: -2, icon: Book },
  { title: "Active Time", value: "4.2h", change: 0.7, icon: Clock },
];

export function TeacherDashboardPreview() {
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.dashboard-card');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-sa-charcoal/5 to-sa-charcoal/10 relative overflow-hidden"
    >
      {/* Dashboard decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sa-emerald/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sa-sunset/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-sa-charcoal">
            Teacher Dashboard Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools to monitor student progress and generate exams with ease
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto perspective-1000">
          <div className={`relative transition-all duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front side - Student Progress */}
            <div className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-3 gap-6 backface-hidden ${isFlipped ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <Card className="dashboard-card lg:col-span-2 opacity-0 translate-y-8 transition-all duration-500 shadow-md hover:shadow-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    <span>Student Progress</span>
                    <span className="text-xs text-gray-500 font-normal">Last updated: Today</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentProgressData.map((student, i) => (
                      <div key={i} className="border-b pb-3 last:border-0">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{student.name}</span>
                          <span className="text-sm text-gray-500">Last active: {student.lastActive}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{student.subject}</div>
                        <div className="flex items-center gap-3">
                          <Progress value={student.progress} className="h-2" />
                          <span className="text-sm font-medium">{student.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dashboard-card opacity-0 translate-y-8 transition-all duration-500 shadow-md hover:shadow-xl">
                <CardHeader className="pb-2">
                  <CardTitle>Class Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {examMetrics.map((metric, i) => (
                      <div key={i} className="flex items-center p-3 rounded-lg border">
                        <div className="p-2 rounded-full bg-sa-sky/10 mr-3">
                          <metric.icon className="h-5 w-5 text-sa-sky" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{metric.title}</div>
                          <div className="font-medium">{metric.value}</div>
                        </div>
                        <div className="ml-auto">
                          <span className={`text-xs px-2 py-1 rounded-full ${metric.change > 0 
                            ? 'bg-green-100 text-green-800' 
                            : metric.change < 0 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-gray-100 text-gray-800'}`}
                          >
                            {metric.change > 0 ? '+' : ''}{metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Back side - Exam Generator */}
            <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Card className="dashboard-card h-full shadow-md hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Exam Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-sa-sky/5 p-4 rounded-lg border border-sa-sky/20">
                      <div className="flex items-center mb-3">
                        <Book className="h-5 w-5 text-sa-sky mr-2" />
                        <h3 className="font-medium text-sa-charcoal">Mathematics - Grade 12</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-dashed">
                          <span>Algebra and Functions</span>
                          <span className="text-sa-sky font-medium">25 marks</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-dashed">
                          <span>Calculus</span>
                          <span className="text-sa-sky font-medium">30 marks</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-dashed">
                          <span>Probability and Statistics</span>
                          <span className="text-sa-sky font-medium">20 marks</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-dashed">
                          <span>Geometry and Trigonometry</span>
                          <span className="text-sa-sky font-medium">25 marks</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-500">Total</div>
                          <div className="font-bold text-lg text-sa-charcoal">100 marks</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Difficulty</div>
                          <div className="flex gap-1">
                            <span className="w-2 h-6 bg-sa-emerald rounded-sm"></span>
                            <span className="w-2 h-6 bg-sa-emerald rounded-sm"></span>
                            <span className="w-2 h-6 bg-sa-emerald rounded-sm"></span>
                            <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                            <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-sa-sky text-white rounded-lg flex items-center hover:bg-sa-sky/90 transition-colors">
                          Generate <ArrowUpRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border">
                        <div className="flex justify-between mb-3">
                          <span className="font-medium">Previous Exams</span>
                          <span className="text-sm text-sa-sky">View all</span>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm p-2 bg-gray-50 rounded flex justify-between">
                            <span>June Assessment</span>
                            <span className="text-gray-500">12 days ago</span>
                          </div>
                          <div className="text-sm p-2 bg-gray-50 rounded flex justify-between">
                            <span>March Test</span>
                            <span className="text-gray-500">45 days ago</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border">
                        <div className="flex justify-between mb-3">
                          <span className="font-medium">Templates</span>
                          <span className="text-sm text-sa-sky">Create new</span>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm p-2 bg-gray-50 rounded flex justify-between">
                            <span>Weekly Quiz</span>
                            <span className="text-xs bg-sa-emerald/10 text-sa-emerald px-2 py-0.5 rounded-full">30 min</span>
                          </div>
                          <div className="text-sm p-2 bg-gray-50 rounded flex justify-between">
                            <span>Full Exam</span>
                            <span className="text-xs bg-sa-sunset/10 text-sa-sunset px-2 py-0.5 rounded-full">3 hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Click to toggle between dashboard views</p>
          <button 
            onClick={() => setIsFlipped(prev => !prev)}
            className="mt-2 px-4 py-2 bg-sa-charcoal/10 rounded-lg hover:bg-sa-charcoal/20 transition-colors text-sm font-medium"
          >
            {isFlipped ? 'View Student Progress' : 'View Exam Generator'}
          </button>
        </div>
      </div>
    </section>
  );
}
