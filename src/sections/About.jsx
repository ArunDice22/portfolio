import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  FileText, 
  Layout, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  UserCheck,
  Zap,
  Sparkles
} from 'lucide-react'
import { profileData } from '../data/profile'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function About() {
  const journeyIcons = [Search, FileText, Layout, Palette, Code2, CheckCircle2, Rocket]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Bridging Design Intent with"
          titleHighlight="Production Reality"
          subtitle="A hybrid perspective that merges user research and UI/UX design in Figma with responsive, maintainable React engineering."
        />

        {/* Narrative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Bio Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="h-full flex flex-col justify-between p-8 border-indigo-500/20">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Profile Overview &bull; 1.5 Years Experience</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                  "UI/UX Designer who can actually build the product."
                </h3>

                <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                  {profileData.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quick Philosophy Badges */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap gap-2.5">
                <Badge variant="primary" size="md">User Research First</Badge>
                <Badge variant="violet" size="md">Component Architecture</Badge>
                <Badge variant="emerald" size="md">Production Deployment</Badge>
                <Badge variant="sky" size="md">Responsive Precision</Badge>
                   <Badge variant="sky" size="md">Hello world</Badge>
              </div>
            </Card>
          </motion.div>

          {/* Highlights Mini Grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {profileData.highlights.map((item, index) => (
              <motion.div key={item.label} variants={fadeUp}>
                <Card hoverEffect className="p-5 border-slate-800/60 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/40 light:bg-indigo-50 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual Workflow Journey Progression */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              The End-to-End Product Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
              How every digital solution travels through systematic validation
            </p>
          </div>

          {/* Connected Steps */}
          <motion.div
            variants={staggerContainer(0.09, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5"
          >
            {profileData.aboutJourney.map((item, idx) => {
              const Icon = journeyIcons[idx] || Zap
              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between relative group transition-all duration-200 hover:border-indigo-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-indigo-400">
                        {item.step}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 dark:bg-indigo-950/40 light:bg-indigo-50 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
