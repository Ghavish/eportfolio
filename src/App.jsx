import Navbar from './NavBar';
import HeroSection from './HeroSection'; 
import AboutMe from './AboutMe';
import Journey from './JourneyMap';
import AcademicShowcase from './AcademicShowcase';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-light selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutMe />

      {/* Journey Map Section */}
      <Journey />

      {/* Academic Showcase Section */}
      <AcademicShowcase />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />
      
      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <footer className="w-full py-6 bg-dark-surface border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Subratty Ghavish. All rights reserved.</p>
      </footer>

    </div>
  );
}