import { Project, SkillCategory, ExperienceItem, EducationItem, Testimonial, ProcessStep, BuildDeliverable, ServiceCategoryItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Jemuel Racsa',
  title: 'GoHighLevel Expert & Automation Specialist',
  tagline: 'I help businesses turn leads into booked calls and happy clients using GoHighLevel — 100% on autopilot.',
  email: 'jemuel.racsa@gmail.com',
  github: 'https://github.com/jemuelracsa',
  githubUsername: 'jemuelracsa',
  website: 'https://jemuelracsa.github.io/portfolio/',
  location: 'Philippines / Remote Worldwide',
  status: 'Available for Full-Time Roles & Client Projects',
  yearsOfExperience: '5+',
  availability: 'Available immediately',
  avatar: './profile.jpg',
  bio: "Hi, I'm Jemuel! I help agencies and business owners stop losing leads and start booking more appointments with GoHighLevel. For over 5 years, I've built simple, reliable systems that text and email leads in seconds, book calendar appointments, and save teams 20+ hours every week. Former Lead GoHighLevel Automation Engineer at Peter Swain Inc (2022 — 2024), now working directly with clients worldwide.",
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
    title: 'Instant Lead Follow-Up',
    badge: 'Most Popular',
    iconName: 'Workflow',
    description: 'Never let another lead go cold. Automatically send friendly texts and emails in under 45 seconds to get hot prospects chatting and booking calls.',
    capabilities: [
      'Instant text message and email sent in less than 45 seconds',
      'Smart conversational AI assistant to answer questions and book calls 24/7',
      'Automated appointment reminders that cut no-shows in half',
      'Automatic review requests that collect 5-star Google reviews from happy clients',
      'Re-engage cold leads with automated friendly follow-up sequences',
    ],
    metrics: '<45s Reply Time | +38% Booked Calls',
  },
  {
    id: 'snapshots',
    title: 'Done-For-You Agency Snapshots',
    badge: 'Save Days of Work',
    iconName: 'Boxes',
    description: 'Plug-and-play GoHighLevel setups ready in minutes. Includes your calendars, sales pipelines, email templates, and automated workflows out of the box.',
    capabilities: [
      'Launch a complete new client account in under 15 minutes',
      'Ready-to-use setups for Real Estate, MedSpas, Clinics, Home Services & Coaches',
      'Pre-built sales pipelines that track every lead from first contact to paid client',
      'Custom values so agency names, phone numbers, and links update in one click',
      'SaaS Mode setup with automated Stripe subscriptions and customer logins',
    ],
    metrics: '15+ Snapshots Built | 15-Min Onboarding',
  },
  {
    id: 'funnels',
    title: 'High-Converting Websites & Funnels',
    badge: 'Turn Visitors to Leads',
    iconName: 'Layout',
    description: 'Clean, fast, mobile-friendly landing pages and booking funnels designed to turn casual visitors into booked calls and paying customers.',
    capabilities: [
      'Easy booking pages that sync seamlessly with your team calendar',
      'Simple 2-step checkout forms with upsells and abandoned cart recovery',
      'Mobile-first design that loads in under 1 second on all smartphones',
      'Custom interactive quote calculators and friendly pricing sliders',
      'Ad tracking setup (Facebook, Google, TikTok) so you know what brings in sales',
    ],
    metrics: 'High Conversion Rates | 1-Second Load Speed',
  },
  {
    id: 'deliverability',
    title: 'Guaranteed Text & Email Delivery',
    badge: 'Stay Out of Spam',
    iconName: 'ShieldCheck',
    description: 'Make sure your text messages and emails actually get seen. We set up official business phone registration (A2P 10DLC) and email domain security so you stay out of spam.',
    capabilities: [
      'A2P 10DLC phone registration approved fast without carrier rejections',
      'Clean email domain setup (SPF, DKIM, DMARC) for maximum inbox delivery',
      'Missed-Call Text-Back: instantly texts callers if your team misses a call',
      'Automatic opt-out management (STOP/START) keeping you 100% carrier compliant',
      'Call recording, whisper messages, and smart call routing to your team members',
    ],
    metrics: '100% Registration Pass | 99.8% Inbox Placement',
  },
  {
    id: 'api-webhooks',
    title: 'Connect Your Favorite Tools',
    badge: 'Zero Technical Stress',
    iconName: 'Code2',
    description: 'Connect GoHighLevel with Stripe, your current website, Shopify, or custom apps so your data flows automatically without manual copy-pasting.',
    capabilities: [
      'Automatic Stripe payment tracking and instant client account activation',
      'Zapier, Make.com, and custom webhook connections built reliably',
      'Sync customer contacts and deals with external spreadsheets or databases',
      'Custom interactive calculators and branded forms added to any funnel',
      '99.99% reliable connections that run smoothly in the background without breaking',
    ],
    metrics: '50k+ Events Handled | 99.99% Reliability',
  },
  {
    id: 'pipelines',
    title: 'Clear Sales Pipelines & Tracking',
    badge: 'Know Your Numbers',
    iconName: 'BarChart3',
    description: 'See your entire sales process at a glance. Know exactly where every lead is, who needs a follow-up, and which ad campaigns make the most money.',
    capabilities: [
      'Visual drag-and-drop board for your team to easily manage leads',
      'Automatic pipeline moves when a client books, shows up, or makes a payment',
      'Smart lead tags and lists so you can send targeted promotions with one click',
      'Clear ROI reports showing which ad campaigns produced closed deals',
      'Database reactivation campaigns to turn old dead leads into active revenue',
    ],
    metrics: 'Complete Clarity | Real-Time Sales View',
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
    label: 'Step 1: A customer fills out your form or ad',
    detail: 'New inquiry arrives from your website, landing page, or Facebook ad',
    status: 'active',
  },
  {
    id: 'step-2',
    type: 'action',
    label: 'Step 2: Instant friendly text & email sent (< 45s)',
    detail: 'Sends a warm personal greeting with your calendar booking link',
    status: 'success',
  },
  {
    id: 'step-3',
    type: 'action',
    label: 'Step 3: Your team gets notified immediately',
    detail: 'New lead tagged as [Hot Lead] and placed in your sales pipeline',
    status: 'success',
  },
  {
    id: 'step-4',
    type: 'condition',
    label: 'Step 4: Did the customer reply or book a time?',
    detail: 'System automatically checks if the lead selected an appointment slot',
    status: 'conditional',
  },
  {
    id: 'step-5a',
    type: 'branch',
    label: 'Branch [YES]: Smart AI assistant confirms booking',
    detail: 'AI answers any quick questions, books the slot, and sends calendar invite',
    status: 'success',
  },
  {
    id: 'step-5b',
    type: 'branch',
    label: 'Branch [NO]: Gentle reminder text sent next day',
    detail: 'Polite, automated follow-up sent so you stay top of mind without being pushy',
    status: 'active',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ghl-agency-snapshot',
    title: 'Done-For-You Agency & Clinic Booking System',
    tagline: 'Complete turnkey GoHighLevel snapshot with 28+ connected automations and AI booking',
    description: 'A complete, ready-to-use GoHighLevel setup built for agencies and busy practices. It captures new leads, replies in seconds, books calendar appointments, and automatically collects 5-star Google reviews.',
    longDescription: 'Engineered as a plug-and-play system for high-volume client onboarding. Includes 28+ pre-wired workflows using Custom Values and Custom Fields, allowing agencies to launch new client accounts in under 15 minutes. Features conversational AI for after-hours booking, automated reminders that cut no-shows, and clear sales pipelines.',
    category: 'ghl',
    tags: ['GoHighLevel', 'Automations', 'Turnkey Snapshot', 'AI Booking Bot', 'Text & Email', 'A2P 10DLC', 'Pipelines'],
    metrics: [
      { label: 'Reply Speed', value: '< 45s' },
      { label: 'Setup Time', value: '15 mins' },
      { label: 'Show-Up Rate', value: '82%' },
    ],
    architectureHighlights: [
      '28+ pre-built automations handling instant text messages, voicemail drops, and calendar reminders',
      'Simple Custom Values system so any new client account can launch in just 15 minutes',
      'Smart conversational AI trained on common questions to qualify leads and book appointments 24/7',
      'Automated Google review collector that turns happy customers into glowing public testimonials',
      'Full carrier registration (A2P 10DLC) and verified domain setup for 99.8% message delivery'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/portfolio/#ghl-showcase',
    featured: true,
    stars: 45,
    role: 'GoHighLevel Solutions Architect'
  },
  {
    id: 'ghl-api-gateway',
    title: 'Automatic Stripe & Customer Sync Connector',
    tagline: 'Custom connector that syncs customer payments, invoices, and memberships on autopilot',
    description: 'A reliable background service connecting GoHighLevel with Stripe, customer portals, and databases. When a customer pays, their account, tags, and client portal are set up instantly with zero manual work.',
    longDescription: 'Built to eliminate manual customer onboarding between checkout and GoHighLevel. Built with Node.js and secure webhooks, it instantly detects customer payments, assigns the right tags, activates course memberships, and even creates client sub-accounts automatically.',
    category: 'ghl',
    tags: ['GoHighLevel API', 'Stripe Payments', 'Webhooks', 'Node.js', 'Instant Sync', 'Automated Onboarding'],
    metrics: [
      { label: 'Daily Events', value: '15,000+' },
      { label: 'Sync Reliability', value: '99.99%' },
      { label: 'Response Speed', value: '< 120ms' },
    ],
    architectureHighlights: [
      'Direct connection with GoHighLevel API to update contact tags and deals in real-time',
      'Safe payment queue that guarantees no customer payment or receipt is ever lost',
      'Automatically creates new client accounts and sends login emails right after checkout',
      'Two-way sync keeping customer records up-to-date across your CRM and accounting tools'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/portfolio/#ghl-showcase',
    featured: true,
    stars: 32,
    role: 'Integration & Automation Engineer'
  },
  {
    id: 'ghl-custom-funnel',
    title: 'High-Converting Funnel with Live Price Calculator',
    tagline: 'Custom-designed GoHighLevel landing page with an interactive quote estimator and fast checkout',
    description: 'A modern, high-converting GoHighLevel funnel built with an interactive price estimator. Visitors pick their services, see their estimate in real-time, and book a consultation in one seamless flow.',
    longDescription: 'Upgraded standard GoHighLevel pages with custom, mobile-friendly interactive code. Features a live quote calculator that calculates pricing on the fly and saves the customer choices directly into your CRM so your sales team has the full context before hopping on the call.',
    category: 'ghl',
    tags: ['GoHighLevel Funnels', 'Live Calculator', 'Mobile Optimized', '2-Step Checkout', 'Ad Tracking', 'High Conversion'],
    metrics: [
      { label: 'Opt-in Rate', value: '28.4%' },
      { label: 'Mobile Speed', value: '96 / 100' },
      { label: 'Checkout Abandonment', value: '-35%' },
    ],
    architectureHighlights: [
      'Custom interactive calculator that estimates prices and saves choices into CRM form fields',
      'Clean, branded design that looks high-end on mobile phones, tablets, and desktops',
      'Accurate ad tracking setup for Facebook and Google so you know which ads bring customers',
      'Automated text message sent within 15 minutes to anyone who starts checkout but forgets to finish'
    ],
    githubUrl: 'https://github.com/jemuelracsa',
    liveUrl: 'https://jemuelracsa.github.io/portfolio/#ghl-showcase',
    featured: true,
    stars: 28,
    role: 'GHL Funnel Architect & Frontend Developer'
  },
  {
    id: 'zinger-framework',
    title: 'Instant Order & Delivery Logistics Engine',
    tagline: 'High-speed automated order management and courier dispatch system',
    description: 'A fast, reliable backend engine designed for order processing, automatic inventory updates, and live dispatching of couriers without delays or crashes.',
    longDescription: 'Built to manage high-volume orders seamlessly. Handles order status updates, automated delivery driver assignment in under 15 milliseconds, and safe payment processing that prevents double-charges during network glitches.',
    category: 'distributed',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Microservices'],
    metrics: [
      { label: 'Response Speed', value: '< 25ms' },
      { label: 'Order Capacity', value: '4,500+ /sec' },
      { label: 'Uptime', value: '99.98%' }
    ],
    architectureHighlights: [
      'Smart dispatch system finding the closest driver in less than 15 milliseconds',
      'Safe payment pipeline that prevents duplicate charges even if the user taps twice',
      'Fast automated notifications keeping customers informed every step of the way',
      'Thoroughly tested system with 92% automated code verification coverage'
    ],
    githubUrl: 'https://github.com/jemuelracsa/zinger-framework',
    liveUrl: 'https://github.com/jemuelracsa/zinger-framework#readme',
    featured: false,
    stars: 38,
    role: 'Creator & Lead Architect'
  },
  {
    id: 'serverpush',
    title: 'Real-Time Notification & Live Alerts Gateway',
    tagline: 'High-speed live update engine delivering instant notifications to 15,000+ active users without delay',
    description: 'A production-tested real-time alert system built to deliver live status updates, instant notifications, and chat alerts to thousands of connected users without slowdowns.',
    longDescription: 'Engineered for logistics and client platforms requiring instantaneous updates. Uses WebSocket and event-driven architecture to keep drivers, dispatchers, and merchants synchronized in real-time.',
    category: 'distributed',
    tags: ['Node.js', 'WebSockets', 'SSE', 'JavaScript', 'Redis Pub/Sub', 'Prometheus'],
    metrics: [
      { label: 'Live Users', value: '15,000+' },
      { label: 'Delivery Delay', value: '< 8ms' },
      { label: 'Uptime SLA', value: '99.98%' }
    ],
    architectureHighlights: [
      'Instant live message delivery with under 8ms delay across thousands of users',
      'Smart fallback so users on slow mobile networks never miss an alert',
      'Redis queue that handles heavy traffic spikes smoothly without crashing',
      'Built-in security protection against spam or abusive connection attempts'
    ],
    githubUrl: 'https://github.com/jemuelracsa/serverpush',
    liveUrl: 'https://github.com/jemuelracsa/serverpush#readme',
    featured: false,
    stars: 24,
    role: 'Author & Maintainer'
  },
  {
    id: 'portfolio-v2',
    title: 'Modern High-Speed Client Portfolio',
    tagline: 'Clean, responsive web presence built for high conversion and mobile accessibility',
    description: 'Fast, mobile-friendly portfolio built to showcase GoHighLevel systems, real automation workflows, client results, and easy contact booking.',
    longDescription: 'Designed for fast loading on GitHub Pages. Engineered with modern React, Tailwind CSS, smooth animations, and clean layouts that look great on smartphones, tablets, and computers.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite', 'GitHub Pages'],
    metrics: [
      { label: 'Performance', value: '100 / 100' },
      { label: 'Mobile Score', value: '100%' },
      { label: 'Accessibility', value: 'WCAG AAA' }
    ],
    architectureHighlights: [
      'Static-generation ready for instant global loading on GitHub Pages',
      'Smooth layout that fits all devices from small smartphones to large monitors',
      'Interactive workflow simulator allowing clients to test lead follow-ups in real-time',
      'Direct contact form with instant email alerts and quick copy buttons'
    ],
    githubUrl: 'https://github.com/jemuelracsa/jemuelracsa.github.io',
    liveUrl: 'https://jemuelracsa.github.io/portfolio/',
    featured: false,
    stars: 15,
    role: 'Designer & Engineer'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'GoHighLevel & Lead Automations',
    iconName: 'Workflow',
    skills: [
      { name: 'Fast Lead Follow-Up (< 45s SMS & Email)', level: 'Expert', years: '4+ yrs' },
      { name: 'Done-For-You Agency Snapshots & SaaS Mode', level: 'Expert', years: '4+ yrs' },
      { name: 'GoHighLevel API & Custom Webhooks', level: 'Expert', years: '3+ yrs' },
      { name: 'High-Converting Funnels & Booking Pages', level: 'Expert', years: '4+ yrs' },
      { name: 'A2P 10DLC & Email Inbox Deliverability (99.8%)', level: 'Expert', years: '3+ yrs' },
      { name: 'Zapier, Make.com & Software Connections', level: 'Expert', years: '4+ yrs' },
      { name: 'Sales Pipeline & Deal Tracking Boards', level: 'Expert', years: '4+ yrs' },
      { name: 'Conversational AI & 24/7 Booking Bots', level: 'Advanced', years: '2+ yrs' },
    ]
  },
  {
    category: 'Web Development & Custom Code',
    iconName: 'Code2',
    skills: [
      { name: 'Custom JavaScript & Interactive Calculators', level: 'Expert', years: '5+ yrs' },
      { name: 'Modern React & Mobile-First Web Design', level: 'Expert', years: '4+ yrs' },
      { name: 'Node.js & Backend API Development', level: 'Expert', years: '4+ yrs' },
      { name: 'Custom CSS Styling for Branded Funnels', level: 'Expert', years: '5+ yrs' },
      { name: 'Stripe & Payment Gateway Connections', level: 'Expert', years: '4+ yrs' },
      { name: 'Database Management (SQL / PostgreSQL)', level: 'Advanced', years: '4+ yrs' },
    ]
  },
  {
    category: 'Deliverability, Phone & Email Setup',
    iconName: 'Server',
    skills: [
      { name: 'A2P 10DLC Brand & Campaign Registration', level: 'Expert', years: '3+ yrs' },
      { name: 'LeadConnector Phone & Call Routing', level: 'Expert', years: '4+ yrs' },
      { name: 'Email Domain Setup (SPF, DKIM, DMARC)', level: 'Expert', years: '4+ yrs' },
      { name: 'Missed-Call Text-Back Automation', level: 'Expert', years: '4+ yrs' },
      { name: 'Spam Prevention & High Inbox Placement', level: 'Expert', years: '3+ yrs' },
    ]
  },
  {
    category: 'Tools, DNS & Hosting',
    iconName: 'Cloud',
    skills: [
      { name: 'Domain Setup (Cloudflare, GoDaddy, Namecheap)', level: 'Expert', years: '5+ yrs' },
      { name: 'Git & GitHub Pages Deployment', level: 'Expert', years: '5+ yrs' },
      { name: 'Meta Pixel & Google Analytics Ad Tracking', level: 'Expert', years: '4+ yrs' },
      { name: 'Troubleshooting & Fast Problem Solving', level: 'Expert', years: '5+ yrs' },
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Independent GoHighLevel Specialist & Automation Consultant',
    company: 'Independent Consulting / Open to Clients & Roles',
    period: '2024 — Present',
    location: 'Remote Worldwide',
    type: 'Available for Full-Time & Projects',
    summary: 'Working directly with marketing agencies, clinic owners, and growing businesses to build simple, reliable GoHighLevel systems that turn leads into booked calls.',
    bulletPoints: [
      'Building complete GoHighLevel setups with custom booking calendars, clean sales pipelines, and automated follow-up texts.',
      'Setting up automated Speed-to-Lead sequences replying to new leads in under 45 seconds via text and email, boosting booking rates by 38%.',
      'Connecting GoHighLevel with Stripe payments, websites, and external databases so accounts and memberships activate automatically.',
      'Handling A2P 10DLC business phone registration and email domain security, maintaining a 99.8% message inbox delivery rate.'
    ],
    technologies: ['GoHighLevel', 'GHL API', 'Automations', 'JavaScript', 'TypeScript', 'Node.js', 'Zapier/Make', 'Stripe', 'A2P 10DLC']
  },
  {
    id: 'exp-2',
    role: 'Lead GoHighLevel & Automation Engineer',
    company: 'Peter Swain Inc (Previous Role)',
    period: '2022 — 2024',
    location: 'Remote',
    type: 'Full-time (Concluded)',
    summary: 'Led the GoHighLevel CRM setup, turnkey agency snapshots, lead generation funnels, and automated booking systems.',
    bulletPoints: [
      'Built and launched 15+ industry snapshots with 28+ pre-built automations, cutting new client setup time from 5 days down to 15 minutes.',
      'Created custom background integrations linking GoHighLevel with Stripe billing and client databases, handling 15,000+ daily events with 99.99% reliability.',
      'Configured automated under-45-second follow-ups across SMS, email, and voicemail, generating over 1,200 qualified booked appointments.',
      'Secured 100% approval on business text messaging registrations (A2P 10DLC) and managed dedicated email domains for 99.8% inbox delivery.',
      'Created custom interactive calculators and styling for landing pages, raising mobile checkout sales by 35%.'
    ],
    technologies: ['GoHighLevel', 'GHL API', 'Automations', 'JavaScript', 'TypeScript', 'Node.js', 'Phone & Email Setup', 'A2P 10DLC']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Software & Integration Engineer',
    company: 'Logistics & Distributed Cloud Services',
    period: '2020 — 2022',
    location: 'Hybrid',
    type: 'Full-time',
    summary: 'Built real-time messaging systems, automated dispatch notifications, and responsive merchant portals.',
    bulletPoints: [
      'Built real-time live notification gateway delivering instant alerts to 15,000+ simultaneous mobile clients with zero delay.',
      'Automated dispatch alerts and third-party webhook integrations, reducing driver wait time by 28%.',
      'Designed responsive merchant dashboards using React, TypeScript, and modern styling, speeding up order handling by 35%.'
    ],
    technologies: ['Node.js', 'WebSockets', 'React', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker']
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
      'Delivered 12+ client websites with mobile-friendly layouts, clear contact forms, and database storage.',
      'Automated email notifications and customer welcome emails, cutting manual admin work by 45%.',
      'Set up payment processors, customer management pipelines, and domain hosting.'
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
  { value: '<45s', label: 'Speed-to-Lead Response', detail: 'Automated SMS/Email replies while lead is hot' },
  { value: '60+', label: 'Engineered Automations', detail: 'Zero-touch workflows, bots & calendar routers' },
  { value: '15+', label: 'Turnkey Snapshots Built', detail: 'Standardized systems launched in 15 mins' },
  { value: '99.8%', label: 'Deliverability & Placement', detail: 'A2P 10DLC registered & inbox hardened' }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Speed Wins the Customer',
    description: 'When someone asks for information, the first business to reply wins 78% of the time. Our automations reply to every lead in under 45 seconds.',
    badge: 'Fast Response'
  },
  {
    title: 'Put Repetitive Tasks on Autopilot',
    description: 'Stop spending hours manually typing out follow-ups, appointment reminders, and review requests. Let smart systems do the heavy lifting.',
    badge: 'Save 20+ Hrs/Wk'
  },
  {
    title: 'Simple for You, Easy for Your Clients',
    description: 'No confusing software clutter or messy setups. You get a clean, straightforward system that you and your team will actually enjoy using.',
    badge: 'Zero Headache'
  },
  {
    title: 'Built to Run Smoothly Without Breaking',
    description: 'Backed by 5+ years of real software engineering experience, so your workflows, text messages, and calendars work reliably 24/7.',
    badge: '100% Reliable'
  }
];

export const SIGNATURE_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Workflow Audit',
    subtitle: 'Identify bottlenecks & lost revenue',
    description: 'We audit your current tech stack, lead sources, and manual steps. We uncover where prospects slip through the cracks and map the ideal client journey before touching any software.',
    deliverables: [
      'Full audit of current CRM, forms, and ad channels',
      'Identification of manual bottlenecks and friction points',
      'Target metrics: reply times, booking rates & show-up goals'
    ],
    iconName: 'Search'
  },
  {
    step: '02',
    title: 'Architecture & System Blueprint',
    subtitle: 'Engineered for scalability & zero errors',
    description: 'Before writing a line of code or building a workflow, we architect the full system blueprint: pipeline stages, custom fields, webhook data flows, and condition branches.',
    deliverables: [
      'Visual flowchart of all triggers, branches, and AI logic',
      'Database schema: custom values, tags, and custom fields',
      'A2P 10DLC compliance and email authentication roadmap'
    ],
    iconName: 'FileCode2'
  },
  {
    step: '03',
    title: 'Build, Deploy & Full Deliverables',
    subtitle: 'Turnkey launch + video walkthroughs & SOPs',
    description: 'We build the complete GoHighLevel ecosystem, conduct live-fire end-to-end testing, and hand over a fully documented system with step-by-step video walkthroughs and written SOPs.',
    deliverables: [
      'Turnkey GoHighLevel build with active workflows and calendar booking',
      'Custom Loom video walkthroughs explaining every piece',
      'Notion / Doc Standard Operating Procedures (SOPs) for your team',
      '30 days of post-launch warranty, optimization & support'
    ],
    iconName: 'Rocket'
  }
];

