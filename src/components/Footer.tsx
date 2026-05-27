import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        {/* Brand Group */}
        <div className="flex flex-col items-center space-y-3 text-center mb-8">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-mono font-black text-white text-base shadow-md shadow-blue-500/15">
              OC
            </div>
            <span className="font-sans font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
             Ochu Gideon
            </span>
          </a>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
            "Designing modern, performance-driven web products backed by clean, structured algorithms."
          </p>
        </div>

        {/* Footer Navigation Map Links */}
        <div className="mb-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xs font-semibold text-slate-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-md h-[1px] bg-white/10 mb-8" />

        {/* Social Accounts Group */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={DEVELOPER_PROFILE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            title="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright notice and credits details */}
        <div className="text-[10px] text-slate-500 font-mono text-center space-y-1">
          <div>
            &copy; {new Date().getFullYear()} {DEVELOPER_PROFILE.name}. All Rights Reserved.
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>using React and custom Framer Motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
