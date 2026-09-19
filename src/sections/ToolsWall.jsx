import React from 'react'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Atom, 
  Sparkles, 
  Zap, 
  Container, 
  Database, 
  Globe, 
  GitBranch, 
  Layers 
} from 'lucide-react'
import { FigmaBrandIcon, GithubIcon } from '../components/common/BrandIcons'
import { toolsData } from '../data/tools'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function ToolsWall() {
  const toolIcons = {
    Figma: FigmaBrandIcon,
    'React.js': Atom,
    Antigravity: Sparkles,
    Devi: Zap,
    Docker: Container,
    HeidiSQL: Database,
    Namecheap: Globe,
    Git: GitBranch,
    GitHub: GithubIcon,
    Canva: Layers
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Interactive Tool Wall"
          title="Daily Tools &amp;"
          titleHighlight="Technologies"
          subtitle="The modern software ecosystem I leverage across user research, interface prototyping, component development, and deployment."
        />

        {/* Tools Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {toolsData.map((tool) => {
            const Icon = toolIcons[tool.name] || Sparkles

            return (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-default"
              >
                <div className="h-full p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Icon + Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                        style={{ backgroundColor: tool.bgColor, color: tool.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300">
                        {tool.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors mb-1">
                      {tool.name}
                    </h4>

                    <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="pt-2 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 text-[10px] font-mono text-slate-500">
                    {tool.category}
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
