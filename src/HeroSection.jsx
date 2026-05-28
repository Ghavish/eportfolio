import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleScene from './ParticleScene'; 
import myOfficePic from './assets/Office.png'; 

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen w-full relative overflow-hidden flex items-center">
      
      {/* Particle Background */}
      <ParticleScene />

      {/* Full-Height Right-Side Image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none">
        
        {/* object-cover ensures the image fills the height without getting squished */}
        <img 
          src={myOfficePic} 
          alt="Desk setup" 
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
          I build elegant, high-performance web applications and backend systems.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="projects" smooth={true} duration={500}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-brand-mid hover:bg-brand-light text-white rounded-lg font-semibold transition-colors shadow-[0_0_15px_rgba(123,44,191,0.5)] cursor-pointer pointer-events-auto"
            >
              View My Work
            </motion.button>
          </Link>
          
          <Link to="about" smooth={true} duration={500}>
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