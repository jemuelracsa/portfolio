import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Jemuel Racsa',
  title: 'GoHighLevel Specialist & Full-Stack Automation Engineer',
  tagline: 'Architecting enterprise GoHighLevel CRM ecosystems, multi-branch workflow automations, custom snapshots, API v2 webhooks, and scalable client systems.',
  email: 'jemuel.racsa@gmail.com',
  github: 'https://github.com/jemuelracsa',
  githubUsername: 'jemuelracsa',
  website: 'https://jemuelracsa.github.io/',
  location: 'Philippines / Remote Worldwide',
  status: 'Open for Full-Time Roles & High-Impact Contracts',
  yearsOfExperience: '5+',
  availability: 'Available immediately',
  avatar: '/profile.jpg',
  bio: 'GoHighLevel (GHL) Specialist and Full-Stack Software Engineer with 5+ years of production experience building high-performing CRM ecosystems, complex workflow automations, turnkey snapshots, and custom integrations. Former Lead GoHighLevel Automation Engineer at Peter Swain Inc (2022 — 2024), now operating independently and actively available for full-time senior roles and high-impact client contracts.',
};

export interface GHLPillar {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  description: string;
  capabilities: string[];
  metrics: string;
}

export const GHL_PILLARS: GHLPillar[] = [
  {
    id: 'workflows',
    title: 'Advanced Workflows & AI Automations',
    badge: 'Core Expertise',
    iconName: 'Workflow',
    description: 'Engineering multi-branch logic, automated trigger cascades, and conversational AI response loops that convert cold inbound leads into confirmed appointments 24/7.',
    capabilities: [
      'Sub-45-second Speed-to-Lead sequences (SMS, Email, Ringless Voicemail, WhatsApp)',
      'Multi-branch If/Else conditional logic, Wait states, and custom Webhook actions',
      'Appointment booking engine with automated reminder ladders & no-show reactivation loops',
      'Conversation AI & Smart Booking Bot configuration for 24/7 lead qualification',
      'Review generation automations producing consistent 5-star Google & Facebook reviews',
    ],
    metrics: '<45s Speed-to-Lead | +38% Booked Calls',
  },
  {
    id: 'snapshots',
    title: 'Custom Snapshots & SaaS Mode Setup',
    badge: 'Agency Scale',
    iconName: 'Boxes',
    description: 'Architecting modular, plug-and-play industry snapshots for multi-location agencies. Standardizing custom values and custom fields so new client accounts launch in minutes.',
    capabilities: [
      'Custom Values & Custom Fields mapping for 1-click, error-free onboarding',
      'Turnkey niche snapshots (Real Estate, MedSpa, Home Services, Coaching, E-commerce)',
      'Pre-configured opportunity pipelines, smart lists, and lead scoring rules',
      'SaaS Mode configuration with automated tier limits, rebilling, and Stripe checkout',
      'Sub-account template updates and bulk snapshot propagation across agency locations',
    ],
    metrics: '15+ Snapshots Deployed | 15-Min Onboarding',
  },
  {
    id: 'api-webhooks',
    title: 'GHL API v2, Webhooks & Custom Code',
    badge: 'Engineering Edge',
    iconName: 'Code2',
    description: 'Bridging GoHighLevel with external databases, membership portals, and custom apps. Writing custom JavaScript/CSS in funnels and building dedicated Node.js middleware.',
    capabilities: [
      'GoHighLevel API v2 & OAuth 2.0 integration for real-time contact & opportunity sync',
      'Custom webhook listeners and middleware built with Node.js/Express and Redis queues',
      'Injected JavaScript for dynamic pricing calculators, custom validation & progress bars',
      'Custom CSS overrides for pixel-perfect, premium branding inside GHL funnels & portals',
      'Zapier & Make.com complex multi-step scenarios connecting Stripe, Shopify & GHL',
    ],
    metrics: '50k+ Webhooks Handled | 99.99% Sync Uptime',
  },
  {
    id: 'funnels',
    title: 'High-Converting Funnels & Websites',
    badge: 'Conversion Focused',
    iconName: 'Layout',
    description: 'Designing fast, accessible, high-converting landing pages, lead capture opt-ins, 2-step checkouts, and membership portals with seamless CRM data integration.',
    capabilities: [
      '2-Step order forms with bump offers, one-click upsells, and abandoned cart triggers',
      'Mobile-first responsive layouts optimized for sub-second load speeds and zero layout shift',
      'Membership courses, client onboarding portals, and community management',
      'Tracking pixel setup: Meta Pixel, Meta Conversions API (CAPI), and Google Analytics 4',
      'Custom domain DNS configuration (Cloudflare, CNAME records, SSL certification)',
    ],
    metrics: 'Up to 34.8% Opt-in Rates | 100/100 Mobile UX',
  },
  {
    id: 'deliverability',
    title: 'A2P 10DLC & LC Phone / Email Compliance',
    badge: 'Compliance & Delivery',
    iconName: 'ShieldCheck',
    description: 'Guaranteed compliance and high inbox placement. Managing carrier registration, dedicated sending domains, and anti-spam protocols to keep communication lines active.',
    capabilities: [
      'A2P 10DLC Brand & Campaign registration with 100% first-attempt approval track record',
      'LeadConnector (LC) Phone number provisioning, call recording, and Whisper/IVR setup',
      'Dedicated LC Email sending domain setup with strict SPF, DKIM, DMARC, and MX records',
      'Automated email warm-up schedules and bounce/spam rate monitoring',
      'TCPA compliance opt-in / opt-out logic (STOP/UNSUBSCRIBE) handling across all workflows',
    ],
    metrics: '100% A2P Approved | 99.8% Inbox Placement',
  },
  {
    id: 'pipelines',
    title: 'Pipelines, CRM Management & Attribution',
    badge: 'Revenue Operations',
    iconName: 'BarChart3',
    description: 'Structuring clear visual sales pipelines that reflect real sales stages, automate status updates, and provide clear attribution metrics for advertising spend.',
    capabilities: [
      'Multi-stage opportunity pipelines with automated stage progression based on call/SMS triggers',
      'Smart Lists, contact segmentation, and dynamic tagging systems for hyper-targeted outreach',
      'First-touch and last-touch attribution tracking linking closed deals back to ad sources',
      'Custom dashboard reporting and KPI tracking for agency clients and executive leadership',
      'Database reactivation workflows turning cold leads into active revenue opportunities',
    ],
    metrics: 'Full Attribution Tracking | Real-Time ROI',
  },
];

