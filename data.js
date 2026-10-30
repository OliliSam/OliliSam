// Portfolio Data for Olive Samuels
// Sourced directly from professional CV (https://olivesamuels.cv) & GitHub repositories

window.PORTFOLIO_DATA = {
  profile: {
    name: "Olive Samuels",
    title: "Software Engineer & Fullstack Developer",
    subtitle: "Dual Expertise in Fullstack Web Development, Distributed Systems & IT Operations",
    location: "Abuja, Nigeria",
    email: "olivenkeechisamuels@gmail.com",
    phone: "08070864314",
    cvUrl: "https://olivesamuels.cv",
    githubUrl: "https://github.com/OliliSam",
    photoUrl: "assets/olive.jpg",
    statusBadge: "Available for Senior Fullstack & Engineering Roles",
    
    // Exact professional bio from https://olivesamuels.cv
    summary: "Highly motivated and detail-oriented IT professional with a dual expertise in fullstack web development and technical support, bringing a proven ability to build responsive applications, optimize system performance, and resolve complex technical issues. Passionate about leveraging technology to enhance operational efficiency and elevate user experiences, I excel in both independent innovation and collaborative environments to deliver high-impact solutions.",

    // Core career timeline from olivesamuels.cv
    experience: [
      {
        role: "IT Operations & Systems Development",
        organization: "Oxpier Consults",
        location: "Abuja, Nigeria / Global",
        period: "Ongoing",
        description: "Leading IT operations, operational tooling, and systems development for business automation, client infrastructure, and enterprise workflows."
      },
      {
        role: "Fullstack Developer (Project)",
        organization: "Medmate (Southville International School and Colleges)",
        location: "Manila, Philippines",
        period: "Project Milestone",
        description: "Independently designed and developed a fullstack medication scheduling and reminder system engineered specifically for caregivers in nursing homes and assisted living facilities. Automated dosage rounds, electronic medication administration tracking (eMAR), and hands-free voice notes reduced caregiver workload by an estimated 20%."
      },
      {
        role: "Fullstack Developer",
        organization: "3MTT Cohort 3.0 (Buddy Chat App)",
        location: "Abuja, Nigeria",
        period: "Fellowship Program",
        description: "Engineered and deployed a scalable real-time messaging application using Socket.IO, Node.js, Express.js, Prisma ORM, Docker, and PostgreSQL, establishing a reliable platform for instant collaboration."
      },
      {
        role: "Software Development Intern",
        organization: "CWW Tech Africa (Urban Wear Project)",
        location: "Abuja, Nigeria",
        period: "Internship Program",
        description: "Developed a responsive e-commerce web platform for an apparel brand using HTML, CSS, JavaScript, and Figma-based design workflows; recognized among the Top 5 Interns for outstanding performance."
      },
      {
        role: "IT Support Intern",
        organization: "Ecoloelements",
        location: "Abuja, Nigeria",
        period: "Internship",
        description: "Provided technical support for hardware and software issues across 50+ users, maintained system security, and ensured 99.9% uptime for local servers."
      }
    ],

    // Education & Honors from olivesamuels.cv
    education: [
      {
        institution: "CWW Tech Africa",
        focus: "Software Development, Cohort 11.0",
        period: "December 2025 – March 2026",
        details: "Intensive full-stack software development curriculum covering modern frontend engineering, backend microservices, responsive design workflows in Figma, and collaborative Git delivery; recognized among the Top 5 Interns for outstanding performance."
      },
      {
        institution: "Three Million Technical Talents (3MTT) Nigeria",
        body: "Federal Ministry of Communications, Innovation & Digital Economy / UNICCON Group / NITDA",
        focus: "Software Development Fellowship",
        credential: "3MTT Certificate of Completion (Verify ID: FE/26/1106226085)"
      },
      {
        institution: "Southville International School and Colleges",
        location: "Manila, Philippines",
        focus: "Artificial Intelligence & Software Engineering"
      }
    ],

    awards: [
      { title: "Top 10 Fellow", issuer: "3MTT × Hello.cv", note: "Recognized among top nationwide engineering fellows" },
      { title: "Top 5 Intern for Outstanding Performance", issuer: "CWW Tech Africa", note: "Honored for exceptional development skills and delivery" },
      { title: "Comeback Star Award", issuer: "Technical Recognition", note: "Awarded for technical resilience and problem-solving excellence" }
    ]
  },

  // Interactive UI/UX Gallery Showcase with Tech Insignia Avatars
  gallery: [
    {
      id: "gal-clearyes",
      title: "ClearYes™ - Surgical Consent PWA",
      appType: "Healthcare Progressive Web App",
      category: "live-ui",
      badge: "HIPAA Compliant UI 3.0",
      avatar: {
        code: "CLY // 01",
        label: "CLINICAL PWA",
        icon: "cross-shield",
        color: "#c2d5a8",
        glow: "rgba(194, 213, 168, 0.35)",
        stack: "TypeScript • Canvas • Crypto"
      },
      tagline: "Calm, trust-building digital consent platform replacing rushed paper forms.",
      uiHighlights: [
        "Interactive 100-figure clinical risk pictogram with live complication probability tooltips",
        "HTML5 Canvas 2D cryptographic signature pad with SHA-256 document hashing",
        "Clinical audio voice synthesizer with animated equalizer and variable speed (1.0x - 1.5x)",
        "Automated court-admissible EHR PDF generation with clinic header and audit trail"
      ],
      demoUrl: "http://127.0.0.1:5173",
      githubUrl: "https://github.com/OliliSam/ClearYes"
    },
    {
      id: "gal-medmate",
      title: "MedMate - Nursing Home Medication Scheduling System",
      appType: "Caregiver Medication Scheduling & Reminder Platform",
      category: "live-ui",
      badge: "20% Caregiver Workload Reduction",
      avatar: {
        code: "MDM // 02",
        label: "NURSING HOME eMAR",
        icon: "stethoscope-wave",
        color: "#84a98c",
        glow: "rgba(132, 169, 140, 0.35)",
        stack: "MERN • Node-Cron • Caregiver eMAR"
      },
      tagline: "Precision medication scheduling and automated dosage reminder system for caregivers in nursing homes.",
      uiHighlights: [
        "Automated Node-Cron engine scheduling medication rounds for nursing home residents",
        "Real-time caregiver shift reminder alerts and electronic medication administration records (eMAR)",
        "Hands-free voice clinical note logging for busy nursing staff via Google Cloud Speech-to-Text",
        "Multi-resident ward dashboard with dosage tracking and missed-dose prevention safeguards"
      ],
      githubUrl: "https://github.com/OliliSam/medmate"
    },
    {
      id: "gal-oxpier",
      title: "Oxpier One - Enterprise Operations Platform",
      appType: "Native Desktop (Tauri/Rust) & Web SaaS",
      category: "enterprise",
      badge: "Tauri + Rust + Supabase",
      avatar: {
        code: "OXP // 03",
        label: "ENTERPRISE CORE",
        icon: "terminal-cube",
        color: "#c2d5a8",
        glow: "rgba(194, 213, 168, 0.4)",
        stack: "Tauri • Rust • PostgreSQL"
      },
      tagline: "Unified operations, CRM, financials, and live-context AI workspace assistant.",
      uiHighlights: [
        "High-performance native desktop workstation powered by Tauri with a Rust backend IPC layer",
        "Complex relational database layer with 95KB+ of custom PLpgSQL triggers and Supabase RLS",
        "'Oxie' contextual AI assistant retrieving answers directly from live workspace telemetry",
        "Contributed across multi-developer branches: sam-c/diagnostics, sam-c/hopeful-cerf-3xxhx8"
      ],
      githubUrl: "https://github.com/Arin-15/oxpier-one"
    },
    {
      id: "gal-edumeet",
      title: "Edumeet & AI Microservice",
      appType: "AI-Integrated Learning SaaS & Backend Microservice",
      category: "live-ui",
      badge: "Google Gemini GenAI + Paystack",
      avatar: {
        code: "EDM // 04",
        label: "AI EDTECH SAAS",
        icon: "neural-spark",
        color: "#d8f3dc",
        glow: "rgba(216, 243, 220, 0.35)",
        stack: "Gemini AI • Paystack • Express"
      },
      tagline: "Bridging self-paced online education and live mentorship for the African ecosystem.",
      uiHighlights: [
        "Google Gemini GenAI SDK (@google/genai) integration for an automated 24/7 AI Tutor",
        "Multi-currency localized checkout pipeline powered by the Paystack payments gateway",
        "Decoupled Node.js/Express/MongoDB microservice backend with Helmet security and JWT RBAC",
        "Automated transactional notification engine using the Resend email API"
      ],
      githubUrl: "https://github.com/elion-Tech/Edumeet"
    },
    {
      id: "gal-buddyhub",
      title: "Buddy-Hub - Real-Time Team Chat",
      appType: "Containerized Real-Time Web Platform",
      category: "live-ui",
      badge: "Socket.IO + Prisma + Docker",
      avatar: {
        code: "BDH // 05",
        label: "REALTIME WEBSOCKET",
        icon: "chat-network",
        color: "#a9baa8",
        glow: "rgba(169, 186, 168, 0.35)",
        stack: "Socket.IO • Prisma • Docker"
      },
      tagline: "Instant peer collaboration, thread discussions, and code sharing.",
      uiHighlights: [
        "Bi-directional WebSocket event communication powered by Socket.IO and Express.js",
        "Relational schema modeling and database migrations authored with Prisma ORM",
        "Multi-container environment automated with Dockerfile and Docker Compose orchestration",
        "High-performance responsive UI optimized to eliminate re-renders during high chat volume"
      ],
      githubUrl: "https://github.com/OliliSam/Buddy-Hub-Chat-App"
    },
    {
      id: "gal-b2b",
      title: "Back to Bible (B2B) - 3D Study PWA",
      appType: "3D Interactive PWA & Audio Synthesis",
      category: "live-ui",
      badge: "3D Canvas + Web Audio API",
      avatar: {
        code: "B2B // 06",
        label: "3D SCRIPTURE & AUDIO",
        icon: "scripture-chime",
        color: "#fef08a",
        glow: "rgba(254, 240, 138, 0.35)",
        stack: "3D Canvas • Web Audio • PWA"
      },
      tagline: "Sacred scripture study platform featuring 3D book physics and synthesized chimes.",
      uiHighlights: [
        "Interactive 3D Holy Bible canvas with mathematical rotation transforms and page physics",
        "Zero-dependency procedural audio synthesis using native Web Audio API oscillators",
        "Offline-first PWA caching architecture with service worker synchronization",
        "Comprehensive question and answer bank indexed from the Master Bible Study Guide"
      ],
      githubUrl: "https://github.com/OliliSam/back-to-bible"
    }
  ],

  // Full repository catalog (including private, branched, and forked)
  projects: [
    {
      id: "clearyes",
      name: "ClearYes™ - Patient Informed Consent Platform",
      fullName: "OliliSam/ClearYes",
      category: "flagship",
      tier: "featured",
      type: "public",
      isFork: false,
      role: "Lead Full-Stack Engineer & Architect",
      language: "TypeScript",
      techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Web Audio API", "HTML5 Canvas", "SHA-256 Crypto", "PDF Generation"],
      description: "Next-generation HIPAA-grade healthcare Progressive Web App built for surgical centers to replace dense paper consent forms with an interactive, trust-building digital journey.",
      highlights: [
        "Interactive 100-figure clinical risk pictogram with live node-level probability modeling",
        "Cryptographic digital signature engine generating SHA-256 tamper-evident verification hashes",
        "In-browser synthesized voice reader with animated equalizer visualizer and variable playback speeds (1.0x - 1.5x)",
        "EHR court-admissible PDF generator compiling clinic headers, risk assessments, and teach-back scores"
      ],
      branches: ["main"],
      githubUrl: "https://github.com/OliliSam/ClearYes",
      liveDemoUrl: "http://127.0.0.1:5173",
      caseStudy: {
        problem: "Surgical clinics face compliance hurdles and legal exposure when patients rush through dense paper consent forms without comprehending complication risks.",
        architecture: `[Client UI (React/TS)] ---> [Risk Probability Engine] ---> [Teach-Back Validation]
           │                                 │
           ├──> [Canvas Signature Pad] ───────┼──> [SHA-256 Audit Hasher]
           └──> [Web Audio Synthesizer]      └──> [EHR Court-Admissible PDF]`,
        solution: "Engineered a calming progressive-disclosure PWA with visual risk pictograms, patient comprehension scoring, cryptographic signature hashing, and instant PDF EHR exports.",
        metrics: "Sub-50ms render latency, 100% offline-ready PWA, cryptographic verification trail."
      }
    },
    {
      id: "oxpier-one",
      name: "Oxpier One - Enterprise Business Management Platform",
      fullName: "Arin-15/oxpier-one",
      category: "enterprise",
      tier: "featured",
      type: "private",
      isFork: false,
      role: "Full-Stack & Desktop Systems Contributor",
      language: "TypeScript / Rust",
      techStack: ["Tauri (Rust)", "TypeScript", "React", "Supabase", "PostgreSQL", "PLpgSQL", "Tailwind CSS"],
      description: "High-performance enterprise desktop & web suite for Oxpier Consults — combining CRM, project management, HR, financial ledgers, time tracking, and an integrated AI workspace assistant ('Oxie').",
      highlights: [
        "Native desktop architecture leveraging Tauri with a Rust backend IPC layer and React frontend",
        "Complex relational database layer with 95KB+ of custom PLpgSQL triggers, stored procedures, and Supabase Row Level Security (RLS)",
        "Integrated 'Oxie' conversational assistant that answers directly from live workspace context",
        "Active work across specialized feature and diagnostic branches"
      ],
      branches: [
        { name: "sam-c/diagnostics", note: "Diagnostic telemetry, error tracing, and performance profiler" },
        { name: "sam-c/hopeful-cerf-3xxhx8", note: "Core feature pipeline synchronization" },
        { name: "sam-c/inspiring-ptolemy-dceotv", note: "Database schema migrations and workspace views" },
        { name: "main", note: "Production base branch" }
      ],
      githubUrl: "https://github.com/Arin-15/oxpier-one",
      accessNotice: "🔒 Private Enterprise Repository. Architectural case study available; code review upon verified request.",
      caseStudy: {
        problem: "Growing consulting businesses suffer from disjointed tools across client CRM, time tracking, payroll, and internal communication.",
        architecture: `[Tauri Desktop App (Rust Core)] <---> [IPC Bridge] <---> [React + TypeScript UI]
                                                                   │
                                                [Supabase PostgreSQL + PLpgSQL + RLS]
                                                                   │
                                                ['Oxie' Live Context AI Engine]`,
        solution: "Engineered a consolidated native-speed workspace powered by Tauri/Rust and Supabase with strict tenant isolation via Row Level Security and offline telemetry sync.",
        metrics: "Unified operational desktop footprint, custom PLpgSQL database triggers, real-time client sync."
      }
    },
    {
      id: "edumeet",
      name: "Edumeet - AI-Powered Learning Platform & SaaS",
      fullName: "elion-Tech/Edumeet",
      category: "enterprise",
      tier: "featured",
      type: "private",
      isFork: false,
      role: "Lead Full-Stack & AI Integration Engineer",
      language: "TypeScript",
      techStack: ["React", "TypeScript", "Google Gemini AI (@google/genai)", "Paystack Payment API", "Lucide React", "Tailwind CSS"],
      description: "Modern, AI-integrated educational platform bridging the gap between self-paced online learning and live mentorship for the African learning ecosystem.",
      highlights: [
        "Integrated Google Gemini GenAI SDK to deliver an intelligent interactive AI Tutor that guides students through curriculum checkpoints",
        "End-to-end multi-currency payment checkout integration via Paystack for course enrollments and tutor billing",
        "Immersive modular course player supporting rich media, interactive quizzes, and tutor Q&A channels",
        "Connected with dedicated standalone Node.js/Express microservices backend"
      ],
      branches: ["main"],
      githubUrl: "https://github.com/elion-Tech/Edumeet",
      accessNotice: "🔒 Private Repository. Full system architecture and demo flow available below."
    },
    {
      id: "edumeet-microservice",
      name: "Edumeet Backend Microservice Architecture",
      fullName: "elion-Tech/Edumeet_Microservice",
      category: "backend",
      tier: "featured",
      type: "private",
      isFork: false,
      role: "Backend & Cloud Architect",
      language: "TypeScript",
      techStack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT Auth", "Helmet", "Bcryptjs", "Resend API"],
      description: "Dedicated microservice backend powering the Edumeet educational platform — orchestrating user management, multi-role authentication, course engine, and transactional notifications.",
      highlights: [
        "Role-Based Access Control (RBAC) securely separating Students, Tutors, and Platform Administrators",
        "Enterprise API security using Helmet HTTP header hardening, CORS policies, Bcryptjs password hashing, and JWT tokens",
        "High-performance MongoDB / Mongoose schema design for course catalogs, progress tracking, and tutor scheduling",
        "Automated transactional email notifications powered by the Resend email API"
      ],
      branches: ["main"],
      githubUrl: "https://github.com/elion-Tech/Edumeet_Microservice",
      accessNotice: "🔒 Private Microservice Backend. API specifications available on request."
    },
    {
      id: "medmate",
      name: "MedMate - Nursing Home Medication Scheduling & Reminder Platform",
      fullName: "OliliSam/medmate",
      category: "flagship",
      tier: "featured",
      type: "private",
      isFork: false,
      role: "Full-Stack MERN Developer",
      language: "JavaScript",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Chakra UI", "Google Cloud Speech-to-Text", "Node-Cron", "Framer Motion"],
      description: "Full-stack MERN medication scheduling and reminder system engineered specifically for caregivers in nursing homes and assisted care facilities. Automates complex multi-resident prescription rounds, prevents missed doses with timely alerts, maintains electronic medication administration records (eMAR), and enables hands-free voice notes for nursing staff.",
      highlights: [
        "Automated precision scheduling engine via Node-Cron dispatching timed dosage alerts across nursing shifts",
        "Electronic Medication Administration Record (eMAR) tracking resident dosage adherence and caregiver sign-offs",
        "Hands-free clinical voice notes for busy nursing staff powered by Google Cloud Speech-to-Text",
        "Role-based caregiver, head nurse, and physician access control with Redux Toolkit and Chakra UI",
        "Active maintenance on hotfix/overload-bug-fixes branch resolving voice buffer concurrency and server load safeguards"
      ],
      branches: [
        { name: "hotfix/overload-bug-fixes", note: "Resolved concurrent voice request buffering and server overload safeguards" },
        { name: "main", note: "Primary production line" }
      ],
      githubUrl: "https://github.com/OliliSam/medmate",
      accessNotice: "🔒 Private Medical Platform. Architecture deep-dive available below."
    },
    {
      id: "buddy-hub",
      name: "Buddy-Hub - Real-Time Team Collaboration & Chat Platform",
      fullName: "OliliSam/Buddy-Hub-Chat-App",
      upstream: "amStevee/Buddy-Hub-Chat-App",
      category: "fullstack",
      tier: "featured",
      type: "forked",
      isFork: true,
      role: "Full-Stack Contributor & DevOps Engineer",
      language: "TypeScript",
      techStack: ["TypeScript", "React", "Node.js", "Prisma ORM", "Docker Compose", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      description: "Real-time collaboration and chat platform enabling colleagues and peer teams to share ideas, exchange code snippets, and coordinate distributed project workflows.",
      highlights: [
        "Authored database schemas and migrations with Prisma ORM connecting to PostgreSQL",
        "Configured multi-container production environments using Docker and Docker Compose",
        "Engineered secure authentication flows (signin/signup pages) with form validation and JWT session handling",
        "Refactored frontend component tree to eliminate unnecessary re-renders during high-frequency chat events"
      ],
      branches: [
        { name: "chore/docker-setup", note: "Containerized frontend and backend services via Dockerfile and Docker Compose" },
        { name: "feature/prisma", note: "Implemented Prisma relational schemas, models, and PostgreSQL migrations" },
        { name: "feature/signin-page", note: "Designed high-conversion login portal with error handling" },
        { name: "feature/signup-page", note: "Built registration workflow with password strength validation" },
        { name: "refactor/frontend", note: "Cleaned and optimized modular React component architecture" },
        { name: "db-docs", note: "Authored comprehensive database architecture documentation" },
        { name: "bugfix/workflow", note: "Fixed CI/CD GitHub Actions testing pipeline" },
        { name: "main", note: "Base branch" }
      ],
      githubUrl: "https://github.com/OliliSam/Buddy-Hub-Chat-App",
      upstreamUrl: "https://github.com/amStevee/Buddy-Hub-Chat-App"
    },
    {
      id: "back-to-bible",
      name: "Back to Bible (B2B) - 3D Interactive Scripture Study PWA",
      fullName: "OliliSam/back-to-bible",
      category: "frontend",
      tier: "featured",
      type: "private",
      isFork: false,
      role: "Sole Creator & Frontend Engineer",
      language: "JavaScript",
      techStack: ["JavaScript (ESNext)", "HTML5 Canvas", "Web Audio API", "PWA Service Workers", "Modern CSS"],
      description: "Progressive Web App featuring an interactive 3D Holy Bible canvas, synthesized celestial audio chimes using Web Audio API oscillators, and offline study engines.",
      highlights: [
        "Interactive 3D book canvas rendering with mathematical rotation transforms and page flips",
        "Zero-dependency procedural sound synthesis using native Web Audio API oscillators and gain envelopes",
        "Complete offline-first architecture with PWA service worker caching and LocalStorage sync",
        "Indexed library of questions and answers derived from the Master Bible Study Guide"
      ],
      branches: ["main"],
      githubUrl: "https://github.com/OliliSam/back-to-bible",
      accessNotice: "🔒 Private Repository. Progressive Web App architecture demo available."
    },
    {
      id: "journeymark",
      name: "Journeymark - Artisan & Independent Makers Commission Board",
      fullName: "OliliSam/journeymark",
      category: "frontend",
      tier: "standard",
      type: "public",
      isFork: false,
      role: "Creator & Frontend Developer",
      language: "JavaScript",
      techStack: ["React", "JavaScript", "Lucide React", "Vite", "Modern CSS"],
      description: "Dedicated marketplace and commission platform connecting clients with independent makers (woodworkers, blacksmiths, potters, weavers, and glassblowers).",
      branches: ["main"],
      githubUrl: "https://github.com/OliliSam/journeymark"
    },
    {
      id: "ems-project",
      name: "Enterprise Employee Management System (EMS)",
      fullName: "Kritzkingvoid/FinalTerm_Project_EMS",
      collaboratorRepo: "OliliSam/FinalTerm_Project_EMS",
      category: "systems",
      tier: "featured",
      type: "branched",
      isFork: false,
      role: "Core Contributor (Attendance & Authentication Systems)",
      language: "C#",
      techStack: ["C#", ".NET Framework", "SQL Server / ADO.NET", "Windows Forms"],
      description: "Comprehensive desktop enterprise software for staff management, credentialed access, attendance tracking, and employee record auditing.",
      highlights: [
        "Designed and implemented the core LoginAttendance and AddEmployeeDetails modules on personal feature branch",
        "Integrated relational SQL database queries for employee CRUD, shift records, and clock-in/out logs",
        "Contributed to multi-developer Git collaboration workflow across 8 specialized feature branches"
      ],
      branches: [
        { name: "LoginAttendance/AddEmployeeDetails/Olive", note: "Olive's core contribution: session login attendance and employee onboarding system" },
        { name: "AddingEmployee/AntonFamador", note: "Staff assignment modules" },
        { name: "database/update-employee-details", note: "SQL database sync" },
        { name: "search-employee-details", note: "Search filtering module" },
        { name: "master", note: "Primary branch" }
      ],
      githubUrl: "https://github.com/Kritzkingvoid/FinalTerm_Project_EMS"
    },
    {
      id: "enigma-suite",
      name: "Enigma Cryptography Simulation Engine",
      fullName: "OliliSam/Enigma",
      forkFullName: "OliliSam/enigma-machine",
      category: "systems",
      tier: "standard",
      type: "public",
      isFork: true,
      role: "Systems Developer",
      language: "C# / C",
      techStack: ["C#", "C", "Algorithms", "Cryptography", "Data Structures"],
      description: "High-fidelity mechanical rotor simulation of the historic Enigma cipher machine used in cryptography education and algorithmic study.",
      branches: ["master", "main"],
      githubUrl: "https://github.com/OliliSam/Enigma"
    },
    {
      id: "morse-ring-reader",
      name: "Morse Code Engine & RFID RingReader Protocol Parser",
      fullName: "OliliSam/3Y_2324_IP2_MP1_MorseCode",
      relatedRepo: "OliliSam/3Y_2324_IP2_RingReader",
      category: "systems",
      tier: "standard",
      type: "forked",
      isFork: true,
      role: "Systems Developer",
      language: "C#",
      techStack: ["C#", ".NET", "Signal Processing", "Data Structures", "Protocol Inspection"],
      description: "Hardware and signal processing emulator converting alphanumeric text to timing-accurate Morse code signals and decoding RFID RingReader data packets.",
      branches: ["master"],
      githubUrl: "https://github.com/OliliSam/3Y_2324_IP2_MP1_MorseCode"
    },
    {
      id: "3mtt-initiative",
      name: "3MTT National Tech Initiatives & Web Foundations",
      fullName: "OliliSam/3mtt_course_task",
      companionRepo: "OliliSam/3MTTINTRO",
      category: "fullstack",
      tier: "standard",
      type: "forked",
      isFork: true,
      role: "Participant & Technical Mentor",
      language: "JavaScript / HTML",
      techStack: ["JavaScript", "HTML5", "CSS3", "Git", "Mentorship"],
      description: "Technical milestones, algorithms, and web solutions developed as part of Nigeria's 3 Million Technical Talent (3MTT) nationwide engineering initiative.",
      branches: ["master", "main"],
      githubUrl: "https://github.com/OliliSam/3mtt_course_task"
    },
    {
      id: "csharp-desktop-suite",
      name: "Enterprise C# .NET Academic & Desktop Tools",
      fullName: "OliliSam/MidtermsProject",
      relatedRepos: ["OliliSam/ConsoleApp1", "OliliSam/Rings", "OliliSam/UI-Project"],
      category: "systems",
      tier: "archive",
      type: "private",
      isFork: false,
      role: "Software Developer",
      language: "C#",
      techStack: ["C#", ".NET", "WinForms", "Algorithms"],
      description: "Suite of private desktop utilities, algorithmic midterms implementations, and user interface experiments built in C#.",
      branches: ["master"],
      githubUrl: "https://github.com/OliliSam/MidtermsProject"
    }
  ]
};
