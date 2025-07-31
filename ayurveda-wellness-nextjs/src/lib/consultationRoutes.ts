import { ComponentType } from 'react';

// Consultation route configuration
export interface ConsultationRoute {
  path: string;
  component: () => Promise<{ default: ComponentType<any> }>;
}

export const consultationRoutes: Record<string, ConsultationRoute> = {
  // Category routes
  'childrens-wellness': {
    path: '/consultations/childrens-wellness',
    component: () => import('@/pages/consultations/ChildrensWellness'),
  },
  'digestive-gut-health': {
    path: '/consultations/digestive-gut-health',
    component: () => import('@/pages/consultations/DigestiveGutHealth'),
  },
  'heart-circulatory-health': {
    path: '/consultations/heart-circulatory-health',
    component: () => import('@/pages/consultations/HeartCirculatoryHealth'),
  },
  'hormonal-balance-endocrine-health': {
    path: '/consultations/hormonal-balance-endocrine-health',
    component: () => import('@/pages/consultations/HormonalBalanceEndocrineHealth'),
  },
  'immunity-respiratory-health': {
    path: '/consultations/immunity-respiratory-health',
    component: () => import('@/pages/consultations/ImmunityRespiratoryHealth'),
  },
  'joint-bone-health': {
    path: '/consultations/joint-bone-health',
    component: () => import('@/pages/consultations/JointBoneHealth'),
  },
  'liver-kidney-detox': {
    path: '/consultations/liver-kidney-detox',
    component: () => import('@/pages/consultations/LiverKidneyDetox'),
  },
  'mens-health': {
    path: '/consultations/mens-health',
    component: () => import('@/pages/consultations/MensHealth'),
  },
  'mental-health-sleep': {
    path: '/consultations/mental-health-sleep',
    component: () => import('@/pages/consultations/MentalHealthSleep'),
  },
  'senior-elderly-care': {
    path: '/consultations/senior-elderly-care',
    component: () => import('@/pages/consultations/SeniorElderlyCare'),
  },
  'skin-hair-health': {
    path: '/consultations/skin-hair-health',
    component: () => import('@/pages/consultations/SkinHairHealth'),
  },
  'weight-metabolic-health': {
    path: '/consultations/weight-metabolic-health',
    component: () => import('@/pages/consultations/WeightMetabolicHealth'),
  },
  'womens-health': {
    path: '/consultations/womens-health',
    component: () => import('@/pages/consultations/WomensHealth'),
  },

  // Subcategory routes - Children's Wellness
  'childrens-wellness/adhd-hyperactivity': {
    path: '/consultations/childrens-wellness/adhd-hyperactivity',
    component: () => import('@/pages/consultations/childrens-wellness/ADHDHyperactivity'),
  },
  'childrens-wellness/frequent-infections': {
    path: '/consultations/childrens-wellness/frequent-infections',
    component: () => import('@/pages/consultations/childrens-wellness/FrequentInfections'),
  },
  'childrens-wellness/growth-development-issues': {
    path: '/consultations/childrens-wellness/growth-development-issues',
    component: () => import('@/pages/consultations/childrens-wellness/GrowthDevelopmentIssues'),
  },
  'childrens-wellness/poor-appetite-weak-digestion': {
    path: '/consultations/childrens-wellness/poor-appetite-weak-digestion',
    component: () => import('@/pages/consultations/childrens-wellness/PoorAppetiteWeakDigestion'),
  },
  'childrens-wellness/sleep-issues-restlessness': {
    path: '/consultations/childrens-wellness/sleep-issues-restlessness',
    component: () => import('@/pages/consultations/childrens-wellness/SleepIssuesRestlessness'),
  },

  // Add more subcategory routes as needed...
  // For brevity, I'm not including all routes here, but the pattern is clear
};

export function getConsultationComponent(slug: string): ConsultationRoute | null {
  return consultationRoutes[slug] || null;
}
