import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { SiFigma, SiPython, SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skillsData = [
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
];

export default function Skills() {
  // Reference to the scrolling container
  const carouselRef = useRef(null);
  
  // Tracking the horizontal scroll progress of the carousel (0 to 1)
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });

  return (
    <section id="skills" className="w-full bg-dark-bg flex flex-col justify-center py-24 md:py-32 overflow-hidden relative">
      
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-24 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Skills
        </h2>
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 md:px-24 pb-12 pt-4 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            // Individual Skill Cards
            <motion.div
              key={skill.name}
              className="flex-shrink-0 snap-center flex flex-col items-center justify-center bg-dark-surface w-64 h-72 md:w-72 md:h-80 rounded-3xl border border-white/5 relative group"

              // Card pops out and gets a glowing border when hovered, mimicking the "active" state
              whileHover={{ 
                scale: 1.01, 
                borderColor: 'var(--color-brand-light)',
                boxShadow: `0 0 25px ${skill.color}40`, // 40 is hex for 25% opacity
                zIndex: 10 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon 
                className="text-8xl md:text-9xl mb-6 text-gray-400 group-hover:text-white transition-colors duration-300 drop-shadow-md" 
                style={{ color: skill.color }} // You can remove this inline style if you prefer uniform purple icons!
              />
              <span className="text-2xl font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
        {/* Spacer to allow the last item to be scrolled fully to the center/left */}
        <div className="flex-shrink-0 w-8 md:w-24"></div>
      </div>

      {/* Custom Animated Progress Bar */}
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-24 mt-4">
        <div className="w-full h-2 bg-dark-surface rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-mid to-brand-light shadow-[0_0_10px_rgba(123,44,191,0.8)]"
            style={{ 
              scaleX: scrollXProgress, 
              transformOrigin: "0%" 
            }} 
          />
        </div>
      </div>

    </section>
  );
}