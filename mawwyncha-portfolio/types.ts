
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  details: string[];
}

export interface ShortStory {
  id: number;
  title: string;
  coverColor: string;
  content: string;
}

export interface Illustration {
  id: number;
  url: string;
  title: string;
}

export interface SkillTier {
  name: string;
  skills: string[];
  status: string;
}

export interface SkillTree {
  id: number;
  color: string;
  title: string;
  subtitle: string;
  stars: string;
  level: string;
  tier: string;
  emoji: string;
  accent: string;
  tiers: SkillTier[];
}

export interface Stat {
  label: string;
  value: number;
  short: string;
  description?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  date: string;
  title: string;
  description: string;
}