import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'JavaScript', level: 92, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'Express', level: 82, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 78, category: 'Backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'AWS', level: 65, category: 'Tools' },
  { name: 'Figma', level: 75, category: 'Tools' },
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Tools'];

