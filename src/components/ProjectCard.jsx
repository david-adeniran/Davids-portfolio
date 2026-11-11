import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, index }) {
  const { title, description, tech, demo, github, image } = project;
  return (
    <Reveal as="article" className="project">
      <div className="preview">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="preview-placeholder" aria-hidden="true">
            <span className="preview-bar">{title.toLowerCase().replace(/\s+/g, "-")}</span>
            <span className="preview-title">{title}</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags" aria-label={`${title} technologies`}>
          {tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="cta-row">
          {demo && (
            <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo<span className="visually-hidden"> of {title}</span>
            </a>
          )}
          {github && (
            <a href={github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              GitHub<span className="visually-hidden"> repository for {title}</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
