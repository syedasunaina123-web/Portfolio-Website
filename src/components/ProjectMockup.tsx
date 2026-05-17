import type { Project } from "../models/portfolio";

type ProjectMockupProps = {
  project: Project;
};

export function ProjectMockup({ project }: ProjectMockupProps) {
  if (project.video || project.image) {
    return (
      <div className={`mockup mockup-${project.tone}`} style={{ padding: 0, overflow: 'hidden', minHeight: '260px', display: 'flex' }} aria-label={`${project.title} preview`}>
        {project.video ? (
          <video 
            src={`/${project.video}`} 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', minHeight: '260px', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <img 
            src={`/${project.image}`} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', minHeight: '260px', objectFit: 'cover', display: 'block' }}
          />
        )}
      </div>
    );
  }

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
