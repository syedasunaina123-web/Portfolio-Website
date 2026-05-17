import { CursorDot } from "./components/common/CursorDot";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DesignSection } from "./components/sections/DesignSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { useReveal } from "./hooks/useReveal";

export function App() {
  useReveal();

  return (
    <>
      <CursorDot />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DesignSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
