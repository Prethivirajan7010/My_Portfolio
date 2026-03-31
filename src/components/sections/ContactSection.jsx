import { useMemo, useState } from 'react';
import { CheckCircle2, Copy, Send } from 'lucide-react';
import { contactCards, profile } from '../../data/portfolio';
import { Container } from '../layout/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const initialForm = {
  name: '',
  company: '',
  email: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const mailtoHref = useMemo(() => {
    const subjectParts = [form.company, 'Opportunity for Prethivirajan S'].filter(Boolean);
    const subject = encodeURIComponent(subjectParts.join(' - '));
    const body = encodeURIComponent(
      `Recruiter Name: ${form.name || '-'}\nCompany: ${form.company || '-'}\nEmail: ${form.email || '-'}\n\nMessage:\n${form.message || '-'}`,
    );

    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoHref;
    setStatus('Your email app has been opened with a prefilled recruiter message.');
  };

  const handleCopy = async () => {
    const text = `Recruiter Name: ${form.name || '-'}\nCompany: ${form.company || '-'}\nEmail: ${form.email || '-'}\n\nMessage:\n${form.message || '-'}`;
    await navigator.clipboard.writeText(text);
    setStatus('Recruiter message copied to clipboard.');
  };

  return (
    <Container id="contact" className="pt-6">
      <div className="glass-card overflow-hidden">
        <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:p-10">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Recruiters can message me directly from this portfolio."
              description="This section prepares a polished email with recruiter details and the opportunity message. It keeps the experience simple while still feeling professional."
            />

            <div className="mt-7 grid gap-3.5">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.label} delay={index * 0.08}>
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center gap-4 rounded-[1.4rem] border border-white/80 bg-white/70 p-4 transition hover:border-accent-300 hover:bg-accent-100/35"
                    >
                      <div className="rounded-2xl border border-accent-200 bg-accent-100 p-3 text-accent-600 shadow-soft">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="soft-label">{card.label}</p>
                        <p className="mt-1.5 text-[14px] font-semibold text-base-900">{card.value}</p>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/80 bg-white/76 p-5 shadow-soft sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-[13px] font-medium text-base-700">
                  Your Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Recruiter name"
                    className="mt-2 w-full rounded-[1rem] border border-base-200 bg-base-50 px-4 py-3 text-[14px] text-base-900 outline-none transition focus:border-accent-300"
                  />
                </label>
                <label className="block text-[13px] font-medium text-base-700">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="mt-2 w-full rounded-[1rem] border border-base-200 bg-base-50 px-4 py-3 text-[14px] text-base-900 outline-none transition focus:border-accent-300"
                  />
                </label>
              </div>

              <label className="mt-4 block text-[13px] font-medium text-base-700">
                Work Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-[1rem] border border-base-200 bg-base-50 px-4 py-3 text-[14px] text-base-900 outline-none transition focus:border-accent-300"
                />
              </label>

              <label className="mt-4 block text-[13px] font-medium text-base-700">
                Opportunity Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Share the role, team, company, and next steps."
                  className="mt-2 w-full rounded-[1rem] border border-base-200 bg-base-50 px-4 py-3 text-[14px] text-base-900 outline-none transition focus:border-accent-300"
                />
              </label>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-base-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-base-700"
                >
                  <Send size={15} />
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-base-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-base-900 transition hover:border-accent-300 hover:bg-accent-100/60"
                >
                  <Copy size={15} />
                  Copy Message
                </button>
              </div>

              {status ? (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-100 px-4 py-2 text-[12px] text-accent-600">
                  <CheckCircle2 size={15} />
                  {status}
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </Container>
  );
}