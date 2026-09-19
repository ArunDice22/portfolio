import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Palette, 
  Code2, 
  Layout, 
  Terminal, 
  Server, 
  Wrench, 
  CheckCircle, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import { skillsData } from '../data/skills'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'
import { cn } from '../utils/cn'

export function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const categoryIcons = {
    design: Layout,
    development: Terminal,
    devops: Server,
    tools: Wrench
  }

  const filteredCategories = activeTab === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(cat => cat.id === activeTab)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Skills &amp; Technical"
          titleHighlight="Toolkit"
          subtitle="A balanced combination of user interface design, modern React frontend engineering, and essential deployment capabilities."
        />

        {/* Primary Skill Focus Cards (UI/UX & React) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillsData.primary.map((skill, index) => {
            const isDesign = skill.title.includes('UI/UX')
            const Icon = isDesign ? Palette : Code2
            return (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className={cn(
                  'rounded-3xl p-8 border relative overflow-hidden transition-all duration-300',
                  isDesign 
                    ? 'bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-slate-900/60 border-pink-500/30' 
                    : 'bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-slate-900/60 border-indigo-500/30',
                  'dark:bg-slate-900/80 light:bg-white light:border-slate-300'
                )}>
                  {/* Subtle corner badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      'w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg',
                      isDesign ? 'bg-pink-500/20 text-pink-400' : 'bg-indigo-500/20 text-indigo-400'
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={isDesign ? 'violet' : 'primary'} size="sm">
                      Primary Specialization
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer',
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200'
            )}
          >
            All Categories
          </button>

          {skillsData.categories.map((category) => {
            const Icon = categoryIcons[category.id] || Sparkles
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer',
                  activeTab === category.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Sparkles
              return (
                <motion.div
                  key={category.id}
                  layout
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full p-6 border-slate-800/80">
                    {/* Category Title */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/40 light:bg-indigo-50 flex items-center justify-center text-indigo-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                            {category.name}
                          </h4>
                          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skill Pills Grid */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 light:border-slate-200 group hover:border-indigo-500/40 transition-colors"
                        >
                          <span className="text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600">
                            {skill.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
