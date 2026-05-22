import { ReactNode } from 'react';

// ============================================
// Project — Case-study storytelling structure
// ============================================
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  process: string[];
  techStack: string[];
  features: string[];
  results: string[];
  images?: string[];
  imageUrl?: string;
  uiPreviewUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  year: string;
}

// ============================================
// Skill — Categorized, no levels
// ============================================
export interface Skill {
  name: string;
  category: string;
  iconUrl?: string;
}

// ============================================
// Experience — Year-anchored timeline
// ============================================
export interface Experience {
  id: number;
  year: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  imageUrl?: string;
  location?: string;
}

// ============================================
// Education
// ============================================
export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
  location?: string;
}

// ============================================
// Certificate — New type
// ============================================
export interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
  imageUrl?: string;
  skills: string[];
  credentialUrl?: string;
}

// ============================================
// Social Link
// ============================================
export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

// ============================================
// Navigation
// ============================================
export interface NavItem {
  name: string;
  href: string;
}