export interface VisualWorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'branch';
  label: string;
  detail: string;
  status: 'active' | 'success' | 'conditional';
}

export const WORKFLOW_DEMO_NODES: VisualWorkflowNode[] = [
  {
    id: 'step-1',
    type: 'trigger',
    label: 'Trigger: New Inbound Lead Opt-In',
    detail: 'Form submitted on HighLevel landing page (Source: Paid Ads / Organic)',
    status: 'active',
  },
  {
    id: 'step-2',
    type: 'action',
    label: 'Action: Instant Personalized SMS (< 45s)',
    detail: 'Sends dynamic greeting with calendar booking link & custom contact name',
    status: 'success',
  },
  {
    id: 'step-3',
    type: 'action',
    label: 'Action: Internal Team Notification & Lead Tagging',
    detail: 'Tags as [Hot Lead], creates pipeline opportunity in "New Lead" stage',
    status: 'success',
  },
  {
    id: 'step-4',
    type: 'condition',
    label: 'Condition: Did lead reply or book within 5 mins?',
    detail: 'Monitors inbound SMS replies and calendar appointment webhook events',
    status: 'conditional',
  },
  {
    id: 'step-5a',
    type: 'branch',
    label: 'Branch [YES]: Trigger AI Booking Assistant',
    detail: 'AI responds naturally to answer questions & confirms appointment time',
    status: 'success',
  },
  {
    id: 'step-5b',
    type: 'branch',
    label: 'Branch [NO]: Ringless Voicemail + Day 1 Email Sequence',
    detail: 'Drops personalized audio memo & fires warm value email from company founder',
    status: 'active',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ghl-agency-snapshot',
    title: 'Enterprise Agency Snapshot & AI Automation Suite',
    tagline: 'Turnkey GoHighLevel multi-location snapshot with 28+ connected workflows and AI booking bot',
    description: 'A comprehensive, battle-tested GoHighLevel snapshot engineered for high-growth agencies. Includes complete lead capture, sub-45-second speed-to-lead automations, AI conversation qualification, calendar routing, and automated review generation.',
    longDescription: 'Engineered as a turnkey deployment system for agency clients. Features 28+ synchronized workflows using Custom Values and Custom Fields, enabling 1-click onboarding without manual copy updates. Integrates conversation AI for after-hours qualification, automated no-show recovery, and multi-stage opportunity pipelines with revenue attribution.',
    category: 'ghl',
    tags: ['GoHighLevel', 'Workflows', 'Custom Snapshots', 'Conversation AI', 'LC Phone/Email', 'A2P 10DLC', 'Pipelines'],
    metrics: [
      { label: 'Speed-to-Lead', value: '< 45s' },
      { label: 'Onboarding Time', value: '15 mins' },
      { label: 'Show-Up Rate', value: '82%' },
    ],
    architectureHighlights: [
      'Engineered 28+ interconnected workflows handling instant SMS, ringless voicemail, email follow-up, and calendar reminders',
      'Architected Custom Values and Custom Fields hierarchy allowing instant 1-click agency sub-account deployment',
      'Configured Conversation AI bot trained on client FAQs, pre-qualifying leads and booking calendar slots automatically',
      'Implemented automated Google Review generation sequence achieving a 34% response rate among completed appointments',
      'Full A2P 10DLC compliance verification and dedicated domain email configuration for 99.8% message deliverability'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/#ghl-showcase',
    featured: true,
    stars: 45,
    role: 'GoHighLevel Solutions Architect'
  },
  {
    id: 'ghl-api-gateway',
    title: 'GoHighLevel API v2 & Custom Webhook Sync Gateway',
    tagline: 'Custom Node.js & OAuth 2.0 integration engine syncing external payments and membership tiers',
    description: 'A resilient custom middleware service connecting GoHighLevel API v2 with Stripe, external PostgreSQL databases, and custom user portals to automate membership provisioning and sub-account creation.',
    longDescription: 'Created to bridge the gap between GoHighLevel and external SaaS architectures. Built with Node.js, Express, and Redis message queues, it listens to Stripe subscription webhooks, manages GoHighLevel OAuth 2.0 token refreshes, provisions contact tags, and automatically spins up client sub-accounts via the HighLevel Agency API.',
    category: 'ghl',
    tags: ['GHL API v2', 'Webhooks', 'Node.js', 'Express', 'TypeScript', 'Redis', 'OAuth 2.0', 'Stripe'],
    metrics: [
      { label: 'Daily Webhooks', value: '15,000+' },
      { label: 'Sync Reliability', value: '99.99%' },
      { label: 'Event Latency', value: '< 120ms' },
    ],
    architectureHighlights: [
      'Deep integration with GoHighLevel API v2 using OAuth 2.0 authorization code flow with automatic token refreshing',
      'Idempotent Redis queue handling Stripe webhook events with exponential backoff retry to prevent duplicate actions',
      'Automated GHL Agency API sub-account provisioning, snapshot loading, and user invite dispatch upon checkout completion',
      'Bidirectional contact synchronization between custom enterprise database and GoHighLevel CRM'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/#ghl-showcase',
    featured: true,
    stars: 32,
    role: 'Integration & Automation Engineer'
  },
  {
    id: 'ghl-custom-funnel',
    title: 'High-Converting GHL Funnel with Dynamic JS Calculator',
    tagline: 'Custom-coded GoHighLevel landing page with dynamic quote estimator and 2-step checkout',
    description: 'A high-converting GoHighLevel funnel customized with injected vanilla JavaScript and CSS to provide real-time price estimation, interactive sliders, and automated CRM segmentation.',
    longDescription: 'Overcoming standard GHL design limitations by injecting custom, mobile-optimized JavaScript and CSS directly into the funnel builder. Features an interactive service quote calculator that dynamically computes price estimates and pushes selected choices into GHL custom form fields for targeted follow-up workflows.',
    category: 'ghl',
    tags: ['GoHighLevel', 'Custom JavaScript', 'Custom CSS', '2-Step Checkout', 'Meta CAPI', 'Funnel Optimization'],
    metrics: [
      { label: 'Opt-in Rate', value: '28.4%' },
      { label: 'Mobile PageSpeed', value: '96 / 100' },
      { label: 'Checkout Drop-off', value: '-35%' },
    ],
    architectureHighlights: [
      'Injected lightweight vanilla JavaScript calculator updating custom GHL hidden fields in real-time',
      'Bespoke CSS styling overcoming default builder constraints to match high-end corporate brand guidelines',
      'Meta Conversions API (CAPI) and Google Analytics 4 integration capturing server-side purchase and lead events',
      'Abandoned checkout automation triggering an SMS with a dynamic recovery link within 15 minutes'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/#ghl-showcase',
    featured: true,
    stars: 28,
    role: 'GHL Funnel Architect & Frontend Developer'
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
    stars: 15,
    role: 'Designer & Engineer'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'GoHighLevel (GHL) & CRM Automation',
    iconName: 'Workflow',
    skills: [
      { name: 'Advanced Workflows & Logic (If/Else, Wait)', level: 'Expert', years: '4+ yrs' },
      { name: 'Custom Snapshots & SaaS Mode Setup', level: 'Expert', years: '4+ yrs' },
      { name: 'GoHighLevel API v2 & Webhooks', level: 'Expert', years: '3+ yrs' },
      { name: 'Funnels, Websites & Custom CSS/JS', level: 'Expert', years: '4+ yrs' },
      { name: 'A2P 10DLC & LC Email/Phone Compliance', level: 'Expert', years: '3+ yrs' },
      { name: 'Zapier, Make.com & Custom Middleware', level: 'Expert', years: '4+ yrs' },
      { name: 'Opportunity Pipelines & Attribution Tracking', level: 'Expert', years: '4+ yrs' },
      { name: 'Conversation AI & Smart Booking Bots', level: 'Advanced', years: '2+ yrs' },
    ]
  },
  {
    category: 'Full-Stack & Web Technologies',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript (ES6+) & TypeScript', level: 'Expert', years: '5+ yrs' },
      { name: 'React 18 / 19 & Next.js', level: 'Expert', years: '4+ yrs' },
      { name: 'Node.js & Express API Development', level: 'Expert', years: '4+ yrs' },
      { name: 'HTML5, CSS3 & Tailwind CSS', level: 'Expert', years: '5+ yrs' },
      { name: 'RESTful APIs & Webhook Handlers', level: 'Expert', years: '5+ yrs' },
      { name: 'SQL (PostgreSQL / MySQL)', level: 'Advanced', years: '4+ yrs' },
    ]
  },
  {
    category: 'Backend, APIs & Distributed Systems',
    iconName: 'Server',
    skills: [
      { name: 'WebSockets & Server-Sent Events (SSE)', level: 'Expert', years: '3+ yrs' },
      { name: 'Redis (Caching, Queues & Pub/Sub)', level: 'Expert', years: '3+ yrs' },
      { name: 'Java & Spring Boot Framework', level: 'Advanced', years: '4+ yrs' },
      { name: 'Microservices & Event-Driven Architecture', level: 'Advanced', years: '3+ yrs' },
      { name: 'Third-Party API Integrations (Stripe, Twilio)', level: 'Expert', years: '4+ yrs' },
    ]
  },
  {
    category: 'Cloud, Infrastructure & Tooling',
    iconName: 'Cloud',
    skills: [
      { name: 'Git & GitHub Workflows / Pages', level: 'Expert', years: '5+ yrs' },
      { name: 'Docker & Containerization', level: 'Advanced', years: '3+ yrs' },
      { name: 'Cloudflare DNS, SSL & Domain Routing', level: 'Expert', years: '4+ yrs' },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 'Advanced', years: '3+ yrs' },
      { name: 'Linux / Unix CLI & Shell Scripting', level: 'Advanced', years: '5+ yrs' },
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Independent GoHighLevel Specialist & Automation Consultant',
    company: 'Independent Consulting / Open to Roles',
    period: '2024 — Present',
    location: 'Remote Worldwide',
    type: 'Available for Full-time & Contracts',
    summary: 'Partnering directly with marketing agencies, SaaS founders, and scaling businesses to engineer enterprise GoHighLevel CRM setups, multi-branch lead automations, and custom API v2 integrations.',
    bulletPoints: [
      'Building and auditing end-to-end GoHighLevel sub-accounts with custom snapshot architecture, standardized custom values, and custom fields.',
      'Designing rapid speed-to-lead workflow engines (<45-second response times) integrating Conversation AI booking, SMS, email, and internal Slack/CRM notifications.',
      'Developing custom Node.js and TypeScript microservices for GHL API v2 OAuth, bidirectional webhook syncing, and Stripe subscription lifecycle management.',
      'Managing A2P 10DLC Brand and Campaign compliance, DNS records (SPF, DKIM, DMARC), and LC Email deliverability maintaining a 99.8% inbox placement rate.'
    ],
    technologies: ['GoHighLevel', 'GHL API v2', 'Workflows', 'JavaScript', 'TypeScript', 'Node.js', 'Zapier/Make', 'Stripe', 'A2P 10DLC']
  },
  {
    id: 'exp-2',
    role: 'Lead GoHighLevel & Automation Engineer',
    company: 'Peter Swain Inc (Previous)',
    period: '2022 — 2024',
    location: 'Remote',
    type: 'Full-time (Concluded)',
    summary: 'Spearheaded agency-wide GoHighLevel CRM infrastructure, multi-client snapshot architecture, lead generation funnels, and automated appointment booking systems.',
    bulletPoints: [
      'Engineered and deployed 15+ industry-specific GoHighLevel snapshots with 28+ standardized workflows, reducing client onboarding time from 5 days to under 20 minutes.',
      'Developed custom Node.js middleware integrating GoHighLevel API v2 with Stripe billing and external databases, processing 15,000+ daily webhooks with 99.99% sync reliability.',
      'Configured sub-45-second automated Speed-to-Lead sequences across SMS, email, and ringless voicemail, boosting lead-to-appointment conversion rates by 38%.',
      'Secured 100% first-pass approval on A2P 10DLC Brand and Campaign registrations; managed dedicated LC Email domains maintaining 99.8% deliverability.',
      'Authored bespoke JavaScript calculators and CSS styling injected directly into GHL funnels, increasing form completions and mobile checkout conversions by 35%.'
    ],
    technologies: ['GoHighLevel', 'GHL API v2', 'Workflows', 'JavaScript', 'TypeScript', 'Node.js', 'LC Phone/Email', 'A2P 10DLC']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Software & Integration Engineer',
    company: 'Logistics & Distributed Cloud Services',
    period: '2020 — 2022',
    location: 'Hybrid',
    type: 'Full-time',
    summary: 'Spearheaded real-time backend communication gateways, automated dispatch algorithms, and responsive merchant portals.',
    bulletPoints: [
      'Implemented real-time WebSocket communication gateway (ServerPush architecture) sustaining 15,000+ simultaneous mobile client updates.',
      'Automated dispatch workflows and third-party webhook integrations, reducing operational latency and driver idle time by 28%.',
      'Designed responsive merchant dashboards using React, TypeScript, and modern CSS, accelerating order processing by 35%.',
      'Authored automated test suites raising test coverage from 64% to 88% across production microservices.'
    ],
    technologies: ['Java', 'Node.js', 'WebSockets', 'React', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker']
  },
  {
    id: 'exp-4',
    role: 'Software Developer & Web Specialist',
    company: 'Technology Solutions & Client Portals',
    period: '2018 — 2020',
    location: 'On-site',
    type: 'Full-time',
    summary: 'Developed dynamic web applications, automated client intake pipelines, and customer portals.',
    bulletPoints: [
      'Delivered 12+ client web applications with responsive mobile layouts, custom form validation, and database storage.',
      'Automated email notification triggers and customer onboarding sequences, cutting manual admin overhead by 45%.',
      'Configured payment gateway connections, customer management pipelines, and domain/DNS infrastructure.'
    ],
    technologies: ['JavaScript', 'HTML5/CSS3', 'PHP/MySQL', 'REST APIs', 'Git', 'DNS/Hosting']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology / Computer Science',
    school: 'Polytechnic University / Institute of Technology',
    period: 'Graduated with Honors',
    details: 'Rigorous coursework in Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Network Protocols, and Systems Engineering.'
  }
];

export const STATS_DATA = [
  { value: '60+', label: 'GHL Workflows Built', detail: 'Multi-branch automations' },
  { value: '<45s', label: 'Speed-to-Lead', detail: 'Instant automated response' },
  { value: '15+', label: 'Agency Snapshots', detail: 'Turnkey 1-click deployments' },
  { value: '99.8%', label: 'Deliverability Rate', detail: 'A2P 10DLC & LC Email verified' }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Automate Everything That Can Be Automated',
    description: 'Eliminating repetitive manual tasks through bulletproof GoHighLevel workflows, smart conditional logic, and instant notifications so teams focus on high-value closing.',
    badge: 'Efficiency'
  },
  {
    title: 'Speed-to-Lead is the Ultimate Differentiator',
    description: 'Connecting with inbound leads within the first 60 seconds across SMS, email, and automated phone calls to maximize conversion rates and prevent lost opportunities.',
    badge: 'Conversion'
  },
  {
    title: 'Clean Architecture Over Fragile Hacks',
    description: 'Structuring Custom Values, Custom Fields, and modular snapshots cleanly so that changes propagate instantly across sub-accounts without breaking live workflows.',
    badge: 'Scalability'
  },
  {
    title: 'Engineering Rigor Meets Marketing Mastery',
    description: 'Bringing real software engineering standards — custom APIs, webhooks, JavaScript/CSS, and version control — to CRM implementation and funnel architecture.',
    badge: 'Code + CRM'
  }
];
