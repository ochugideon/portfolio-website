export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100 for progress bar
  category: 'frontend' | 'backend' | 'database';
  icon: string; // lucide icon name
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
}

export interface StatCard {
  label: string;
  value: string;
  icon: string; // lucide icon name
}
