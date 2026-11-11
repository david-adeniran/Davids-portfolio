import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <Section id="contact" number="05" title="Contact">
      <Reveal>
        <p className="contact-lead">Have a project or opportunity in mind? Let’s talk.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <ul className="contact-links">
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </Reveal>
    </Section>
  );
}
