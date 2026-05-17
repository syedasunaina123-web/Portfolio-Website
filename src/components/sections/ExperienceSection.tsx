import { SectionLabel } from "../common/SectionLabel";
import { experience } from "../../models/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section reveal">
      <SectionLabel number="06" title="Experience" />
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.period}-${item.role}`}>
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <a className="resume-link" href="/Jahanzaib-Resume.pdf" download="Jahanzaib_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume PDF
      </a>
    </section>
  );
}
