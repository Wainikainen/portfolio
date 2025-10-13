import Link from "next/link";
import "./NavBar.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700","900"],
  subsets: ["latin"],
});

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar-links">
        <li className="navBar-link navBar-link-home ">
          <Link href="/">
          <span className={raleway.className} >AW.</span></Link>
        </li>
        <li className="navBar-link">
          <Link href="/about">About</Link>
        </li>
        <li className="navBar-link">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="navBar-link">
          <Link href="/resume">Resume</Link>
        </li>
        <li className="navBar-link">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
