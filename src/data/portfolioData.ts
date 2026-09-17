import type { Project, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Chandan Maurya',
  title: 'Senior Full-Stack Developer | MEAN / MERN / React Native',
  headline: 'Senior Full-Stack & Cross-Platform Engineer',
  tagline: 'Building High-Performance Web & Mobile Apps, Fintech Engines, InsurTech Workflows, and Web3/Crypto Infrastructure.',
  experienceYears: '5+',
  location: 'Noida, Uttar Pradesh, India (201301)',
  email: 'mauryachandan650@gmail.com',
  phone: '+91 90038 14157',
  phoneClean: '+919003814157',
  availability: 'Available for Senior / Lead Software Engineering Roles',
  github: 'https://github.com/mauryachandan',
  linkedin: 'https://linkedin.com/in/chandan-maurya',
  languages: ['English (Professional)', 'Hindi (Native)'],
  bio: `Senior Full-Stack Developer with 5+ years of experience specializing in MEAN (MongoDB, Express, Angular, Node.js), MERN (MongoDB, Express, React, Node.js), and React Native stacks. Proven track record of architecting scalable enterprise platforms, leading cross-platform mobile app development, implementing AES-CBC encrypted financial APIs, and constructing Web3/blockchain interaction layers. Recognized for creating a no-code form engine that reduced customer support tickets by 25% and implementing database schema migrations for multi-million record workloads.`
};

