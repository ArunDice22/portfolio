import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  Palette,
  Code2,
  Eye
} from 'lucide-react'
import { GithubIcon } from '../components/common/BrandIcons'
import { projectsData } from '../data/projects'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { ProjectModal } from '../components/ui/ProjectModal'
import { fadeUp, staggerContainer } from '../utils/animations'
import { cn } from '../utils/cn'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured Work"
          title="Product &amp; Web"
          titleHighlight="Case Studies"
          subtitle="Explore selected applications demonstrating structured user experience design, modular React components, and production execution."
        />

        {/* Project Showcase Cards Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className={cn(
                  'rounded-3xl p-7 sm:p-8 border h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden',
                  'bg-slate-900/70 dark:bg-slate-900/70 light:bg-white',
                  'border-slate-800/90 dark:border-slate-800/90 light:border-slate-300',
                  'group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/10'
                )}>
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-indigo-400">
                          0{index + 1}
                        </span>
                        <Badge variant="default" size="sm">
                          {project.type}
                        </Badge>
                      </div>

                      {project.featured && (
                        <Badge variant="primary" size="sm" dot>
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Role & Short Description */}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-indigo-300 dark:text-indigo-300 light:text-indigo-600 block mb-1">
                        Role: {project.role}
                      </span>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Key Contribution Quote */}
                    <div className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 mb-5">
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                        <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">Contribution: </strong>
                        {project.keyContribution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills + Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.designTools.slice(0, 2).map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-950/40 text-purple-300 border border-purple-800/40"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={Eye}
                        onClick={() => setSelectedProject(project)}
                      >
                        Read Case Study
                      </Button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Github repository"
                            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View live demo"
                            className="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-slate-800/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
