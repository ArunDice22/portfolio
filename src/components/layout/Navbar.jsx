import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '../common/Button'
import { cn } from '../../utils/cn'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
]

export function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on hash click or resize
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={cn(
          'max-w-7xl mx-auto rounded-2xl transition-all duration-300',
          isScrolled
            ? 'glass-nav px-4 sm:px-6 py-2.5 shadow-lg shadow-black/10 dark:shadow-black/40'
            : 'bg-transparent px-2 sm:px-4 py-3'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                Arun Dice DCE
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 hidden xs:block">
                UI/UX &bull; React
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none',
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-100 dark:text-slate-400 dark:hover:text-slate-100 light:text-slate-600 light:hover:text-slate-900'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={ArrowUpRight}
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden mt-2 mx-auto max-w-lg rounded-2xl glass-panel p-5 shadow-2xl z-50 border border-slate-800 dark:border-slate-800 light:border-slate-200"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60 dark:text-slate-300 light:text-slate-700 light:hover:bg-slate-100'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-indigo-200" />}
                  </a>
                )
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  onClick={handleNavClick}
                  className="w-full"
                  icon={ArrowUpRight}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
