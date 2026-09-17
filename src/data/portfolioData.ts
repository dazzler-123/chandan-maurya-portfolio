import type { Project, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Chandan Maurya',
  title: 'Senior Full-Stack Developer | MERN / MEAN / React Native',
  headline: 'Senior Full-Stack, AI Agent & Web3 Software Engineer',
  tagline: 'Architecting Enterprise Micro-Frontends, AI LangGraph Agents, TRON Web3 Gateways & Cross-Platform Apps.',
  experienceYears: '5+',
  location: 'Noida, Uttar Pradesh, India (201301)',
  email: 'mauryachandan650@gmail.com',
  phone: '+91 90038 14157',
  phoneClean: '+919003814157',
  availability: 'Available for Senior / Lead Software Engineering Roles',
  github: 'https://github.com/mauryachandan',
  linkedin: 'https://linkedin.com/in/chandan-maurya',
  languages: ['English (Professional)', 'Hindi (Native)'],
  bio: `Senior Full-Stack Developer & Technical Lead with 5+ years of experience engineering high-scale enterprise applications, micro-frontend monorepos, AI state machine agents, and Web3 blockchain infrastructure. Specializing in MERN, MEAN, React Native, NestJS, and Python (FastAPI/LangGraph), Chandan has architected Turborepo monorepos for 19+ financial modules, developed TRON blockchain payment gateways with Telegram Mini Apps, built Playwright AI job automation engines powered by Gemini AI, and pioneered a no-code form engine that reduced customer support tickets by 25%.`
};

