import { experiences } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <Container id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Applied experience across product systems, workflows, and full-stack implementation."
        description="My internship and training experience gave me exposure to product delivery, collaborative engineering, and building features around real operational needs."
      />

      <div className="mt-14 space-y-6">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.title}`} delay={index * 0.08}>
            <article className="glass-card grid gap-8 p-8 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="soft-label text-accent-600">{experience.period}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-base-900">{experience.title}</h3>
                <p className="mt-2 text-base text-base-600">{experience.company}</p>
              </div>

              <div className="relative pl-0 lg:pl-8">
                <div className="absolute left-0 top-0 hidden h-full w-px bg-base-200 lg:block" />
                <div className="space-y-4">
                  {experience.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent-500" />
                      <p className="text-base leading-8 text-base-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}