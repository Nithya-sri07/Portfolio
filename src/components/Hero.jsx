import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting fade-in" style={{animationDelay: '0.1s'}}>Hello, I'm</p>
          <h1 className="hero-name fade-in" style={{animationDelay: '0.2s'}}>Nithyasri P</h1>
          <h2 className="hero-title fade-in" style={{animationDelay: '0.3s'}}>B.TECH Textile Technology</h2>
          <p className="hero-description fade-in" style={{animationDelay: '0.4s'}}>
            Aspiring textile technologist with a passion for weaving, smart textiles, and sustainable design.
          </p>
          <div className="hero-buttons fade-in" style={{animationDelay: '0.5s'}}>
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual fade-in" style={{animationDelay: '0.6s'}}>
            {/* Abstract textile visual or placeholder */}
            <div className="visual-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
