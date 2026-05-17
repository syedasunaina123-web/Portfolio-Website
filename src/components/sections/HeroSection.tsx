import { HeroProfileCard } from "../HeroProfileCard";
import { roles } from "../../models/portfolio";
import { useRotatingText } from "../../hooks/useRotatingText";

export function HeroSection() {
  const activeRole = useRotatingText(roles);

  return (
    <section id="hero" className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-copy">
        <div className="hero-badges">
          <span>Open to Projects</span>
          <span>US Remote Ready</span>
        </div>
        <p className="eyebrow">Designer &amp; Developer · 6+ Years</p>
        <h1>Jahanzaib<span className="hero-dot">.</span></h1>
        <h2>
          I build products that convert — precision UI, clean React code, and
          full‑stack delivery from wireframe to production.
        </h2>
        <div className="role-switcher" aria-live="polite">
          <span>const role = </span>
          <strong>"{activeRole}"</strong>
        </div>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View Work
          </a>
          <a className="btn ghost" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
      <HeroProfileCard />
    </section>
  );
}
