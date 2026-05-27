import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Twitter, MessageSquare, Briefcase, Mail, Send } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const titles = [
    'Frontend & Full-Stack Developer',
    'Building Responsive Client Views',
    'Custom Python FastAPI APIs',
    'Modern, High-Performance Software',
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0C]"
    >
      {/* Abstract futuristic glowing backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-blue-600/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-purple-500/10 blur-[120px] -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(241,245,249,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left: Details */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center self-center lg:self-start space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">
              Available for Internships & Remote Roles
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {DEVELOPER_PROFILE.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-gray-300"
            >
              <TypingEffect phrases={titles} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans"
          >
            {DEVELOPER_PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-purple-500/30 hover:scale-102 active:scale-98 transition-all duration-300 w-full sm:w-auto focus:outline-none cursor-pointer"
            >
              <Briefcase className="w-4.5 h-4.5" />
              <span>View Projects</span>
            </button>

            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-white/25 hover:scale-102 active:scale-98 transition-all duration-300 w-full sm:w-auto focus:outline-none cursor-pointer"
            >
              <MessageSquare className="w-4.5 h-4.5 text-blue-400" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
          >
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 p-2 rounded-lg bg-gray-900/50 border border-gray-800/80 hover:bg-gray-800 focus:outline-none"
              title="GitHub Profile"
            >
              <Github className="w-5.5 h-5.5" />
            </a>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 p-2 rounded-lg bg-gray-900/50 border border-gray-800/80 hover:bg-gray-800 focus:outline-none"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5.5 h-5.5" />
            </a>
            <a
              href={DEVELOPER_PROFILE.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 p-2 rounded-lg bg-gray-900/50 border border-gray-800/80 hover:bg-gray-800 focus:outline-none"
              title="Twitter/X Profile"
            >
              <Twitter className="w-5.5 h-5.5" />
            </a>
            <div className="h-6 w-[1px] bg-gray-800" />
            <span className="text-xs text-gray-500 font-mono flex items-center space-x-1.5 bg-gray-900/30 px-3 py-1.5 rounded-md border border-gray-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>SF • UTC -7</span>
            </span>
          </motion.div>
        </div>

        {/* Hero Right: Modern Glass Image Stack */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10 pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 md:w-85 md:h-85"
          >
            {/* Ambient background ring glows */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-20 blur-xl animate-pulse" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-400 opacity-30 -z-10 animate-spin-slow [animation-duration:15s]" />

            {/* Premium glass frame container */}
            <div className="w-full h-full rounded-3xl overflow-hidden border border-gray-700/50 bg-[#0f172a]/70 backdrop-blur-md p-3 shadow-2xl relative">
              <img
                src={DEVELOPER_PROFILE.avatarUrl}
                alt={DEVELOPER_PROFILE.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl select-none"
              />

              {/* Float badge: Experience Card */}
              <div className="absolute -bottom-4 -left-4 bg-gray-900/85 backdrop-blur-md border border-gray-800/90 rounded-2xl p-3 shadow-xl max-w-40 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Send className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Stack</div>
                  <div className="text-[10px] text-gray-400 font-medium">Ready to Build</div>
                </div>
              </div>

              {/* Float badge: Code Speed */}
              <div className="absolute -top-4 -right-4 bg-gray-900/85 backdrop-blur-md border border-gray-800/90 rounded-2xl p-3 shadow-xl flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-mono font-black text-sm">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-xs font-bold text-white">99% UI Score</div>
                  <div className="text-[10px] text-gray-400 font-medium">Optimized State</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer pointer-events-none select-none">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-mono">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-gray-400"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
