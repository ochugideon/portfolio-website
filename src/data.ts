import { Project, Skill, Service, TimelineEvent, StatCard } from './types';
import developerAvatar from './assets/images/image0.jpeg';
import ecommerceSuite from './assets/images/ecommerce_suite_1779830698924.png';

export const DEVELOPER_PROFILE = {
  name: 'Ochu Gideon',
  title: 'Junior Full-Stack Developer',
  email: 'ochugideon2@gmail.com',
  whatsapp: '+234 8084987258',
  location: 'Uyo, Nigeria (Open Remotely)',
  github: 'https://github.com/ochugideon',
  linkedin: 'https://linkedin.com/in/ochugideon',
  twitter: 'https://twitter.com/ochugideon',
  tagline: 'Building responsive, clean frontend interfaces with React and writing reliable backend routes with FastAPI.',
  avatarUrl: developerAvatar, // The generated premium 3D avatar
  aboutSummary: 'I am an aspiring Software Developer who began my tech journey in 2025. I focus on frontend development with React.js and backend routing with FastAPI, building functional web projects that are responsive, accessible, and user-friendly.',
  aboutDetails: 'I am passionate about continuous learning, solving real-world challenges with readable code, and refining my technical skills with every project. I enjoy working in environments where I can learn from experienced engineers and contribute creatively. I value well-structured components, smooth responsive layouts, and clean routing. I am actively seeking remote or hybrid junior opportunities where I can grow, expand my full-stack knowledge, and bring quality contributions to an engineering team.',
};

