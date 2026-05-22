import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'A full-featured online shopping experience',
    summary:
      'Built a comprehensive e-commerce solution with modern web technologies, focusing on performance, accessibility, and seamless user experience from browsing to checkout.',
    problem:
      'Traditional e-commerce platforms suffer from slow load times, poor mobile experiences, and complex checkout flows that lead to high cart abandonment rates.',
    solution:
      'Designed and developed a server-rendered Next.js application with optimistic UI updates, edge-cached product pages, and a streamlined 3-step checkout flow.',
    process: [
      'Researched user pain points in existing e-commerce flows',
      'Designed wireframes and user journey maps',
      'Built component library and design system',
      'Implemented server-side rendering for product pages',
      'Integrated Stripe payment processing',
      'Optimized performance with image lazy loading and code splitting',
    ],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Server-rendered product catalog with ISR',
      'Real-time cart updates with optimistic UI',
      'Secure payment processing via Stripe',
      'User authentication and order history',
      'Responsive design across all devices',
    ],
    results: [
      '40% faster page loads vs previous version',
      '25% reduction in cart abandonment',
      '98 Lighthouse performance score',
    ],
    category: 'Web App',
    year: '2024',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    subtitle: 'Real-time collaborative project management',
    summary:
      'A modern task management platform with real-time collaboration, designed for teams who need clarity and speed in their workflow.',
    problem:
      'Existing project management tools are bloated with features, making simple task tracking unnecessarily complex for small teams.',
    solution:
      'Created a minimal yet powerful task management tool with real-time sync, drag-and-drop organization, and team workspaces — focusing on speed and simplicity.',
    process: [
      'Interviewed small team leads about workflow pain points',
      'Mapped out minimal viable feature set',
      'Built real-time sync layer with Socket.io',
      'Implemented drag-and-drop with smooth animations',
      'Designed clean, distraction-free interface',
      'Load tested with 100+ concurrent users',
    ],
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express'],
    features: [
      'Real-time collaborative editing',
      'Drag-and-drop task organization',
      'Team workspaces with role management',
      'Activity timeline and notifications',
      'Keyboard shortcuts for power users',
    ],
    results: [
      'Real-time sync under 50ms latency',
      'Used daily by 3 internal teams',
      'Positive feedback on UI simplicity',
    ],
    category: 'Web App',
    year: '2024',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    subtitle: 'Cinematic creative developer showcase',
    summary:
      'A personal portfolio built with a cinematic, editorial approach — combining storytelling, motion design, and modern frontend techniques.',
    problem:
      'Most developer portfolios look the same — generic templates with card grids that fail to communicate personality or creative capability.',
    solution:
      'Designed a storytelling-driven portfolio with cinematic spacing, oversized typography, scroll-triggered animations, and case-study project presentations.',
    process: [
      'Studied award-winning portfolio designs for inspiration',
      'Defined typography and spacing systems',
      'Built layout structure with asymmetric compositions',
      'Implemented GSAP scroll-triggered animations',
      'Optimized for performance and accessibility',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    features: [
      'Cinematic scroll-driven storytelling',
      'Oversized editorial typography',
      'GSAP-powered motion design',
      'Fully responsive layouts',
      'Dark cinematic aesthetic',
    ],
    results: [
      'Featured on design inspiration sites',
      'Sub-second load times',
      'Increased interview callback rate',
    ],
    category: 'Website',
    year: '2024',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    subtitle: 'Beautiful real-time weather visualizations',
    summary:
      'An interactive weather dashboard that transforms raw meteorological data into beautiful, easy-to-understand visual stories.',
    problem:
      'Weather apps present data in dense tables and tiny icons that are hard to parse quickly, especially for planning activities.',
    solution:
      'Built a visualization-first dashboard that uses animated charts, gradient-mapped backgrounds, and at-a-glance summaries to make weather data instantly understandable.',
    process: [
      'Analyzed how people actually use weather data',
      'Designed data visualization hierarchy',
      'Integrated multiple weather APIs for accuracy',
      'Built responsive chart components',
      'Added location-based auto-detection',
    ],
    techStack: ['React', 'Chart.js', 'Weather API', 'CSS3'],
    features: [
      'Animated weather visualizations',
      'Multi-day forecast with hourly detail',
      'Location auto-detection',
      'Dynamic background gradients based on conditions',
      'Offline-capable with cached data',
    ],
    results: [
      'Praised for visual clarity in user testing',
      '4.8/5 usability rating from testers',
      'Dynamic themes for 12 weather conditions',
    ],
    category: 'Web App',
    year: '2023',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    subtitle: 'Data-driven insights for content creators',
    summary:
      'A comprehensive analytics platform that helps content creators understand their audience, optimize posting schedules, and track engagement metrics.',
    problem:
      'Content creators struggle to make data-driven decisions because analytics tools are designed for marketing teams, not individual creators.',
    solution:
      'Built a creator-focused analytics dashboard with simplified metrics, actionable recommendations, and visual trend analysis.',
    process: [
      'Interviewed 15 content creators about their analytics needs',
      'Identified the 5 most important metrics for growth',
      'Designed simplified dashboard with clear recommendations',
      'Built data pipeline with Python and Django',
      'Created interactive charts for trend analysis',
    ],
    techStack: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
    features: [
      'Simplified engagement metrics dashboard',
      'AI-powered posting schedule recommendations',
      'Audience growth trend analysis',
      'Content performance comparison',
      'Export reports as PDF',
    ],
    results: [
      'Helped creators increase engagement by 30%',
      'Processing 10K+ data points daily',
      'Used by 50+ beta testers',
    ],
    category: 'Dashboard',
    year: '2023',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    subtitle: 'Secure and intuitive financial management',
    summary:
      'A mobile-first banking application that prioritizes security without sacrificing user experience, featuring biometric authentication and clean financial interfaces.',
    problem:
      'Mobile banking apps are either overly complex with poor UX or oversimplified and missing essential features for daily financial management.',
    solution:
      'Designed a banking app that balances comprehensive features with intuitive navigation, using progressive disclosure to keep the interface clean while providing depth when needed.',
    process: [
      'Conducted competitive analysis of 10 banking apps',
      'Designed progressive disclosure information architecture',
      'Implemented biometric authentication flow',
      'Built transaction visualization components',
      'Security audit and penetration testing',
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
    features: [
      'Biometric login (Face ID / Fingerprint)',
      'Real-time transaction notifications',
      'Spending analytics with category breakdown',
      'Quick transfer with saved contacts',
      'Multi-currency support',
    ],
    results: [
      '99.9% authentication success rate',
      '4.7 star rating in beta testing',
      'Average session time increased by 2x',
    ],
    category: 'Mobile App',
    year: '2023',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
