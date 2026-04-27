import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); 
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const socialLinks = [
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ghavish.subratty@umail.uom.ac.mu', color: '#ea4335' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/ghavishsubratty', color: '#0a66c2' },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // 2. Replace these strings with your actual IDs from EmailJS dashboard
    emailjs.sendForm(
      'service_8sydzsl', 
      'template_h454sfs', 
      form.current, 
      '4gYS27nsw_Z9qNCJP'
    )
    .then(() => {
        setStatus("success");
        form.current.reset(); // Clears the form on success
        setTimeout(() => setStatus(""), 5000); // Reset status after 5s
    }, (error) => {
        console.error(error.text);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
    });
  };
  
  return (
    <section id="contact" className="w-full bg-dark-bg py-24 md:py-32 relative overflow-hidden flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dark rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-8 md:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column stays the same */}
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
                    borderColor: '#7B2CBF', // Using your brand purple
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

        {/* Right Column: Contact Form Modified */}
        <motion.div 
          className="bg-dark-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-light to-transparent opacity-50"></div>

          {/* 3. Added ref and onSubmit handler */}
          <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Name</label>
              <input 
                type="text" 
                name="user_name" 
                placeholder="John Doe" 
                required
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Email</label>
              <input 
                type="email" 
                name="user_email" 
                placeholder="john@example.com" 
                required
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Message</label>
              <textarea 
                rows="4" 
                name="message" 
                placeholder="How can we work together?" 
                required
                className="w-full bg-dark-bg text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-all resize-none"
              ></textarea>
            </div>

            <motion.button 
              type="submit" // 5. Changed to submit
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 mt-2 bg-brand-mid hover:bg-brand-light text-white font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(123,44,191,0.5)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status Notifications */}
            {status === "success" && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center text-sm text-green-400 font-medium"
              >
                Message sent successfully! I'll be in touch.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center text-sm text-red-400 font-medium"
              >
                Failed to send. Please try again later.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}