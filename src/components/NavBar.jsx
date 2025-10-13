import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="navBar">
        <ul className="navBar-links">
            <li className="navBar-link">
                <Link href="/">AW.</Link>
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
  )
}

export default NavBar