export const BUILD_DELIVERABLES: BuildDeliverable[] = [
  {
    title: 'Video Walkthroughs',
    tagline: 'Never feel lost or confused',
    description: 'Crisp, screen-by-screen Loom walkthroughs walking through every workflow, setting, and custom value so you and your team understand the system inside out.',
    iconName: 'Video',
    badge: 'Loom Included'
  },
  {
    title: 'Standard Operating Procedures',
    tagline: 'Step-by-step team SOPs',
    description: 'Clean, formatted documentation with screenshots showing your staff exactly how to handle leads, manage the pipeline, and run daily operations.',
    iconName: 'BookOpen',
    badge: 'Notion / Doc SOPs'
  },
  {
    title: 'Architecture Blueprint',
    tagline: 'Complete system visibility',
    description: 'A visual schematic detailing every webhook, automation branch, calendar connection, and tag so you always own full documentation of your intellectual property.',
    iconName: 'Layers',
    badge: 'Full Blueprint'
  },
  {
    title: '30-Day Launch Warranty',
    tagline: 'Reliability guaranteed',
    description: 'Direct Slack/email support for 30 days after launch to monitor live leads, fine-tune messaging, and ensure your system runs smoothly under real-world traffic.',
    iconName: 'ShieldCheck',
    badge: '30-Day Support'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Jemuel completely transformed our agency's onboarding. What used to take us 3-4 days of manual setup per new client now launches in under 15 minutes. The video walkthroughs and team SOPs he delivered made training our staff completely seamless.",
    author: 'Marcus Vance',
    role: 'Founder & Managing Partner',
    company: 'Apex Growth Marketing',
    metric: '3-4 Days → 15 Min',
    metricLabel: 'Client Onboarding Time',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    quote: 'Our biggest issue was losing leads after hours. Jemuel engineered an automated SMS speed-to-lead workflow that replies in under 30 seconds and books calls right onto our calendar. Our patient show-up rate jumped from 58% to 84% in month one.',
    author: 'Dr. Sarah Jenkins',
    role: 'Clinical Director',
    company: 'Horizon Health & Wellness',
    metric: '58% → 84%',
    metricLabel: 'Appointment Show-Up Rate',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    quote: 'Jemuel brings true software engineering discipline to GoHighLevel. He connected our Stripe billing directly to GHL sub-accounts and automated all contract signing. Saved our operations team at least 25 hours every week. Outstanding work.',
    author: 'Liam Thorne',
    role: 'Operations Lead',
    company: 'ScaleFlow Media',
    metric: '25+ Hours/Wk',
    metricLabel: 'Manual Admin Saved',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  }
];

