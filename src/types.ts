export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'all' | 'ghl' | 'fullstack' | 'distributed' | 'frontend' | 'opensource';
  tags: string[];
  metrics?: { label: string; value: string }[];
  architectureHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  stars?: number;
  role: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  honors?: string;
  details: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  inquiryType: 'Full-Time Employment' | 'GoHighLevel Setup & Workflows' | 'GHL Snapshot & SaaS Mode' | 'API & Custom Webhook Integration' | 'Contract / Consulting' | 'General Question';
  message: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  avatar?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface BuildDeliverable {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ServiceCategoryItem {
  id: string;
  title: string;
  headline: string;
  tagline: string;
  badge: string;
  iconName: string;
  summary: string;
  highlights: string[];
  bestFor: string;
  deliverablesSnippet: string;
}
