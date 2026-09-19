import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Download, 
  Send, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'
import { profileData } from '../data/profile'
import { SectionHeading } from '../components/common/SectionHeading'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Badge } from '../components/common/Badge'
import { fadeUp, staggerContainer } from '../utils/animations'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have an idea?"
          titleHighlight="Let's build it."
          subtitle="Whether it's a product idea, a website, or a digital experience, I'm always interested in creating something meaningful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Contact Details & Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-8 border-indigo-500/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    Let's Connect
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    Feel free to reach out for UI/UX design collaboration, React frontend opportunities, or general product discussions.
                  </p>
                </div>

                {/* Contact Items List */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Email Address
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {profileData.contact.email}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        LinkedIn Profile
                      </span>
                       <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Naurkri Profile
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {profileData.contact.linkedin}
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {profileData.contact.github}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">
                        Phone (Placeholder)
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {profileData.contact.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resume Button */}
                <div className="pt-2">
                  <Button
                    href={profileData.contact.resumeUrl}
                    variant="secondary"
                    size="md"
                    icon={Download}
                    className="w-full"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-8 border-slate-800/80">
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Send a Direct Message</span>
              </h3>

              {isSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-slate-400 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-slate-400 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono font-medium text-slate-400 mb-1.5"
                    >
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="UI/UX Design or React Development Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-slate-400 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals or team requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={Send}
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
