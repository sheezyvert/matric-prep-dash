
import { Achievement } from '@/types/dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, Star, Trophy, Zap } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { formatDistanceToNow } from 'date-fns';

interface AchievementBadgesProps {
  achievements: Achievement[];
  title?: string;
  description?: string;
  className?: string;
}

export function AchievementBadges({
  achievements,
  title = "Your Achievements",
  description = "Badges you've earned on your learning journey",
  className
}: AchievementBadgesProps) {
  // Sort achievements by earned date (most recent first)
  const sortedAchievements = [...achievements].sort((a, b) => {
    if (!a.earnedAt) return 1;
    if (!b.earnedAt) return -1;
    return new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime();
  });

  const getBadgeIcon = (achievement: Achievement) => {
    switch (achievement.category) {
      case 'completion':
        return <Trophy className="h-6 w-6" />;
      case 'streak':
        return <Zap className="h-6 w-6" />;
      case 'mastery':
        return <Star className="h-6 w-6" />;
      case 'special':
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getBadgeColor = (achievement: Achievement) => {
    switch (achievement.category) {
      case 'completion':
        return 'from-blue-500 to-cyan-400';
      case 'streak':
        return 'from-amber-500 to-yellow-400';
      case 'mastery':
        return 'from-purple-500 to-pink-400';
      case 'special':
      default:
        return 'from-emerald-500 to-green-400';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <TooltipProvider>
            {sortedAchievements.map((achievement) => (
              <Tooltip key={achievement.id}>
                <TooltipTrigger asChild>
                  <div 
                    className={`achievement-badge bg-gradient-to-br ${getBadgeColor(achievement)} 
                      w-14 h-14 flex items-center justify-center text-white cursor-help transition-transform hover:scale-110`}
                  >
                    {getBadgeIcon(achievement)}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-1 p-1">
                    <h4 className="font-semibold">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    {achievement.earnedAt && (
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Earned {formatDistanceToNow(new Date(achievement.earnedAt), { addSuffix: true })}</span>
                      </div>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
