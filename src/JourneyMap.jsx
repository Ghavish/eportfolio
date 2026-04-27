import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaMicrochip } from 'react-icons/fa';

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
      'Applied complex statistical modeling (Normal, Poisson, and Binomial distributions) to build functional simulation software like the 2-Cashier Monte Carlo simulator.',
      'Transitioned robust backend logic into premium, interactive React frontend interfaces.'
    ]
  },
  {
    id: 'appcup',
    year: 'First Year', 
    title: 'AppCup Hackathon',
    institution: 'University of Mauritius',
    icon: FaLaptopCode, 
    shortDesc: 'Immersed in a high-pressure, competitive environment to rapidly prototype software and develop core teamwork skills.',
    details: [
      'Navigated the complexities of a strict time limit, learning to prioritize essential features and implement agile development cycles.',
      'Gained invaluable hands-on experience in cross-functional collaboration and architectural planning outside of the standard academic curriculum.',
      'Focused on the experiential learning curve, transforming high-pressure technical challenges into a foundation for future project leadership.'
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
      'Academic Excellence: Achieved top grades with a primary focus on Mathematics, Physics and Computer Science.',
      'Mastered core Python programming logic and algorithms.',
      'Developed a strong foundation in probability, statistics, and discrete mathematics.',
      'Began exploring web development and interface design.'
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
      'Consistently achieved top percentiles in Mathematics, Physics and Computer Science.',
      'Participated in logical problem-solving and coding extracurriculars.'
    ]
  }
];

export default function Journey() {
  // State to track which card is currently expanded
  const [expandedId, setExpandedId] = useState('uni'); // Defaults to University being open!

  return (
    <section id="journey" className="w-full bg-dark-bg py-24 md:py-32 relative overflow-hidden flex justify-center">
      
      <div className="w-full max-w-5xl mx-auto px-8 md:px-24 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16 text-center md:text-left">
          My <span className="text-brand-light">Journey.</span>
        </h2>

        {/* The Timeline Container */}
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
                {/* The Glowing Timeline Node */}
                <div className="absolute -left-[21px] md:-left-[21px] top-2 w-10 h-10 rounded-full bg-dark-bg border-2 border-brand-mid flex items-center justify-center shadow-[0_0_15px_rgba(123,44,191,0.6)] z-10">
                  <Icon className="text-brand-light text-sm" />
                </div>

                {/* The Interactive Card */}
                <motion.div 
                  // The 'layout' prop makes Framer Motion automatically animate height changes!
                  layout 

                  // For desktop hover functionality
                  onMouseEnter={() => setExpandedId(item.id)}
                  onMouseLeave={() => setExpandedId(null)}

                  // onClick for mobile touchscreens!
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'bg-dark-surface border-brand-light shadow-[0_0_25px_rgba(123,44,191,0.15)]' 
                      : 'bg-dark-surface/50 border-white/5 hover:border-white/20 hover:bg-dark-surface'
                  }`}
                >
                  {/* Always Visible Header Area */}
                  <motion.div layout className="p-6 md:p-8">
                    <span className="text-brand-light font-mono text-sm tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-lg text-gray-400 mb-4">{item.institution}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </motion.div>

                  {/* Expandable Details Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
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