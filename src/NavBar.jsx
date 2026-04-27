import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark-surface/90 backdrop-blur-md z-50 p-4 border-b border-brand-mid">
      <ul className="flex justify-center gap-8 font-semibold text-white">
        <li>
          <Link to="hero" smooth={true} duration={500} className="hover:text-brand-light cursor-pointer transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="hover:text-brand-light cursor-pointer transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="journey" smooth={true} duration={500} className="hover:text-brand-light cursor-pointer transition-colors">
            Journey
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="hover:text-brand-light cursor-pointer transition-colors">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="hover:text-brand-light cursor-pointer transition-colors">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}