export const STATISTICS: StatCard[] = [
  {
    label: 'Projects Completed',
    value: '6+',
    icon: 'Layers',
  },
  {
    label: 'Core Technologies',
    value: '5+',
    icon: 'Cpu',
  },
  {
    label: 'Year of Coding',
    value: '1+',
    icon: 'BookOpen',
  },
  {
    label: 'GitHub Contributions',
    value: 'Active',
    icon: 'GitBranch',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', level: 70, category: 'frontend', icon: 'Code' },
  { name: 'JavaScript (ES6+)', level: 72, category: 'frontend', icon: 'Terminal' },
  { name: 'HTML5', level: 85, category: 'frontend', icon: 'Globe' },
  { name: 'CSS3 & Responsive Layouts', level: 88, category: 'frontend', icon: 'Layout' },
  // Backend
  { name: 'Python', level: 70, category: 'backend', icon: 'Cpu' },
  { name: 'FastAPI', level: 60, category: 'backend', icon: 'Server' },
  { name: 'Java', level: 45, category: 'backend', icon: 'Cpu' },
  // Database
  { name: 'SQL & PostgreSQL', level: 50, category: 'database', icon: 'Database' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce_suite',
    title: 'Teens Church Website',
    description: 'A responsive community website built to practice navigation flows, nested React routing, and modern styling integrations.',
    longDescription: 'A custom web application built to learn structure, clean layout design, and component reusability. It features responsive page sections, interactive announcements, dynamic navigation, and styling powered by Tailwind CSS.',
    image: ecommerceSuite, // Premium, clean tech image
    techStack: ['React.js', 'JavaScript', 'HTML5', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ochugideon/teens-church-website',
    liveUrl: 'https://teens-church-website.netlify.app',
    category: 'Frontend / UI',
    featured: true,
  },
  {
    id: 'ai_editor',
    title: 'Aura Markdown Playground',
    description: 'A custom frontend playground UI designed to practice React state management, side effects, and text field inputs.',
    longDescription: 'Developed as a frontend practice workspace to learn dynamic string rendering, live text previews, responsive split-screen containers, and customized UI control panels.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'CSS Modules', 'Lucide Icons'],
    githubUrl: 'https://github.com/leocarter-dev/aura-assistant',
    liveUrl: '#',
    category: 'Frontend / UI',
    featured: true,
  },
  {
    id: 'student_mgmt',
    title: 'Zenith Student Portal',
    description: 'A full-stack learning project designed to manage student records, featuring custom query tables and basic form validations.',
    longDescription: 'An interactive portal built to practice tying a React UI together with an API layer. Features clean input form validations, layout components for class lists, and basic query filters for academic tracking.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    techStack: ['FastAPI', 'React.js', 'SQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/leocarter-dev/student-portal',
    liveUrl: '#',
    category: 'Full-Stack / Learning',
    featured: true,
  },
  {
    id: 'fastapi_api',
    title: 'FastAPI Task Backend API',
    description: 'A lightweight JSON REST API backend built to learn asynchronous routes, JWT user credentials, and database queries.',
    longDescription: 'Developed as a focused API backend to practice python-based routing. Highlights custom password hashing, user registration mechanics, secured endpoint validations, and clean structured SQL queries.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'FastAPI', 'SQL', 'JWT Auth'],
    githubUrl: 'https://github.com/leocarter-dev/hyperion-api',
    liveUrl: '#',
    category: 'Backend / API',
    featured: false,
  },
  {
    id: 'task_planner',
    title: 'Kanban Board Planner',
    description: 'An interactive project organizer built to practice local UI states, item array operations, and responsive columns.',
    longDescription: 'A client-side board featuring card creation, custom priority labels, status column filters, and browser-based LocalStorage synchronization.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/leocarter-dev/vortex-kanban',
    liveUrl: '#',
    category: 'Frontend / Practice',
    featured: false,
  },
  {
    id: 'portfolio_site',
    title: 'Portfolio Space Canvas',
    description: 'The minimalist, high-contrast developer portfolio you are currently browsing, built to practice React concepts.',
    longDescription: 'Completed to master responsive structural grids, CSS variables, interactive UI overlays, validated callback fields, and visual layout fluidity.',
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
    title: 'React Development',
    description: 'Crafting responsive, component-driven client-side single-page layouts with React.js, implementing state hooks and clean styling with Tailwind.',
    icon: 'Layout',
  },
  {
    id: 'fullstack_web',
    title: 'Full-Stack Learning Prototypes',
    description: 'Connecting functional UI structures cleanly with structured python backends using API validations and standardized REST protocols.',
    icon: 'Layers',
  },
  {
    id: 'api_dev',
    title: 'REST API Construction',
    description: 'Designing lightweight REST API endpoints in Python with FastAPI, including standard data serialization and integrated Swagger listings.',
    icon: 'Server',
  },
  {
    id: 'db_design',
    title: 'Basic Database Structuring',
    description: 'Designing simplified SQL schemas, writing standard queries, and linking persistent object storage securely to python routers.',
    icon: 'Database',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'tl_1',
    year: '2025 (Early)',
    title: 'The Coding Foundation',
    organization: 'Self-Directed & Practice',
    description: 'Began studying algorithms, basic data organization, semantic markup (HTML5/CSS3), and fundamental JavaScript concepts.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Logic Basics'],
  },
  {
    id: 'tl_2',
    year: '2025 (Mid)',
    title: 'React Ecosystem Practice',
    organization: 'Web UI Practice Projects',
    description: 'Adopted React.js as core tool. Learned state management, custom properties, page routing, and grid styling layouts.',
    skills: ['React.js', 'Tailwind CSS', 'Responsive Layouts'],
  },
  {
    id: 'tl_3',
    year: '2025 - 2026',
    title: 'Backend Extension with FastAPI',
    organization: 'Full-Stack Practical Training',
    description: 'Expanded technical skills into API endpoints and server routes utilizing python-based FastAPI, sqlite, and authentication flows.',
    skills: ['Python', 'FastAPI', 'SQL Database'],
  },
  {
    id: 'tl_4',
    year: '2026 (Present)',
    title: 'Continuous Learning & Growing',
    organization: 'Self-Improvement Projects',
    description: 'Broadening engineering knowledge by practicing basic Java, refining full-stack patterns, and building responsive apps to be junior team ready.',
    skills: ['Java', 'SQL Queries', 'REST Handlers', 'Junior Full-Stack'],
  },
];
