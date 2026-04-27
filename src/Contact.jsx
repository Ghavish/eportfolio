import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

import React, { useState } from 'react';

export default function Contact() {
  const socialLinks = [
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ghavish.subratty@umail.uom.ac.mu', color: '#ea4335' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/ghavishsubratty', color: '#0a66c2' },
    // { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourhandle', color: '#E1306C' },
    // { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/yourprofile', color: '#1877F2' },
  ];

  const [isSent, setIsSent] = useState(false);

  const handleMailto = (e) => {
    e.preventDefault();
    
    const email = "ghavish.subratty@umail.uom.ac.mu"; 
    const subject = encodeURIComponent("Contact from Portfolio");
    
    // This triggers the user's email client
    window.location.href = `mailto:${email}?subject=${subject}`;
    
    // Show the notification on site
    setIsSent(true);
    
    // Reset the message after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
  };
  
  return (
    <section id="contact" className="w-full bg-dark-bg py-24 md:py-32 relative overflow-hidden flex justify-center items-center">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dark rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-8 md:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Text & Socials */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Let's <span className="text-brand-light">Connect.</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Whether you are looking to build a robust backend system, a stunning frontend interface, or just want to chat about tech, my inbox is always open.
          </p>

          {/* Social Icons Grid */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-dark-surface border border-white/10 rounded-full group transition-colors"
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: 'var(--color-brand-light)',
                    boxShadow: `0 0 20px ${social.color}60` 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          className="bg-dark-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Top Edge Highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-light to-transparent opacity-50"></div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we work together?" 
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all resize-none"
              ></textarea>
            </div>

            <motion.button 
              type="button" 
              onClick={handleMailto}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 mt-2 bg-brand-mid hover:bg-brand-light text-white font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(123,44,191,0.5)] cursor-pointer"
            >
              {isSent ? "Opening Email Client..." : "Send Message"}
            </motion.button>

            {/* Notification Message */}
            {isSent && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-purple-400 font-medium"
              >
                Redirecting to your mail app. I'll get back to you soon!
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}