import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';

export function ProjectsSection() {
  return (
    <Container id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work that combines product thinking, logic implementation, and measurable usefulness."
        description="These projects show my ability to shape responsive interfaces, business logic, and complete user workflows into practical applications."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article whileHover={{ y: -6 }} className="glass-card h-full overflow-hidden p-5 sm:p-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="inline-flex rounded-2xl border border-white/80 bg-base-100 p-4 text-accent-600 shadow-soft">
                    <Icon size={22} />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-base-600">
                    Featured <ExternalLink size={13} />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.7rem] font-semibold text-base-900">{project.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-base-700">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                <div className="mt-6 space-y-3.5">
                  {project.impact.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent-500" />
                      <p className="text-[14px] leading-7 text-base-700">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-white/85 px-4 py-2 text-[12px] font-semibold text-base-900 transition hover:border-accent-300 hover:bg-accent-100/60"
                    >
                      {link.label}
                      <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}