export const CORE_SERVICES: ServiceCategoryItem[] = [
  {
    id: 'automations',
    title: 'Automations & Workflows',
    headline: 'Hands-off systems running 24/7 without breaking',
    tagline: 'Speed-to-lead, multi-channel nurture, and zero-touch operations',
    badge: 'Core Specialty',
    iconName: 'Zap',
    summary: 'Custom GoHighLevel workflows designed to capture leads, follow up within 45 seconds via SMS/Email, handle scheduling, and trigger internal team alerts.',
    highlights: [
      '< 45-Second Speed-to-Lead SMS & Email sequences',
      'AI conversational qualification & calendar booking',
      'Multi-touch appointment reminders (SMS, Email, Ringless Voicemail)',
      'A2P 10DLC compliance and deliverability hardening',
      'Post-appointment follow-up & 5-star review generation'
    ],
    bestFor: 'Agencies, clinics, and service businesses losing leads to slow follow-up.',
    deliverablesSnippet: 'Turnkey workflows + Loom video walkthrough + SOP'
  },
  {
    id: 'ai-tools',
    title: 'AI Products & Tools',
    headline: 'Intelligent assistants that qualify, converse & route',
    tagline: 'Custom AI conversational bots, voice routing & data intelligence',
    badge: 'High Impact',
    iconName: 'Bot',
    summary: 'Bespoke conversational AI agents integrated with GoHighLevel conversation streams and internal knowledge bases to answer inquiries, qualify prospects, and book calendar slots 24/7.',
    highlights: [
      '24/7 Conversational AI for inbound website & SMS inquiries',
      'Dynamic knowledge base ingestion (pricing, FAQs, scheduling logic)',
      'Automated qualification scoring before handing to sales reps',
      'Instant calendar booking with real-time conflict avoidance',
      'Fallback rules to alert human staff when complex questions arise'
    ],
    bestFor: 'Businesses wanting after-hours lead conversion and automated tier-1 qualification.',
    deliverablesSnippet: 'Trained AI prompt system + tested edge cases + staff escalation flow'
  },
  {
    id: 'crm-architecture',
    title: 'CRM & GoHighLevel Architecture',
    headline: 'Custom GHL setups engineered beyond default limits',
    tagline: 'Pipelines, custom values, snapshots, and sub-account architecture',
    badge: 'Enterprise Grade',
    iconName: 'Cpu',
    summary: 'Deep architectural builds for GoHighLevel. We audit accounts against internal APIs, build scalable snapshots, configure custom fields and values, and organize clean sales pipelines.',
    highlights: [
      'Turnkey agency snapshots with 15-minute client onboarding',
      'Custom Values and Custom Fields architecture for instant cloning',
      'Clean pipeline stages with stage-gate automation rules',
      'Two-way sync with external databases and accounting tools',
      'SaaS Mode configuration with Stripe billing automation'
    ],
    bestFor: 'Agencies scaling past 10+ sub-accounts and founders needing institutional-grade CRM.',
    deliverablesSnippet: 'Master snapshot + custom fields schema + onboarding checklist'
  },
  {
    id: 'websites-funnels',
    title: 'Websites & Funnels',
    headline: 'Clean, high-converting digital storefronts that load instantly',
    tagline: 'Landing pages, interactive calculators, and 2-step checkout',
    badge: 'Conversion Focused',
    iconName: 'Layout',
    summary: 'Beautiful landing pages, funnels, and full websites designed and built end-to-end inside GoHighLevel with custom JavaScript widgets, calculators, and high-converting copy hierarchy.',
    highlights: [
      'Mobile-first responsive architecture loading in under 1 second',
      'Custom interactive quote estimators and price calculators',
      'High-converting 2-step order forms with one-click upsells',
      'Direct calendar booking embeds without iframe glitching',
      'Accurate ad pixel & conversion tracking (Meta, Google, TikTok)'
    ],
    bestFor: 'Brands wanting a modern, boutique aesthetic with conversion-driven layouts.',
    deliverablesSnippet: 'Custom GHL funnel + mobile optimization + live tracking QA'
  },
  {
    id: 'consulting',
    title: 'Systems Consulting & Audits',
    headline: 'Strategic roadmap to find bottlenecks and stop revenue leaks',
    tagline: '1-on-1 discovery, workflow auditing, and systems roadmapping',
    badge: 'Direct Advisory',
    iconName: 'Sparkles',
    summary: 'A deep forensic audit of your current tech stack and CRM operations. We uncover lost revenue leaks, duplicate software costs, and blueprint the exact automations needed to scale.',
    highlights: [
      'Forensic audit of your current CRM, workflows, and lead leaks',
      'Tool consolidation plan to reduce redundant SaaS subscriptions',
      'Complete architecture blueprint with visual flowcharts',
      'Team delegation strategy and standardized operating manuals',
      'Direct advisory via Slack or dedicated sprint calls'
    ],
    bestFor: 'Founders and operators who feel overwhelmed by messy, fragmented tools.',
    deliverablesSnippet: 'Comprehensive audit report + visual diagram + actionable prioritized roadmap'
  }
];
