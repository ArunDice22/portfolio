export const projectsData = [
  {
    id: "project-01",
    name: "Project 01",
    subtitle: "Modern Web Application Interface",
    type: "Web Application / Product UI",
    shortDescription: "A comprehensive responsive web application combining streamlined UI design in Figma with component-driven React.js frontend architecture.",
    role: "UI/UX Designer & React.js Developer",
    featured: true,
    accentColor: "indigo",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
    designTools: ["Figma", "Wireframing", "Interactive Prototyping"],
    keyContribution: "Led end-to-end design system creation in Figma, crafted reusable modular React components, and handled responsive layout optimization.",
    liveUrl: "#project-01-demo", // Editable placeholder
    githubUrl: "#project-01-repo", // Editable placeholder
    caseStudy: {
      problem: "Users needed a clear, distraction-free digital workflow to manage complex data with minimal cognitive load and instant responsive feedback.",
      research: "Conducted initial user interviews and competitive analysis to identify navigation pain points and common workflow bottlenecks in existing solutions.",
      requirements: "Established functional requirements for modular data views, intuitive navigation, fast load speeds, and full mobile-to-desktop responsiveness.",
      design: "Created structured information architecture, wireframed low-fidelity layouts, and designed a cohesive high-fidelity design system in Figma.",
      development: "Implemented the interface using React.js with modular component architecture, responsive Tailwind styling, and smooth state management.",
      testing: "Executed comprehensive functional testing, responsive breakpoint checks (320px to 1920px), and UI alignment audits against Figma mockups.",
      deployment: "Prepared production builds, containerized using Docker, and deployed on server hosting with custom domain and DNS configuration.",
      outcome: "Delivered a clean, production-ready web application with intuitive navigation, fluid responsiveness, and high code maintainability."
    }
  },
  {
    id: "project-02",
    name: "Project 02",
    subtitle: "Interactive Product Dashboard",
    type: "Dashboard / SaaS Design",
    shortDescription: "An analytics and operational dashboard designed for clear data visualization, dark/light theme versatility, and snappy user interactions.",
    role: "UI/UX Designer & Frontend Developer",
    featured: true,
    accentColor: "violet",
    technologies: ["React.js", "HTML5", "CSS3", "REST APIs"],
    designTools: ["Figma", "User Flows", "Design Tokens"],
    keyContribution: "Designed data visualization widgets, developed responsive dashboard grids, and integrated asynchronous REST API endpoints.",
    liveUrl: "#project-02-demo",
    githubUrl: "#project-02-repo",
    caseStudy: {
      problem: "Operational data was fragmented across multiple tables, making it difficult for stakeholders to quickly assess key metrics and take action.",
      research: "Analyzed stakeholder workflows to determine essential daily metrics, prioritizing primary overview cards over secondary deep-dive tables.",
      requirements: "Defined specs for real-time chart updates, customizable date filters, export options, and accessible color contrast standards.",
      design: "Engineered a clean card-based layout in Figma with strong visual hierarchy, subtle glass accents, and responsive widget breakpoints.",
      development: "Built reusable widget components in React, managing data state and loading skeletons for seamless asynchronous API transitions.",
      testing: "Tested API response handling, empty states, error boundaries, and cross-browser consistency across Chrome, Firefox, and Safari.",
      deployment: "Deployed containerized web bundle with optimized asset caching and domain SSL setup.",
      outcome: "Provided users with a cohesive, responsive dashboard that speeds up data comprehension and task completion."
    }
  },
  {
    id: "project-03",
    name: "Project 03",
    subtitle: "Responsive Digital Platform",
    type: "Platform / Responsive Web",
    shortDescription: "A multi-page responsive web platform built with scalable component hierarchies, micro-interactions, and accessible typography.",
    role: "UI/UX Designer & React Developer",
    featured: false,
    accentColor: "sky",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    designTools: ["Figma", "Prototyping", "Design System"],
    keyContribution: "Created frictionless user onboarding flow, implemented accessible interactive controls, and maintained Git version control workflow.",
    liveUrl: "#project-03-demo",
    githubUrl: "#project-03-repo",
    caseStudy: {
      problem: "The previous interface had high drop-off rates due to cumbersome navigation and poor readability on mobile screen sizes.",
      research: "Mapped user drop-off points, reviewed friction logs, and benchmarked modern usability standards across mobile devices.",
      requirements: "Specified mobile-first navigation, simplified multi-step form flows, and fast rendering on low-bandwidth networks.",
      design: "Redesigned mobile drawer navigation, stepped form indicators, and clean card modules with high touch target compliance.",
      development: "Developed interactive multi-step forms in React with input validation, smooth step transitions, and persistent form state.",
      testing: "Validated touch interactions, mobile keyboard behaviors, form edge cases, and accessibility screen reader compatibility.",
      deployment: "Configured automated production builds and deployed on Namecheap hosting environment.",
      outcome: "Delivered a polished, cross-device web platform with seamless user onboarding and high accessibility ratings."
    }
  },
  {
    id: "project-04",
    name: "Project 04",
    subtitle: "Component Design System & UI Kit",
    type: "Design System / Component Library",
    shortDescription: "A unified UI kit and React component library bridging the gap between Figma design tokens and production React components.",
    role: "Design System Lead & React Developer",
    featured: false,
    accentColor: "emerald",
    technologies: ["React.js", "CSS3 / Tailwind", "JavaScript", "Docker"],
    designTools: ["Figma", "Component Variants", "Auto-layout"],
    keyContribution: "Built 40+ atomic Figma components with variants, mirrored them in React with strict prop interfaces, and documented usage guidelines.",
    liveUrl: "#project-04-demo",
    githubUrl: "#project-04-repo",
    caseStudy: {
      problem: "Design and frontend implementations suffered from visual inconsistencies, mismatched spacing, and redundant code duplication.",
      research: "Audited existing product screens to catalog inconsistent buttons, inputs, modal dialogs, and color variations.",
      requirements: "Created a centralized design token structure for colors, typography scales, border radii, shadows, and spacing increments.",
      design: "Built a comprehensive Figma component kit using Auto-layout, boolean properties, and component variants matching code props.",
      development: "Engineered corresponding React component library with consistent prop conventions, accessible focus states, and zero runtime overhead.",
      testing: "Tested component rendering across light/dark themes, varying content lengths, and extreme viewport widths.",
      deployment: "Packaged documentation and preview site using Docker containerization for team access.",
      outcome: "Established an efficient, unified design-to-code workflow that accelerates feature development and ensures UI consistency."
    }
  }
]
