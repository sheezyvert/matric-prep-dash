
import { Achievement, ProgressData, Subject, Topic, UserProfile } from '@/types/dashboard';

// Mock user profile
export const mockUserProfile: UserProfile = {
  id: '1',
  name: 'Sipho Nkosi',
  avatar: '',
  grade: 12,
  email: 'sipho@example.com',
  joinedAt: '2023-02-15T08:30:00.000Z',
  achievements: [
    {
      id: 'a1',
      name: 'First Steps',
      description: 'Complete your first topic',
      icon: 'trophy',
      earnedAt: '2023-02-16T10:15:00.000Z',
      category: 'completion'
    },
    {
      id: 'a2',
      name: 'Math Whiz',
      description: 'Score 90% or higher on 5 math assessments',
      icon: 'star',
      earnedAt: '2023-03-20T14:30:00.000Z',
      category: 'mastery'
    },
    {
      id: 'a3',
      name: 'Study Streak',
      description: 'Log in for 7 consecutive days',
      icon: 'zap',
      earnedAt: '2023-04-05T09:45:00.000Z',
      category: 'streak'
    },
    {
      id: 'a4',
      name: 'Problem Solver',
      description: 'Complete 50 practice questions',
      icon: 'award',
      earnedAt: '2023-04-18T16:20:00.000Z',
      category: 'special'
    }
  ],
  overallProgress: 34
};

// Mock subjects
export const mockSubjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: 'calculator',
    progress: 65,
    totalTopics: 12,
    completedTopics: 8,
    lastAccessed: {
      topic: 'Calculus: Derivatives',
      timestamp: '2023-04-20T13:45:00.000Z'
    }
  },
  {
    id: 'physics',
    name: 'Physical Sciences',
    icon: 'atom',
    progress: 30,
    totalTopics: 10,
    completedTopics: 3,
    lastAccessed: {
      topic: 'Mechanics: Newton\'s Laws',
      timestamp: '2023-04-19T10:30:00.000Z'
    }
  },
  {
    id: 'life',
    name: 'Life Sciences',
    icon: 'microscope',
    progress: 10,
    totalTopics: 8,
    completedTopics: 1,
    lastAccessed: {
      topic: 'Cell Biology',
      timestamp: '2023-04-18T15:20:00.000Z'
    }
  },
  {
    id: 'english',
    name: 'English Home Language',
    icon: 'book',
    progress: 0,
    totalTopics: 6,
    completedTopics: 0
  }
];

// Mock topics (for Mathematics)
export const mockTopics: Topic[] = [
  {
    id: 'algebra',
    name: 'Algebra',
    difficulty: 2,
    status: 'completed',
    progress: 100,
    timeSpent: 320,
    lastAccessed: '2023-03-15T09:30:00.000Z',
    children: [
      {
        id: 'algebra-exponents',
        name: 'Exponents & Logarithms',
        parentId: 'algebra',
        difficulty: 2,
        status: 'completed',
        progress: 100,
        timeSpent: 180
      },
      {
        id: 'algebra-equations',
        name: 'Equations & Inequalities',
        parentId: 'algebra',
        difficulty: 2,
        status: 'completed',
        progress: 100,
        timeSpent: 140
      }
    ]
  },
  {
    id: 'calculus',
    name: 'Calculus',
    difficulty: 3,
    status: 'in-progress',
    progress: 60,
    timeSpent: 240,
    lastAccessed: '2023-04-20T13:45:00.000Z',
    children: [
      {
        id: 'calculus-limits',
        name: 'Limits & Continuity',
        parentId: 'calculus',
        difficulty: 2,
        status: 'completed',
        progress: 100,
        timeSpent: 90
      },
      {
        id: 'calculus-derivatives',
        name: 'Derivatives',
        parentId: 'calculus',
        description: 'Rules, applications, and techniques',
        difficulty: 3,
        status: 'in-progress',
        progress: 75,
        timeSpent: 150,
        lastAccessed: '2023-04-20T13:45:00.000Z'
      },
      {
        id: 'calculus-integration',
        name: 'Integration',
        parentId: 'calculus',
        description: 'Indefinite and definite integrals',
        difficulty: 3,
        status: 'not-started',
        progress: 0,
        timeSpent: 0
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Euclidean Geometry',
    difficulty: 2,
    status: 'completed',
    progress: 100,
    timeSpent: 200,
    lastAccessed: '2023-03-10T11:20:00.000Z'
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    difficulty: 2,
    status: 'in-progress',
    progress: 50,
    timeSpent: 180,
    lastAccessed: '2023-04-18T14:15:00.000Z'
  },
  {
    id: 'statistics',
    name: 'Statistics & Probability',
    difficulty: 1,
    status: 'not-started',
    progress: 0,
    timeSpent: 0
  }
];

// Mock progress data for visualizations
export const mockProgressData: Record<string, ProgressData> = {
  byTopic: {
    labels: ['Algebra', 'Calculus', 'Geometry', 'Trigonometry', 'Statistics'],
    values: [100, 60, 100, 50, 0],
    colors: ['#34D399', '#60A5FA', '#34D399', '#60A5FA', '#E5E7EB']
  },
  byDifficulty: {
    labels: ['Easy', 'Medium', 'Hard'],
    values: [100, 75, 40],
    colors: ['#93C5FD', '#3B82F6', '#1E40AF']
  },
  byTimeSpent: {
    labels: ['Algebra', 'Calculus', 'Geometry', 'Trigonometry', 'Statistics'],
    values: [320, 240, 200, 180, 0],
    total: 940
  }
};

// Mock achievements
export const mockAchievements: Achievement[] = mockUserProfile.achievements;
