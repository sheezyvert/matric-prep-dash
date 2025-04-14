
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Clock, PlayCircle, Trophy } from "lucide-react";

interface HeroSectionProps {
  userName: string;
  overallProgress: number;
  nextRecommendedTopic: {
    id: string;
    name: string;
    subject: string;
  };
  lastAccessedTopic?: {
    id: string;
    name: string;
    subject: string;
    timestamp: string;
  };
  achievementCount: number;
  onResumeLastTopic?: () => void;
  onStartRecommendedTopic?: () => void;
}

export function HeroSection({
  userName,
  overallProgress,
  nextRecommendedTopic,
  lastAccessedTopic,
  achievementCount,
  onResumeLastTopic,
  onStartRecommendedTopic
}: HeroSectionProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white p-6 md:p-8">
      {/* Decorative element */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Welcome and Progress */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome back, {userName}!
            </h1>
            <div className="max-w-md">
              <div className="flex justify-between mb-2">
                <span>Overall Progress</span>
                <span className="font-medium">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2 bg-white/20" indicatorClassName="bg-white" />
            </div>
            <div className="flex items-center text-white/80">
              <Trophy className="h-5 w-5 mr-2" />
              <span>{achievementCount} achievements earned</span>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-3 md:min-w-80">
            {lastAccessedTopic && (
              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Resume where you left off</h3>
                      <p className="text-sm text-white/80 line-clamp-1">{lastAccessedTopic.name}</p>
                      <div className="flex items-center mt-1 text-xs text-white/70">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{lastAccessedTopic.subject}</span>
                      </div>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="rounded-full h-8 w-8 bg-white/20 hover:bg-white/30 text-white"
                      onClick={onResumeLastTopic}
                    >
                      <PlayCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Card className="bg-white text-primary shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Recommended for you</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{nextRecommendedTopic.name}</p>
                    <div className="flex items-center mt-1 text-xs text-muted-foreground">
                      <span>{nextRecommendedTopic.subject}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="h-8 gap-1"
                    onClick={onStartRecommendedTopic}
                  >
                    Start <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
