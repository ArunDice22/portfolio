import React from 'react'
import { Modal } from '../common/Modal'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'
import { GithubIcon } from '../common/BrandIcons'
import { 
  ExternalLink, 
  Layers, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Trophy 
} from 'lucide-react'

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  const steps = [
    { key: 'problem', label: 'Problem', icon: Lightbulb, color: 'text-amber-400', content: project.caseStudy?.problem },
    { key: 'research', label: 'Research', icon: Users, color: 'text-sky-400', content: project.caseStudy?.research },
    { key: 'requirements', label: 'Requirements', icon: Layers, color: 'text-indigo-400', content: project.caseStudy?.requirements },
    { key: 'design', label: 'Design', icon: Palette, color: 'text-pink-400', content: project.caseStudy?.design },
    { key: 'development', label: 'Development', icon: Code2, color: 'text-violet-400', content: project.caseStudy?.development },
    { key: 'testing', label: 'Testing & QA', icon: ShieldCheck, color: 'text-emerald-400', content: project.caseStudy?.testing },
    { key: 'deployment', label: 'Deployment', icon: Rocket, color: 'text-blue-400', content: project.caseStudy?.deployment },
    { key: 'outcome', label: 'Outcome', icon: Trophy, color: 'text-amber-300', content: project.caseStudy?.outcome }
  ]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.name}
      subtitle={project.subtitle}
      maxWidth="max-w-4xl"
    >
      {/* Top Meta Details */}
      <div className="space-y-4 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
              Role &bull; {project.role}
            </span>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="sm"
                icon={ExternalLink}
              >
                Live Preview
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
                icon={GithubIcon}
              >
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Tech & Design Tools Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.designTools?.map((tool) => (
            <Badge key={tool} variant="violet" size="sm">
              {tool}
            </Badge>
          ))}
        </div>

        {/* Key Contribution */}
        {project.keyContribution && (
          <div className="p-3.5 rounded-xl bg-indigo-500/5 dark:bg-indigo-950/30 light:bg-indigo-50/70 border border-indigo-500/20 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
            <span className="font-semibold text-indigo-400">Key Contribution: </span>
            {project.keyContribution}
          </div>
        )}
      </div>

      {/* Case Study Step Timeline */}
      <div className="space-y-6 pt-2">
        <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Case Study Journey</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            if (!step.content) return null
            return (
              <div
                key={step.key}
                className="p-4 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                    0{idx + 1} &bull; {step.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed pl-1">
                  {step.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}
