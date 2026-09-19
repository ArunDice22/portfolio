import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) {
  const Component = onClick || hoverEffect ? motion.div : 'div'
  
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -3, transition: { duration: 0.25, ease: 'easeOut' } }
      }
    : {}

  return (
    <Component
      onClick={onClick}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white',
        'border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80',
        'backdrop-blur-md',
        hoverEffect && 'hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5',
        glow && 'glow-primary',
        onClick && 'cursor-pointer',
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}
