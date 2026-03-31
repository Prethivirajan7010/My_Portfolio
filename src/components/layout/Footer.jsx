import { profile } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-base-200/80 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-base-600 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>Built with React, JavaScript, Tailwind CSS, and motion-first UI architecture.</p>
        <p>
          Copyright {new Date().getFullYear()} {profile.name}. Crafted for a professional developer presence.
        </p>
      </div>
    </footer>
  );
}