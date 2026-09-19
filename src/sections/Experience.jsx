import React from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react'
import { experienceData } from '../data/experience'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Work History"
          title="Professional"
          titleHighlight="Experience"
          subtitle="Hands-on experience in cross-functional product development, translating user interfaces into responsive production React applications."
        />

        {/* Experience Highlight Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary" size="sm" dot>
                  Career Track
                </Badge>
                <span className="text-xs font-mono text-indigo-400 font-semibold">
                  {experienceData.totalExperience}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {experienceData.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 max-w-xl">
                {experienceData.summary}
              </p>
            </div>

            <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between">
              <span className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">
                1.5+
              </span>
              <span className="text-xs font-mono text-slate-400">
                Years Active
              </span>
            </div>
          </div>
        </motion.div>

        {/* Roles Timeline */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experienceData.roles.map((role) => (
            <motion.div key={role.id} variants={fadeUp}>
              <Card className="p-6 sm:p-8 border-slate-800/80 hover:border-indigo-500/40">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {role.role}
                      </h4>
                      {role.current && (
                        <Badge variant="emerald" size="sm" dot>
                          Current
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-indigo-400">
                      {role.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{role.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Responsibilities &amp; Impact
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {role.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-2">
                    Technologies:
                  </span>
                  {role.skillsUsed.map((skill) => (
                    <Badge key={skill} variant="default" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
