import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaImages, FaTable, FaHome, FaWallet, FaTools, FaShieldAlt } from 'react-icons/fa';

import treadHero from './assets/ExecView.jpeg';
import treadAlerts from './assets/TechnicianView.jpeg';
import treadFilters from './assets/FleetManagerView.jpeg';

import MonteCarloCover from './assets/MonteCarloCover.jpeg';
import monteResults from './assets/MonteCarlo.jpeg';
import monteParams from './assets/Parameters.jpeg';

import mariewindow from './assets/MarieInterface.png';
import mariecode from './assets/SourceCode.png';
import mariemult from './assets/multsubroutine.png';
import mariediv from './assets/divsubroutine.png';
import mariedocumentation from './assets/marie-sim-documentation.pdf';

import matrixdeterminant from './assets/ExcelDeterminant.png';
import matrixinverse from './assets/ExcelInverse.png';
import matrixdolittle from './assets/DOLITTLE.png';
import matrixcrout from './assets/CROUT.png';
import matrixiterative from './assets/GaussSeidel.png';
import matrixsolvablesoe from './assets/SolvableSOE.png';
import largepowermatrices from './assets/LargePowerMatrices.png';

export default function Projects() {
  // State for the Lightbox
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll and enable keyboard controls while the lightbox is open
  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = 'hidden';
    const count = selectedProject.images.length;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') setCurrentImageIndex((i) => (i + 1) % count);
      if (e.key === 'ArrowLeft') setCurrentImageIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 'molakaz',
      title: 'MoLakaz',
      subtitle: 'AI Household Chore Planner · 2026',
      desc: 'A mobile app that splits household chores fairly around each person\'s free time, then confirms each chore with a before-and-after photo checked by SAM 3.1 on a cloud GPU. Voice input runs on Whisper, and an AI assistant can rearrange the week without breaking the fairness rules.',
      stack: ['Expo', 'React Native', 'Python', 'FastAPI', 'Modal', 'SAM 3.1', 'Whisper'],
      cover: { icon: FaHome, from: '#1e3a5f', to: '#3C096C', tag: 'Mobile · AI · GPU' },
      github: 'https://github.com/Ghavish/MoLakaz',
    },
    {
      id: 'mobudget',
      title: 'MoBudget',
      subtitle: 'Trilingual Money Planner · Finnovate Hackathon',
      desc: 'A budgeting web app for young Mauritians in English, French and Kreol Morisien. AI reads payslips, receipts, camera scans and voice notes, and a deterministic affordability check marks each savings goal as Safe, Tight or Not yet, with an AI coach that answers from the user\'s own numbers.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'n8n', 'MongoDB', 'Gemini'],
      cover: { icon: FaWallet, from: '#0f4c4c', to: '#312e81', tag: 'Web · Fintech · AI' },
      github: 'https://github.com/Ghavish/Finnovate-Cache-Me-Outside',
    },
    {
      id: 'trustyhands',
      title: 'TrustyHands',
      subtitle: 'Home Services Marketplace · Project Lead',
      desc: 'A platform connecting homeowners with vetted tradespeople, with separate workspaces for clients, service providers and admins: booking and scheduling, provider verification, subscription tiers and an analytics dashboard. I led the architecture for team Git Happens.',
      stack: ['Django', 'Python', 'MongoDB Atlas', 'Chart.js', 'Figma'],
      cover: { icon: FaTools, from: '#4a2c0f', to: '#3C096C', tag: 'Web · Marketplace' },
      github: 'https://github.com/Ghavish/trustyhands',
    },
    {
      id: 'smartrupi',
      title: 'SmartRupi',
      subtitle: 'Fintech App · UoM AutoForge Hackathon 2026',
      desc: 'A mobile finance assistant built in 12 hours as Team Lead of Team Cipher. Four coordinated AI agents flag scam emails, audit spending, suggest investments matched to the user\'s budget and risk, and match users to local bank loans.',
      stack: ['React Native', 'Expo', 'Node.js', 'Python', 'BAND AI', 'Gemini', 'SQL Server'],
      cover: { icon: FaShieldAlt, from: '#14532d', to: '#240046', tag: 'Mobile · Multi-agent AI' },
      github: 'https://github.com/Ghavish/SmartRupi',
    },
    {
      id: 'tread',
      title: 'T.R.E.A.D Dashboard',
      subtitle: 'Telemetry, Rental & Emergency Alerts',
      desc: 'A dashboard for real-time telemetry monitoring, rental management and emergency alerts, with live asset locations on a map. I designed the database and built the dashboard as project lead.',
      stack: ['Python', 'Streamlit', 'Pandas', 'Folium', 'SQL Server'],
      images: [
        treadHero,     // The main dashboard overview
        treadAlerts,   // The emergency action panel
        treadFilters   // The data tables and filtering
      ],
      github: 'https://github.com/Ghavish/TREAD',
    },
    {
      id: 'monte-carlo',
      title: 'Monte Carlo Simulator',
      subtitle: '2-Cashier Supermarket Queuing Model',
      desc: 'A robust statistical simulation engine visualizing queue dynamics, utilization rates, and probabilistic outcomes using Poisson distributions.',
      stack: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      images: [
        MonteCarloCover, // Cover
        monteResults,  // The final charts/graphs
        monteParams    // The input/configuration screen
      ],
      github: 'https://github.com/Ghavish/MonteCarloSim',
    },
    {
      id: 'marie-solver',
      title: 'MARIE Matrix Solver',
      subtitle: '3x3 Matrix Unknowns via Cramer\'s Rule',
      desc: 'A collaborative systems engineering project involving low-level hardware simulation. Developed custom assembly subroutines to handle complex matrix algebra in a 12-bit environment.',
      stack: ['MARIE Assembly', 'Computer Architecture', 'Binary Logic'],
      images: [
        mariewindow,    // Main assembly code screenshot
        mariecode,   // Flowchart of MULT/DIV routines
        mariemult,      // Flowchart for multiplication subroutine
        mariediv      // Flowchart for division subroutine 
      ],
      live: mariedocumentation
    },
    {
      id: 'matrix-engine',
      title: 'Matrix Analytics Engine',
      subtitle: '4x4 Dynamic Computational Model',
      desc: 'A high-performance mathematical engine supporting matrices up to size 4x4. Features automated solvers for linear systems, including LU Decomposition and iterative numerical methods with real-time error validation.',
      stack: ['Excel', 'Mathematical Modeling', 'Logic Validation'],
      images: [
        matrixdeterminant, 
        matrixinverse,      
        matrixdolittle,
        matrixcrout,
        matrixiterative,
        matrixsolvablesoe,
        largepowermatrices      
      ],
      embedSrc: "https://1drv.ms/x/c/32928d0c1ff38197/IQSZ1EcthWWORKshGvQJSJ-vAQ_LshPxcBr8jdsavLfQI3g?em=2&wdAllowInteractivity=False&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edaebf=rslc0",
    },
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
            From AI-powered mobile apps and hackathon builds to data dashboards, simulations and low-level systems work.
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
              {project.images ? (
                /* Project Image Container (Clickable to open gallery) */
                <button
                  type="button"
                  onClick={() => openLightbox(project)}
                  aria-label={`Open ${project.title} gallery`}
                  className="relative h-64 md:h-80 w-full overflow-hidden cursor-pointer bg-dark-bg block"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* View Gallery Overlay */}
                  <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-6 py-3 bg-brand-mid text-white font-bold rounded-full shadow-[0_0_20px_rgba(123,44,191,0.5)]">
                      <FaImages /> View UI Gallery
                    </span>
                  </div>
                </button>
              ) : (
                <ProjectCover title={project.title} cover={project.cover} />
              )}

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
  
                  {/* Show GitHub icon ONLY if project.github exists and is not empty/'none' */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-gray-400 hover:text-white transition-colors text-xl"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {/* Show Live/External icon ONLY if project.live exists and is not empty/'none' */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} documentation`}
                      className="text-gray-400 hover:text-brand-light transition-colors text-xl"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.embedSrc && (
                    <a 
                      href={project.embedSrc} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-bold transition-all border rounded-lg bg-brand-mid/20 text-brand-light border-brand-mid/40 hover:bg-brand-mid/40 hover:text-white group"
                    >
                      <FaTable className="text-lg transition-transform group-hover:scale-110" />
                      <span>TEST IN EXCEL</span>
                    </a>
                  )}
                  
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
            className="fixed inset-0 z-50 bg-dark-bg/95 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              aria-label="Close gallery"
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
                  <button aria-label="Previous image" onClick={prevImage} className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 text-white bg-dark-surface/50 hover:bg-brand-mid p-3 md:p-4 rounded-full border border-white/10 hover:border-brand-light transition-all z-50">
                    <FaChevronLeft className="text-xl md:text-2xl" />
                  </button>
                  <button aria-label="Next image" onClick={nextImage} className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 text-white bg-dark-surface/50 hover:bg-brand-mid p-3 md:p-4 rounded-full border border-white/10 hover:border-brand-light transition-all z-50">
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

// Cover art for projects that don't have screenshots yet.
function ProjectCover({ title, cover }) {
  const Icon = cover.icon;
  return (
    <div
      className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${cover.from}, ${cover.to} 60%, #0D0221)` }}
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <Icon aria-hidden="true" className="absolute -right-6 -bottom-6 text-[12rem] text-white/5 transform group-hover:scale-110 transition-transform duration-700" />
      <div className="relative text-center px-6">
        <Icon aria-hidden="true" className="mx-auto text-5xl text-white/80 mb-4" />
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</p>
        <p className="mt-2 text-xs font-bold tracking-[0.2em] uppercase text-white/60">{cover.tag}</p>
      </div>
    </div>
  );
}
