import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data.js";

export default function Experience() {
  const { role, company, type, points } = experience;
  return (
    <Section id="experience" number="04" title="Experience">
      <Reveal as="article" className="job">
        <div>
          <h3>{role}</h3>
          <p className="job-meta">{company} · {type}</p>
        </div>
        <ul className="job-points">
          {points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </Reveal>
    </Section>
  );
}
