import { Project, Skill, Service, TimelineEvent, StatCard } from './types';
import developerAvatar from './assets/images/image0.jpeg';
import ecommerceSuite from './assets/images/ecommerce_suite_1779830698924.png';

export const DEVELOPER_PROFILE = {
  name: 'Ochu Gideon',
  title: 'Full-Stack Developer',
  email: 'ochugideon2@gmail.com',
  whatsapp: '+234 8084987258',
  location: 'Uyo, Nigeria (Open Remotely)',
  github: 'https://github.com/ochugideon',
  linkedin: 'https://linkedin.com/in/ochugideon',
  twitter: 'https://twitter.com/ochugideon',
  tagline: 'Crafting high-contrast layouts, resilient APIs, and polished user experiences with absolute performance in mind.',
  avatarUrl: developerAvatar, // The generated premium 3D avatar
  aboutSummary: 'I am a Software Developer who began my journey in tech in 2025, with a strong focus on building modern, responsive, and user-friendly web applications. I specialize in frontend development using React.js and backend development with FastAPI, creating solutions that are both visually engaging and functionally efficient.',
  aboutDetails: 'I am passionate about continuous learning, solving real-world problems through technology, and improving my skills with every project I build. I enjoy working in collaborative environments where I can contribute, learn from experienced developers, and grow as an engineerAs a developer, I value clean code, responsive design, performance, and creating applications that deliver great user experiences. I’m constantly exploring new technologies, tools, and best practices to stay current in the ever-evolving tech industry.I am currently seeking opportunities where I can contribute to meaningful projects, expand my knowledge, and grow with a forward-thinking team.',
};

