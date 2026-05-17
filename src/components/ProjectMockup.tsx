import type { Project } from "../models/portfolio";

type ProjectMockupProps = {
  project: Project;
};

export function ProjectMockup({ project }: ProjectMockupProps) {
  return (
    <div className={`mockup mockup-${project.tone}`} aria-label={`${project.title} mockup`}>
      <div className="mockup-browser">
        <span />
        <span />
        <span />
      </div>
      <div className="mockup-grid">
        <div className="mockup-sidebar" />
        <div className="mockup-main">
          <div className="mockup-line wide" />
          <div className="mockup-line" />
          <div className="mockup-stats">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="phone-mock">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
