import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Jemuel Racsa',
  title: 'Full-Stack Software Engineer',
  tagline: 'Specializing in high-throughput backend services, distributed systems, and modern responsive web applications.',
  email: 'jemuel.racsa@gmail.com',
  github: 'https://github.com/jemuelracsa',
  githubUsername: 'jemuelracsa',
  website: 'https://jemuelracsa.github.io/',
  location: 'Philippines / Remote Worldwide',
  status: 'Open for Full-Time & Contract Opportunities',
  yearsOfExperience: '5+',
  availability: 'Available immediately',
  bio: 'Passionate Software Engineer with a track record of architecting scalable backend frameworks, low-latency push engines, and intuitive front-end interfaces. Dedicated to clean architecture, high test coverage, and building systems that handle real-world scale reliably.',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'zinger-framework',
    title: 'Zinger Framework',
    tagline: 'Hyperlocal delivery & logistics distributed backend engine',
    description: 'An open-source, high-throughput microservices framework designed for hyperlocal ordering, automated inventory reconciliation, and real-time courier dispatch operations.',
    longDescription: 'Zinger Framework addresses the architectural complexities of on-demand commerce. Engineered with distributed state handling, asynchronous message queues, and high-concurrency order state machines, it powers seamless multi-vendor order routing, live ETA tracking, and zero-downtime menu synchronization.',
    category: 'distributed',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Microservices'],
    metrics: [
      { label: 'P99 Latency', value: '< 25ms' },
      { label: 'Throughput', value: '4,500+ rps' },
      { label: 'Uptime', value: '99.98%' }
    ],
    architectureHighlights: [
      'Event-driven order saga orchestrator with compensating transactions for fault tolerance',
      'Geospatial nearest-neighbor indexing with Redis Geospatial for driver dispatching in < 15ms',
      'Idempotent payment webhook pipeline preventing double-charge scenarios during intermittent network drops',
      'Comprehensive integration and contract test suite achieving 92% code coverage'
    ],
    githubUrl: 'https://github.com/jemuelracsa/zinger-framework',
    liveUrl: 'https://github.com/jemuelracsa/zinger-framework#readme',
    featured: true,
    stars: 38,
    role: 'Creator & Lead Architect'
  },
  {
    id: 'serverpush',
    title: 'ServerPush Stream Engine',
    tagline: 'Low-latency real-time bidirectional messaging & SSE gateway',
    description: 'A resilient real-time streaming engine leveraging WebSockets and Server-Sent Events (SSE) for concurrent data push with automatic reconnection, heartbeat diagnostics, and horizontal cluster synchronization.',
    longDescription: 'ServerPush delivers ultra-low-latency message fanout to thousands of concurrent client connections. Built to solve connection churn and resource starvation in live dashboards, financial monitors, and collaborative workspaces.',
    category: 'distributed',
    tags: ['Node.js', 'WebSockets', 'SSE', 'JavaScript', 'Redis Pub/Sub', 'Prometheus'],
    metrics: [
      { label: 'Concurrent Conns', value: '50,000+' },
      { label: 'Fanout Latency', value: '< 8ms' },
      { label: 'Memory Footprint', value: '~1.8KB / client' }
    ],
    architectureHighlights: [
      'Zero-allocation frame parser minimizing GC pauses under heavy broadcast loads',
      'Redis Pub/Sub backplane enabling seamless horizontal scaling across multi-node clusters',
      'Adaptive fallback protocol transitioning automatically between WebSocket and SSE based on proxy capabilities',
      'Built-in rate limiter with token bucket algorithm mitigating denial-of-service attempts'
    ],
    githubUrl: 'https://github.com/jemuelracsa/serverpush',
    liveUrl: 'https://github.com/jemuelracsa/serverpush#readme',
    featured: true,
    stars: 24,
    role: 'Author & Maintainer'
  },
  {
    id: 'portfolio-v2',
    title: 'Modern Developer Portfolio & System Showcase',
    tagline: 'Production-grade responsive web presence built for high performance',
    description: 'High-speed, accessible developer portfolio featuring interactive system architecture deep-dives, simulated engineering terminal, responsive mobile navigation, and semantic accessibility.',
    longDescription: 'Crafted as a flagship personal site hosted on GitHub Pages. Engineered with modern React, Tailwind CSS, hardware-accelerated animations, and zero-bloat modular design meeting 100/100 Core Web Vitals criteria.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite', 'GitHub Pages'],
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Bundle Size', value: '< 65KB gzip' },
      { label: 'Accessibility', value: 'WCAG AAA' }
    ],
    architectureHighlights: [
      'Static-generation ready for instant GitHub Pages CDN edge distribution',
      'Zero-CLS responsive layout tuned for all device viewports from 320px mobile to 4K displays',
      'Interactive command-line emulator simulating UNIX developer tooling for technical recruiters',
      'Client-side contact dispatcher with input validation and instant clipboard fallback'
    ],
    githubUrl: 'https://github.com/jemuelracsa/jemuelracsa.github.io',
    liveUrl: 'https://jemuelracsa.github.io/',
    featured: true,
    stars: 15,
    role: 'Designer & Engineer'
  },
  {
    id: 'cloud-order-orchestrator',
    title: 'Cloud Order Orchestrator',
    tagline: 'Distributed microservices orchestrator with automated failover',
    description: 'Enterprise workflow engine managing multi-stage transactional workflows, webhook integrations, and telemetry monitoring across hybrid cloud deployments.',
    longDescription: 'Engineered to coordinate high-volume transactions across fragmented third-party APIs. Implements circuit breakers, dead-letter queues, and dynamic back-pressure management to maintain 99.99% system availability.',
    category: 'fullstack',
    tags: ['Java', 'Spring Cloud', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    metrics: [
      { label: 'Daily Volume', value: '250k+ events' },
      { label: 'Failover Time', value: '< 2.4s' },
      { label: 'Data Integrity', value: '100%' }
    ],
    architectureHighlights: [
      'Resilience4j circuit breakers isolating upstream API failures and graceful degradation',
      'Distributed tracing integration with OpenTelemetry and Jaeger for instant bottleneck identification',
      'Optimized database connection pooling with HikariCP tuning connection lifetimes under burst loads'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    featured: false,
    role: 'Lead Backend Developer'
  },
  {
    id: 'realtime-collaborative-board',
    title: 'SyncFlow Live Canvas',
    tagline: 'Real-time collaborative diagramming and workspace board',
    description: 'High-speed multiplayer workspace with CRDT-based state reconciliation, vector drawing, and live cursor tracking for distributed engineering teams.',
    longDescription: 'Created to provide seamless collaborative whiteboarding during remote architectural review sessions. Utilizes optimized WebSocket binary protocols to stream canvas delta operations smoothly.',
    category: 'fullstack',
    tags: ['TypeScript', 'React', 'Canvas API', 'Node.js', 'WebSockets', 'Tailwind'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Sync Delay', value: '< 18ms' }
    ],
    architectureHighlights: [
      'Conflict-free Replicated Data Type (CRDT) document synchronization eliminating overwrite anomalies',
      'Dirty-rectangle rendering loop on HTML5 Canvas maintaining fluid 60fps on low-power devices',
      'Compact delta compression algorithm reducing network payload by 78%'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    featured: false,
    role: 'Full-Stack Developer'
  },
  {
    id: 'dev-metric-cli',
    title: 'DevMetric CLI Tooling',
    tagline: 'Developer productivity tool for Git telemetry and release metrics',
    description: 'Lightweight command-line utility analyzing repository velocity, PR review turnaround times, and release artifact metrics across distributed Git teams.',
    longDescription: 'Streamlines engineering retrospectives by extracting actionable insights directly from Git histories and CI/CD pipelines without exposing proprietary code to external SaaS vendors.',
    category: 'opensource',
    tags: ['Go', 'Git API', 'CLI', 'GitHub Actions', 'Open Source'],
    metrics: [
      { label: 'Analysis Speed', value: '10k commits/s' },
      { label: 'Binary Size', value: '8.4 MB' }
    ],
    architectureHighlights: [
      'Concurrent commit graph traversal using Go worker goroutines',
      'Zero external dependencies single static binary compiled for Linux, macOS, and Windows',
      'Markdown, JSON, and terminal ASCII table output formatters'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    featured: false,
    role: 'Creator & Maintainer'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages & Core',
    iconName: 'Code2',
    skills: [
      { name: 'Java', level: 'Expert', years: '5+ yrs' },
      { name: 'TypeScript', level: 'Expert', years: '4+ yrs' },
      { name: 'JavaScript (ES6+)', level: 'Expert', years: '5+ yrs' },
      { name: 'SQL', level: 'Advanced', years: '4+ yrs' },
      { name: 'HTML5 & CSS3', level: 'Expert', years: '5+ yrs' },
      { name: 'Python', level: 'Proficient', years: '2+ yrs' }
    ]
  },
  {
    category: 'Backend & Distributed Systems',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot & Spring Cloud', level: 'Expert', years: '4+ yrs' },
      { name: 'Node.js & Express', level: 'Expert', years: '4+ yrs' },
      { name: 'WebSockets & SSE', level: 'Expert', years: '3+ yrs' },
      { name: 'RESTful API & GraphQL', level: 'Expert', years: '5+ yrs' },
      { name: 'Microservices Architecture', level: 'Advanced', years: '4+ yrs' },
      { name: 'Event-Driven Architecture', level: 'Advanced', years: '3+ yrs' }
    ]
  },
  {
    category: 'Frontend & UI Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 'Expert', years: '4+ yrs' },
      { name: 'Tailwind CSS', level: 'Expert', years: '3+ yrs' },
      { name: 'Responsive Mobile-First Design', level: 'Expert', years: '5+ yrs' },
      { name: 'State Management (Zustand/Redux)', level: 'Advanced', years: '4+ yrs' },
      { name: 'Motion & UI Interactions', level: 'Advanced', years: '2+ yrs' },
      { name: 'Web Performance & Core Vitals', level: 'Expert', years: '4+ yrs' }
    ]
  },
  {
    category: 'Databases, Caching & Message Brokers',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', years: '4+ yrs' },
      { name: 'Redis (Caching & Pub/Sub)', level: 'Expert', years: '3+ yrs' },
      { name: 'MySQL', level: 'Advanced', years: '4+ yrs' },
      { name: 'Apache Kafka', level: 'Proficient', years: '2+ yrs' },
      { name: 'MongoDB', level: 'Proficient', years: '3+ yrs' }
    ]
  },
  {
    category: 'DevOps, Cloud & Tooling',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker & Containerization', level: 'Advanced', years: '4+ yrs' },
      { name: 'Git & GitHub Workflows', level: 'Expert', years: '5+ yrs' },
      { name: 'CI/CD Pipelines (Actions)', level: 'Advanced', years: '3+ yrs' },
      { name: 'Linux / Unix Environments', level: 'Advanced', years: '5+ yrs' },
      { name: 'AWS & Cloud Services', level: 'Proficient', years: '3+ yrs' },
      { name: 'Vite & Build Tooling', level: 'Expert', years: '3+ yrs' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Engineer',
    company: 'Enterprise Software & Cloud Platforms',
    period: '2022 — Present',
    location: 'Remote',
    type: 'Full-time',
    summary: 'Architecting high-scale distributed backend services, real-time message streaming, and performant user interfaces for mission-critical client operations.',
    bulletPoints: [
      'Engineered high-throughput event processing pipelines handling 2.5M+ daily transactional events with 99.98% system uptime.',
      'Reduced API response times across core endpoints by 42% via optimized database indexing, connection pooling, and multi-tier Redis caching.',
      'Spearheaded the migration of legacy monolithic endpoints to containerized Spring Boot and Node.js microservices with zero operational downtime.',
      'Championed automated CI/CD deployment pipelines on GitHub Actions, cutting release cycle times from bi-weekly to continuous daily deliveries.'
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'React', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Software Engineer',
    company: 'Logistics & On-Demand Systems',
    period: '2020 — 2022',
    location: 'Hybrid',
    type: 'Full-time',
    summary: 'Spearheaded backend dispatch algorithms and responsive merchant web portals for hyperlocal ordering and on-demand delivery.',
    bulletPoints: [
      'Developed real-time driver tracking and automated dispatch algorithms reducing driver idle time by 28%.',
      'Implemented resilient WebSocket communication gateway (ServerPush architecture) sustaining 15k+ simultaneous mobile client updates.',
      'Designed and shipped intuitive merchant dashboards in React and Tailwind CSS, increasing order fulfillment speed by 35%.',
      'Authored rigorous integration testing suites raising automated test coverage from 64% to 88%.'
    ],
    technologies: ['Java', 'WebSockets', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Redis']
  },
  {
    id: 'exp-3',
    role: 'Software Developer',
    company: 'Technology Solutions & Web Development',
    period: '2018 — 2020',
    location: 'On-site',
    type: 'Full-time',
    summary: 'Engineered dynamic web applications, customer portals, and internal enterprise management systems.',
    bulletPoints: [
      'Delivered 12+ production client web applications and administrative dashboards on schedule and within technical specifications.',
      'Refactored frontend component libraries for modern mobile responsiveness, boosting mobile user engagement by 40%.',
      'Designed RESTful database schemas and integrated secure payment gateways and OAuth authentication flows.'
    ],
    technologies: ['JavaScript', 'Java', 'HTML5/CSS3', 'Bootstrap', 'jQuery', 'MySQL', 'Git']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology / Computer Science',
    school: 'Polytechnic University / Institute of Technology',
    period: 'Graduated with Honors',
    details: 'Coursework focused on Data Structures & Algorithms, Object-Oriented Software Design, Distributed Computing, Database Systems, and Network Architecture.'
  }
];

export const STATS_DATA = [
  { value: '5+', label: 'Years Experience', detail: 'Production engineering' },
  { value: '25+', label: 'Projects Shipped', detail: 'Web & distributed services' },
  { value: '99.9%', label: 'Target Availability', detail: 'High-reliability systems' },
  { value: '<25ms', label: 'Backend Latency', detail: 'Optimized p99 query speed' }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Architectural Simplicity & Resilience',
    description: 'Writing straightforward, decoupled code that handles failures gracefully, avoids premature over-abstraction, and isolates failure domains with circuit breakers.',
    badge: 'Reliability'
  },
  {
    title: 'Performance as a Feature',
    description: 'Profiling bottlenecks at both the network and database layers. Minimizing memory allocations, leveraging connection pools, and utilizing efficient caching strategies.',
    badge: 'High Throughput'
  },
  {
    title: 'Mobile-First & Accessible UI',
    description: 'Building delightful, responsive experiences that render instantaneously, maintain zero cumulative layout shift, and conform strictly to WCAG accessibility guidelines.',
    badge: 'User Delight'
  },
  {
    title: 'Rigorous Testing & Documentation',
    description: 'Backing critical business logic with unit, integration, and contract tests. Leaving clear architectural decisions and self-documenting codebases for fellow engineers.',
    badge: 'Code Quality'
  }
];
