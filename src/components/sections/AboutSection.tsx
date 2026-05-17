import { SectionLabel } from "../common/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="section split reveal">
      <SectionLabel number="02" title="About Me" />
      <div className="section-copy">
        <h2>Sharp design instincts. Production-grade engineering. Zero hand-holding.</h2>
        <p>
          I'm Jahanzaib — a designer and full-stack developer with six years of
          experience shipping digital products. I work at the intersection of UI/UX, React
          engineering, and product strategy, helping startups and product teams move from
          concept to launch with speed and clarity.
        </p>
      </div>
      <div className="about-panel">
        <p>
          My approach is straightforward: understand the problem deeply, design the
          simplest solution that works, and build it to a standard I'd be proud to
          show any senior engineer or design director. I communicate clearly, hit
          deadlines, and treat every engagement as a long-term partnership.
        </p>
        <div className="about-facts">
          <span>6 Years Experience</span>
          <span>US Remote</span>
          <span>Design → Code</span>
          <span>English fluent</span>
        </div>
      </div>
    </section>
  );
}