export const METRICS = [
  { label: 'Years Experience', value: '5+', description: 'Enterprise Web, Mobile & Web3 Systems' },
  { label: 'Enterprise Projects', value: '14+', description: 'Fintech, AI Agents, InsurTech & Web3' },
  { label: 'Micro-Frontends', value: '19+', description: 'Modules Built with Turborepo' },
  { label: 'Support Reduction', value: '25%', description: 'Achieved via No-Code Form Engine' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    id: 'languages',
    skills: [
      { name: 'TypeScript', highlighted: true },
      { name: 'JavaScript (ES6+)', highlighted: true },
      { name: 'Python', highlighted: true },
      { name: 'C / C++' }
    ]
  },
  {
    category: 'Frameworks & Frontend',
    id: 'frameworks',
    skills: [
      { name: 'React 19 / 18', highlighted: true },
      { name: 'React Native (iOS & Android)', highlighted: true },
      { name: 'Node.js & Express.js', highlighted: true },
      { name: 'NestJS Microservices', highlighted: true },
      { name: 'FastAPI (Python)', highlighted: true },
      { name: 'Angular 7+ / 11', highlighted: true },
      { name: 'Redux Toolkit & Encrypted State', highlighted: true },
      { name: 'Material-UI (MUI v7)', highlighted: true },
      { name: 'Vite' },
      { name: 'React Hook Form' },
      { name: 'React Grid Layout (Dynamic Dashboards)' }
    ]
  },
  {
    category: 'AI, State Machines & Automation',
    id: 'ai',
    skills: [
      { name: 'LangGraph State Machines', highlighted: true },
      { name: 'Google Gemini AI API', highlighted: true },
      { name: 'Playwright Browser Automation', highlighted: true },
      { name: 'n8n Workflow Automation', highlighted: true },
      { name: 'ChatGPT API / Prompt Engineering' },
      { name: 'Cursor AI & GitHub Copilot' }
    ]
  },
  {
    category: 'Blockchain, Web3 & Telegram Apps',
    id: 'blockchain',
    skills: [
      { name: 'TRON Blockchain (TronWeb)', highlighted: true },
      { name: 'Ethereum (ETH)', highlighted: true },
      { name: 'Telegram Bot API & Mini Apps', highlighted: true },
      { name: 'NFT Marketplaces & Smart Contracts', highlighted: true },
      { name: 'Wax & Talos Blockchain' },
      { name: 'Chainlang & Chaingraph' }
    ]
  },
  {
    category: 'Databases & Real-Time Messaging',
    id: 'databases',
    skills: [
      { name: 'MongoDB & Mongoose', highlighted: true },
      { name: 'PostgreSQL', highlighted: true },
      { name: 'SQLite', highlighted: true },
      { name: 'Socket.IO WebSockets', highlighted: true },
      { name: 'Firebase FCM Push Notifications', highlighted: true },
      { name: 'MySQL & MS Access' }
    ]
  },
  {
    category: 'Architecture, Security & DevOps',
    id: 'devops',
    skills: [
      { name: 'Turborepo & npm Workspaces Monorepo', highlighted: true },
      { name: 'Docker & Nginx Reverse Proxy', highlighted: true },
      { name: 'GitLab CI/CD Pipelines', highlighted: true },
      { name: 'AES-CBC & Redux State Encryption', highlighted: true },
      { name: 'TOTP 2FA Security (otplib)' },
      { name: 'Automated Wallet Sweep Cron Jobs' },
      { name: 'Database Migrations (MongoDB → PostgreSQL)' },
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
    id: 'gamma-frontoffice-monorepo',
    title: 'GAMMA FrontOffice Enterprise Monorepo',
    category: 'Fintech',
    tagline: 'Turborepo & npm workspaces micro-frontend monorepo for 19+ financial advisory modules',
    description: 'An enterprise micro-frontend monorepo architecture connecting 19+ independent financial modules including Goal Planning, Risk Profiling, Portfolio Rebalancing, Investment Cart, Fund Explorer, and Analytics.',
    technologies: ['React', 'TypeScript', 'Turborepo', 'npm Workspaces', 'Vite', 'Docker', 'Nginx', 'GitLab CI/CD'],
    keyHighlights: [
      'Architected a micro-frontend monorepo unifying 19+ wealth management and advisory modules.',
      'Configured Turborepo & npm workspaces for rapid build caching, shared dependencies, and parallel script execution.',
      'Implemented Docker containerization and Nginx reverse proxy routing with SSL certificate termination.',
      'Integrated GitLab CI/CD pipelines for automated testing, build verification, and zero-downtime deployment.'
    ],
    metrics: '19+ Micro-Frontend Wealth Management Modules',
    featured: true
  },
  {
    id: 'integra-ui',
    title: 'Integra UI Enterprise Financial Suite',
    category: 'Fintech',
    tagline: 'React 19 & TypeScript financial advisory suite with encrypted state persistence & dynamic grid layouts',
    description: 'An enterprise financial advisory suite featuring client-side AES-encrypted state persistence, dynamic drag-and-drop widget grid dashboards, Highcharts & Chart.js financial analytics, and Material-UI components.',
    technologies: ['React 19', 'TypeScript', 'Redux Toolkit', 'Crypto-JS Encryption', 'Material-UI', 'Highcharts', 'React Grid Layout', 'Vite'],
    keyHighlights: [
      'Architected a modular React 19 & TypeScript financial advisory suite with custom draggable widget dashboards (react-grid-layout).',
      'Implemented AES payload encryption and encrypted Redux state persistence (redux-persist-transform-encrypt) for data compliance.',
      'Constructed interactive financial analytics, portfolio yield charts, and historical performance graphs using Highcharts & Chart.js.',
      'Built advanced multi-level date range pickers, Excel document export pipelines, and Axios interceptor authentication workflows.'
    ],
    metrics: 'AES Encrypted Redux Persistence & Dynamic Grid Layouts',
    featured: true
  },
  {
    id: 'realtime-ecosystem',
    title: 'Multi-Platform Real-Time Ecosystem Suite',
    category: 'Full-Stack',
    tagline: 'MERN & React Native ecosystem with real-time WebSockets, FCM notifications & admin portal',
    description: 'An end-to-end application ecosystem featuring a Node.js/Express REST backend, Socket.IO WebSockets, MongoDB, React 19 web frontend, React Native mobile app with FCM push notifications, and an admin management dashboard.',
    technologies: ['React 19', 'React Native 0.84', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Firebase FCM', 'Material-UI'],
    keyHighlights: [
      'Engineered an end-to-end real-time ecosystem linking Node.js REST APIs, Socket.IO WebSockets, React 19 web, and React Native mobile clients.',
      'Built cross-platform iOS & Android mobile app in React Native 0.84 with Firebase FCM push notifications, Google Sign-In, and GPS geolocation.',
      'Implemented secure JWT authentication, bcrypt password hashing, express rate-limiting, and Mongoose database index optimizations.',
      'Developed an admin control panel for real-time user management, system seeding, and push notification dispatching.'
    ],
    metrics: 'Real-Time WebSockets & Cross-Platform Mobile App',
    featured: true
  },
  {
    id: 'tronpay-crypto-gateway',
    title: 'TronPay — TRON Crypto Gateway & Telegram Wallet',
    category: 'Web3',
    tagline: 'Decentralized TRON payment gateway, automated wallet sweeping engine & Telegram Mini App',
    description: 'A Web3 crypto payment gateway and wallet infrastructure built on the TRON blockchain. Features NestJS microservices with TronWeb, automated background wallet sweep cron jobs, TOTP 2FA, Telegram Bot/Mini App crypto transfers, and central payout settlement services.',
    technologies: ['NestJS', 'TronWeb (TRON)', 'TypeScript', 'MongoDB', 'React Native', 'React', 'Telegram Bot API', 'Socket.IO', 'TOTP 2FA'],
    keyHighlights: [
      'Engineered TRON blockchain integration using TronWeb for automated deposit detection, wallet generation, and transaction verification.',
      'Architected background wallet sweep automation and cron job schedulers (@nestjs/schedule) for batch transaction processing & liquidity pooling.',
      'Integrated Telegram Bot API & Mini App functionality enabling peer-to-peer crypto transfers and instant wallet notifications inside Telegram.',
      'Implemented multi-layer security featuring TOTP 2FA (otplib), Passport JWT guards, bcrypt hashing, and QR-code deposit triggers.',
      'Built a central merchant payout portal for automated fiat/crypto settlements and transaction audit logging.'
    ],
    metrics: 'TRON Blockchain Sweeping Engine & Telegram Crypto Mini App',
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
