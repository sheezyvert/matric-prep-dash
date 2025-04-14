
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Subject } from "@/types/dashboard";
import { ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatDistanceToNow } from "date-fns";

interface SubjectCardProps {
  subject: Subject;
  onClick?: () => void;
  loading?: boolean;
}

export function SubjectCard({ subject, onClick, loading = false }: SubjectCardProps) {
  if (loading) {
    return (
      <Card className="w-full animate-pulse opacity-70">
        <CardHeader className="pb-2">
          <div className="h-6 w-24 bg-muted rounded mb-1"></div>
          <div className="h-4 w-36 bg-muted rounded"></div>
        </CardHeader>
        <CardContent>
          <div className="h-4 bg-muted rounded mb-4"></div>
          <div className="flex justify-between items-center mb-2">
            <div className="h-5 w-20 bg-muted rounded"></div>
            <div className="h-5 w-10 bg-muted rounded"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <div className="h-9 w-24 bg-muted rounded"></div>
          <div className="h-9 w-9 bg-muted rounded-full"></div>
        </CardFooter>
      </Card>
    );
  }

  const formattedDate = subject.lastAccessed 
    ? formatDistanceToNow(new Date(subject.lastAccessed.timestamp), { addSuffix: true }) 
    : 'Never';

  return (
    <Card className="w-full card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="text-primary">{subject.name}</span>
          </CardTitle>
          <div 
            className={`h-10 w-10 rounded-full flex items-center justify-center ${
              subject.progress >= 75 ? "bg-progress-completed/20" : 
              subject.progress >= 25 ? "bg-progress-in-progress/20" : 
              "bg-progress-not-started/20"
            }`}
          >
            <span 
              className={`text-sm font-medium ${
                subject.progress >= 75 ? "text-progress-completed" : 
                subject.progress >= 25 ? "text-progress-in-progress" : 
                "text-progress-not-started"
              }`}
            >
              {subject.progress}%
            </span>
          </div>
        </div>
        <CardDescription>
          {subject.completedTopics} of {subject.totalTopics} topics completed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress 
          value={subject.progress} 
          className="h-2 mb-4"
          indicatorClassName={`${
            subject.progress >= 75 ? "bg-progress-completed" : 
            subject.progress >= 25 ? "bg-progress-in-progress" : 
            "bg-progress-not-started"
          }`}
        />
        {subject.lastAccessed && (
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>Last activity</span>
            </div>
            <span className="font-medium">{formattedDate}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" onClick={onClick}>
          Continue Learning
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={onClick}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
