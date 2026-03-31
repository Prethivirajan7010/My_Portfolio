import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition duration-300 ${
          isScrolled
            ? 'border-white/75 bg-white/88 shadow-soft backdrop-blur-xl'
            : 'border-white/55 bg-white/70 backdrop-blur-md'
        }`}
      >
        <a href="#home" className="font-display text-[13px] font-semibold tracking-[0.16em] text-base-900 sm:text-sm">
          {profile.name.toUpperCase()}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[13px] font-medium text-base-600 transition hover:text-base-900">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-accent-200 bg-accent-100 px-4 py-2 text-[13px] font-semibold text-accent-600 transition hover:border-accent-300 hover:bg-accent-200 lg:inline-flex"
        >
          Recruit Me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex rounded-full border border-base-200 bg-white/70 p-2 text-base-900 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-white/80 bg-white/92 p-4 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-[13px] font-medium text-base-700 transition hover:bg-base-100 hover:text-base-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}