export const STATISTICS: StatCard[] = [
  {
    label: 'Projects Completed',
    value: '5+',
    icon: 'Layers',
  },
  {
    label: 'Technologies Mastered',
    value: '5+',
    icon: 'Cpu',
  },
  {
    label: 'Years of Learning',
    value: '2+',
    icon: 'BookOpen',
  },
  {
    label: 'Open Source Commits',
    value: '4+',
    icon: 'GitBranch',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', level: 70, category: 'frontend', icon: 'Code' },
  { name: 'JavaScript (ES6+)', level: 72, category: 'frontend', icon: 'Terminal' },
  { name: 'HTML5', level: 85, category: 'frontend', icon: 'Globe' },
  { name: 'CSS3 & Responsive Layouts', level: 93, category: 'frontend', icon: 'Layout' },
  // Backend
  { name: 'Python', level: 78, category: 'backend', icon: 'Cpu' },
  { name: 'FastAPI', level: 62, category: 'backend', icon: 'Server' },
  { name: 'Java', level: 52, category: 'backend', icon: 'Cpu' },
  // Database
  { name: 'SQL & PostgreSQL', level: 52, category: 'database', icon: 'Database' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce_suite',
    title: 'Nexus E-Commerce Suite',
    description: 'A modular, premium storefront platform built with React, state management, complex route animations, and simulated billing flows.',
    longDescription: 'A high-fidelity client-side e-commerce store engine. It includes multi-faceted product filtering (by brand, price range, and rating), a responsive dynamic cart drawer, localized checkout validation, and high-performance loading state skeletons.',
    image: ecommerceSuite, // Premium, clean tech image
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS Particles'],
    githubUrl: 'https://github.com/leocarter-dev/nexus-store',
    liveUrl: '#',
    category: 'Full-Stack / Frontend',
    featured: true,
  },
  {
    id: 'ai_editor',
    title: 'Aura Semantic Code Editor',
    description: 'A developer-focused smart assistant UI that enables natural language commands to compile and format structured components.',
    longDescription: 'An interactive artificial intelligence workspace designed to showcase state-of-the-art developer toolflows. Built using responsive layout containers, live syntax highlights, split-screen outputs, and elegant keyboard shortcuts.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'CSS Modules', 'Lucide Icons'],
    githubUrl: 'https://github.com/leocarter-dev/aura-assistant',
    liveUrl: '#',
    category: 'Frontend / AI UX',
    featured: true,
  },
  {
    id: 'student_mgmt',
    title: 'Zenith Student Portal',
    description: 'A comprehensive, secured database visualizer and admin system to manage grades, schedules, registrations, and courses.',
    longDescription: 'An administrative hub featuring interactive charts for classroom grade distributions, full schema normalization client controls, custom database queries, and modular components for editing academic records and tuition settings.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    techStack: ['FastAPI', 'React.js', 'SQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/leocarter-dev/student-portal',
    liveUrl: '#',
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 'fastapi_api',
    title: 'Hyperion Async API',
    description: 'A production-hardened FastAPI microservice backend using async queries, SQL migrations, JWT security, and automatic documentation.',
    longDescription: 'An enterprise-ready RESTful gateway framework supporting multi-user sessions, OAuth authorization structures, cache levels with Redis, and automatic endpoint descriptions under Swagger. Tested for low-latency throughput.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'FastAPI', 'SQL', 'JWT Auth'],
    githubUrl: 'https://github.com/leocarter-dev/hyperion-api',
    liveUrl: '#',
    category: 'Backend / API',
    featured: false,
  },
  {
    id: 'task_planner',
    title: 'Vortex Kanban Planner',
    description: 'An interactive, responsive project organization app featuring drag-and-drop boards, checklist progress, and detailed logs.',
    longDescription: 'A productivity application utilizing modern visual hierarchies to manage active agile tasks. Complete with visual tags, priority tags, collapsible columns, activity logs, and auto-computed task completion rates.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'CSS Transitions', 'Framer Motion'],
    githubUrl: 'https://github.com/leocarter-dev/vortex-kanban',
    liveUrl: '#',
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'portfolio_site',
    title: 'Developer Interactive Canvas',
    description: 'The very website you are browsing now. Designed from scratch using advanced CSS variables, structural grid spaces, and active nav highlights.',
    longDescription: 'A developer portfolio demonstrating fluid accessibility standards, customized dark aesthetics, responsive grid structures, responsive performance, stateful email simulation feedback, and custom animation curves.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/leocarter-dev/portfolio-space',
    liveUrl: '#',
    category: 'Frontend',
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'frontend_dev',
    title: 'Frontend Architecture',
    description: 'Constructing modern, component-driven client applications with React.js, implementing state managers and responsive CSS architectures.',
    icon: 'Layout',
  },
  {
    id: 'fullstack_web',
    title: 'Full-Stack Integrations',
    description: 'Designing full-stack applications with modular React frontends communicationally paired with high-performance FastAPI backends.',
    icon: 'Layers',
  },
  {
    id: 'api_dev',
    title: 'FastAPI / REST APIs',
    description: 'Engineering resilient, scalable REST API systems in Python using async, type checking, security headers, and structured schemas.',
    icon: 'Server',
  },
  {
    id: 'db_design',
    title: 'Database Schema Modeling',
    description: 'Structuring normalized DB architectures, writing performance-optimized SQL statements, and managing transactions securely.',
    icon: 'Database',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'tl_1',
    year: '2023 - 2024',
    title: 'The Foundation Study',
    organization: 'Self-Directed & Interactive Bootcamps',
    description: 'Deeply studied algorithms, structural data design, semantic markup (HTML5/CSS3), and modern JavaScript paradigms (ES6+, asynchronous event sequences).',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Logic Development'],
  },
  {
    id: 'tl_2',
    year: '2024 (Spring)',
    title: 'React Ecosystem Deep-Dive',
    organization: 'Developer Practice Projects',
    description: 'Expanded frontend capabilities into state systems, custom hooks, dynamic rendering, route handling, and elegant UI design systems.',
    skills: ['React.js', 'Tailwind CSS', 'Responsive Fluidity'],
  },
  {
    id: 'tl_3',
    year: '2024 - 2025',
    title: 'Full-Stack Extension & Python APIs',
    organization: 'Production-Model Prototypes',
    description: 'Adopted Python-based web structures, standardizing on asynchronous microservice design with FastAPI. Built SQL integrations and authentication gates.',
    skills: ['Python', 'FastAPI', 'SQL', 'PostgreSQL'],
  },
  {
    id: 'tl_4',
    year: '2025 - 2026',
    title: 'Enterprise Patterns & Cloud Ready Systems',
    organization: 'Remote Internships & Open-Source Projects',
    description: 'Introduced Java, robust class systems, test assertions, and CI/CD pipelines to construct high-reliability full-stack projects for professional applications.',
    skills: ['Java', 'Advanced SQL', 'REST APIs', 'Cloud Concepts'],
  },
];
