export const workflowData = [
  {
    step: "01",
    phase: "Understand",
    title: "Research & Discovery",
    tagline: "Unearthing the core user problem and business constraints",
    icon: "Compass",
    items: [
      { name: "User Research", desc: "Understanding the target audience behaviors and goals" },
      { name: "User Interviews", desc: "Direct conversations to gather insights and qualitative feedback" },
      { name: "Project Requirements", desc: "Translating ambiguous briefs into concrete functional specifications" }
    ],
    deliverables: ["User Personas", "Problem Definition", "Requirement Matrix"]
  },
  {
    step: "02",
    phase: "Design",
    title: "Architecture & UI Craft",
    tagline: "Transforming insights into intuitive, pixel-perfect visuals",
    icon: "Figma",
    items: [
      { name: "Wireframes", desc: "Low-fidelity layouts focusing on hierarchy and information layout" },
      { name: "User Flow", desc: "Mapping frictionless navigation journeys across every scenario" },
      { name: "UI Design", desc: "Modern, high-fidelity visual design with cohesive typography and spacing" },
      { name: "Prototyping", desc: "Clickable Figma prototypes validating interactive states and transitions" }
    ],
    deliverables: ["Design System", "Figma Components", "Interactive Prototype"]
  },
  {
    step: "03",
    phase: "Develop",
    title: "Frontend Engineering",
    tagline: "Translating Figma designs into production-ready React components",
    icon: "Code",
    items: [
      { name: "React.js", desc: "Clean component architecture, custom hooks, and modern state patterns" },
      { name: "Reusable Components", desc: "Design-system aligned, modular, and maintainable UI primitives" },
      { name: "Responsive Design", desc: "Flawless mobile-first layouts tested across all screen viewports" },
      { name: "API Integration", desc: "Smooth asynchronous data fetching and responsive state handling" }
    ],
    deliverables: ["Clean React Codebase", "Design Token Sync", "API Client Layer"]
  },
  {
    step: "04",
    phase: "Test",
    title: "Quality Assurance & Validation",
    tagline: "Ensuring stability, accessibility, and visual precision",
    icon: "CheckCircle2",
    items: [
      { name: "Functional Testing", desc: "Validating user flows, form submissions, and edge cases" },
      { name: "Responsive Testing", desc: "Verifying behavior across 320px mobile to 4K ultra-wide monitors" },
      { name: "UI Validation", desc: "Checking pixel alignment against Figma designs and color contrasts" },
      { name: "Bug Fixing", desc: "Rapid triage, debugging console warnings, and refining UX friction" }
    ],
    deliverables: ["Cross-browser Validation", "Audit Checklist", "UI Consistency Report"]
  },
  {
    step: "05",
    phase: "Deploy",
    title: "Release & Server Setup",
    tagline: "Publishing scalable web apps with containerized builds",
    icon: "Rocket",
    items: [
      { name: "Docker", desc: "Containerizing web applications for consistent environment parity" },
      { name: "Namecheap", desc: "Configuring custom domains, DNS records, and SSL certification" },
      { name: "Production Deployment", desc: "Optimizing Vite bundles and publishing to live hosting" },
      { name: "Basic Server Handling", desc: "Monitoring uptime, inspecting logs, and managing server health" }
    ],
    deliverables: ["Live Production App", "Docker Container", "SSL / DNS Setup"]
  }
]
