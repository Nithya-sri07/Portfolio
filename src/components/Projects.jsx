import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Non destructive Fabric Profiling",
      description: "Developed an image-processing and coding-based system to non-destructively extract key fabric parameters from high-resolution fabric images. Designed the concept as a basis for AI-driven fabric characterization, defect detection, and automated quality evaluation.",
      tags: ["Image Processing", "AI", "Fabric Analysis"]
    },
    {
      title: "Dynamic wireless charging of EV",
      description: "Designed and simulated a wireless power transfer system for moving electric vehicles using Arduino IDE and electrical circuit design software.",
      tags: ["Arduino", "Circuit Design", "Simulation"]
    },
    {
      title: "Theatre Acoustics",
      description: "Modeled and analyzed acoustic performance of theatre spaces using CAD-based simulation tools to optimize sound distribution and clarity.",
      tags: ["CAD", "Acoustics", "Simulation"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
