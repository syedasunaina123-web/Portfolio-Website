import { SectionLabel } from "../common/SectionLabel";
import { skills } from "../../models/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="section reveal">
      <SectionLabel number="03" title="Skills" />
      <div className="section-heading">
        <h2>Design + development stack</h2>
        <p>Tools chosen for fast US-market delivery, maintainable code, and client-friendly handoff.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.label}>
            <div className="skill-top">
              <h3>{skill.label}</h3>
              <span>{skill.value}%</span>
            </div>
            <div className="skill-bar">
              <span style={{ width: `${skill.value}%` }} />
            </div>
            <p>{skill.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
