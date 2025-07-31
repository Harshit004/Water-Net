
export interface ChangeEntry {
  id: string;
  timestamp: Date;
  category: 'Features' | 'Bug Fixes' | 'UI/UX' | 'Performance' | 'Testing' | 'Documentation' | 'Refactoring';
  type: 'Addition' | 'Modification' | 'Removal';
  title: string;
  description: string;
  files: string[];
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  version: string;
  author: string;
  tags: string[];
  timeSpent: number; // in hours
  complexity?: 'Simple' | 'Medium' | 'Complex' | 'Very Complex';
  issuesEncountered?: number;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const changeLedger: ChangeEntry[] = [
  {
    id: 'commit-initial',
    timestamp: new Date('2025-01-21T10:00:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Initial project setup with React and Vite',
    description: 'Set up the basic project structure with React, TypeScript, Vite, and Tailwind CSS',
    files: ['package.json', 'vite.config.ts', 'tailwind.config.js'],
    impact: 'High',
    version: '0.1.0',
    author: 'Developer',
    tags: ['setup', 'initial'],
    timeSpent: 2.5,
    complexity: 'Medium',
    issuesEncountered: 1
  },
  {
    id: 'commit-header',
    timestamp: new Date('2025-01-21T14:30:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Add responsive header component with navigation',
    description: 'Created header with mobile-responsive navigation menu and logo',
    files: ['src/components/Header.tsx', 'src/components/NavigationMenu.tsx'],
    impact: 'Medium',
    version: '0.2.0',
    author: 'Developer',
    tags: ['header', 'navigation', 'responsive'],
    timeSpent: 3.2,
    complexity: 'Medium',
    issuesEncountered: 2
  },
  {
    id: 'commit-homepage',
    timestamp: new Date('2025-01-22T09:15:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Create homepage with banner and sections',
    description: 'Built the main homepage with hero banner, benefits section, and consultation cards',
    files: ['src/pages/Index.tsx', 'src/components/HeroBanner.tsx', 'src/components/BenefitsSection.tsx'],
    impact: 'High',
    version: '0.3.0',
    author: 'Developer',
    tags: ['homepage', 'hero', 'sections'],
    timeSpent: 4.8,
    complexity: 'Complex',
    issuesEncountered: 3
  },
  {
    id: 'commit-consultations',
    timestamp: new Date('2025-01-22T16:45:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Add consultations page with category cards',
    description: 'Created consultations overview page with category cards and filtering',
    files: ['src/pages/Consultations.tsx', 'src/components/CategoryCard.tsx'],
    impact: 'High',
    version: '0.4.0',
    author: 'Developer',
    tags: ['consultations', 'categories'],
    timeSpent: 3.7,
    complexity: 'Medium',
    issuesEncountered: 1
  },
  {
    id: 'commit-forms',
    timestamp: new Date('2025-01-23T11:20:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Implement consultation booking forms',
    description: 'Added forms for booking consultations with validation and Sheety integration',
    files: ['src/components/ConsultationForm.tsx', 'src/utils/formValidation.ts'],
    impact: 'High',
    version: '0.5.0',
    author: 'Developer',
    tags: ['forms', 'validation', 'booking'],
    timeSpent: 5.2,
    complexity: 'Complex',
    issuesEncountered: 4
  },
  {
    id: 'commit-footer',
    timestamp: new Date('2025-01-23T15:30:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Create footer with links and social media',
    description: 'Built footer component with quick links, legal links, and social media icons',
    files: ['src/components/Footer.tsx'],
    impact: 'Medium',
    version: '0.6.0',
    author: 'Developer',
    tags: ['footer', 'social', 'links'],
    timeSpent: 2.1,
    complexity: 'Simple',
    issuesEncountered: 0
  },
  {
    id: 'commit-routing',
    timestamp: new Date('2025-01-24T10:00:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Set up React Router and page routing',
    description: 'Configured routing for all pages including dynamic consultation categories',
    files: ['src/config/routes.tsx', 'src/App.tsx'],
    impact: 'High',
    version: '0.7.0',
    author: 'Developer',
    tags: ['routing', 'navigation'],
    timeSpent: 2.8,
    complexity: 'Medium',
    issuesEncountered: 2
  },
  {
    id: 'commit-testimonials',
    timestamp: new Date('2025-01-24T14:15:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Add testimonials section with carousel',
    description: 'Created testimonials component with customer reviews and carousel functionality',
    files: ['src/components/TestimonialsSection.tsx'],
    impact: 'Medium',
    version: '0.8.0',
    author: 'Developer',
    tags: ['testimonials', 'carousel', 'reviews'],
    timeSpent: 3.5,
    complexity: 'Medium',
    issuesEncountered: 1
  },
  {
    id: 'commit-mobile',
    timestamp: new Date('2025-01-25T09:30:00Z'),
    category: 'UI/UX',
    type: 'Modification',
    title: 'Optimize mobile responsiveness across all pages',
    description: 'Improved mobile layouts, touch interactions, and responsive breakpoints',
    files: ['src/components/Header.tsx', 'src/components/MobileMenu.tsx', 'src/pages/Index.tsx'],
    impact: 'High',
    version: '0.9.0',
    author: 'Developer',
    tags: ['mobile', 'responsive', 'ui'],
    timeSpent: 4.2,
    complexity: 'Complex',
    issuesEncountered: 3
  },
  {
    id: 'commit-images',
    timestamp: new Date('2025-01-25T16:00:00Z'),
    category: 'Performance',
    type: 'Addition',
    title: 'Implement optimized image loading component',
    description: 'Created OptimizedImage component with lazy loading and error handling',
    files: ['src/components/OptimizedImage.tsx'],
    impact: 'Medium',
    version: '0.10.0',
    author: 'Developer',
    tags: ['images', 'performance', 'lazy-loading'],
    timeSpent: 2.9,
    complexity: 'Medium',
    issuesEncountered: 2
  },
  {
    id: 'commit-analytics',
    timestamp: new Date('2025-01-26T11:45:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Add analytics dashboard with project metrics',
    description: 'Built comprehensive analytics dashboard with charts and project insights',
    files: ['src/components/NewAnalyticsDashboard.tsx', 'src/data/changeLedger.ts'],
    impact: 'Medium',
    version: '0.11.0',
    author: 'Developer',
    tags: ['analytics', 'dashboard', 'metrics'],
    timeSpent: 6.1,
    complexity: 'Very Complex',
    issuesEncountered: 5
  },
  {
    id: 'commit-doctors',
    timestamp: new Date('2025-01-26T15:20:00Z'),
    category: 'Features',
    type: 'Addition',
    title: 'Add doctor profiles section to homepage',
    description: 'Created doctor profiles section with images and descriptions',
    files: ['src/pages/Index.tsx', 'public/doctors/'],
    impact: 'Medium',
    version: '0.12.0',
    author: 'Developer',
    tags: ['doctors', 'profiles', 'homepage'],
    timeSpent: 2.3,
    complexity: 'Simple',
    issuesEncountered: 1
  },
  {
    id: 'commit-tablet-optimization',
    timestamp: new Date('2025-01-27T10:30:00Z'),
    category: 'UI/UX',
    type: 'Modification',
    title: 'Optimize website for tablet view and fix image loading',
    description: 'Enhanced tablet responsiveness, fixed doctor image paths, updated footer links, and improved form styling',
    files: ['src/pages/Index.tsx', 'src/components/Footer.tsx', 'src/components/OptimizedImage.tsx', 'src/pages/Consultations.tsx'],
    impact: 'High',
    version: '0.13.0',
    author: 'Developer',
    tags: ['tablet', 'responsive', 'images', 'forms'],
    timeSpent: 4.7,
    complexity: 'Complex',
    issuesEncountered: 3
  }
];

// Utility functions for analytics
export const getChangesByCategory = () => {
  return changeLedger.reduce((acc, change) => {
    acc[change.category] = (acc[change.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const getChangesByImpact = () => {
  return changeLedger.reduce((acc, change) => {
    acc[change.impact] = (acc[change.impact] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const getChangesByType = () => {
  return changeLedger.reduce((acc, change) => {
    acc[change.type] = (acc[change.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const getRecentChanges = (limit: number = 5) => {
  return changeLedger
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, limit);
};

export const getChangeMetrics = () => {
  const totalChanges = changeLedger.length;
  const totalHours = changeLedger.reduce((acc, c) => acc + (c.timeSpent || 0), 0);
  const totalIssues = changeLedger.reduce((acc, c) => acc + (c.issuesEncountered || 0), 0);
  const avgComplexity = changeLedger.reduce((acc, c) => {
    const scores = { Simple: 1, Medium: 2, Complex: 3, 'Very Complex': 4 };
    return acc + (scores[c.complexity as keyof typeof scores] || 1);
  }, 0) / changeLedger.length;

  return {
    totalChanges,
    totalHours: parseFloat(totalHours.toFixed(2)),
    totalIssues,
    avgComplexity: parseFloat(avgComplexity.toFixed(2))
  };
};
