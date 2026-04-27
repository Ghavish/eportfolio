import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

import treadHero from './assets/ExecView.jpeg';
import treadAlerts from './assets/TechnicianView.jpeg';
import treadFilters from './assets/FleetManagerView.jpeg';

import MonteCarloCover from './assets/MonteCarloCover.jpeg';
import monteResults from './assets/MonteCarlo.jpeg';
import monteParams from './assets/Parameters.jpeg';

export default function Projects() {
  // State for the Lightbox
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      id: 'tread',
      title: 'T.R.E.A.D Dashboard',
      subtitle: 'Telemetry, Rental & Emergency Alerts',
      desc: 'An enterprise-grade dashboard designed for real-time telemetry monitoring, complex data filtering, and critical emergency alert management.',
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      images: [
        treadHero,     // The main dashboard overview
        treadAlerts,   // The emergency action panel
        treadFilters   // The data tables and filtering
      ],
      github: 'https://github.com/yourusername/tread',
      live: '#'
    },
    {
      id: 'monte-carlo',
      title: 'Monte Carlo Simulator',
      subtitle: '2-Cashier Supermarket Queuing Model',
      desc: 'A robust statistical simulation engine visualizing queue dynamics, utilization rates, and probabilistic outcomes using Poisson distributions.',
      stack: ['Python', 'Data Analytics', 'React', 'Math.js'],
      images: [
        MonteCarloCover, // Cover
        monteResults,  // The final charts/graphs
        monteParams    // The input/configuration screen
      ],
      github: 'https://github.com/yourusername/monte-carlo',
      live: '#'
    }
  ];

  // Lightbox Navigation Functions
  const openLightbox = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="w-full bg-dark-bg py-24 md:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured <span className="text-brand-light">Projects.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of complex systems architecture, statistical modeling, and premium frontend execution.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-surface border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-mid/50 transition-colors flex flex-col"
            >
              {/* Project Image Container (Clickable to open gallery) */}
              <div 
                onClick={() => openLightbox(project)}
                className="relative h-64 md:h-80 w-full overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Fallback color if image isn't loaded yet */}
                <div className="absolute inset-0 bg-dark-bg z-0"></div>
                
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 relative z-0"
                />

                {/* View Gallery Overlay */}
                <div className="absolute inset-0 z-20 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="flex items-center gap-2 px-6 py-3 bg-brand-mid text-white font-bold rounded-full shadow-[0_0_20px_rgba(123,44,191,0.5)]">
                    <FaImages /> View UI Gallery
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-brand-light text-sm font-bold tracking-widest uppercase mb-2">{project.subtitle}</h4>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-dark-bg border border-white/10 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-light transition-colors text-xl">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- THE LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} // Click outside to close
            className="fixed inset-0 z-50 bg-dark-bg/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-400 hover:text-white text-3xl z-50 transition-colors"
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
            >
              {/* Image Counter */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-brand-light font-bold tracking-widest text-sm z-50 bg-dark-bg/50 px-4 py-1 rounded-full border border-brand-mid/30">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>

              {/* Navigation Arrows (Only show if more than 1 image) */}
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 text-white bg-dark-surface/50 hover:bg-brand-mid p-3 md:p-4 rounded-full border border-white/10 hover:border-brand-light transition-all z-50">
                    <FaChevronLeft className="text-xl md:text-2xl" />
                  </button>
                  <button onClick={nextImage} className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 text-white bg-dark-surface/50 hover:bg-brand-mid p-3 md:p-4 rounded-full border border-white/10 hover:border-brand-light transition-all z-50">
                    <FaChevronRight className="text-xl md:text-2xl" />
                  </button>
                </>
              )}

              {/* The Actual Image */}
              <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex} // Triggers animation when index changes
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-h-[80vh] object-contain bg-black"
                  />
                </AnimatePresence>
              </div>
              
              <h3 className="mt-6 text-xl md:text-2xl font-bold text-white text-center">
                {selectedProject.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}