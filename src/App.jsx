import React from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { BackgroundGlow } from './components/ui/BackgroundGlow'
import { CustomCursor } from './components/layout/CustomCursor'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Workflow } from './sections/Workflow'
import { DesignApproach } from './sections/DesignApproach'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { ToolsWall } from './sections/ToolsWall'
import { ProductThinking } from './sections/ProductThinking'
import { AdditionalSkills } from './sections/AdditionalSkills'
import { Contact } from './sections/Contact'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'workflow',
  'projects',
  'experience',
  'education',
  'contact'
]

export function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(SECTION_IDS, 180)

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 dark:bg-[#090D16] dark:text-slate-100 light:bg-[#F8FAFC] light:text-slate-900 transition-colors duration-300">
      {/* Background Ambient Lighting & Grids */}
      <BackgroundGlow />

      {/* Desktop Subtle Follower Cursor */}
      <CustomCursor />

      {/* Sticky Top Header Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <DesignApproach />
        <Projects />
        <Experience />
        <Education />
        <ToolsWall />
        <ProductThinking />
        <AdditionalSkills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
