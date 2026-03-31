import { certifications } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function CertificationsSection() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Certifications"
        title="Formal learning that adds backend depth and deployment awareness."
        description="This certification strengthened my Python and Flask fundamentals while giving me practical exposure to API development, deployment, and modern backend practices."
      />

      <div className="mt-14 grid gap-6">
        {certifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card grid gap-8 p-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="inline-flex rounded-2xl border border-accent-200 bg-accent-100 p-4 text-accent-600 shadow-soft">
                    <Icon size={24} />
                  </div>
                  <p className="mt-6 soft-label text-accent-600">{item.period}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-base-900">{item.title}</h3>
                  <p className="mt-2 text-base font-medium text-base-600">{item.subtitle}</p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3 text-sm text-base-700">
                    <span className="rounded-full border border-base-200 bg-base-100 px-4 py-2">{item.grade}</span>
                    <span className="rounded-full border border-base-200 bg-base-100 px-4 py-2">{item.location}</span>
                  </div>
                  <p className="text-base leading-8 text-base-700">{item.description}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}