import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Send, Eye, Palette, Code, Server, Search } from 'lucide-react'
import { FigmaBrandIcon } from '../components/common/BrandIcons'
import { profileData } from '../data/profile'
import { Button } from '../components/common/Button'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function Hero() {
  const floatingTags = [
    { label: 'UI/UX Design', icon: Palette, color: 'from-pink-500/20 to-rose-500/10 text-pink-400 border-pink-500/30' },
    { label: 'React.js', icon: Code, color: 'from-sky-500/20 to-indigo-500/10 text-sky-400 border-sky-500/30' },
    { label: 'Figma', icon: FigmaBrandIcon, color: 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30' },
    { label: 'Development', icon: Code, color: 'from-indigo-500/20 to-blue-500/10 text-indigo-400 border-indigo-500/30' },
    { label: 'User Research', icon: Search, color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30' },
    { label: 'Deployment', icon: Server, color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30' }
  ]

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Experience & Status Pill */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <Badge variant="primary" size="lg" dot className="glow-pill font-mono">
            {profileData.experienceBadge}
          </Badge>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>UI/UX Designer &bull; React.js Developer</span>
          </div>
        </motion.div>

        {/* Name Intro */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-3"
        >
          Hi, I'm <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold">{profileData.name}</span>
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.1] mb-6"
        >
          <span className="block">UI/UX Designer &amp;</span>
          <span className="text-gradient-primary block mt-1">React.js Developer</span>
        </motion.h1>

        {/* Supporting Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          {profileData.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            icon={Eye}
            className="w-full sm:w-auto text-base px-7 py-3.5"
          >
            View My Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            icon={Send}
            className="w-full sm:w-auto text-base px-7 py-3.5"
          >
            Let's Connect
          </Button>
        </motion.div>

        {/* Subtle Animated Skills Floating Ribbon */}
        <motion.div
          variants={fadeUp}
          className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60 w-full max-w-4xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
            Core Competencies &bull; Design to Deployment
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {floatingTags.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border bg-gradient-to-r ${item.color} backdrop-blur-md text-xs font-medium transition-shadow hover:shadow-md cursor-default`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
