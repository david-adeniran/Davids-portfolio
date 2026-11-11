import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { stack } from "../data.js";

export default function TechStack() {
  return (
    <Section id="stack" number="02" title="Tech Stack">
      <Reveal as="ul" className="stack-list">
        {stack.map(({ name, note }) => (
          <li key={name}>
            <span className="stack-name">{name}</span>
            <span className="stack-note">{note}</span>
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
