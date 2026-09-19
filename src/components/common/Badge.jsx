import React from 'react'
import { cn } from '../../utils/cn'

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full border tracking-wide select-none'

  const variants = {
    default: 'bg-slate-800/60 text-slate-300 border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/50 light:bg-slate-100 light:text-slate-700 light:border-slate-300',
    primary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-500/30 light:bg-indigo-50 light:text-indigo-700 light:border-indigo-200',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/25 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-500/30 light:bg-violet-50 light:text-violet-700 light:border-violet-200',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-500/30 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-200',
    sky: 'bg-sky-500/10 text-sky-400 border-sky-500/25 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-500/30 light:bg-sky-50 light:text-sky-700 light:border-sky-200',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/25 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-500/30 light:bg-amber-50 light:text-amber-700 light:border-amber-200'
  }

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2'
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  )
}
