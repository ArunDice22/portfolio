import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  Award, 
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { educationData } from '../data/education'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function Education() {
  const iconMap = {
    GraduationCap,
    BookOpen,
    Laptop,
    Award
  }

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Academic Background"
          title="Educational"
          titleHighlight="Progression"
          subtitle="Formal computer applications and software engineering foundations supporting modern web design and development."
        />

        {/* Timeline Container */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-8 relative">
            {educationData.map((item, index) => {
              const Icon = iconMap[item.icon] || GraduationCap
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className={`flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <Card className="p-6 border-slate-800/80 hover:border-indigo-500/40 relative">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <Badge variant="primary" size="sm">
                          {item.level}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.status}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                        {item.degree}
                      </h4>

                      <p className="text-xs font-semibold text-indigo-400 mb-2">
                        {item.institution}
                      </p>

                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Center Node Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 z-10 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Spacer for symmetry on desktop */}
                  <div className="w-full sm:w-[calc(50%-2rem)] hidden sm:block" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
