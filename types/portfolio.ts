export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  location?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
  location?: string;
}

import { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface NavItem {
  name: string;
  href: string;
}