export const METRICS = [
  { label: 'Years Experience', value: '5+', description: 'Architecting Web & Mobile Systems' },
  { label: 'Production Apps', value: '9+', description: 'Fintech, InsurTech & Web3 Platforms' },
  { label: 'Support Reduction', value: '25%', description: 'Achieved via No-Code Form Engine' },
  { label: 'Modules Delivered', value: '50+', description: 'Financial Advisory & Portfolio Management' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    id: 'languages',
    skills: [
      { name: 'JavaScript (ES6+)', highlighted: true },
      { name: 'TypeScript', highlighted: true },
      { name: 'Python' },
      { name: 'C / C++' }
    ]
  },
  {
    category: 'Frameworks & Frontend',
    id: 'frameworks',
    skills: [
      { name: 'React 18', highlighted: true },
      { name: 'React Native', highlighted: true },
      { name: 'Node.js', highlighted: true },
      { name: 'Express.js', highlighted: true },
      { name: 'Angular 7+ / 11', highlighted: true },
      { name: 'Redux / Redux Toolkit', highlighted: true },
      { name: 'Material-UI (MUI)' },
      { name: 'Vite' },
      { name: 'React Hook Form' }
    ]
  },
  {
    category: 'Databases & Storage',
    id: 'databases',
    skills: [
      { name: 'MongoDB', highlighted: true },
      { name: 'PostgreSQL', highlighted: true },
      { name: 'MySQL' },
      { name: 'MS Access' }
    ]
  },
  {
    category: 'Blockchain & Web3',
    id: 'blockchain',
    skills: [
      { name: 'Ethereum (ETH)', highlighted: true },
      { name: 'Wax Blockchain', highlighted: true },
      { name: 'Talos Blockchain' },
      { name: 'NFT Marketplaces', highlighted: true },
      { name: 'Crypto Exchange Platforms' },
      { name: 'Chainlang & Chaingraph' }
    ]
  },
  {
    category: 'AI Tools & Workflows',
    id: 'ai',
    skills: [
      { name: 'n8n Workflow Automation', highlighted: true },
      { name: 'ChatGPT API / Prompting', highlighted: true },
      { name: 'Cursor AI', highlighted: true },
      { name: 'GitHub Copilot' }
    ]
  },
  {
    category: 'API & Security Engineering',
    id: 'api',
    skills: [
      { name: 'RESTful API Engineering', highlighted: true },
      { name: 'Payment Gateway Integration', highlighted: true },
      { name: 'AES-CBC API Encryption', highlighted: true },
      { name: 'Insurer Third-Party APIs' },
      { name: 'Axios Interceptors & Session Handling' }
    ]
  },
  {
    category: 'DevOps & Best Practices',
    id: 'devops',
    skills: [
      { name: 'iOS / Android Build & Deployment', highlighted: true },
      { name: 'Code Splitting & Lazy Loading' },
      { name: 'Database Schema Migration (MongoDB → Postgres)', highlighted: true },
      { name: 'Git & Version Control' },
      { name: 'Linux / Windows Administration' },
      { name: 'Developer Mentorship & Code Reviews' }
    ]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'ebixcash',
    company: 'EbixCash Ltd.',
    role: 'React Native Developer',
    period: 'Jan 2022 – Present',
    location: 'Noida, UP, India',
    isCurrent: true,
    bulletPoints: [
      'Architected and developed a proprietary no-code form builder engine, reducing customer support tickets by 25% and accelerating operational form deployment.',
      'Delivered robust cross-platform React Native mobile applications used in critical insurance workflows, significantly boosting customer engagement and accessibility.',
      'Optimized app performance and reduced initial payload size/load time through strategic code splitting, memoization, and efficient state management.',
      'Integrated complex multi-insurer APIs and PCI-compliant payment gateways to safely manage high-volume transactional workflows.',
      'Mentored junior developers, conducted rigorous peer code reviews, and enforced team-wide clean code & accessibility standards.'
    ],
    technologies: ['React Native', 'Node.js', 'Redux', 'Insurer APIs', 'Payment Gateways', 'JavaScript', 'TypeScript'],
    metricsHighlight: '25% Support Ticket Reduction via No-Code Engine'
  },
  {
    id: 'lapins',
    company: 'Lapins Technologies Pvt. Ltd.',
    role: 'MEAN & MERN Stack Developer',
    period: 'Dec 2020 – Jan 2022',
    location: 'Noida, UP, India',
    isCurrent: false,
    bulletPoints: [
      'Developed and deployed scalable full-stack web applications using Angular, React, Node.js, Express, and MongoDB.',
      'Directed mobile app engineering for Web3 NFT marketplaces, real estate platforms, and AR/VR spatial visualization using React Native.',
      'Engineered optimized RESTful microservices and executed seamless database schema migrations (MongoDB → PostgreSQL) to maximize relational query performance.',
      'Co-developed blockchain-backed solutions including NFT auction marketplaces and crypto trading exchange platforms.'
    ],
    technologies: ['React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'React Native', 'NFT', 'Talos Blockchain'],
    metricsHighlight: 'Database Schema Migration (MongoDB → PostgreSQL)'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-job-agent',
    title: 'AI Job Application Agent',
    category: 'AI / Automation',
    tagline: 'Autonomous AI agent powered by FastAPI, LangGraph, Playwright & Google Gemini',
    description: 'An autonomous agent system that parses resumes into candidate profiles, scores job listings using a weighted matching engine, and executes automated form applications via Playwright browser automation guided by a LangGraph state machine.',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'Google Gemini API', 'Playwright', 'SQLite', 'Uvicorn'],
    keyHighlights: [
      'Engineered a robust cyclical state machine workflow using LangGraph for job queue orchestration, retry logic, and error isolation.',
      'Integrated Google Gemini AI for automated PDF & DOCX resume parsing into structured candidate JSON profiles.',
      'Implemented a weighted dynamic matching engine scoring candidate suitability across skills, experience, location, and job titles.',
      'Built Playwright browser automation for automated form filling, field validation, and submission audit logging with screenshots.',
      'Designed a sleek glassmorphism dashboard for profile management, application queue monitoring, and manual intervention controls.'
    ],
    metrics: 'LangGraph State Machine & Playwright Automation',
    featured: true
  },
  {
    id: 'investment-management',
    title: 'Investment Management Platform',
    category: 'Fintech',
    tagline: 'High-performance portfolio management & automated investment processing suite',
    description: 'A React 18 enterprise application built for financial portfolio management, automated asset rebalancing, real-time analytics dashboards, and multi-order investment cart execution.',
    technologies: ['React 18', 'Redux Toolkit', 'Material UI', 'Vite', 'JavaScript'],
    keyHighlights: [
      'Built with React 18 & Vite for sub-second rendering and instant hot updates.',
      'Implemented automated portfolio rebalancing algorithms and interactive analytics dashboards.',
      'Constructed a multi-order investment cart handling complex transaction bundles.',
      'Optimized initial bundle size via lazy loading and route-based code splitting.'
    ],
    metrics: 'Multi-order investment cart with zero latency UI',
    featured: true
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory Platform',
    category: 'Fintech',
    tagline: 'AES-CBC encrypted financial advisory & portfolio tracking engine',
    description: 'A React/TypeScript financial advisory platform featuring end-to-end API payload encryption (AES-CBC), centralized auth management, and 50+ modular reporting dashboards.',
    technologies: ['React', 'TypeScript', 'Redux', 'Axios Interceptors', 'Crypto (AES-CBC)', 'Chart.js', 'Material-UI', 'Vite'],
    keyHighlights: [
      'Designed end-to-end payload encryption using AES-CBC algorithms for sensitive client financial data.',
      'Created 50+ custom modules for portfolio tracking, client analytics, and investment growth visualization.',
      'Implemented secure Axios interceptors with automatic session renewal and token persistence.',
      'Seamlessly integrated with legacy banking and advisory microservices.'
    ],
    metrics: '50+ Enterprise Analytics Modules',
    featured: true
  },
  {
    id: 'loan-origination',
    title: 'Loan Origination System (LOS)',
    category: 'Fintech',
    tagline: '13-Step automated workflow for loan-against-securities application processing',
    description: 'An enterprise loan processing engine handling loan-against-securities applications with a 13-step digital workflow including instant KYC verification, credit score checks, pledge/lien management, and e-signatures.',
    technologies: ['React 19', 'Redux Toolkit', 'Material-UI', 'React Hook Form', 'Third-Party Banking APIs'],
    keyHighlights: [
      'Engineered a seamless 13-step wizard workflow for loan-against-securities processing.',
      'Integrated instant automated KYC verification, credit bureau scoring, and securities pledge/lien registration.',
      'Developed dynamic loan agreement document generation and secure e-signature integration.',
      'Implemented client-side encrypted state persistence across multi-page application steps.'
    ],
    metrics: '13-Step Automated Banking Workflow',
    featured: true
  },
  {
    id: 'wallaby-wallet',
    title: 'Wallaby - Multi-Crypto & Fiat Wallet',
    category: 'Web3',
    tagline: 'Secure cross-currency wallet and crypto trading platform',
    description: 'A cross-currency cryptocurrency and fiat wallet enabling users to store, trade, send, and receive digital assets with real-time market tickers and transaction history.',
    technologies: ['Angular 7', 'Node.js', 'Express', 'MongoDB', 'Crypto Libraries'],
    keyHighlights: [
      'Built secure wallet key management and transaction validation layers.',
      'Integrated multi-crypto token balances and fiat exchange rate feeds.',
      'Engineered high-concurrency order handling on Node.js backend services.'
    ],
    featured: false
  },
  {
    id: 'zeptagram',
    title: 'Zeptagram NFT Marketplace',
    category: 'Web3',
    tagline: 'Decentralized music & digital asset NFT tokenization marketplace',
    description: 'A Web3 NFT marketplace platform facilitating music copyright tokenization, digital asset trading, and direct smart contract interaction layers on Talos Blockchain.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Talos Blockchain', 'Web3 API'],
    keyHighlights: [
      'Developed custom blockchain interaction layers for Talos chain smart contracts.',
      'Created intuitive NFT minting, bidding, and royalty distribution user interfaces.',
      'Implemented decentralized IPFS asset storage and wallet connector modules.'
    ],
    metrics: 'Talos Blockchain Integration',
    featured: true
  },
  {
    id: 'truorigin',
    title: 'TruOrigin Geo-Location NFT App',
    category: 'Web3',
    tagline: 'Location-aware digital asset visualization mobile app',
    description: 'A mobile application prototype built in React Native for tracking and displaying location-anchored NFTs and spatial digital collectibles.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'GeoJSON / GPS'],
    keyHighlights: [
      'Engineered mobile map interaction layers for geo-located digital assets.',
      'Built background location tracking and proximity notification pipelines.',
      'Delivered smooth cross-platform mobile UI for iOS and Android.'
    ],
    featured: false
  },
  {
    id: 'bseebix',
    title: 'BSEEBIX Insurance Portal',
    category: 'InsurTech',
    tagline: 'Unified multi-insurer portal & payment gateway mobile engine',
    description: 'A mobile insurance marketplace aggregating policy quotes, premium calculators, and instant policy issuance from leading insurance providers.',
    technologies: ['React Native', 'Node.js', 'Insurer APIs', 'Payment Gateways'],
    keyHighlights: [
      'Aggregated API feeds from multiple insurance underwriters into a standardized mobile UI.',
      'Integrated secure payment gateways for instant policy purchase and premium processing.',
      'Implemented offline draft saving and form validation.'
    ],
    metrics: 'Multi-Insurer Payment Integration',
    featured: true
  },
  {
    id: 'employee-benefit',
    title: 'Employee Benefit Portal',
    category: 'Full-Stack',
    tagline: 'Enterprise employee benefits, insurance claims, and data migration suite',
    description: 'An enterprise employee insurance benefits app managing claim submissions, policy enrollments, and custom benefit coverage modules.',
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    keyHighlights: [
      'Migrated complex legacy data systems into modern document schemas.',
      'Developed custom claim submission modules with receipt uploading and status tracking.',
      'Enhanced system uptime and API response times for heavy user traffic.'
    ],
    featured: false
  },
  {
    id: 'blockcities',
    title: 'BlockCities Real Estate & ETH Wallet',
    category: 'Web3',
    tagline: 'Multi-platform real estate tokenization platform with ETH wallet integration',
    description: 'A multi-platform web & mobile application connecting real estate tokenization with Ethereum wallet integration and property investment dashboards.',
    technologies: ['React Native', 'Angular 11', 'Node.js', 'MongoDB', 'Ethereum / ETH'],
    keyHighlights: [
      'Integrated Ethereum Web3 wallet connectivity for seamless token purchases.',
      'Designed responsive cross-platform layout across web (Angular 11) and mobile (React Native).',
      'Created visual property metrics, yield calculations, and real estate ownership cards.'
    ],
    featured: false
  }
];
