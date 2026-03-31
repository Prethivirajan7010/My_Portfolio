import { expertise } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <Container id="about">
      <SectionHeading
        eyebrow="About"
        title="A calm, polished portfolio style backed by practical engineering experience."
        description="I focus on building software that feels professional to use and reliable to maintain. My approach combines frontend clarity, backend stability, and careful implementation around real workflows."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {expertise.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card h-full p-8">
                <div className="inline-flex rounded-2xl border border-accent-200 bg-accent-100 p-4 text-accent-600 shadow-soft">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-base-900">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-base-700">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}