import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const facts = [
  ["Studying", "Computer Science, final year"],
  ["Based in", "Nigeria"],
  ["Focus", "Frontend and web applications"],
  ["Tools", "React, Firebase, Vite"],
];

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="about-grid">
        <Reveal className="prose">
          <p>
            I’m a final-year Computer Science student, and the part of software
            I enjoy most is the part people actually touch: the interface. I like
            turning an idea into a web application that someone can open and
            use without having to think about it.
          </p>
          <p>
            I’ve built several projects with modern web technologies, from a
            fantasy football analytics platform to a goal tracker, and each
            one has taught me something I didn’t know when I started. I’m still
            early in my career, and I spend my time improving my fundamentals
            and shipping work I can learn from.
          </p>
        </Reveal>
        <Reveal as="dl" className="facts">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
