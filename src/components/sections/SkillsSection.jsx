import { skillGroups } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <Container id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technology coverage organized the way product teams actually build and ship software."
        description="The stack below highlights the frontend, backend, database, and tooling capabilities I use to deliver complete development workflows."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="glass-card h-full p-8">
              <h3 className="font-display text-2xl font-semibold text-base-900">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-base-200 bg-base-100 px-4 py-2 text-sm font-medium text-base-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}