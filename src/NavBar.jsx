import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'journey', label: 'Journey' },
  { to: 'academic-showcase', label: 'Credentials' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

// Height of the fixed bar, so section headings aren't hidden under it.
const NAV_OFFSET = -64;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkProps = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: NAV_OFFSET,
    activeClass: 'text-brand-light',
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-surface/95 z-50 border-b border-brand-mid">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center px-4 h-16">
        <Link to="hero" href="#hero" {...linkProps} className="md:hidden font-bold text-white cursor-pointer">
          Ghavish<span className="text-brand-light">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-semibold text-white">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} href={`#${to}`} {...linkProps} className="hover:text-brand-light cursor-pointer transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white text-xl p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile links */}
      {open && (
        <ul className="md:hidden flex flex-col border-t border-white/5 px-4 pb-4 font-semibold text-white bg-dark-surface">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                href={`#${to}`}
                {...linkProps}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-brand-light cursor-pointer transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
