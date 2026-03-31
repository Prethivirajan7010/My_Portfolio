import { motion } from 'framer-motion';
import { Download, Mail, Sparkles } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <Container id="home" className="pb-12 pt-10 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="section-kicker">Premium Portfolio</span>
          <h1 className="max-w-3xl font-display text-[2.55rem] font-semibold leading-[1.05] text-base-900 sm:text-[3.1rem] lg:text-[3.75rem]">
            Thoughtful full-stack engineering with premium presentation and production-focused execution.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-base-700 sm:text-[16px]">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects">Explore Projects</Button>
            <Button href="#contact" variant="secondary">
              Send Recruiter Message
            </Button>
            <Button href={profile.resumeHref} variant="secondary" className="bg-base-100/90" download>
              <Download size={14} /> Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {profile.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/80 bg-white/75 px-3.5 py-2 text-[12px] font-medium text-base-700 shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -top-6 right-6 z-10 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-[12px] font-medium text-base-700 shadow-soft">
            {profile.location}
          </div>
          <div className="glass-card relative overflow-hidden p-4 sm:p-5">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-accent-200/55 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-rose/70 blur-3xl" />

            <div className="relative grid gap-5 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.35rem] border border-white/75 bg-white/70 shadow-soft">
                <img
                  src={profile.heroImage}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div>
                <p className="soft-label">Profile Snapshot</p>
                <h2 className="mt-2 font-display text-[1.65rem] font-semibold text-base-900">{profile.name}</h2>
                <p className="mt-1.5 text-[14px] text-accent-600">{profile.role}</p>

                <p className="mt-5 text-[15px] leading-7 text-base-700">{profile.intro}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {profile.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/80 bg-base-50/90 p-4 shadow-soft"
                    >
                      <p className="text-[1.4rem] font-extrabold text-base-900">{stat.value}</p>
                      <p className="mt-1.5 text-[12px] text-base-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {profile.links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3.5 py-2 text-[12px] font-medium text-base-900 transition hover:border-accent-300 hover:bg-accent-100/60"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-100 px-3.5 py-2 text-[12px] font-medium text-accent-600 transition hover:bg-accent-200"
                  >
                    <Mail size={14} />
                    Hire / Recruit
                  </a>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3.5 text-[13px] leading-6 text-base-700 shadow-soft">
                  <Sparkles size={16} className="mt-1 text-accent-600" />
                  <span>{profile.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
