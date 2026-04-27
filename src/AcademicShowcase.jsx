import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaUserTie, FaSearch, FaProjectDiagram, FaCertificate, FaUserAstronaut } from 'react-icons/fa';

import teamJaaduPdf from './assets/team-jaadu-presentation.pdf';
import teamBuildingPdf from './assets/team-building-presentation.pdf';
import businessPlanPdf from './assets/BusinessPlan.pdf';
// Removed the URL and set back to initial version of VR-Synopsis
import vrSynopsisPdf from './assets/VR-Synopsis.pdf';

export default function AcademicShowcase() {
  const [activeTab, setActiveTab] = useState('reflection');

  const tabs = [
    { id: 'reflection', label: 'Self-Assessment & Reflection' },
    { id: 'projects', label: 'CBS Projects' },
    { id: 'certificates', label: 'Official Certificates' }
  ];

 const cbsProjects = [
    { 
      icon: FaUserAstronaut, 
      title: 'Ice-Breaker Presentation: Visual Storytelling', 
      desc: 'Delivered an engaging public presentation on hypothetical "First Contact" scenarios to develop audience engagement, visual communication, and creative narrative building.',
      link: teamJaaduPdf,
      linkText: 'View Presentation' 
    },
    { 
      icon: FaSearch, 
      title: 'Team Building & Scavenger Hunt', 
      desc: 'Developed cross-functional collaboration, adaptive problem-solving, and leadership dynamics within high-pressure team environments.',
      link: teamBuildingPdf,
      linkText: 'View Presentation' 
    },
    { 
      icon: FaProjectDiagram, 
      title: 'Photobooth Business Plan', 
      desc: 'Collaborated within a team to formulate comprehensive product strategy, market analysis, and operational logistics for a commercial venture.',
      link: businessPlanPdf,
      linkText: 'View Business Plan'
    },
    { 
      icon: FaBookOpen, 
      title: 'Research Paper & Synopsis', 
      desc: 'Authored an academic synopsis on the application of Virtual Reality in climate change awareness, demonstrating rigorous technical writing.',
      link: vrSynopsisPdf, 
      linkText: 'Read Synopsis'
    },
    { 
      icon: FaUserTie, 
      title: 'CRM & Interview Role Play', 
      desc: 'Honed client relationship management, professional communication, and behavioral interview techniques.' 
    },
  ];

const certificates = [
    { 
      title: 'Higher School Certificate (A-Level)', 
      issuer: 'Cambridge Assessment International Education', 
      year: '2024',
      grade: '3 A\'s in Principal Subjects'
    },
    { 
      title: 'School Certificate (O-Level)', 
      issuer: 'Cambridge Assessment International Education', 
      year: '2022',
      grade: 'Aggregate 7 (Distinction)'
    }
  ];

  return (
    <section id="academic-showcase" className="w-full bg-dark-bg py-24 md:py-32 relative overflow-hidden flex justify-center">
      
      <div className="w-full max-w-6xl mx-auto px-8 md:px-24 relative z-10">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Academic <span className="text-brand-light">Showcase.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Highlighting key learnings, projects, and achievements from my Communication & Business Skills (CBS) module.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-brand-mid/20 border border-brand-light rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* REFLECTION TAB */}
            {activeTab === 'reflection' && (
              <motion.div
                key="reflection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-surface border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  
                  {/* Left Column: The Narrative */}
                  <div className="flex-1 space-y-8 text-gray-300 leading-relaxed">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-light"></span> 
                        The Paradigm Shift
                      </h4>
                      <p>
                        Entering the Communication & Business Skills (CBS) module, my primary focus as a Computer Science student was anchored in 
                        technical architecture and logic. I viewed software development through the lens of code and algorithms. However, this 
                        module fundamentally shifted my paradigm, teaching me that the most robust backend systems and elegant frontends are 
                        useless if they do not solve a tangible business problem or if their value cannot be communicated to stakeholders.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-light"></span> 
                        Navigating Challenges
                      </h4>
                      <p>
                        The most significant challenge I faced was transitioning from a purely analytical mindset to an interpersonal one, 
                        particularly during the CRM and Interview role-plays. I had to learn how to read room dynamics, practice active listening, 
                        and adapt my communication style on the fly. Initially, articulating complex, abstract ideas to a non-technical audience was 
                        difficult. Through iterative feedback and the collaborative environment fostered during the Team Building exercises, I 
                        learned to translate technical jargon into clear, value-driven business language.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-light"></span> 
                        Future Application
                      </h4>
                      <p>
                        The skills developed here directly bridge the gap between being an isolated programmer and being a strategic collaborator. Co-formulating the Photobooth Business Plan 
                        taught me how to integrate my analytical skills into a broader team effort, focusing on market analysis and operational logistics. Moving forward in my professional 
                        career, I will utilize these skills to advocate for user needs, understand the business logic behind the software I build, and effectively collaborate within 
                        cross-functional product teams.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Takeaways & Highlight Quote */}
                  <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="p-6 bg-brand-dark/20 border border-brand-mid/30 rounded-2xl">
                      <h5 className="text-brand-light font-bold mb-4 uppercase tracking-wider text-sm">Core Competencies Gained</h5>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-light mt-1">▹</span> Client Relationship Management
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-light mt-1">▹</span> Technical to Business Translation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-light mt-1">▹</span> Product Strategy Formulation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-light mt-1">▹</span> Conflict Resolution & Leadership
                        </li>
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-brand-light pl-4 py-2 italic text-gray-400">
                      "This module taught me that engineering builds the product, but communication builds the business. Mastering both is the key 
                      to creating real impact."
                    </blockquote>
                  </div>

                </div>
              </motion.div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {cbsProjects.map((proj, idx) => (
                  <div key={idx} className="bg-dark-surface border border-white/5 rounded-2xl p-6 hover:border-brand-light/50 transition-colors group flex flex-col h-full">
                    <proj.icon className="text-3xl text-brand-mid mb-4 group-hover:text-brand-light transition-colors" />
                    <h4 className="text-xl font-bold text-white mb-2">{proj.title}</h4>
                    <p className="text-gray-400 mb-6 flex-grow">{proj.desc}</p>
                    
                    {/* Render button ONLY if project has a document link */}
                    {proj.link && (
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <a 
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold text-brand-light hover:text-white transition-colors"
                        >
                          {proj.linkText} <span className="ml-2 text-lg leading-none">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* CERTIFICATES TAB */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-dark-surface border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center relative overflow-hidden group transition-all hover:border-brand-mid/50 shadow-lg">
                    
                    {/* Background Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <FaCertificate className="text-6xl text-brand-mid mb-6 drop-shadow-[0_0_15px_rgba(123,44,191,0.4)] transform group-hover:scale-110 group-hover:text-brand-light transition-all duration-500" />
                    
                    <h4 className="text-xl font-bold text-white mb-2 relative z-10">{cert.title}</h4>
                    <p className="text-brand-light text-sm font-semibold tracking-wide mb-1 relative z-10">{cert.issuer}</p>
                    <span className="text-gray-500 text-sm mb-8 relative z-10">{cert.year}</span>

                    {/* Grade Preview Badge */}
                    <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-brand-mid/10 border border-brand-mid/30 text-brand-light text-sm font-bold tracking-wide relative z-10 shadow-[0_0_10px_rgba(123,44,191,0.1)] group-hover:border-brand-light/50 transition-colors">
                      {cert.grade}
                    </div>

                    {/* The Fade-in Request Button */}
                    <div className="mt-auto relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a 
                        href={`mailto:ghavish.subratty@umail.uom.ac.mu?subject=Certificate Verification Request: ${cert.title}&body=Hello Ghavish,%0D%0A%0D%0AI was viewing your portfolio and would like to request the official verification copy for your Cambridge ${cert.title}.%0D%0A%0D%0AThank you.`}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-mid hover:bg-brand-light text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(123,44,191,0.4)] hover:shadow-[0_0_25px_rgba(123,44,191,0.8)] transition-all cursor-pointer"
                      >
                        Request Certificate
                      </a>
                    </div>
                    
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}