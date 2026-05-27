import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'services', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Buffer for standard navigation highlights
      
      // Edge case: if at the absolute bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial run to highlight correctly on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-gray-200 antialiased selection:bg-violet-500/30 selection:text-violet-200">
      {/* Absolute top grid line decor */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent z-10" />

      {/* Structured Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections Assembly */}
      <main className="relative flex flex-col">
        {/* Section 1: Hero Cover */}
        <Hero />

        {/* Section 2: About BIO Summary & Stats */}
        <About />

        {/* Section 3: Technical Specialized Competencies */}
        <Skills />

        {/* Section 4: Visual Interactive Projects Portfolio */}
        <Projects />

        {/* Section 5: Professional Services Map */}
        <Services />

        {/* Section 6: Alternating Timeline Journeys */}
        <Timeline />

        {/* Section 7: Stateful Validate Connection Gate Form */}
        <Contact />
      </main>

      {/* Structured Brand Footer */}
      <Footer />

      {/* Scale Interactive Scroll-To-Top Trigger */}
      <ScrollToTop />
    </div>
  );
}
