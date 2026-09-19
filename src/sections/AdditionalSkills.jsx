import React from 'react'
import { motion } from 'framer-motion'
import { Image, FileText, Network, Sparkles } from 'lucide-react'
import { additionalSkillsData } from '../data/additionalSkills'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function AdditionalSkills() {
  const iconMap = {
    Image,
    FileText,
    Network
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="default" size="sm" className="mb-3">
            Supplementary Knowledge
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            Additional Skills
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 max-w-xl mx-auto">
            Supporting competencies that aid in design communication, technical writing, and IT environments.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {additionalSkillsData.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles

            return (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -3 }}>
                <Card className="p-6 border-slate-800/60 dark:border-slate-800/60 light:border-slate-300 h-full flex flex-col justify-between bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-800/80 dark:bg-slate-800 light:bg-white text-indigo-400 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
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
