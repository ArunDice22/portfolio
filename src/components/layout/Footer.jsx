import React from 'react'
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons'
import { profileData } from '../../data/profile'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                A
              </div>
              <div>
                <span className="font-bold text-lg text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {profileData.name}
                </span>
                <p className="text-xs text-indigo-400 font-mono">
                  {profileData.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
              Designing intuitive digital interfaces and turning ideas into responsive, production-ready web applications with modern React.js.
            </p>

            {/* Quick status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to UI/UX &amp; React opportunities</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  Skills &amp; Toolkit
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-indigo-400 transition-colors">
                  Idea to Production
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">
                  Experience &amp; Education
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profileData.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Ashok Kumar V. Crafted with React.js &amp; Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
