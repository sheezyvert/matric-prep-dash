
import * as React from 'react';
import { ProgressData } from '@/types/dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface ProgressChartProps {
  data: ProgressData;
  title: string;
  description?: string;
  type?: 'circle' | 'bar' | 'radar';
  showLabels?: boolean;
  interactive?: boolean;
  className?: string;
}

export function ProgressChart({
  data,
  title,
  description,
  type = 'bar',
  showLabels = true,
  interactive = true,
  className
}: ProgressChartProps) {
  // Format data for charts
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
    color: data.colors?.[index]
  }));

  // Calculate total
  const total = data.total || data.values.reduce((sum, value) => sum + value, 0);

  const renderChart = () => {
    switch (type) {
      case 'circle':
        return (
          <div className="w-full aspect-square max-w-xs mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={showLabels}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color || `hsl(${index * 40}, 70%, 60%)`} 
                    />
                  ))}
                </Pie>
                {interactive && <Tooltip />}
                {interactive && <Legend />}
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      case 'bar':
      default:
        return (
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                {showLabels && (
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                )}
                {interactive && <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />}
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color || `hsl(${210 + index * 30}, 80%, 60%)`} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
}

interface ProgressStatsProps {
  completedTopics: number;
  totalTopics: number;
  timeSpent: number; // minutes
  averageScore?: number;
  className?: string;
}

export function ProgressStats({
  completedTopics,
  totalTopics,
  timeSpent,
  averageScore,
  className
}: ProgressStatsProps) {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">Your Progress</CardTitle>
        <CardDescription>Overview of your learning journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
            <span className="text-3xl font-bold text-primary">{completedTopics}</span>
            <span className="text-sm text-muted-foreground">Topics Completed</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
            <span className="text-3xl font-bold text-primary">{Math.round((completedTopics / totalTopics) * 100)}%</span>
            <span className="text-sm text-muted-foreground">Overall Progress</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
            <span className="text-3xl font-bold text-primary">{formatTime(timeSpent)}</span>
            <span className="text-sm text-muted-foreground">Time Spent</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
            <span className="text-3xl font-bold text-primary">{averageScore || '--'}</span>
            <span className="text-sm text-muted-foreground">Avg. Score</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
