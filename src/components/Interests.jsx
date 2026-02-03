import './Interests.css';

const Interests = () => {
  const interests = ["Designing", "Weaving", "Smart Textiles", "Medical Textiles"];
  const languages = ["Tamil", "English", "Kannada", "German"];

  return (
    <section className="interests-section">
      <div className="container">
        <div className="interests-grid">
          <div className="interest-col">
            <h2 className="section-title" style={{textAlign: 'left', fontSize: '2rem'}}>Personal Interests</h2>
            <ul className="interest-list">
              {interests.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="interest-col">
            <h2 className="section-title" style={{textAlign: 'left', fontSize: '2rem'}}>Languages Known</h2>
             <ul className="interest-list">
              {languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
