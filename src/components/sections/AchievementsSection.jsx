import { achievements } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function AchievementsSection() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition and academic milestones that strengthen the profile behind the work."
        description="These highlights reflect consistency, participation, and a strong foundation for growing into larger software engineering responsibilities."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card h-full p-8">
                <div className="inline-flex rounded-2xl border border-base-200 bg-rose p-4 text-base-900 shadow-soft">
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