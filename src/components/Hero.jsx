export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow">David Adeniran · Nigeria</p>
        <h1 id="hero-title">
          Building thoughtful digital experiences for the <em>web.</em>
        </h1>
        <p className="lede">
          I’m a Computer Science student and frontend developer. I build web
          applications with React and Firebase, and I care about interfaces
          that are clear, fast and easy to use.
        </p>
        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
