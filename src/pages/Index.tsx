
import { useState } from 'react';
import { Header } from '@/components/dashboard/Header';
import { HeroSection } from '@/components/dashboard/HeroSection';
import { SubjectCard } from '@/components/dashboard/SubjectCard';
import { TopicNavigator } from '@/components/dashboard/TopicNavigator';
import { AchievementBadges } from '@/components/dashboard/AchievementBadges';
import { ProgressChart, ProgressStats } from '@/components/dashboard/ProgressVisualizations';
import { 
  mockUserProfile, 
  mockSubjects, 
  mockTopics, 
  mockProgressData, 
  mockAchievements 
} from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Calculate total time spent
  const totalTimeSpent = mockTopics.reduce((total, topic) => {
    const topicTime = topic.timeSpent || 0;
    const childrenTime = topic.children?.reduce((sum, child) => sum + (child.timeSpent || 0), 0) || 0;
    return total + topicTime + childrenTime;
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        userName={mockUserProfile.name} 
        avatarUrl={mockUserProfile.avatar}
        unreadNotifications={2}
        onThemeToggle={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="container px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8">
          <HeroSection 
            userName={mockUserProfile.name.split(' ')[0]}
            overallProgress={mockUserProfile.overallProgress}
            nextRecommendedTopic={{
              id: 'calculus-derivatives',
              name: 'Derivatives',
              subject: 'Mathematics'
            }}
            lastAccessedTopic={{
              id: 'calculus-derivatives',
              name: 'Derivatives',
              subject: 'Mathematics',
              timestamp: '2023-04-20T13:45:00.000Z'
            }}
            achievementCount={mockAchievements.length}
          />
        </section>

        {/* Subjects Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockSubjects.map(subject => (
              <SubjectCard 
                key={subject.id} 
                subject={subject} 
              />
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Topic Navigator */}
          <div className="lg:col-span-1 space-y-6">
            <TopicNavigator 
              topics={mockTopics} 
              currentLevel="calculus-derivatives"
              showDifficulty={true}
              allowExpand={true}
            />
            
            <AchievementBadges achievements={mockAchievements} />
          </div>

          {/* Right: Progress & Statistics */}
          <div className="lg:col-span-2 space-y-6">
            <ProgressStats 
              completedTopics={mockSubjects.reduce((sum, subject) => sum + subject.completedTopics, 0)}
              totalTopics={mockSubjects.reduce((sum, subject) => sum + subject.totalTopics, 0)}
              timeSpent={totalTimeSpent}
              averageScore={84}
            />

            <Tabs defaultValue="byTopic">
              <TabsList className="mb-4">
                <TabsTrigger value="byTopic">Progress by Topic</TabsTrigger>
                <TabsTrigger value="byDifficulty">By Difficulty</TabsTrigger>
                <TabsTrigger value="byTimeSpent">Time Distribution</TabsTrigger>
              </TabsList>
              
              <TabsContent value="byTopic">
                <ProgressChart 
                  data={mockProgressData.byTopic}
                  title="Topic Completion"
                  description="Your progress across all mathematics topics"
                  type="bar"
                />
              </TabsContent>
              
              <TabsContent value="byDifficulty">
                <ProgressChart 
                  data={mockProgressData.byDifficulty}
                  title="Performance by Difficulty Level"
                  description="How you're handling different difficulty levels"
                  type="circle"
                />
              </TabsContent>
              
              <TabsContent value="byTimeSpent">
                <ProgressChart 
                  data={mockProgressData.byTimeSpent}
                  title="Time Spent by Topic"
                  description="Where you've been investing your study time"
                  type="bar"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
