export const skillsData = {
  primary: [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces, wireframes, and scalable design systems grounded in user research.",
      icon: "Palette",
      highlight: true
    },
    {
      title: "React.js",
      desc: "Building clean, state-driven, component-based modern web applications with reusable architectures.",
      icon: "Code2",
      highlight: true
    }
  ],
  categories: [
    {
      id: "design",
      name: "DESIGN",
      icon: "Layout",
      description: "User-centric research and visual design capabilities",
      skills: [
        { name: "UI/UX", level: "Primary", tag: "Core" },
        { name: "Figma", level: "Primary", tag: "Design Tool" },
        { name: "User Research", level: "Core", tag: "Strategy" },
        { name: "User Interviews", level: "Core", tag: "Research" },
        { name: "Wireframing", level: "Core", tag: "Structure" },
        { name: "Prototyping", level: "Core", tag: "Interaction" }
      ]
    },
    {
      id: "development",
      name: "DEVELOPMENT",
      icon: "Terminal",
      description: "Frontend engineering and responsive implementation",
      skills: [
        { name: "React.js", level: "Primary", tag: "Frontend" },
        { name: "JavaScript", level: "Primary", tag: "Language" },
        { name: "HTML", level: "Core", tag: "Markup" },
        { name: "CSS", level: "Core", tag: "Styling" },
        { name: "Responsive Design", level: "Core", tag: "Cross-Device" },
        { name: "API Integration", level: "Core", tag: "Data Flow" },
        { name: "Git / GitHub", level: "Core", tag: "Version Control" }
      ]
    },
    {
      id: "devops",
      name: "DEVOPS / DEPLOYMENT",
      icon: "Server",
      description: "Containerization and server configuration basics",
      skills: [
        { name: "Docker", level: "Practical", tag: "Containers" },
        { name: "Namecheap", level: "Practical", tag: "DNS & Hosting" },
        { name: "Production Deployment", level: "Practical", tag: "Release" },
        { name: "Basic Server Management", level: "Practical", tag: "Infrastructure" }
      ]
    },
    {
      id: "tools",
      name: "TOOLS & ENVIRONMENT",
      icon: "Wrench",
      description: "Daily workflow software and development tools",
      skills: [
        { name: "Figma", level: "Primary", tag: "Design" },
        { name: "Antigravity", level: "Workflow", tag: "IDE & AI" },
        { name: "Devi", level: "Workflow", tag: "Tooling" },
        { name: "Docker", level: "Practical", tag: "DevOps" },
        { name: "HeidiSQL", level: "Practical", tag: "Database GUI" },
        { name: "Namecheap", level: "Practical", tag: "Hosting" }
      ]
    }
  ]
}
