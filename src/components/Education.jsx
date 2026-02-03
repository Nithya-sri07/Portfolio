import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Kumaraguru College of Technology",
      degree: "B.Tech Textile Technology",
      year: "2023 - 2027",
      score: "CGPA 8.92"
    },
    {
      id: 2,
      institution: "GHSS Sirumugai",
      degree: "Maths Computer Science (12th)",
      year: "2022 - 2023",
      score: "Percentage 83%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <div className="timeline-score">{item.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
