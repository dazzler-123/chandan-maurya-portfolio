export interface Project {
  id: string;
  title: string;
  category: 'Fintech' | 'InsurTech' | 'Web3' | 'Full-Stack';
  tagline: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  metrics?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  bulletPoints: string[];
  technologies: string[];
  metricsHighlight?: string;
}

export interface SkillCategory {
  category: string;
  id: 'languages' | 'frameworks' | 'databases' | 'blockchain' | 'ai' | 'api' | 'devops';
  skills: { name: string; level?: string; iconName?: string; highlighted?: boolean }[];
}
