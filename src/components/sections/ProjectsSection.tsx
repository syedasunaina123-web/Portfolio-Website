import { ProjectCard } from "../ProjectCard";
import { SectionLabel } from "../common/SectionLabel";
import { projects } from "../../models/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section reveal">
      <SectionLabel number="04" title="Projects" />
      <div className="section-heading">
        <h2>Design & development work</h2>
        <p>Selected portfolio pieces showing UI thinking, frontend execution, full-stack decisions, and measurable product outcomes.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
