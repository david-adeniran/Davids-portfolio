import { profile } from "../data.js";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">{profile.name}</a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {links.map(([label, href]) => (
              <li key={href} className="nav-secondary"><a href={href}>{label}</a></li>
            ))}
            <li><a href="#contact" className="nav-contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
