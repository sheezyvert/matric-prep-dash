
// Type definitions for the educational dashboard

// Progress tracking
export type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

// Difficulty levels
export type DifficultyLevel = 1 | 2 | 3;

// Subject data structure
export interface Subject {
  id: string;
  name: string;
  icon: string;
  progress: number; // 0-100
  totalTopics: number;
  completedTopics: number;
  lastAccessed?: {
    topic: string;
    timestamp: string;
  };
}

// Topic structure (hierarchical)
export interface Topic {
  id: string;
  name: string;
  parentId?: string;
  description?: string;
  difficulty: DifficultyLevel;
  status: ProgressStatus;
  progress: number; // 0-100
  children?: Topic[];
  timeSpent?: number; // in minutes
  lastAccessed?: string;
}

// Progress data for visualizations
export interface ProgressData {
  labels: string[];
  values: number[];
  colors?: string[];
  total?: number;
}

// Achievement/Badge
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: string;
  category: 'completion' | 'streak' | 'mastery' | 'special';
}

// User profile data
export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  grade: number;
  email: string;
  joinedAt: string;
  achievements: Achievement[];
  overallProgress: number; // 0-100
}
