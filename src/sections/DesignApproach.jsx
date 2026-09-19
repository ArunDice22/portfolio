import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  FileCheck, 
  Network, 
  Layers, 
  Palette, 
  MousePointerClick, 
  Code2, 
  HeartHandshake, 
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { designThinkingSteps } from '../data/designThinking'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'
import { cn } from '../utils/cn'

export function DesignApproach() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const stepIcons = [
    Users, 
    MessageSquare, 
    FileCheck, 
    Network, 
    Layers, 
    Palette, 
    MousePointerClick, 
    Code2, 
    HeartHandshake, 
    RefreshCw
  ]

  const activeStep = designThinkingSteps[activeStepIndex]
  const ActiveIcon = stepIcons[activeStepIndex] || Sparkles

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="UI/UX Case Study Thinking"
          title="How I Approach"
          titleHighlight="Design"
          subtitle="I don't simply create screens — I understand the user problem, organize information architecture, and validate prototypes before writing any production code."
        />

        {/* 10 Step Interactive Navigation Ribbon */}
        <div className="mb-12 overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex items-center min-w-max gap-2 sm:gap-3 justify-start lg:justify-center p-2 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300">
            {designThinkingSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles
              const isActive = activeStepIndex === idx
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none',
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 hover:bg-slate-800/50'
                  )}
                >
                  <span className="font-mono text-[10px] opacity-75">{step.step}</span>
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Active Highlight Card */}
          <motion.div
            key={activeStep.step}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8"
          >
            <Card className="p-8 sm:p-10 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-slate-900/90">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shadow-lg">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">
                      Stage {activeStep.step} of 10 &bull; {activeStep.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <Badge variant="violet" size="md">
                  Active Focus
                </Badge>
              </div>

              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                {activeStep.desc}
              </p>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  &larr; Previous Stage
                </button>

                <div className="flex gap-1.5">
                  {designThinkingSteps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to step ${i + 1}`}
                      onClick={() => setActiveStepIndex(i)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-200 cursor-pointer',
                        activeStepIndex === i ? 'w-6 bg-indigo-400' : 'bg-slate-700 hover:bg-slate-500'
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={activeStepIndex === designThinkingSteps.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(designThinkingSteps.length - 1, prev + 1))}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Quick Summary Aside */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100/70 border border-slate-800 dark:border-slate-800 light:border-slate-300">
              <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                Why this sequence matters
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                By investing upfront in User Research and Information Architecture, wireframes are purpose-built. React development becomes fast, predictable, and aligned with user goals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-500/5 dark:bg-indigo-950/30 light:bg-indigo-50 border border-indigo-500/20">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-1">
                KEY OUTCOME
              </span>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                Reduces rework during development, delivers intuitive interfaces, and achieves high user satisfaction from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
