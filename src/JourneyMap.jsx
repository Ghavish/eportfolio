import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaMicrochip, FaImages, FaChevronUp } from 'react-icons/fa';

const journeyData = [
  {
    id: 'uni',
    year: '2025 - Present',
    title: 'BSc Computer Science',
    institution: 'University of Mauritius',
    icon: FaLaptopCode,
    shortDesc: 'Specializing in systems architecture, full-stack development, and data analytics.',
    details: [
      'Served as Project Lead for the TREAD Dashboard, managing technical requirements and database integration.',
      'Developed low-level hardware simulations using assembly programming (MARIE Sim) and matrix mathematics.',
      'Applied complex statistical modeling to build functional simulation software.',
      'Transitioned robust backend logic into premium, interactive React frontend interfaces.'
    ]
  },
  {
    id: 'appcup',
    year: 'First Year', 
    title: 'AppCup Hackathon',
    institution: 'University of Mauritius',
    icon: FaLaptopCode, 
    shortDesc: 'Immersed in a high-pressure environment to rapidly prototype software and develop teamwork skills.',
    images: [
      '/Appcup0.jpeg', 
      '/Appcup1.jpeg',
      '/Appcup2.jpeg'
    ],
    details: [
      'Navigated strict time limits to prioritize essential features and implement agile cycles.',
      'Gained hands-on experience in cross-functional collaboration and architectural planning.',
      'Transformed technical challenges into a foundation for future project leadership.'
    ]
  },
  {
    id: 'college',
    year: '2023 - 2024',
    title: 'Higher School Certificate',
    institution: 'Royal College Curepipe',
    icon: FaMicrochip,
    shortDesc: 'Focused on advanced mathematics and foundational computer science principles.',
    details: [
      'Academic Excellence: Mathematics, Physics and Computer Science.',
      'Mastered core Python programming logic and algorithms.',
      'Developed a strong foundation in probability and statistics.'
    ]
  },
  {
    id: 'highschool',
    year: '2017 - 2022',
    title: 'School Certificate',
    institution: 'Royal College Curepipe',
    icon: FaGraduationCap,
    shortDesc: 'Academic excellence with a focus on STEM subjects.',
    details: [
      'Consistently achieved top percentiles in Mathematics and Physics.',
      'Participated in logical problem-solving and coding extracurriculars.'
    ]
  }
];

// 2. Automated Slideshow Component
const MiniGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mt-4 bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-2 right-3 bg-black/60 px-2 py-1 rounded text-[10px] text-white/70">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default function Journey() {
  const [expandedId, setExpandedId] = useState('uni');
  const [showAppCupGallery, setShowAppCupGallery] = useState(false);

  return (
    <section id="journey" className="w-full bg-dark-bg py-24 md:py-32 relative overflow-hidden flex justify-center">
      <div className="w-full max-w-5xl mx-auto px-8 md:px-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16 text-center md:text-left">
          My <span className="text-brand-light">Journey.</span>
        </h2>

        <div className="relative border-l-2 border-brand-dark/50 ml-4 md:ml-6 space-y-12">
          {journeyData.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedId === item.id;

            return (
              <motion.div 
                key={item.id}
                className="relative pl-10 md:pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute -left-[21px] top-2 w-10 h-10 rounded-full bg-dark-bg border-2 border-brand-mid flex items-center justify-center shadow-[0_0_15px_rgba(123,44,191,0.6)] z-10">
                  <Icon className="text-brand-light text-sm" />
                </div>

                <motion.div 
                  layout 
                  onMouseEnter={() => setExpandedId(item.id)}
                  onMouseLeave={() => setExpandedId(null)}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'bg-dark-surface border-brand-light shadow-[0_0_25px_rgba(123,44,191,0.15)]' 
                      : 'bg-dark-surface/50 border-white/5 hover:border-white/20 hover:bg-dark-surface'
                  }`}
                >
                  <motion.div layout className="p-6 md:p-8">
                    <span className="text-brand-light font-mono text-sm tracking-widest mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-lg text-gray-400 mb-4">{item.institution}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.shortDesc}</p>
                    
                    {/* Gallery Toggle Button - Only shows for AppCup item */}
                    {item.id === 'appcup' && isExpanded && (
                      <motion.button
                        layout
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents card from closing
                          setShowAppCupGallery(!showAppCupGallery);
                        }}
                        className="mt-4 flex items-center gap-2 text-brand-light text-sm font-bold hover:text-white transition-colors"
                      >
                        {showAppCupGallery ? <><FaChevronUp /> Hide Moments</> : <><FaImages /> View AppCup Moments</>}
                      </motion.button>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                          {/* Slideshow Display */}
                          {item.id === 'appcup' && showAppCupGallery && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              <MiniGallery images={item.images} />
                            </motion.div>
                          )}

                          <ul className="space-y-3 mt-4">
                            {item.details.map((point, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <span className="text-brand-light mr-3 mt-1.5 text-xs">▹</span>
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}