import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import myOfficePic from './assets/Office.webp';

// three.js is large, so the particle background loads after the page is usable.
const ParticleScene = lazy(() => import('./ParticleScene'));

function useParticles(sectionRef) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const start = () => setEnabled(true);
    const id = 'requestIdleCallback' in window
      ? window.requestIdleCallback(start, { timeout: 2000 })
      : window.setTimeout(start, 1200);
    return () => ('cancelIdleCallback' in window ? window.cancelIdleCallback(id) : window.clearTimeout(id));
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [sectionRef]);

  return { enabled, visible };
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { enabled, visible } = useParticles(sectionRef);

  return (
    <section ref={sectionRef} id="hero" className="min-h-[100svh] w-full relative overflow-hidden flex items-center">

      {/* Particle Background */}
      {enabled && (
        <Suspense fallback={null}>
          <ParticleScene active={visible} />
        </Suspense>
      )}

      {/* Full-Height Right-Side Image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none">
        
        {/* object-cover ensures the image fills the height without getting squished */}
        <img 
          src={myOfficePic} 
          alt="Desk setup"
          width="1920"
          height="1047"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[55%_center] opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
        
        {/* Slight bottom gradient so the image fades into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 px-8 md:px-24 flex flex-col justify-center text-left">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm <span className="text-brand-light">Ghavish Subratty</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl drop-shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Computer Science student at the University of Mauritius, building full-stack and AI-powered products.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="projects" href="#projects" smooth={true} duration={500} offset={-64}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-brand-mid hover:bg-brand-light text-white rounded-lg font-semibold transition-colors shadow-[0_0_15px_rgba(123,44,191,0.5)] cursor-pointer pointer-events-auto"
            >
              View My Work
            </motion.button>
          </Link>
          
          <Link to="about" href="#about" smooth={true} duration={500} offset={-64}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 border border-brand-light text-brand-light hover:bg-brand-dark hover:text-white rounded-lg font-semibold transition-all cursor-pointer pointer-events-auto backdrop-blur-sm"
            >
              More About Me
            </motion.button>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}