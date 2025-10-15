"use client";

import Link from "next/link";
import "./NavBar.css";
import { Raleway } from "next/font/google";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";

const raleway = Raleway({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const NavBar = () => {
  const pathname = usePathname();
  const navClass =
    pathname === "/about"
      ? "about-nav"
      : pathname === "/contact"
      ? "contact-nav"
      : "";

  return (
    <nav className={`navBar ${navClass}`}>
      <ul className="navBar-links">
        <li className="navBar-link navBar-link-home ">
          <Link href="/">
            <motion.span
              className={raleway.className}
              style={{ display: "inline-block", cursor: "pointer" }}
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              AW.
            </motion.span>
          </Link>
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
