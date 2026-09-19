import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 dark:hover:text-indigo-400 light:hover:text-indigo-600 transition-colors cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={isDark ? 'block' : 'hidden'}
      >
        <Moon className="w-4 h-4 text-indigo-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={!isDark ? 'block' : 'hidden'}
      >
        <Sun className="w-4 h-4 text-amber-500" />
      </motion.div>
    </motion.button>
  )
}
