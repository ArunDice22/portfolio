import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  ClipboardCheck,
  Lightbulb,
  Target,
  BarChart3,
  ShieldCheck,
  Server,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { productThinkingData } from '../data/productThinking'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function ProductThinking() {
  const pillarIcons = {
    research: Users,
    requirements: ClipboardCheck,
    'design-thinking': Lightbulb,
    'product-understanding': Target,
    analytics: BarChart3,
    'testing-qa': ShieldCheck,
    'deployment-ops': Server
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Analytics &amp; Product Thinking"
          title="Beyond Design &amp;"
          titleHighlight="Code"
          subtitle={productThinkingData.description}
        />

        {/* Connected Ecosystem Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {productThinkingData.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id] || Sparkles

            return (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={index === 6 ? 'md:col-span-2 lg:col-span-3' : ''}
              >
                <Card className="h-full p-6 sm:p-7 border-slate-800/80 hover:border-indigo-500/40 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/40 light:bg-indigo-50 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="violet" size="sm">
                        {pillar.tagline}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Connected Flow indicator */}
                  <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center gap-1.5 text-xs text-indigo-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{pillar.connection}</span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
