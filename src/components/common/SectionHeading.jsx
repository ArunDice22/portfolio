import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from './Badge'
import { fadeUp } from '../../utils/animations'
import { cn } from '../../utils/cn'

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className = '',
  eyebrowVariant = 'primary'
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'max-w-3xl mb-14 md:mb-18',
        centered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge variant={eyebrowVariant} size="md">
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient-primary">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
