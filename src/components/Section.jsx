import Reveal from "./Reveal.jsx";

export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{number} / {title}</p>
        </Reveal>
        <h2 id={`${id}-title`} className="visually-hidden">{title}</h2>
        {children}
      </div>
    </section>
  );
}
