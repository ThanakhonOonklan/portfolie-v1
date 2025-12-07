import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping experience with payment integration',
    longDescription:
      'A comprehensive e-commerce solution built with Next.js, featuring product catalog, shopping cart, user authentication, and secure payment processing.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    category: 'Web App',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription:
      'A modern task management application with real-time collaboration, drag-and-drop functionality, and team workspace features.',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express'],
    category: 'Web App',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills',
    longDescription:
      'A responsive portfolio website built with modern web technologies, featuring smooth animations and interactive elements.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Website',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with beautiful visualizations',
    longDescription:
      'An interactive weather dashboard that displays current conditions, forecasts, and weather maps with data from multiple APIs.',
    techStack: ['React', 'Chart.js', 'Weather API', 'CSS3'],
    category: 'Web App',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Analytics platform for social media insights',
    longDescription:
      'A comprehensive analytics dashboard that tracks social media performance, engagement metrics, and provides actionable insights.',
    techStack: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
    category: 'Dashboard',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    longDescription:
      'A mobile-first banking application with secure transactions, account management, and modern UI/UX design.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
    category: 'Mobile App',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

