import './Skills.css';

const Skills = () => {
  const softSkills = [
    "Good listening", "Teamwork", "Time Management", 
    "Leadership", "Work Ethic & Adaptability", "Critical Thinking"
  ];

  const technicalSkills = [
    "AutoCAD", "Excel in Data analytics", "C & C++",
    "Python", "Microsoft Office", "Canva"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-card technical">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-card soft">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
