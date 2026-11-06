import { motion } from 'framer-motion';
import profilePic from './assets/ProfilePic.webp'; 

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-dark-bg relative overflow-hidden flex items-center">
      
      {/* Decorative Background Element */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-[900px] h-[900px] -translate-x-1/4 translate-y-1/4 pointer-events-none bg-[radial-gradient(closest-side,rgba(36,0,70,0.35),transparent)]"></div>

      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] items-center relative z-10">
        
        {/* Left Column: Enlarged, Edge-to-Edge Profile Picture */}
        <motion.div 
          className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <img 
            src={profilePic} 
            alt="Ghavish Subratty"
            width="1600"
            height="1067"
            loading="lazy"
            decoding="async"
            className="w-full h-full scale-[1.25] object-cover object-center opacity-95"
          />
          
          {/* Gradients for profile picture*/}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10"></div>

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-bg to-transparent z-10"></div>
          
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
          
        </motion.div>

        {/* Right Column: Text Description */}
        <motion.div 
          className="px-8 py-12 md:px-16 lg:pr-24 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-light mb-6 tracking-tight">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed relative z-20">
            <p>
              I am a Computer Science student with a passion for bridging the gap between complex backend logic and premium, interactive user experiences. 
            </p>
            <p>
              Whether I am architecting data pipelines in Python, managing technical requirements as a project lead for databases like the TREAD dashboard, or diving deep into low-level systems 
              architecture, I approach every challenge with a highly analytical mindset.
            </p>
            <p>
              Recently, I have been building AI-powered products end to end: multi-agent fintech at hackathons, a trilingual budgeting app, and a mobile chore planner that
              checks photos with computer vision models on cloud GPUs. I enjoy taking an idea from database design through to a polished React or React Native interface.
            </p>
          </div>

          {/* Quick Skills highlight */}
          <div className="mt-10 flex flex-wrap gap-3 relative z-20">
            {['Python', 'React', 'React Native', 'Django', 'SQL', 'AI Agents', 'Systems Architecture'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-dark-bg border border-brand-mid rounded-full text-sm font-semibold text-brand-light shadow-[0_0_10px_rgba(60,9,108,0.3)]">
                {skill}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}