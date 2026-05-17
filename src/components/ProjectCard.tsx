import type { Project } from "../models/portfolio";
import { ProjectMockup } from "./ProjectMockup";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ProjectMockup project={project} />
      <div className="project-meta">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.problem}</p>
        <strong>{project.metric}</strong>
        <div className="pills">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demo}>Live Demo</a>
          <a href={project.repo}>GitHub Repo</a>
        </div>
      </div>
    </article>
  );
}
