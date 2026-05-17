import { SectionLabel } from "../common/SectionLabel";
import { caseStudies } from "../../models/portfolio";

export function DesignSection() {
  return (
    <section id="design" className="section split reveal">
      <SectionLabel number="05" title="Design Work" />
      <div className="section-copy">
        <h2>UI/UX case studies with clean systems and practical product thinking.</h2>
        <p>Case studies are structured around user goals, constraints, interaction decisions, visual systems, and measurable outcomes.</p>
      </div>
      <div className="case-list">
        {caseStudies.map((study, index) => (
          <article key={study}>
            <span>0{index + 1}</span>
            <p>{study}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
