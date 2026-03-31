import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-50 text-base-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,228,223,0.18),transparent_25%),radial-gradient(circle_at_86%_16%,rgba(234,223,215,0.42),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:80px_80px] opacity-30" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;