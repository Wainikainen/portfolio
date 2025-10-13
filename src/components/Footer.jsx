import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-name">© {year} Adam Wainikainen</p>
      <div className="footer-links">
        <a 
        href="https://github.com/Wainikainen" 
        className="footer-link">
          <FaGithub className="footer-gh"/>
        </a>
        <a
          href="https://www.linkedin.com/in/adam-wainikainen/"
          className="footer-link">
            <FaLinkedin className="footer-li"/>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
