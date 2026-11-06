import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiMap, FiAward, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

const links = [
  { to: 'hero', label: 'Home', Icon: FiHome },
  { to: 'about', label: 'About', Icon: FiUser },
  { to: 'journey', label: 'Journey', Icon: FiMap },
  { to: 'academic-showcase', label: 'Credentials', Icon: FiAward },
  { to: 'skills', label: 'Skills', Icon: FiCode },
  { to: 'projects', label: 'Projects', Icon: FiBriefcase },
  { to: 'contact', label: 'Contact', Icon: FiMail },
];

// Which section is "current": the last one whose top has passed a line 40% down
// the screen. At the very bottom of the page the last section wins, because the
// final section is too short to ever reach that line on tall screens.
function getCurrentSection() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) return links[links.length - 1].to;
  const line = window.innerHeight * 0.4;
  let current = links[0].to;
  for (const { to } of links) {
    const el = document.getElementById(to);
    if (el && el.getBoundingClientRect().top <= line) current = to;
  }
  return current;
}

function useActiveSection() {
  const [active, setActive] = useState('hero');
  // While a nav click is scrolling the page, keep the highlight on the target
  // instead of letting it hop across every section on the way.
  const lockRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    let idleTimer = 0;
    const update = () => {
      frame = 0;
      if (!lockRef.current) setActive(getCurrentSection());
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      // Scrolling has stopped for 150 ms: release the click lock.
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        lockRef.current = null;
        setActive(getCurrentSection());
      }, 150);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
    };
  }, []);

  const goTo = (to) => {
    const el = document.getElementById(to);
    if (!el) return;
    lockRef.current = to;
    setActive(to);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    // Fallback release if the page didn't need to scroll at all.
    window.setTimeout(() => {
      if (lockRef.current === to && Math.abs(el.getBoundingClientRect().top) < 2) lockRef.current = null;
    }, 400);
  };

  return { active, goTo };
}

// Floating glass pill: outline icons, with a filled circle that slides to the
// section currently on screen.
export default function Navbar() {
  const { active, goTo } = useActiveSection();

  return (
    <nav aria-label="Sections" className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-auto md:top-5 left-1/2 -translate-x-1/2 z-50">
      <ul
        className="flex items-center gap-1 sm:gap-2 md:gap-3 p-1.5 md:p-2 rounded-full
          border border-white/15 bg-white/[0.06] backdrop-blur-xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_32px_rgba(0,0,0,0.45)]"
      >
        {links.map(({ to, label, Icon }) => {
          const isActive = active === to;
          return (
            <li key={to} className="relative group">
              <a
                href={`#${to}`}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(to);
                }}
                aria-label={label}
                aria-current={isActive ? 'location' : undefined}
                className={`relative flex items-center justify-center w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 md:w-12 md:h-12 rounded-full cursor-pointer
                  transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-light/70
                  ${isActive ? 'text-white' : 'text-[#B9A3E3] hover:text-white hover:bg-white/[0.06]'}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#9D4EDD] to-[#5A189A]
                      shadow-[0_0_18px_rgba(157,78,221,0.55),inset_0_1px_0_rgba(255,255,255,0.25)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon className="relative text-lg md:text-xl" strokeWidth={1.75} />
              </a>

              {/* Label shown on hover / keyboard focus (desktop) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden md:block
                  whitespace-nowrap rounded-md bg-dark-surface/95 border border-white/10 px-2 py-1 text-xs font-semibold text-gray-200
                  opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
