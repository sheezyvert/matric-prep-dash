
import { useState } from "react";
import { Topic } from "@/types/dashboard";
import { ChevronDown, ChevronRight, CheckCircle, Circle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface TopicNavigatorProps {
  topics: Topic[];
  currentLevel?: string;
  showDifficulty?: boolean;
  allowExpand?: boolean;
  onSelectTopic?: (topic: Topic) => void;
}

export function TopicNavigator({
  topics,
  currentLevel,
  showDifficulty = true,
  allowExpand = true,
  onSelectTopic
}: TopicNavigatorProps) {
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const toggleExpand = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const getStatusIcon = (status: Topic['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-progress-completed" />;
      case 'in-progress':
        return <Loader2 className="h-4 w-4 text-progress-in-progress animate-spin" />;
      case 'not-started':
      default:
        return <Circle className="h-4 w-4 text-progress-not-started" />;
    }
  };

  const getDifficultyLabel = (level: Topic['difficulty']) => {
    switch (level) {
      case 1:
        return <Badge variant="outline" className="bg-difficulty-1 border-difficulty-1 text-xs">Easy</Badge>;
      case 2:
        return <Badge variant="outline" className="bg-difficulty-2 border-difficulty-2 text-white text-xs">Medium</Badge>;
      case 3:
        return <Badge variant="outline" className="bg-difficulty-3 border-difficulty-3 text-white text-xs">Hard</Badge>;
      default:
        return null;
    }
  };

  const renderTopic = (topic: Topic, depth = 0) => {
    const hasChildren = (topic.children?.length || 0) > 0;
    const isExpanded = expandedTopics[topic.id] || false;
    const isCurrentTopic = currentLevel === topic.id;
    const indentationClass = `pl-${depth * 6}`;

    return (
      <div key={topic.id} className="animate-fade-in">
        <div 
          className={`
            topic-navigator-item flex items-center justify-between p-2 rounded-md 
            ${isCurrentTopic ? 'bg-primary/5 border-l-primary' : ''}
            ${topic.status === 'completed' ? 'border-progress-completed' : 
              topic.status === 'in-progress' ? 'border-progress-in-progress' : 'border-muted'}
          `}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {hasChildren && allowExpand ? (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 p-0" 
                onClick={() => toggleExpand(topic.id)}
              >
                {isExpanded ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
              </Button>
            ) : (
              <div className="w-6 flex justify-center">
                {getStatusIcon(topic.status)}
              </div>
            )}
            
            <div 
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => onSelectTopic?.(topic)}
            >
              <div className="font-medium truncate">{topic.name}</div>
              {topic.description && (
                <div className="text-xs text-muted-foreground truncate">{topic.description}</div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {showDifficulty && getDifficultyLabel(topic.difficulty)}
            <div className="w-10 text-xs text-right font-medium">
              {topic.progress}%
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="px-2 mt-1 mb-2">
          <Progress 
            value={topic.progress} 
            className="h-1.5"
            indicatorClassName={`
              ${topic.status === 'completed' ? 'bg-progress-completed' : 
                topic.status === 'in-progress' ? 'bg-progress-in-progress' : 
                'bg-progress-not-started'}
            `}
          />
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="ml-4 border-l border-muted pl-2 mt-1 mb-2 space-y-1">
            {topic.children?.map(childTopic => renderTopic(childTopic, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-md border bg-card p-4 space-y-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Topics</h3>
        {currentLevel && (
          <div className="text-sm text-muted-foreground">
            <span>Current level: </span>
            <span className="font-medium">{currentLevel}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        {topics.map(topic => renderTopic(topic))}
      </div>
    </div>
  );
}
