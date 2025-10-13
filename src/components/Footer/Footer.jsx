import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Raleway } from "next/font/google";
import "./Footer.css";

const raleway = Raleway({
  weight: ["400", "700","900"],
  subsets: ["latin"],
});

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className={`footer-name ${raleway.className}`}>© {year} Adam Wainikainen</p>
      <div className="footer-links">
        <a href="https://github.com/Wainikainen" className="footer-link">
          <FaGithub className="footer-gh" />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-wainikainen/"
          className="footer-link"
        >
          <FaLinkedin className="footer-li" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
