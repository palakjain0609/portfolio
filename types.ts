export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  gallery?: { url: string; caption: string }[];
  stats: { label: string; value: string }[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Tools' | 'Soft Skills';
  level: number; // 0-100
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  description?: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}