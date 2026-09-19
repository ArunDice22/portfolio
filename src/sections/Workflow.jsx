import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Compass, 
  Palette, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ArrowDown, 
  ChevronRight,
  PackageCheck,
  Sparkles
} from 'lucide-react'
import { workflowData } from '../data/workflow'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'
import { cn } from '../utils/cn'

export function Workflow() {
  const [selectedStage, setSelectedStage] = useState(0)

  const stageIcons = [Compass, Palette, Code, CheckCircle2, Rocket]

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Design + Development Workflow"
          title="From Idea to"
          titleHighlight="Production"
          subtitle="A battle-tested 5-stage lifecycle turning raw project requirements into responsive, production-deployed React applications."
        />

        {/* Stage Timeline Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {workflowData.map((stage, idx) => {
            const Icon = stageIcons[idx] || Sparkles
            const isSelected = selectedStage === idx
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setSelectedStage(idx)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border',
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400/50 shadow-lg shadow-indigo-500/20 scale-105'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 border-slate-800 dark:border-slate-800 light:border-slate-300 hover:text-slate-200'
                )}
              >
                <span className="font-mono text-[11px] opacity-80">{stage.step}</span>
                <Icon className="w-3.5 h-3.5" />
                <span>{stage.phase}</span>
              </button>
            )
          })}
        </div>

        {/* 5 Stages Vertical Connected Stream */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6 max-w-5xl mx-auto relative"
        >
          {workflowData.map((stage, idx) => {
            const Icon = stageIcons[idx] || Sparkles
            const isActive = selectedStage === idx
            return (
              <motion.div
                key={stage.step}
                variants={fadeUp}
                onClick={() => setSelectedStage(idx)}
                className="cursor-pointer"
              >
                <div className={cn(
                  'rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative',
                  isActive
                    ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border-indigo-500/60 shadow-2xl shadow-indigo-500/10'
                    : 'bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-slate-800/80 hover:border-slate-700'
                )}>
                  {/* Top Bar of Stage */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        'w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-base transition-colors',
                        isActive
                          ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md'
                          : 'bg-slate-800/80 text-slate-400 dark:bg-slate-800 light:bg-slate-200 light:text-slate-700'
                      )}>
                        {stage.step}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                            {stage.phase} &bull; {stage.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                          {stage.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon className={cn('w-5 h-5', isActive ? 'text-indigo-400' : 'text-slate-500')} />
                    </div>
                  </div>

                  {/* Core Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                    {stage.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-4 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100/70 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Footer */}
                  <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-2 flex items-center gap-1">
                      <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Key Deliverables:
                    </span>
                    {stage.deliverables.map((deliv) => (
                      <Badge key={deliv} variant="default" size="sm">
                        {deliv}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
