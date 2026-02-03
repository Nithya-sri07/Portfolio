import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <h2 className="footer-logo">Nithyasri P<span>.</span></h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nithya-sri-b3b8962a5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Nithya-sri07" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:nithyasrin208@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          {/*   <p>&copy; {new Date().getFullYear()} Nithyasri P. All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
